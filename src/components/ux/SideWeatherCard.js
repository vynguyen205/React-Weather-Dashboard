import { useState } from 'react';
import icons from '../../utils/Icons';
import useOneCallFetch from '../../utils/customHooks/useOneCallFetch'

function SideWeatherCard({ name, lat, lon, country, state}) {
    // const [latLon, setLatLon] = useState({
    //     lat: lat,
    //     lon: lon
    // })
    

    // const { data } = useOneCallFetch(lat, lon);

    console.log("SIDECARD: ", lat, " ", lon);


    return (
        <div className='flex justify-center'>
            <img 
                src={icons[0].img}
                className='h-48 w-48' 
            ></img>
        </div>
    );
}

export default SideWeatherCard;