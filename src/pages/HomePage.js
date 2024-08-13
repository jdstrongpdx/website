import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

function HomePage() {
    return (<>
    
    <img height="100" alt="Website logo" className='right' src="/logo192.png"/>
    <h1>Joel Strong </h1>
    
    
    <article>
        <h4>Junior Full Stack Software Engineer</h4>
        <p>I am a full time student and Junior Full Stack developer in Portland, Oregon. I am attending Oregon State University pursuing a post-baccalaureate bachelors degree in Computer Science with an expected graduation in Fall 2024. In addition to maintaining a 3.98 GPA in my Computer Science program, I have spent hundreds of hours outside of class learning the languages, skills, and certifications needed to build beautiful, functional, and purposeful full stack web applications. Please take a look at my Portfolio page for examples of my Projects and work!</p>
        
    </article>
    
    <button><FaLaptopCode/>&ensp;<Link to="/PortfolioPage">Portfolio</Link></button> &emsp;
    <button className='styledButton'><IoDocument/>&ensp;<Link to="/ResumePage">Resume</Link></button>
    
    <article>
        <h3>Languages & Frameworks</h3>
        <p>This is a list of languages & frameworks that I have learned with the expressed interest in building applications with them.  I am a life-long learner and interested in adding new languages and frameworks that help me achieve the goals of the projects I am working on.</p>

        <div className='skillsParent'>
            <div className='skillsChild'>
                <h4><img height="50" alt="Python logo" src="/logos/python.png"/> &ensp; Python</h4>
                <p>Advanced proficiency with experience building applications using OOP, file manipulation, database operations, networking, multi-threading, collections, wrappers, generators, library integrations and other concepts and tools.</p>        </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="Java logo" src="/logos/java.png"/> &ensp; Java</h4>
                    <p>Advanced proficiency with experience building applications using OOP, file manipulation, high and low level database operations, collections, streams, multi-threading, networking, serialization, generics and other concepts and tools.</p>        
                </div>        
                <div className='skillsChild'>
                    <h4><img height="50" alt="JavaScript logo" src="/logos/javascript.png"/> &ensp; JavaScript</h4>
                    <p>Intermediate proficiency with experience building frontend applications using API integrations, data transformation, DOM manipulation, asynchronous functions, event and error handling and other concepts and tools. </p>        
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="Typescript logo" src="/logos/typescript.png"/> &ensp; Typescript</h4>
                    <p>Intermediate proficiency with experience building frontend applications using API integrations, interfaces, unions, type guards, data transformation, DOM manipulation, asynchronous functions, event and error handling and other concepts and tools.</p>        
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="React logo" src="/logos/react.png"/> &ensp; React</h4>
                    <p>Intermediate proficiency with experience in building dynamic Single Page Applications and React functions using hooks, props, event handling and other concepts and tools.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="database logo" src="/logos/database.png"/> &ensp; SQL & NoSQL</h4>
                    <p>Intermediate proficiency with experience designing and building SQL and NoSQL models on local and hosted services, writing queries, performing data manipulation, transaction management and other concepts and tools. </p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="HTML logo" src="/logos/html.png"/> &ensp; HTML</h4>
                    <p>Intermediate proficiency with experience creating accessible web pages using semantic HTML elements, Flexboxes, Navigation, Form design, DOM manipulation and other concepts and tools. </p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="CSS logo" src="/logos/css.png"/> &ensp; CSS</h4>
                    <p>Intermediate proficiency of CSS syntax to style the output of webpages with experience building with vanilla CSS, Bootstrap, React-Bootstrap and other styling tools.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="SpringBoot logo" src="/logos/springboot.png"/> &ensp; SpringBoot</h4>
                    <p>Intermediate proficiency with experience using Spring Web, JPA, Security, MVC, Jackson, Validation, JUnit, Actuator, Model-Mapper modules with Gradle/Maven to build and deploy web applications.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="AWS logo" src="/logos/aws.png"/> &ensp; Amazon Web Services</h4>
                    <p>Basic proficiency with experience configuring and deploying web applications using the following AWS offerings: Amplify, Lambda, S3, RDS, Lightsail RDS and Lightsail container.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="GCP logo" src="/logos/gcp.png"/> &ensp; Google Cloud Platform</h4>
                    <p>Basic proficiency with experience configuring and deploying web applications using the following GCP offerings: App Engine, Firestore, CloudSQL, Compute Engine, Storage, Artifact Registry.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="AI logo" src="/logos/ai.png"/> &ensp; Artificial Intelligence</h4>
                    <p>Intermediate proficiency using AI as a learning and development streamlining tool using ChatGPT and JetBrains AI Assistant. Experience using prompt engineering, to automate and refine data, function, documentation, and test creation.</p>
                </div>
            </div>
            
        </article>
        <article>
            <h3>Skills</h3>
        </article>
        
        <div className='skillsParent'>
            <div className='skillsChild'>
                <h4><img height="50" alt="Algorithm logo" src="/logos/algorithm.png"/> &ensp; Algorithms</h4>
                <p>Intermediate proficiency with experience using Arrays, Linked Lists, Sorting, Trees, Heaps, Hashing, Recursion. Using Neetcode.io to learn algorithm design. Using Leetcode to practice accurate and efficient implementations.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="OOP logo" src="/logos/oop.png"/> &ensp; OOP</h4>
                <p>Advanced proficiency of classes, methods, static elements, nesting, inheritance, abstract classes, interfaces, overriding/overloading, and usage.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Architecture logo" src="/logos/architecture.png"/> &ensp; Architecture</h4>
                <p>Basic proficiency of building programs with a SOLID architecture, using Creational, Behavioral, and Structural design patterns.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="IDE logo" src="/logos/ide.png"/> &ensp; IDE's</h4>
                <p>Intermediate proficiency using built in features to streamline development, linting to produce error free code, using integrated features for debugging, command line calls and database changes.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Debugging logo" src="/logos/debugging.png"/> &ensp; Debugging</h4>
                <p>Intermediate proficiency with experience using of a variety of debuggers to see the state of objects/threads at key points to make actionable design decisions.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Git logo" src="/logos/git.png"/> &ensp; Git</h4>
                <p>Intermediate proficiency of Git commands, Gitflow, branching, tagging, version control, workflows, and using local and remote repositories.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Program testing logo" src="/logos/testing.png"/> &ensp; Testing</h4>
                <p>Intermediate proficiency using a layered testing approach using unittest, PyTest, JUnit, Postman/Newman, Spring Test, MockMVC and other tools.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Agile logo" src="/logos/agile.png"/> &ensp; AGILE</h4>
                <p>Basic proficiency of the AGILE methodology with SCRUM, XP, Kanban subtypes and using task managers such as Jira, Trello, and Asana. </p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Docker logo" src="/logos/container.png"/> &ensp; Containers</h4>
                <p>Intermediate proficiency with experience creating and deploying Dockerized Flask/Python applications to Google Cloud Platform and Java/Spring Boot applications to Amazon Web Services.</p>
            </div>
            
            
            
        </div>
        </>
        );
    }
    export default HomePage;