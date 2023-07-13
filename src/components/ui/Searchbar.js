import React, { useState } from "react";
import useGeoFetch from "../../utils/customHooks/useGeoFetch";

export default function Searchbar() {
    const [city, setCity] = useState('');
    const { data } = useGeoFetch(city);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setCity(value);
        console.log("city input: ", value);
    }

    return (
        <>
            <form className="flex">
                <input 
                    type="text"
                    value={city}
                    placeholder="Search city here"
                    onChange={e => handleInputChange(e)}    
                ></input>
                <button className=" text-slate-500"> Search </button>
                <div>
                {data.length > 0 ? data.map((item) => {
                    return <p>{item.name}, {item.country}</p>
                }) : <></>}
                </div>
            </form>
        </>
    );
}