

import React, { useState } from 'react'

import Mainbox from '../../../Components/Mainbox/Mainbox'
import Switchbtn from '../../../Components/Switchbtn/Switchbtn'
import Movietypeboxes from '../../../Components/Movietypeboxes/Movietypeboxes'
import usedFetch from '../../../hook/usedFetch'


const Trending = () => {

    const [pagetype , setpagetype] = useState("day")
    const {data , loading} = usedFetch(`/trending/movie/${pagetype}`)


    const onbtnchange = (item) => {  

        setpagetype(item === "Day" ? "day" : "week");

    };

  return (

    <section id='trending'>

        <Mainbox>

            <div className="trending-heading">
                
                <h1>Trending</h1>
                <Switchbtn data={["Day" , "Week"]} onbtnchange ={onbtnchange} />
                

            </div>

            <Movietypeboxes data={data?.results} loading={loading} />

        </Mainbox>



    </section>

  )
}

export default Trending