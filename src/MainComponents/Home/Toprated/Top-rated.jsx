

import React, { useState } from 'react'

import Mainbox from '../../../SmallComponents/Mainbox/Mainbox'
import Changebtn from '../../../SmallComponents/Changebtn/Changebtn'
import UsedFetch from "../../../ExtraBox/ApiCall/UsedFetch";
import HomeMoviecard from '../../../SmallComponents/HomeMoviecard/HomeMoviecard'




const Toprated = () => {

    const [pagetype , setpagetype] = useState("movie")
    const {data , loading} = UsedFetch(`/${pagetype}/top_rated`)


    const onbtnchange = (item) => {  

        setpagetype(item === "Movie" ? "movie" : "tv");

    };

  return (

    <section id='movies-selection-box'>

        <Mainbox>
                
                <h1>Top-rated Movies/TV Series</h1>
                <Changebtn data={["Movie" , "Tv"]} onbtnchange ={onbtnchange} />
                


        </Mainbox>
            <HomeMoviecard data={data?.results} loading={loading}

                pagetype={pagetype}
            
            />




    </section>

  )
}

export default Toprated