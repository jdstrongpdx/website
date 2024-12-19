import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import HelmetComponent from "./HelmetComponent";

const PortfolioLayout = () => {
    const linkStyle = {
        display: 'inline-block',
        color: '#fdfdfd',
        margin: '8px',
    };

    const activeLinkStyle = {
        ...linkStyle,
        fontWeight: 'bold',
        color: '#ffdb64',
        textDecoration: 'underline',
        textUnderlineOffset: '4px'
    };

    return (
        <>
            <HelmetComponent title="Portfolio"/>
            <h2>Portfolio of Selected Projects</h2>
            <nav className='centered'
                style={{background: "#64799f", borderRadius: "5px", padding: "5px", height: "fit-content"}}
            >
                <NavLink to="/portfolio/"
                         end
                         className="nav-link"
                         style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
                >
                    Projects List
                </NavLink>
                <NavLink
                    to="/portfolio/usermanager"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    UserManager
                </NavLink>
                <NavLink
                    to="/portfolio/fragrancefreeresources"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    FragranceFreeResources.com
                </NavLink>
                <NavLink
                    to="/portfolio/littlelemon"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Little Lemon
                </NavLink>
                <NavLink
                    to="/portfolio/jdstrongpdx"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    jdstrongpdx.com
                </NavLink>
                <NavLink
                    to="/portfolio/mlbreakout"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    ML-Breakout
                </NavLink>
                <NavLink
                    to="/portfolio/gcpapi"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    GCP API
                </NavLink>
                <NavLink
                    to="/portfolio/idealconditions"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Ideal Conditions
                </NavLink>
                <NavLink
                    to="/portfolio/networkmonitor"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Network Monitor
                </NavLink>
                <NavLink
                    to="/portfolio/blockchain"
                    className="nav-link"
                    style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}>
                    Blockchain
                </NavLink>
            </nav>
            <br></br>

            <Outlet/>
        </>
    );
};

export default PortfolioLayout;
