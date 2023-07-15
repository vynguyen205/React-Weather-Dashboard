import React, { useState } from "react";
import useGeoFetch from "../../utils/customHooks/useGeoFetch";

export default function Searchbar({ searchedResult }) {
    const [city, setCity] = useState('');
    const { data } = useGeoFetch(city);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setCity(value);
    }


    return (
        <>
            <form className="flex p-10">
                <div className="flex-col">
                    <div className="flex">
                        <input 
                            type="text"
                            value={city}
                            placeholder="Search city here ..."
                            onChange={handleInputChange}
                            className="p-3 pl-6 w-80 rounded-full bg-slate-100 text-lg"    
                        ></input>
                        {/* <button className="text-slate-500 pl-5"> Search </button> */}
                    </div>
                    <div className="pt-3 flex flex-col ">
                        {data.length > 0 ? data.map(item => (
                            <button
                                className="pt-2 pb-1 border-b-2 bg-transparent">{item.name}, {item.country}
                            </button>
                        )) : null}
                    </div>
                </div>
            </form>
        </>
    );
}