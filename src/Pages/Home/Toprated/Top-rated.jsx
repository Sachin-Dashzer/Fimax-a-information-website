

import React, { useState } from 'react'

import Mainbox from '../../../Components/Mainbox/Mainbox'
import Switchbtn from '../../../Components/Switchbtn/Switchbtn'
import Movietypeboxes from '../../../Components/Movietypeboxes/Movietypeboxes'
import usedFetch from '../../../hook/usedFetch'


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
                <Switchbtn data={["Movie" , "Tv"]} onbtnchange ={onbtnchange} />
                


        </Mainbox>
            <Movietypeboxes data={data?.results} loading={loading}

                pagetype={pagetype}
            
            />




    </section>

  )
}

export default Toprated