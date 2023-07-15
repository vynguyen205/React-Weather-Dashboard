import { useState } from 'react';
import icons from '../../utils/Icons';
import useOneCallFetch from '../../utils/customHooks/useOneCallFetch'

function SideWeatherCard({ result }) {
    const [city, setCity] = useState('');
    const { data } = useOneCallFetch(result)

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