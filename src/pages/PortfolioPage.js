import React from "react";
import Certifications from "../components/Certifications";
import Ffr from "../components/Projects/Ffr";
import GcpApi from "../components/Projects/GcpApi";
import NetworkMonitor from "../components/Projects/NetworkMonitor";
import IdealConditions from "../components/Projects/IdealConditions";
import PersonalWebsite from "../components/Projects/PersonalWebsite";
import Blockchain from "../components/Projects/Blockchain";
import Mlb from "../components/Projects/Mlb";

function PortfolioPage() {
    return (<>
    
    <h2>Portfolio</h2>
    
    <article >
        <h3>Notable Projects:</h3>
        <Ffr/>
        <Mlb/>
        <GcpApi/>
        <NetworkMonitor/>
        <IdealConditions/>
        <Blockchain/>
        <PersonalWebsite/>

        <h3>GitHub Repositories from other notable projects:</h3>
        <ul>
            <li><a href="https://github.com/jdstrongpdx/Smallsh">C Implementation of a Linux Shell</a></li>
            <li><a href="https://github.com/jdstrongpdx/Java-Data-Access-Object-Implementation">Java JDBC Car Sharing REST Backend using PostgreSQL and DAO (without Spring Boot)</a></li>
            <li><a href="https://github.com/jdstrongpdx/Low-Level-OA-SA-Hash-Table-Implementation">Python SA & OA Hash Table Implementation</a></li>
            <li><a href="https://github.com/jdstrongpdx/Java-OOP-SQL-Meal-Planner">Java OOP & SQL Meal Planner Desktop App</a></li>
            <li><a href="https://github.com/jdstrongpdx/Java-OOP-Two-Player-Battleship">Java OOP Two Player Battleship Game</a></li>
            <li><a href="https://github.com/jdstrongpdx/Assembly---String-to-Binary-Array-I-O">Assembly String to Binary I/O</a></li>
            <li><a href="https://github.com/jdstrongpdx/JetBrains---Password-Hacker">Java Password Hacker</a></li>
            <li><a href="https://github.com/jdstrongpdx/Python-OOP-Othello-Board-Game">Python OOP Othello Board Game</a></li>
            
        </ul>
        
    </article>
    
    <Certifications/>
    
    </>
    );
}
export default PortfolioPage;