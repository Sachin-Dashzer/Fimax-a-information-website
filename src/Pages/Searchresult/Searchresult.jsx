import "./searchresult.scss";

import React, { useEffect, useState } from "react";
import Mainbox from "../../Components/Mainbox/Mainbox";
import { fetchDataFromApi } from "../../utils/api";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import noResults from "../../assets/no-results.png";
import Spinner from "../../Components/Spinner/Spinner";
import MovieCard from "../../Components/Moviecard/Moviecard";

const Searchresult = () => {
  const [data, setdata] = useState(null);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);
  const { query } = useParams();

  const FirstData = () => {
    setloading(true);

    fetchDataFromApi(`/search/multi?query=${query}&page=${page}`).then(
      (res) => {
        setdata(res);
        setpage((prev) => prev + 1);
        setloading(false);
      }
    );
  };

  const NextData = () => {

    fetchDataFromApi(`/search/multi?query=${query}&page=${page}`).then(
      (res) => {
        if (data?.results) {
          setdata({
            ...data,
            results: [...data?.results, ...res.results],
          });
        } else {
          setdata(res);
        }

        setpage((prev) => prev + 1);
      }
    );
  };


  useEffect(() => {
    setpage(1);
    FirstData();
  }, [query]);

  return (
    <div className="searchresult">
      {loading && <Spinner initial={true} />}

      {!loading && (
        <Mainbox>
          {data?.results?.length > 0 ? (
            <>
              <div className="title">
                {`Search ${
                  data?.total_results > 1 ? "result" : "results"
                } of ${query}`}
              </div>

              <InfiniteScroll
                className="content"
                dataLength={data?.results?.length || []}
                next={NextData}
                hasMore={page <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} Search={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (

            <div className="noresult">
              Sorry, No Results Found
            </div>

          )}
        </Mainbox>
      )}
    </div>
  );
};

export default Searchresult;
