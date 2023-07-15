import React, { useState } from "react";
import Searchbar from "./ui/Searchbar";
import SideWeatherCard from "./ux/SideWeatherCard";

function Sidebar() {
    const [result, setResults] = useState([]);

    return (
        <>
            <div className="flex-col"> 
                {<Searchbar searchedResult={setResults}/>}
                {<SideWeatherCard result={result}/>}
            </div>

            {/* INSERT SEARCHBAR SOMEWHERE HERE */}
        </>
    );
}

export default Sidebar;