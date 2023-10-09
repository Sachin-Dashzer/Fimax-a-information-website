

import React, { useState } from 'react'

import Mainbox from '../../../SmallComponents/Mainbox/Mainbox'
import Changebtn from '../../../SmallComponents/Changebtn/Changebtn'
import HomeMoviecard from '../../../SmallComponents/HomeMoviecard/HomeMoviecard'
import UsedFetch from "../../../ExtraBox/ApiCall/UsedFetch";


const Trending = () => {

    const [pagetype , setpagetype] = useState("day")
    const {data , loading} = UsedFetch(`/trending/movie/${pagetype}`)


    const onbtnchange = (item) => {  

        setpagetype(item === "Day" ? "day" : "week");

    };

  return (

    <section id='movies-selection-box'>

        <Mainbox>
                
                <h1>Top-Trending</h1>
                <Changebtn data={["Day" , "Week"]} onbtnchange ={onbtnchange} />
                


        </Mainbox>
            <HomeMoviecard data={data?.results} loading={loading} />




    </section>

  )
}

export default Trending