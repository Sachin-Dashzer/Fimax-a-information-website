

import React from 'react'
import "./details.scss"


import Detailbanner from "./Detailbanner/Detailbanner";
import Casts from './Casts/Casts';
import Videosection from './Videosection/Videosection';
import Similar from "./Similar"
import Recommendation from './Recommendation';


import { useParams } from "react-router-dom";
import usedFetch from '../../hook/usedFetch';



const Details = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = usedFetch(`/${mediaType}/${id}/videos`);
  const { data: creatordata, loading: creatordataloading  } = usedFetch(`/${mediaType}/${id}/credits`);

  return (

    <>
      <Detailbanner video ={data?.results?.[0]} crew = {creatordata?.crew}  />
      <Casts casts={creatordata?.cast} castloading={creatordataloading} />
      <Videosection data={data} loading={loading} />
      <Similar pagetype={mediaType} id={id}  /> 
      <Recommendation pagetype={mediaType} id={id}  /> 

    </>
  )
}

export default Details