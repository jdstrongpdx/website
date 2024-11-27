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
import HelmetComponent from "../components/HelmetComponent";
import LittleLemon from "../components/Projects/LittleLemon";

function PortfolioPage() {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (<>
            <HelmetComponent title="Portfolio" />
    <h2>Portfolio</h2>
            <article id="top">

                <div className="project">
                    <h3>Notable Projects:</h3>
                    <ul>
                        <li>
                            <a
                                href="#Ffr"
                                onClick={(e) => {
                                    e.preventDefault(); // Prevent default jump to ID
                                    handleScroll('Ffr');
                                }}
                            >
                                FragranceFreeResources.com - Full Stack Web Application using React/Typescript,
                                Java/Spring Boot, Docker, MySQL, AWS Amplify/Lightsail
                            </a>
                        </li>
                        <li>
                            <a
                                href="#LittleLemon"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('LittleLemon');
                                }}
                            >
                                Little Lemon - Development of a UI/UX using Personas, Journey Map, Figma Wireframe and
                                Figma Prototype. Highly stylized implementation using React.
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Mlb"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('Mlb');
                                }}
                            >
                                ML-Breakout - Unity Game with Machine Learning Agent Deployed to Unity Play
                            </a>
                        </li>
                        <li>
                            <a
                                href="#GcpApi"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('GcpApi');
                                }}
                            >
                                GCP RESTful API Backend - Flask/Python, Auth0, GCP Datastore, and GCP Storage
                            </a>
                        </li>
                        <li>
                            <a
                                href="#NetworkMonitor"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('NetworkMonitor');
                                }}
                            >
                                Network Monitor - Python TCP/IP Multi-Threaded Client/Server Network Monitor Application
                            </a>
                        </li>
                        <li>
                            <a
                                href="#IdealConditions"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('IdealConditions');
                                }}
                            >
                                Ideal Conditions - React/JS, Python AWS Lambda Microservice Application
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Blockchain"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('Blockchain');
                                }}
                            >
                                Java Blockchain - Multi-threaded Java Blockchain Application
                            </a>
                        </li>
                        <li>
                            <a
                                href="#PersonalWebsite"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('PersonalWebsite');
                                }}
                            >
                                Personal Website - React/JS, AWS Amplify Hosting
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Repositories"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('Repositories');
                                }}
                            >
                                GitHub Repositories Showcasing My Code
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Certifications"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('Certifications');
                                }}
                            >
                                Certifications Completed
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="Ffr"><Ffr/></div>
                <div id="LittleLemon"><LittleLemon/></div>
                <div id="Mlb"><Mlb/></div>
                <div id="GcpApi"><GcpApi/></div>
                <div id="NetworkMonitor"><NetworkMonitor/></div>
                <div id="IdealConditions"><IdealConditions/></div>
                <div id="Blockchain"><Blockchain/></div>
                <div id="PersonalWebsite"><PersonalWebsite/></div>
                <div id="Repositories"><Repositories/></div>
                <div id="Certifications"><Certifications/></div>

            </article>
        </>
    );
}

export default PortfolioPage;
