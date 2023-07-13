import React from "react";
import Searchbar from "./ui/Searchbar";

function Sidebar() {
    return (
        <>
            <div className="flex-col"> 
                <div className="flex justify-center"> 
                    {<Searchbar/>}
                </div>
            </div>

            {/* INSERT SEARCHBAR SOMEWHERE HERE */}
        </>
    );
}

export default Sidebar;