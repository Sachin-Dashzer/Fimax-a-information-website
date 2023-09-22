import {useState, useEffect} from 'react';
import { fetchDataFromApi } from "../utils/api";


const usedFetch = (url)=>{

    const [loading , setloading] = useState(null);
    const [data , setdata] = useState(null);
    const [error , seterror] = useState(null);

    useEffect(() =>{

        setloading("Loading...")
        setdata(null);
        seterror(null);


        fetchDataFromApi(url)
        .then((res)=>{
            setloading(false);
            setdata(res);
        })
        .catch((err)=>{

            setloading(false);
            seterror("Something went wrong , Please try again later after some time");
        })




    }, [url])


    return{data , loading , error};


}


export default usedFetch;