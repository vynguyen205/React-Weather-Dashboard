import React, { useState } from "react";
import useGeoFetch from "../../utils/customHooks/useGeoFetch";

export default function Searchbar({ ...selectedCity }) {
    const [searchCity, setSearhCity] = useState('');
    const { data } = useGeoFetch(searchCity);
 
    const handleInputChange = (e) => {
        const { value } = e.target;
        setSearhCity(value);
    }

    const handleClick = (city) => {
        selectedCity(...city);
        console.log("Selected: ", city);
    }

    return (
        <>
            <form className="flex p-10">
                <div className="flex-col">
                    <div className="flex">
                        <input 
                            type="text"
                            value={searchCity}
                            placeholder="Search city here ..."
                            onChange={handleInputChange}
                            className="p-3 pl-6 w-80 rounded-full bg-slate-100 text-lg"    
                        ></input>
                        {/* <button className="text-slate-500 pl-5"> Search </button> */}
                    </div>
                    <div className="pt-3 flex flex-col ">
                        {data.length > 0 ? data.map((city, index) => (
                            <button
                                key={index}
                                onClick={() => handleClick(city)}
                                className="pt-2 pb-1 border-b-2 bg-transparent">{city.name}, {city.country}
                            </button>
                        )) : null}
                    </div>
                </div>
            </form>
        </>
    );
}