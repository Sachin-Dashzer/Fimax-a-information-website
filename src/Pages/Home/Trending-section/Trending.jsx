

import React, { useState } from 'react'

import Mainbox from '../../../Components/Mainbox/Mainbox'
import Typebtn from '../../../Components/Typebtn/Typebtn'
import HomeMoviecard from '../../../Components/HomeMoviecard/HomeMoviecard'
import usedFetch from '../../../hook/usedFetch'


const Trending = () => {

    const [pagetype , setpagetype] = useState("day")
    const {data , loading} = usedFetch(`/trending/movie/${pagetype}`)


    const onbtnchange = (item) => {  

        setpagetype(item === "Day" ? "day" : "week");

    };

  return (

    <section id='movies-selection-box'>

        <Mainbox>
                
                <h1>Top-Trending</h1>
                <Typebtn data={["Day" , "Week"]} onbtnchange ={onbtnchange} />
                


        </Mainbox>
            <HomeMoviecard data={data?.results} loading={loading} />




    </section>

  )
}

export default Trending