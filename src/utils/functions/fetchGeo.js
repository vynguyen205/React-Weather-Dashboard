import useFetch from "../customHooks/useGeoFetch";
require('dotenv').config();

const geoAPI = `https://api.openweathermap.org/geo/1.0/direct`;
const API_KEY = process.env.REACT_APP_MY_API_KEY;

export default function FetchGeo(query) {
    const url = `${geoAPI}?q=${encodeURI(query)}&limit=5&appid=${API_KEY}`;
    const {status, data} = useFetch(url);
    return data;
}