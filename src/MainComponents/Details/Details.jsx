

import React from 'react'


import DetailHeader from "./DetailHeader/DetailHeader";
import Casts from './Stars/Stars';
import Videosection from './Videosection/Videosection';
import Similar from "./Similar"
import Recommendation from './Recommendation';


import { useParams } from "react-router-dom";
import UsedFetch from '../../ExtraBox/ApiCall/UsedFetch';



const Details = () => {

  const { mediaType, id } = useParams();
  const { data, loading } = UsedFetch(`/${mediaType}/${id}/videos`);
  const { data: creatordata, loading: creatordataloading  } = UsedFetch(`/${mediaType}/${id}/credits`);

  return (

    <>
      <DetailHeader video ={data?.results?.[0]} crew = {creatordata?.crew}  />
      <Casts casts={creatordata?.cast} castloading={creatordataloading} />
      <Videosection data={data} loading={loading} />
      <Similar pagetype={mediaType} id={id}  /> 
      <Recommendation pagetype={mediaType} id={id}  /> 

    </>
  )
}

export default Details