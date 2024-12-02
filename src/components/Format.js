import React from 'react';
import NavBar from "./NavBar";
import { Outlet } from 'react-router-dom'

const Format = () => {
    return (
        <>
            <NavBar/>
            <div className="content">
                <Outlet/>
            </div>
        </>
    )
}

export default Format;
