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

            <h4>Java/SprintBoot Backend Recipe Application</h4>
            <p>The foundations for this website came from my Web Development class. The class started by building a website in basic HTML, adding CSS styling, learning and including JavaScript, connecting the website to a MongoDB database, and finally converting the whole site to a React Single Page Application. </p>
                <p>Text description</p>
                <p>Video</p>
            
            <h4>Personal Website</h4>
            <p>text </p>
            <ul>
                <li><em>Frontend uses HTML, CSS, JavaScript, TypeScript and React.</em>  Uses several React modules, Axios, Express.</li>
                <li><strong>Backend: </strong> Uses modules for Express, Nodemon, Rest and Mongoose to connect to a MongoDB Atlas Cluster using a MVC model.</li>
                <li><strong>Hosting: </strong> AWS Amplify</li>
            </ul>

            <h4>Ideal Conditions</h4>
            <p>text </p>
                <p>Text description</p>
                <p>Video</p>
                <p>GitHub</p>

            <h4>Rental Homes</h4>
            <p>text </p>
            <ul>
                <li><strong>Frontend: </strong> <em>Languages: HTML, CSS, JavaScript and React.</em>  Uses several React modules, Express and Nodemon.</li>
                <li><strong>Backend: </strong> Uses modules for Express, Nodemon, Rest and Mongoose to connect to a MongoDB Atlas Cluster using a MVC model.</li>
            </ul>

            <h4>Java OOP Two Player Battleship</h4>
            <p>text</p>
                <p>Text description</p>
                <p>GitHub</p>

            <h4>React/JS Projects</h4>

            <ul>
                <li><strong><Link to="/OrderPage">Ordering Service:</Link></strong> &emsp; A form that loads product information into a table, uses interactive React icons and a form submission route to simulate an ordering service.</li>
                <li><strong><Link to="/StaffPage">Staff List Service:</Link></strong> &emsp; Fetches a list of people from an API and loads the data into a table. </li>
                <li><strong><Link to="/ContactPage">Contact Form: </Link></strong> &emsp; An interactive contact form that sends the entered information via e-mail.</li>
                
        
        
            </ul>
        </article>

        <Certifications/>

        </>
    );
}
export default PortfolioPage;