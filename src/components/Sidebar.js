import React, { useState } from "react";
import Searchbar from "./ui/Searchbar";
import SideWeatherCard from "./ux/SideWeatherCard";

function Sidebar() {
    const [selectedCity, setSelectedCity] = useState({
        name:'',
        lat: '',
        lon: '',
        country:'',
        state: ''
    })

     
    return (
        <>
            <div className="flex-col"> 
                {<Searchbar {...setSelectedCity}/>}
                {<SideWeatherCard {...selectedCity}/>}
            </div>

            {/* INSERT SEARCHBAR SOMEWHERE HERE */}
        </>
    );
}

export default Sidebar;