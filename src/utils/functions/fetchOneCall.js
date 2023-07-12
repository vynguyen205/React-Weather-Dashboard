import React, { useState, useEffect } from "react";
import useFetch from "../customHooks/useFetch";
require('dotenv').config();

const OneCallAPI = `https://api.openweathermap.org/data/2.5/onecall`;
const API_KEY = process.env.REACT_APP_MY_API_KEY;

export default function FetchOneCall(lat, lon) {
    const [lat, setlat] = useState('');
    const [lon, setlon] = useState('');

    const url = (lat && lon) && `${OneCallAPI}?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    useFetch(url);
}
