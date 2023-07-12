import React from "react";
import Sidebar from "./Sidebar";

function Dashboard() {
    return (
        <>
            <div className="flex-column">
                <div className="flex">
                    <h1 className="flex flex-col"> HELLO 👋🏼 </h1>
                        <aside className="flex flex-col">
                    {<Sidebar />} 
                    </aside>
                </div>
            </div>
        </>
    );
}

export default Dashboard;