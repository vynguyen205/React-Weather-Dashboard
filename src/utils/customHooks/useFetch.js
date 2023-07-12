import React, { useState, useEffect } from "react";


const useFetch = (url) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!url) { console.log('🫤 Bad URL. Try again!') }
        const fetchData = async () => {
            const response = await fetch(url);
            const data = await response.json();
            console.log('🎉 FETCHED DATA: ', data);
            setData(data);
            setStatus('🎉 fetched!')
        };

        fetchData();
    }, [url]); // --> this hook is dependent on the url, will update when url updates 

    // return { status, data };
};

export default useFetch;