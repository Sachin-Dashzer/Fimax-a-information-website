import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { fetchDataFromApi } from "./ExtraBox/ApiCall/Api";
import { getApiConfiguration, getGenre } from "./ExtraBox/store/homepageslice";



import Header from "./MainComponents/Header/Header";
import Footer from "./MainComponents/Footer/Footer";
import Home from "./MainComponents/Home/Home";
import Details from "./MainComponents/Details/Details";
import Searchresult from "./MainComponents/Searchresult/Searchresult";
import Explore from "./MainComponents/Explore/Explore";
import Pagenotfound from "./MainComponents/Eror404/Pagenotfound";


function App() {

  const dispatch = useDispatch();

  const Apidata = () => {
    fetchDataFromApi("/configuration").then((res) => {

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispatch(getApiConfiguration(url));
    });
  };

  const Getgenredata = async () => {
    let promises = [];
    let endpoint = ["tv", "movie"];
    let allgenre = {};

    endpoint.forEach((item) => {
      promises.push(fetchDataFromApi(`/genre/${item}/list`));
    });

    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      
      return genres.map((items) => (allgenre[items.id] = items.name));
    });

    dispatch(getGenre(allgenre));
  };


  useEffect(() => {
    Apidata();
    Getgenredata();
  }, []);



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
