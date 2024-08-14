import React from "react";
import Certifications from "../components/Certifications";
import Ffr from "../components/Projects/Ffr";
import GcpApi from "../components/Projects/GcpApi";
import NetworkMonitor from "../components/Projects/NetworkMonitor";
import IdealConditions from "../components/Projects/IdealConditions";
import PersonalWebsite from "../components/Projects/PersonalWebsite";
import Blockchain from "../components/Projects/Blockchain";
import Mlb from "../components/Projects/Mlb";
import Repositories from "../components/Projects/Repositories";

function PortfolioPage() {
    return (<>
    
    <h2>Portfolio</h2>
         <article id="top">
                <h3>Notable Projects:</h3>
                <div className="project">
                    <h4>Jump to a Project:</h4>
                    <ul>
                        <li><a href="#Ffr">FragranceFreeResources.com - Full Stack Web Application using
                            React/Typescript, Java/Spring Boot, Docker, MySQL, AWS Amplify/Lightsail</a><br/></li>
                        <li><a href="#Mlb">ML-Breakout - Unity Game with Machine Learning Agent Deployed to Unity
                            Play</a><br/></li>
                        <li><a href="#GcpApi">GCP API - Backend API using Flask/Python, Auth0, GCP Datastore/Storage</a><br/>
                        </li>
                        <li><a href="#NetworkMonitor">Network Monitor - Python TCP/IP Multi-Threaded Client/Server
                            Network Monitor Application</a><br/></li>
                        <li><a href="#IdealConditions">Ideal Conditions - React/JS, Python AWS Lambda Microservice
                            Application</a><br/></li>
                        <li><a href="#Blockchain">Java Blockchain - Multi-threaded Java Blockchain Application</a><br/>
                        </li>
                        <li><a href="#PersonalWebsite">Personal Website (This Website) - React/JS, AWS Amplify
                            Hosting</a></li>
                        <li><a href="#Repositories">A List of GitHub Repositories Showcasing My Code</a></li>
                    </ul>
                </div>

                <div id="Ffr"><Ffr/></div>
                <div id="Mlb"><Mlb/></div>
                <div id="GcpApi"><GcpApi/></div>
                <div id="NetworkMonitor"><NetworkMonitor/></div>
                <div id="IdealConditions"><IdealConditions/></div>
                <div id="Blockchain"><Blockchain/></div>
                <div id="PersonalWebsite"><PersonalWebsite/></div>
                <div id="Repositories"><Repositories/></div>


            </article>

            <Certifications/>

        </>
    );
}

export default PortfolioPage;