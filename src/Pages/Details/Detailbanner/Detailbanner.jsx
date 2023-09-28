

import React, { useState } from 'react'
import usedFetch from "../../../hook/usedFetch"
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'

import "./detailbanner.scss"

import Mainbox from "../../../Components/Mainbox/Mainbox"
import Img from "../../../Components/Lazyloading/Img"
import Movietypeboxes from "../../../Components/Movietypeboxes/Movietypeboxes"
import Ratingcircle from "../../../Components/Ratingcircle/Ratingcircle"
import PosterFallback from "../../../assets/no-poster.png"
import Genres from "../../../Components/Genres/Genres"





const Detailbanner = () => {

    const { mediaType, id } = useParams();
    const { data, loading } = usedFetch(`/${mediaType}/${id}`);

    console.log(data);


    const { url } = useSelector((state) => state.homepage);


  return (

    <div className="detailbanner">

        {
            !loading ?

            (

                <>
                    !!data && (

                        <div className="backgroundimg">
                            <Img
                                src = {url.backdrop + data?.backdrop_path}
                            />
                        </div>

                    )
                </>
            ) :(              
                  <div className="detailsBannerSkeleton">
                    <Mainbox>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </Mainbox>
                </div>
)
        }



    </div>



  )
}

export default Detailbanner