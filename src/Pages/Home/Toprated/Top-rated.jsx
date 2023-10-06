

import React, { useState } from 'react'

import Mainbox from '../../../Components/Mainbox/Mainbox'
import Typebtn from '../../../Components/Typebtn/Typebtn'
import usedFetch from '../../../hook/usedFetch'
import HomeMoviecard from '../../../Components/HomeMoviecard/HomeMoviecard'




const Toprated = () => {

    const [pagetype , setpagetype] = useState("movie")
    const {data , loading} = usedFetch(`/${pagetype}/top_rated`)


    const onbtnchange = (item) => {  

        setpagetype(item === "Movie" ? "movie" : "tv");

    };

  return (

    <section id='movies-selection-box'>

        <Mainbox>
                
                <h1>Top-rated Movies/TV Series</h1>
                <Typebtn data={["Movie" , "Tv"]} onbtnchange ={onbtnchange} />
                


        </Mainbox>
            <HomeMoviecard data={data?.results} loading={loading}

                pagetype={pagetype}
            
            />




    </section>

  )
}

export default Toprated