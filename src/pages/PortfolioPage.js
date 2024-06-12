import React from "react";
import { Link } from "react-router-dom";
import Certifications from "../components/Certifications";

function PortfolioPage() {
    return (<>
    
    <h2>Portfolio</h2>
    
    <article>
        <h3>Introduction:</h3>
        <p>Welcome to my website!  This website is a collection of my development work including both school and personal projects. The projects listed here will be expanded with pages for different projects and short summaries for the tech stacks, languages and github links will be posted here. Expected graduation in Fall 2024.</p>
        
    </article>
    
    <article >
        <h3>Notable Projects:</h3>
        
        
        <div className="project">
            <h3>Personal Website</h3>
            <h4>December 2023 - Current</h4>
            <div className="centered">
                    <figure>
                    <img width="900px" alt="website screenshot" src="./images/website.png"/>
                    </figure>
            </div>
            <p><strong>App Type:</strong> Full Stack Single Page Web Application</p>
            <p><strong>Description:</strong> Development of a personal website to showcase my SWE skills. I started from scratch deploying an empty React project to AWS Amplify and built up the React/JS/CSS code to develop the site.</p>
            <ul>
                <li><em>Frontend: </em> Uses a HTML, CSS, JavaScript and React with several React modules, Axios, Express.</li>
                <li><em>Hosting: </em> AWS Amplify with automatic deployment upon pushes to Main on GitHub.</li>
            </ul>
        </div>


        <div className="project">
            <h3>FragranceFreeResources.com Full Stack Web Application</h3>
            <h4>April 2024 - Current</h4>
            <div className="centered">
                    <figure>
                        <img width="900px" alt="fragrancefreeresources app screenshot" src="./images/FFR.png"/>
                    </figure>
            </div>
            
            <p><strong>App Type:</strong> Full Stack Single Page Web Application</p>
            <p><strong>Description:</strong> A Full Stack web application that allows people that are sensitive to fragrances to share resources on Businesses, Products, and Rental Homes that are safe environments.</p>
            <ul>
                <li><em>Frontend: </em> React/Typescript using axios, react-bootstrap, and react-touch.</li>
                <li><em>Database: </em> MySql running on AWS Lightsail RDS </li>
                <li><em>Backend: </em>  Dockerized Java/Spring Boot container using Spring Web, Data JPA, Security, WebMVC, Test, and Actuator.</li>
                <li><em>Hosting: </em> The backend is deployed to a AWS Lightsail container instance and the frontend is served by an AWS Amplify.</li>
            </ul>

            <div>
                <p><strong>Dedication</strong></p>
                <p>This website is dedicated to a family member affected by a sensitivity to fragrances and the
                    tens of thousands of people who share similar struggles.</p>

                <p><strong>Overview</strong></p>
                <p>This full stack web applciation was developed over 11 weeks as part of a Personal Projects
                    elective class as part of my Computer Science bachelors degree at Oregon State University. In
                    addition to my classwork, I dedicated myself to learning additional languages and frameworks with
                    the goal of independently developing a web application. This website is a realization of those
                    efforts.</p>

                <p><strong>Web Application Features</strong></p>
                <ul>
                    <li>Security - Implemented Spring Security using JWT with backend access privileges for each
                        endpoint and frontend dynamic page rendering based on roles and record creator. Uses roles for
                        Visitor, User, Moderator, and Administrator.
                    </li>
                    <li>User Interface - Developed a dynamic SPA using React, Typescript, and React-Bootstrap.</li>
                    <li>Cloud Development - Created using an MVC model,</li>
                    <li>Database Design -</li>
                    <li>Compatibility</li>
                    <li>Error Handling</li>
                    <li>Performance - cached variables, simple entites that do not require mapping/dto, db connection
                        pools
                    </li>
                    <li>Entities - Performing CRUD operations on a range of entities: Businesses, Products, Rental
                        Homes, Entity Reviews, Support Tickets, and Users.
                    </li>
                </ul>

                <p><strong>Challenges</strong></p>
                <p>Broken down into the following areas: </p>
                <ul>
                    <li>Project Scale - This was a sizable project that required learning many new skills.</li>
                    <li>Backend Design - There were a number of backend design iterations attempting to find the balance
                        between code simplicity and functionality.
                    </li>
                    <li>Deployment Options - Chosing which services to use and how to configure them.</li>
                    <li>Frontend Design - How to layer Props and Components</li>
                    <li>Scope Creep - The balance between the features that are needed and the ones that would be nice
                        to have.
                    </li>
                    <li>Best Practices Balance - In smaller projects, it has been possible to do it all: detailed
                        documentation, lenting, layered testing approaches, etc.
                    </li>
                </ul>

                <p><strong>Lessons Learned</strong></p>
                <p>This full stack web applciation was developed over 11 weeks as part of a Personal Projects
                    elective class as part of my Computer Science bachelors degree at Oregon State University. In
                    addition to my classwork, I dedicated myself to learning additional languages and frameworks with
                    the goal of independently developing a web application. This website is a realization of those
                    efforts.</p>

                <p><strong>Stack</strong></p>
                <ul>
                    <li>Backend: Dockerized SpringBoot/Java program deployed with AWS Lightsail Container</li>
                    <ul>
                        <li>Spring Web: Module for implementing RESTful API's</li>
                        <li>Spring Security: Module for implementing user Auth.</li>
                        <li>Spring JPA: Module for database ODM</li>
                        <li>Spring Validation:</li>
                        <li>Spring Test:</li>
                        <li>Spring Actuator:</li>
                        <li>Model Mapper:</li>
                        <li>HikariCP:</li>
                        <li>Jackson:</li>
                        <li>JsonWebToken:</li>
                        <li>ProjectLombok:</li>
                    </ul>
                    <li>Database: MySQL instance deployed with AWS Lightsail Databases</li>
                    <li>Frontend: React, Typescript deployed with AWS Amplify</li>
                    <ul>
                        <li>Axios</li>
                        <li>React-Bootstrap</li>
                        <li>React-Icons</li>
                        <li>React-Router-Dom</li>
                    </ul>
                </ul>
            </div>



                    <div className="centered">
                        <figure>
                        <img width="900px" alt="FFR backend endpoints" src="./images/FFRendpoints.png"/>
                            <figcaption>Basic API mapping</figcaption>
                        </figure>
                    </div>
                    <div className="centered">
                        <figure>
                        <img width="600px" alt="FFR backend security" src="./images/FFRsecurity.png"/>
                            <figcaption>Endpoint Security Configuration</figcaption>
                        </figure>
                    </div>

            <p><em>Project Link: </em> <a href="https://fragrancefreeresources.com">FragranceFreeResources.com</a> </p>   
        </div>

        <div className="project">
            <h3>Google Cloud Platform REST API using Python/Flask, Firebase NoSQL, Storage </h3>
            <h4>May 2024</h4>
            
            <div className="centered">
                <figure>
                    <img width="550px" alt="python flask api code" src="./images/GCPflask.png"/>
                    <figcaption>Python/Flask API Endpoint code.</figcaption>
                </figure>
            </div>
            
            <div className="centered">
                <figure>
                    <img width="75ç0px" alt="postman newman api testing" src="./images/GCPpostman.png"/>
                    <figcaption>Postman/Newman API Testing</figcaption>
                </figure>
            </div>

            <div className="centered">
                <figure>
                    <img width="800px" alt="google cloud platform datastore" src="./images/GCPdatastore.png"/>
                    <figcaption>GCP NoSQL Datastore.</figcaption>
                </figure>
            </div>

            <p><strong>App Type:</strong> Multi-Threaded Python Application that uses a TCP/IP Server/Client connection to communicate statuses.</p>
            <p><strong>Description:</strong> TODO</p>
            <p><strong>Details:</strong> TODO</p>
            
        </div>


        <div className="project">
            <h3>Python Server/Client Networking Monitor using TCP/IP </h3>
            <h4>March 2024</h4>
            <div className="centered">
                <figure>
                    <img width="1000px" alt="network monitor program" src="./images/NetworkMonitor.png"/>
                    <figcaption>Network Monitor Program - Server Left and Client Right.</figcaption>
                </figure>
            </div>
            
            <p><strong>App Type:</strong> Multi-Threaded Python Application that uses a TCP/IP Server/Client connection to communicate statuses.</p>
            <p><strong>Description:</strong> TODO</p>
            <p><strong>Details:</strong> The program does uses the following custom classes:</p>
            <ol>
                    <li>Service - the base class for all services providing common functionality for sub-class services.</li>
                    <li>Specific Service implementations - DNS, HTTP, HTTPS, ICMP Echo, ICMP Ping, NTP, TCP, UDP</li>
                    <li>Result - the base class for all service results providing common functionality.  Specific implementations are written in each specific service implementation (#2 above).  Sent between the server and the client as a payload in a Packet object (#4 below).</li>
                    <li>Packet - a data transfer object between the Server and Client with sender, receiver, payload, timestamp, and status.</li>
                    <li>Config - a data transfer object that transfers the services and Unique Identifiers between the server and client. Sent in the payload of a Packet object.</li>
                    <li>StatusEnum - a Enum that controls the current status states of the server, client, each service, and every Packet. It is also used to control the information flow between the server and client by sending change of state requests such as config, resume, pause, and shutdown.  Is carried in each Result object and each Packet object.</li>
                    <li>Setup - a class that stores the Network Monitor configuration and allows it to be serialized for saving/loading configuration data.</li>
                    <li>RunServices - uses multi-threading to asynchronously run each service and deliver the test Result objects to a common deque for transmission to the client from the server.</li>
                    <li>ManagementService - performs the Management Service Requirements as outlined in the assignment using the above classes.</li>
                    <li>MonitoringService - performs the Monitoring Service Requirements as outlined in the assignment using the above classes.</li>
                    <li>App - provides the UI for configuring the program and running it.</li>
            </ol>

            <p><strong>Credits:</strong> Created by Joel Strong <br></br>
                Network monitoring service examples, Echo Server & Client code, RunServices example code, and various other parts of this program used source code provided by Professor Bram Lewis at Oregon State University.</p>
            <p><em>GitHub Link: </em> <a href="https://github.com/jdstrongpdx/NetworkMonitor ">Network Monitor App</a> </p> 
            
        </div>

        <div className="project">
            <h3>Ideal Conditions Web Application using React/JS fronend and Python AWS Lambda backend</h3>
            <h4>September 2023</h4>
            <div className="centered">
                    <figure>
                        <img width="900px" alt="ideal conditions app screenshot" src="./images/idealConditions.png"/>
                    </figure>
            </div>
            
            <p><strong>App Type:</strong> Full Stack Single Page Web Application</p>
            <p><strong>Description:</strong> A Full Stack web application that takes in a Location string, uses an API microservice I developed to return time windows when the weather conditions are ideal for ten popular outdoor activities.</p>
            
            <ul>
                <li><em>Frontend: </em> Uses a HTML, CSS, JavaScript and React with several React modules, Axios, Express.</li>
                <li><em>Backend: </em> Uses an AWS Lambda Function running Python.  Uses an AWS API Gateway with Proxy Integration to inject the request into the Lambda function and return the response.  Code was written in PyCharm, tested, deployed to AWS and tested using Postman. </li>
                <li><em>Hosting: </em> The backend is served AWS Lambda/API Gateway and the frontend is served by an AWS Amplify app.</li>
            </ul>
            <p><strong>Details:</strong> This web application performs the following: </p>
            
            <ul>
                <li><em>Frontend: </em></li>
                <ol>
                    <li>Takes in web form data and submits to my AWS Lambda API.</li>
                    <li>Recieves return data: <a href="https://9w160flmwj.execute-api.us-east-2.amazonaws.com/V2?location=Portland,OR">Example JSON return data for Portland, OR</a></li>
                    <li>Displays error or parses returned information by outdoor activity.</li>
                    <li>Condenses consecutive hour blocks into time windows.</li>
                    <li>Displays the results to the user.</li>
                    <li><em>Note: </em>At the time of creation, I only had several weeks of experience with JS and React. The formatting and coding of the results can be greatly improved and will be revisited at a later time. </li>
                </ol>
                <div className="centered">
                        <figure>
                        <img width="600px" alt="JSON data example" src="./images/idealConditionsResults.png"/>
                            <figcaption>Results example after Time Window Parsing in JavaScript</figcaption>
                        </figure>
                    </div>
                <li><em>Backend: </em></li>
                <ol>
                    <li>Parses provided GET parameters with Try/Except error handling.</li>
                    <li>Uses a geocode.maps.co API to lazily convert a string location into GPS coordinates.</li>
                    <li>Uses a NOAA API to get the closest weather station to the requested GPS coordinates.</li>
                    <li>Uses another NOAA API to request the forecast for the given weather forecast station.</li>
                    <li>Parses the forecast into a simplified format.</li>
                    <li>Creates a class for Activity objects to store and compare ideal weather conditions for performing an outdoor activity.</li>
                    <li>Instantiates ten Activity objects with (my) ideal weather condition parameters.</li>
                    <li>Adds the Activity objects to a list for iteration.</li>
                    <li>Iterates through each Activity using a method to compare the forecast to the Activity ideal conditions, generating a nested dictionary of activities and ideal time windows.</li>
                    <li>If successful, returns a summary of location and Activity weather data, else returns an error.</li>
                    <li><a href="https://9w160flmwj.execute-api.us-east-2.amazonaws.com/V2?location=Portland,OR">Live JSON API data for Portland, OR</a></li>
                    <div className="centered">
                        <figure>
                        <img width="900px" alt="JSON data example" src="./images/idealConditionsJSON.png"/>
                            <figcaption>Example JSON API return data from AWS Lambda Function running Python</figcaption>
                        </figure>
                    </div>
                    
                </ol>
            </ul>
            <p><em>Project Link:</em> <Link to="/IdealConditionsPage">Ideal Conditions</Link></p>
            <p><em>GitHub Link: </em> <a href="https://github.com/jdstrongpdx/IdealConditionsWebApp">Ideal Conditions GitHub</a> </p>   
        </div>
        
        <div className="project">
            <h3>Java Multi-threaded Blockchain App </h3>
            <h4>August 2023</h4>
            
            <div className="centered">
                <figure>
                    <img width="600px" alt="code to enable multithreading" src="./images/Multi-thread-code.png"/>
                    <figcaption>Multi-threading code snippet.</figcaption>
                </figure>
            </div>
            
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