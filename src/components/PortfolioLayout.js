import React from "react"
import {Link, Outlet} from "react-router-dom";
import HelmetComponent from "./HelmetComponent";

const PortfolioLayout = () => {
    return (
        <>
            <HelmetComponent title="Portfolio"/>
            <h2>Notable Projects</h2>
            <nav>
                <Link to="/portfolio/" style={{display: 'inline-block', margin: '5px'}}>Overview</Link>
                <Link to="/portfolio/fragrancefreeresources"
                      style={{display: 'inline-block', margin: '5px'}}>FragranceFreeResources.com</Link>
                <Link to="/portfolio/littlelemon" style={{display: 'inline-block', margin: '5px'}}>Little Lemon</Link>
                <Link to="/portfolio/jdstrongpdx"
                      style={{display: 'inline-block', margin: '5px'}}>jdstrongpdx.com</Link>
                <Link to="/portfolio/mlbreakout" style={{display: 'inline-block', margin: '5px'}}>ML-Breakout</Link>
                <Link to="/portfolio/gcpapi" style={{display: 'inline-block', margin: '5px'}}>GCP API</Link>
                <Link to="/portfolio/idealconditions" style={{display: 'inline-block', margin: '5px'}}>Ideal
                    Conditions</Link>
                <Link to="/portfolio/networkmonitor" style={{display: 'inline-block', margin: '5px'}}>Network
                    Monitor</Link>
                <Link to="/portfolio/blockchain" style={{display: 'inline-block', margin: '5px'}}>Blockchain</Link>
            </nav>

            <Outlet/>
        </>
    )
}

export default PortfolioLayout;
