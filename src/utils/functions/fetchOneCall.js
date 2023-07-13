import { useState } from "react";
import useFetch from "../customHooks/useGeoFetch";
require('dotenv').config();

const OneCallAPI = `https://api.openweathermap.org/data/2.5/onecall`;
const API_KEY = process.env.REACT_APP_MY_API_KEY;

export default function FetchOneCall(lat, lon) {
    const url = `${OneCallAPI}?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    const { status, data } = useFetch(url);
    return data;
}
