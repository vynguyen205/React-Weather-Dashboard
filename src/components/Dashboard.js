import React from "react";
import Sidebar from "./Sidebar";
import useOneCallFetch from "../utils/customHooks/useOneCallFetch";

function Dashboard() {
    // useOneCallFetch(37.700638, -83.973813);

    return (
        <>
            <div className="flex">
                <aside className="flex">
                    {<Sidebar/>}
                </aside>
                <div className="flex-1 w-3/4 h-screen p-12 text-2xl text-black bg-slate-50"> 
                    <h1> HOME PAGE 👋🏼 </h1>
                </div>
            </div>
        </>
    );
}

export default Dashboard;