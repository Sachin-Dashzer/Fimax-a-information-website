

import React, { useState } from 'react'

import Mainbox from '../../../Components/Mainbox/Mainbox'
import Switchbtn from '../../../Components/Switchbtn/Switchbtn'
import Movietypeboxes from '../../../Components/Movietypeboxes/Movietypeboxes'
import usedFetch from '../../../hook/usedFetch'


const Popular = () => {

    const [pagetype , setpagetype] = useState("movie")
    const {data , loading} = usedFetch(`/${pagetype}/popular`)


    const onbtnchange = (item) => {  

        setpagetype(item === "Movie" ? "movie" : "tv");

    };

  return (

    <section id='movies-selection-box'>

        <Mainbox>
                
                <h1>Popular Movies/TV Series</h1>
                <Switchbtn data={["Movie" , "Tv"]} onbtnchange ={onbtnchange} />
                


        </Mainbox>
            <Movietypeboxes data={data?.results} loading={loading}

                pagetype={pagetype}
            
            />




    </section>

  )
}

export default Popular