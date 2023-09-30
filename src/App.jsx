import "./App.css";
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenre } from "./store/homepageslice";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Searchresult from "./Pages/Searchresult/Searchresult";
import Explore from "./Pages/Explore/Explore";
import Pagenotfound from "./Pages/Eror404/Pagenotfound";
import { all } from "axios";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.homepage);

  useEffect(() => {
    apitest();
    genrecalls();
  }, []);

  const apitest = () => {
    fetchDataFromApi("/configuration").then((res) => {

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genrecalls = async () => {
    let promises = [];
    let endpoint = ["tv", "movie"];
    let allgenre = {};

    endpoint.forEach((item) => {
      promises.push(fetchDataFromApi(`/genre/${item}/list`));
    });

    const data = await Promise.all(promises);

    // console.log(data);

    data.map(({ genres }) => {
      return genres.map((items) => (allgenre[items.id] = items.name));
    });

    dispatch(getGenre(allgenre));
  };

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<Searchresult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
