import React from "react"
import {Link, Outlet} from "react-router-dom";

const PortfolioLayout = () => {
    return (
        <>
            <h1>Portfolio</h1>

            <p>Selected Project Links: </p>
            <nav>
                <span>
                    <button><Link
                        to="/portfolio/">Overview</Link></button>
                    <button><Link
                        to="/portfolio/fragrancefreeresources">FragranceFreeResources.com</Link></button>
                    <button><Link
                        to="/portfolio/littlelemon">Little Lemon</Link></button>
                    <button><Link
                        to="/portfolio/jdstrongpdx">jdstrongpdx.com</Link></button>
                    <button><Link
                        to="/portfolio/mlbreakout">ML-Breakout</Link></button>
                    <button><Link
                        to="/portfolio/gcpapi">GCP API</Link></button>
                    <button><Link
                        to="/portfolio/idealconditions">Ideal Conditions</Link></button>
                    <button><Link
                        to="/portfolio/networkmonitor">Network Monitor</Link></button>
                    <button><Link
                        to="/portfolio/blockchain">Blockchain</Link></button>
                </span>
            </nav>
            <Outlet/>
        </>
    )
}

export default PortfolioLayout;
