import React from "react";
import { Link } from "react-router-dom";
import Certifications from "../components/Certifications";

function PortfolioPage() {
    return (<>
    
    <h2>Portfolio</h2>
    
    <article>
        <h3>Introduction:</h3>
        <p>Welcome to my website!  This website is a collection of my development work including both school and personal projects. The projects listed here will be expanded with pages for different projects and short summaries for the tech stacks, languages and github links will be posted here.</p>
        
    </article>
    
    <article >
        <h3>Notable Projects:</h3>
        
        
        <div className="project">
            <h4>Personal Website</h4>
            <div className="centered"><img width="600px" alt="website screenshot" src="./images/website.png"/></div>
            <p><strong>Completion Date:</strong> Continuous Development</p>
            <p><strong>App Type:</strong> Full Stack Single Page Web Application</p>
            <p><strong>Description:</strong> Development of a personal website to showcase my SWE skills. I started from scratch deploying an empty React project to AWS Amplify and built up the React/JS/CSS code to develop the site.</p>
            <ul>
                <li><em>Frontend: </em> Uses a HTML, CSS, JavaScript and React with several React modules, Axios, Express.</li>
                <li><em>Backend: </em> Uses Express and NodeMailer to submit web form information into contact e-mail. </li>
                <li><em>Hosting: </em> AWS Amplify with automatic deployment upon pushes to Main on GitHub.</li>
            </ul>
        </div>
        
        <div className="project">
            <h4>Ideal Conditions</h4>
            <div className="centered"><img width="600px" alt="ideal conditions app screenshot" src="./images/idealConditions.png"/></div>
            
            <p><strong>Completion Date:</strong> In Development</p>
            <p><strong>App Type:</strong> Full Stack Single Page Web Application</p>
            <p><strong>Description:</strong> A Full Stack web application that takes in a Location string, uses an API microservice I developed to return time windows when the weather conditions are ideal for ten popular outdoor activities.</p>
            
            <ul>
                <li><em>Frontend: </em> Uses a HTML, CSS, JavaScript and React with several React modules, Axios, Express.</li>
                <li><em>Backend: </em> Uses an AWS Lambda Function running Python.  Uses an AWS API Gateway with Proxy Integration to inject the request into the Lambda function and return the response.  Code was written in PyCharm, tested, deployed to AWS and tested using Postman. </li>
                <li><em>Hosting: </em> The backend is served by a non-persistent AWS Lambda function and the frontend is served by an AWS Amplify app.</li>
            </ul>
            <p><strong>Details:</strong></p>
            
            <ul>
                <li><em>Frontend: </em></li>
                <ol>
                    <li>Takes in webform data and submits to the backend API.</li>
                    <li>Displays error or parses returned information.</li>
                    <li>Displays parsed information to the user.</li>
                </ol>
                <li><em>Backend: </em></li>
                <ol>
                    <li>
                        
                    </li>
                </ol>
                <li><em>Hosting: </em> The backend is served by a non-persistent AWS Lambda function and the frontend is served by an AWS Amplify app.</li>
            </ul>
            <p className="warning">Video demonstration.</p>
            <p className="warning">Update github files.</p>
            <p><em>Project Link:</em> <Link to="/IdealConditionsPage">Ideal Conditions</Link></p>
            <p><em>GitHub Link: </em> <a href="https://github.com/jdstrongpdx/IdealConditions">Ideal Conditions GitHub</a> </p>   
        </div>
        
        <div className="project">
            <h4>Java Multi-threaded Blockchain App </h4>
            
            <div className="centered">
                <figure>
                    <img width="600px" alt="website screenshot" src="./images/Multi-thread-code.png"/>
                    <figcaption>Multi-threading code snippet.</figcaption>
                </figure>
            </div>
            
            
            <p><strong>Completion Date:</strong> 1/1/2024</p>
            <p><strong>App Type:</strong> Multi-threaded desktop Java Application</p>
            <p><strong>Description:</strong> Creation of a Blockchain message/transaction service including Block generation, messaging/transactions, mining, and validation.</p>
            <p><strong>Details:</strong> The program does the following:</p>
            <ol>
                <li>Initializes a Message Service that:</li>
                 <ol>
                    <li>Creates a group of users - each with their own private/public keys, SHA256 signature, and starting Virtual Currency balance.</li>
                    <li>Creates a random number of transactions and validates each one for funds and authenticity.</li>
                 </ol>
                 <li>Initializes a Zero Service that will increase/decrease the number of leading zeros required to dynamically control the Block mining times.</li>
                 <li>Performs the mining operations for each Block until the requested number of blocks have been generated:</li>
                 <ol>
                    <li>Saves simple (for display) and complex (for authentication) version of the transaction string for synchronized use of the threads. </li>
                    <li>Creates an ExecutorService and loads a thread for each processor core - 1 with a mining task.</li>
                    <li>Each thread will perform the following tasks:</li>
                    <ol>
                        <li>Save a copy of the shared variables to reduce variable acquisition/synchronization times for each thread.</li>
                        <li>Generate a random Unique Block Identification code. </li>
                        <li>For each iteration, perform the following: </li>
                        <ol>
                            <li>Generate a random Magic Number</li>
                            <li>Generate a hash accounting for all unique elements of the Block - the miner, Unique Block Identifier, Magic Number, hash code from the previous Block, authentication string of the transaction data.</li>
                            <li>Check if the randomly generated hash code from above meets the Zero Requirement (the number of leading zeros required).</li>
                            <li>If successful, return the valid block, else perform the next iteration.</li>
                        </ol>
                    </ol>
                    <li>Executes the threads with the invokeAny method to shutdown all mining threads once a single one has found a solution.</li>
                    <li>Once a return is successful, it will validate the mined Block, add it to the chain, provide mining time feedback to the zero service. </li>
                 </ol>
                 
            </ol>
            <p><em>GitHub Link: </em> <a href="https://github.com/jdstrongpdx/Blockchain-Java-App">Java Blockchain App</a> </p> 
            
            <div className="centered">
                <figure>
                    <img width="500px" alt="website screenshot" src="./images/blockchain-example.png"/>
                    <figcaption>Block transaction and mining output example.</figcaption>
                </figure>
            </div>
            
            <div className="centered">
                <figure>
                    <img width="600px"  alt="website screenshot" src="./images/MultiThreadJava.png"/>
                    <figcaption>CPU load from mining on a 10 core processor.</figcaption>
                </figure>
            </div>
            
        </div>
        
        <h4>GitHub Repositories from other notable projects:</h4>
        <ul>
            <li><a href="https://github.com/jdstrongpdx/Docker-Composer"> Docker Containerized REST API running Python and Flask</a></li>
            <li><a href="https://github.com/jdstrongpdx/Smallsh">C Implementation of a Linux Shell</a></li>
            <li><a href="https://github.com/jdstrongpdx/Java-Data-Access-Object-Implementation">Java Car Sharing REST Backend using PostgreSQL (without Spring Boot)</a></li>
            <li><a href="https://github.com/jdstrongpdx/Low-Level-OA-SA-Hash-Table-Implementation">Python SA & OA Hash Table Implementation</a></li>
            <li><a href="https://github.com/jdstrongpdx/Java-OOP-SQL-Meal-Planner">Java OOP & SQL Meal Planner</a></li>
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