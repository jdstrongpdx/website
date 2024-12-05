import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import HelmetComponent from "./HelmetComponent";

const PortfolioLayout = () => {
    const linkStyle = {
        display: 'inline-block',
        margin: '5px',
    };

    const activeLinkStyle = {
        ...linkStyle,
        fontWeight: 'bold',
        color: 'darkBlue',
    };

    return (
        <>
            <HelmetComponent title="Portfolio"/>
            <h2>Notable Projects</h2>
            <nav className='centered'>
                <NavLink to="/portfolio/" end style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Projects List
                </NavLink>
                <NavLink to="/portfolio/fragrancefreeresources" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    FragranceFreeResources.com
                </NavLink>
                <NavLink to="/portfolio/littlelemon" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Little Lemon
                </NavLink>
                <NavLink to="/portfolio/jdstrongpdx" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    jdstrongpdx.com
                </NavLink>
                <NavLink to="/portfolio/mlbreakout" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    ML-Breakout
                </NavLink>
                <NavLink to="/portfolio/gcpapi" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    GCP API
                </NavLink>
                <NavLink to="/portfolio/idealconditions" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Ideal Conditions
                </NavLink>
                <NavLink to="/portfolio/networkmonitor" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Network Monitor
                </NavLink>
                <NavLink to="/portfolio/blockchain" style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Blockchain
                </NavLink>
            </nav>
            <br></br>

            <Outlet/>
        </>
    );
};

export default PortfolioLayout;
