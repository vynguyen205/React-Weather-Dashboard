import { useState, useEffect } from "react";
require('dotenv').config();

const useOneCallFetch = (lat, lon) => {
    const API_KEY = process.env.REACT_APP_MY_API_KEY;
    const OneCallAPI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`;
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(OneCallAPI);
              const data = await response.json();
              console.log('🎉 ONECALL API: ', data);
              setData(data);
              setStatus('🎉 fetched!');
            } catch (e) {
              setStatus('😢 error!')
              console.log("Can't find it!")
            }
        };

        fetchData();
    }, [OneCallAPI]);

    return { status, data };
};

export default useOneCallFetch;