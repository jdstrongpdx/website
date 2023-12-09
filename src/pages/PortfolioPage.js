import React from 'react';
import { Link } from 'react-router-dom';
import Certifications from '../components/Certifications';

function PortfolioPage() {
    return (<>
 
    <h2>My SWE Experience and Portfolio</h2>

    <article>
        <h3>Introduction:</h3>
        <p>Welcome to my website!  This website is a collection of my development work including both school and personal projects. The projects listed here will be expanded with pages for different projects and short summaries for the tech stacks, languages and github links will be posted here.</p>
    
    </article>

        <article >
            <h3>Notable Projects:</h3>

            <h4>Java/SprintBoot Backend Recipe Application &#40;In Development&#41; </h4>
            <p> Uses SpringBoot Web to enable REST API interactions, SpringBoot Security for user accounts and authorization, JDBC using a DAO model to interact with a local PostgreSQL database.  Uses client facing API interactions to enable a MVC model. </p>
            <ul>
                <li><em>Frontend:</em>  Used Postman to interface with client facing API endpoints.</li>
                <li><em>Backend: </em> Java 17, SpringBoot, Gradle, and PostgreSQL running locally.</li>
            </ul>

            <p>TODO Video Demonstration</p>
            
            <h4>Personal Website</h4>
            <p> Development of a personal website to showcase my SWE skills. I started from scratch deploying an empty React project to AWS Amplify and built up the React/JS/CSS code to develop the site.  I transferred in several React project from my Web Development Class &#40;see React/JS Projects below&#41; as well as my portfolio projects from my Frontend development class &#40;see Ideal Conditions below&#41;. I then converted the site from JavaScript to TypeScript.</p>
            <ul>
                <li><em>Frontend: </em> Uses a HTML, CSS, TypeScript and React with several React modules, Axios, Express.</li>
                <li><em>Backend: </em> Uses a MERN model &#40;Mongoose, Express, React, Node.js&#41; to connect to a MongoDB Atlas Cluster using a MVC model to perform CRUD operations on a Rental Homes database. </li>
                <li><em>Hosting: </em> AWS Amplify with continuous deployment upon pushes to Main on GitHub. The backend code uses a separate branch and runs on a second instance.</li>
            </ul>

            <h4>Ideal Conditions</h4>
            <p>A Full Stack web application that takes in a Location string, uses an API microservice I developed to return time windows when the weather conditions are ideal for ten popular outdoor activities.</p>
            <ul>
                <li><em>Frontend: </em> Uses a HTML, CSS, TypeScript and React with several React modules, Axios, Express.</li>
                <li><em>Backend: </em> Uses an AWS Lambda Function running Python.  Uses an AWS API Gateway with Proxy Integration to inject the request into the Lambda function and return the response.  Code was written in PyCharm, tested, deployed to AWS and tested using Postman. </li>
                <li><em>Hosting: </em> The backend is served by a non-persistent AWS Lambda function and the frontend is served by an AWS Amplify app.</li>
            </ul>
                <p><em>Project Link:</em> <Link to="/IdealConditionsPage">Ideal Conditions</Link></p>
                <p><em>TODO: Video Demonstration</em></p>
                <p><em>TODO: UPDATE FILES ONCE FULLY COMPLETE </em> <a href="https://github.com/jdstrongpdx/IdealConditions">Ideal Conditions GitHub</a> </p>   

            <h4>Rental Homes</h4>
            <p> A simple Full Stack CRUD application to update a database with Rental Home information. </p>
            <ul>
                <li><em>Frontend: </em> Uses a HTML, CSS, TypeScript and React with several React modules, Axios, Express.</li>
                <li><em>Backend: </em> Uses a MERN model &#40;Mongoose, Express, React, Node.js&#41; to connect to a MongoDB Atlas Cluster using a MVC model to perform CRUD operations on a Rental Homes database. </li>
                <li><em>Hosting: </em> AWS Amplify with continuous deployment upon pushes to Main on GitHub. The backend code uses a separate branch and runs on a second instance.</li>
            </ul>
            <p><em>Project Link:</em> <Link to="/RentalHomesPage">Rental Homes</Link></p>

            <h4>React/JS Projects</h4>

            <ul>
                <li><strong><Link to="/OrderPage">Ordering Service:</Link></strong> &emsp; A form that loads product information into a table, uses interactive React icons and a form submission route to simulate an ordering service.</li>
                <li><strong><Link to="/StaffPage">Staff List Service:</Link></strong> &emsp; Fetches a list of people from an API and loads the data into a table. </li>
                <li><strong><Link to="/ContactPage">Contact Form: </Link></strong> &emsp; An interactive contact form that sends the entered information via e-mail.</li>
                
            </ul>

            <h4>Portfolio Projects from my classes and certifications:</h4>
            <ul>
                <li><a href="https://github.com/jdstrongpdx/IdealConditions">TODO INCLUDE C Implementation of a Linux Shell</a></li>
                <li><a href="https://github.com/jdstrongpdx/Java-Data-Access-Object-Implementation">Java Data Access Object CRUD Car Sharing Application</a></li>
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