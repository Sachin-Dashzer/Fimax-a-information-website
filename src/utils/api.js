import axios from 'axios';



const Base_Url = "https://api.themoviedb.org/3";

const Tmbd_token = import.meta.env.VITE_APP_TMDB_TOKEN;


const headers = {
    Authorization: `Bearer ${Tmbd_token}`
}


export const fetchDataFromApi = async (url , params) =>{

    try {

        const {data} = await axios.get(Base_Url + url , {
            headers,
            params
        });

        return data;

        
    } catch (error) {
        console.log(error);
        return error;
    }


}