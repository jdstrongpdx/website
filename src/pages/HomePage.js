import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

function HomePage() {
    return (<>
    
    <img height="100" alt="Website logo" className='right' src="./logo192.png"/>   
    <h1>Joel Strong </h1>
    
    
    <article>
        <h4>Junior Full Stack Software Engineer</h4>
        <p>I am a full time student and aspiring Full Stack developer in Portland, Oregon.  In addition to maintaining a 4.0 GPA in my Computer Science program, I have spent hundreds of hours outside of class learning the languages, skills, and certifications needed to become a successful developer. Please take a look at my Portfolio page for examples of my Projects and work!</p>
    </article>
    
    <button><Link to="/PortfolioPage"><FaLaptopCode />Portfolio</Link></button> &emsp;
    <button className='styledButton'><Link to="/ResumePage"><IoDocument />Resume</Link></button>
    
    <article>
        <h3>Languages & Frameworks</h3>
        <p>This is a list of languages & frameworks that I have learned with the expressed interest in building applications with them.  I am completely open to learning new languages and frameworks that help me achieve the goals of the project I am working on.</p>
        
        <div className='skillsParent'>
            <div className='skillsChild'>
                <h4><img height="50" alt="Python logo" src="./logos/python.png"/> &ensp; Python</h4>
                <p>Intermediate understanding with experience in OOP, files, databases, collections, wrappers, generators, libraries and more.</p>        </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="Java logo" src="./logos/java.png"/> &ensp; Java</h4>
                    <p>Advanced understanding with experience in OOP, files, JDBC, collections, streams, multi-threading, networking, serialization, generics and more.</p>        
                </div>        
                <div className='skillsChild'>
                    <h4><img height="50" alt="JavaScript logo" src="./logos/javascript.png"/> &ensp; JavaScript</h4>
                    <p>Basic understanding with experience in functions, data types, operations, DOM manipulation and HTML integration.</p>        
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="React logo" src="./logos/react.png"/> &ensp; React</h4>
                    <p>Basic understanding with experience in building Single Page Applications and React functions.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="database logo" src="./logos/database.png"/> &ensp; SQL & NoSQL</h4>
                    <p>Intermediate understanding with experience using SQL and NoSQL models on both local and hosted services.   </p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="HTML logo" src="./logos/html.png"/> &ensp; HTML</h4>
                    <p>Intermediate understanding with experience using HTML elements, Flexboxes, Navigation, and DOM manipulation to structure webpages. </p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="CSS logo" src="./logos/css.png"/> &ensp; CSS</h4>
                    <p>Intermediate understanding of CSS elements and syntax to style the output of webpages.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="SpringBoot logo" src="./logos/springboot.png"/> &ensp; SpringBoot</h4>
                    <p>Basic understanding with experience using Spring Web (REST), Data (JPA), Security, Jackson, Validation and Gradle/Maven to build and deploy web applications.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="AWS CDK logo" src="./logos/aws.png"/> &ensp; AWS CDK</h4>
                    <p>Basic understanding with experience using Amplify web hosting, Lambda functions, S3 storage, RDS database hosting, and API Gateway configurations.</p>
                </div>
            </div>
            
        </article>
        <article>
            <h3>Skills</h3>
        </article>
        
        <div className='skillsParent'>
            <div className='skillsChild'>
                <h4><img height="50" alt="Algorithm logo" src="./logos/algorithm.png"/> &ensp; Algorithms</h4>
                <p>Intermediate understanding with experience using Arrays, Linked Lists, Sorting, Trees, Heaps, Hashing, Recursion.  
                    Using Neetcode.io to learn algorithm design. Using Leetcode to practice accurate and efficient implementations.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="OOP logo" src="./logos/oop.png"/> &ensp; OOP</h4>
                <p>Advanced understanding of classes, methods, static elements, nesting, inheritance, abstract classes, interfaces, overriding/overloading, and usage.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Architecture logo" src="./logos/architecture.png"/> &ensp; Architecture</h4>
                <p>Basic understanding of building programs with a SOLID architecture, using Creational, Behavioral, and Structural design patterns.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="IDE logo" src="./logos/ide.png"/> &ensp; IDE's</h4>
                <p>Intermediate understanding using built in features to streamline development, linting to produce error free code, using integrated features for debugging, command line calls and database changes.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Debugging logo" src="./logos/debugging.png"/> &ensp; Debugging</h4>
                <p>Intermediate understanding with experience using of a variety of debuggers to see the state of objects/threads at key points to make actionable design decisions.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Git logo" src="./logos/git.png"/> &ensp; Git</h4>
                <p>Intermediate understanding of Git commands, Gitflow, branching, tagging, version control, workflows, and using local and remote repositories.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Cloud Computing logo" src="./logos/cloud.png"/> &ensp; Cloud Computing</h4>
                <p>Basic understanding with experience using and deploying RESTful Microservices and Monolith could based applications.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Agile logo" src="./logos/agile.png"/> &ensp; AGILE</h4>
                <p>Basic understanding of the AGILE methodology with SCRUM, XP, Kanban subtypes and using task managers such as Jira, Trello, and Asana. </p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Docker logo" src="./logos/container.png"/> &ensp; Containers</h4>
                <p>Basic understanding with experience creating dockerfiles, docker commands, building images, networking, docker compose, and running containers.</p>
            </div>
            
            
            
        </div>
        </>
        );
    }
    export default HomePage;