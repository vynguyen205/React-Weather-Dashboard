import React from "react";
import Sidebar from "./Sidebar";

function Dashboard() {
    return (
        <>
            <div className="flex">
                <aside className="flex-none w-1/4 md:bg-slate-400 xl:bg-slate-700">
                    {<Sidebar/>}
                </aside>
                <div className="flex-1 w-3/4 h-screen text-blue-800"> Hello 👋🏼</div>
            </div>
        </>
    );
}

export default Dashboard;