import { useState, useEffect } from "react";
require('dotenv').config();

const useGeoFetch = (query) => {
    const API_KEY = process.env.REACT_APP_MY_API_KEY;
    const geoAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;
    // const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(geoAPI);
              const data = await response.json();
              console.log('🎉 GEO API: ', query, data);
              setData(data);
              // setStatus('🎉 fetched!');
            } catch (e) {
              console.log("can't find: ", query)
              // setStatus('😢 error!')
            }
        };

        fetchData();
    }, [geoAPI]);

    return { data };
};

export default useGeoFetch;