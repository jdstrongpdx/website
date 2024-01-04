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
                <p>Todo.</p>        </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="Java logo" src="./logos/java.png"/> &ensp; Java</h4>
                    <p>Todo.</p>        
                </div>        
                <div className='skillsChild'>
                    <h4><img height="50" alt="JavaScript logo" src="./logos/javascript.png"/> &ensp; JavaScript</h4>
                    <p>Todo.</p>        
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="JavaScript logo" src="./logos/typescript.png"/> &ensp; TypeScript</h4>
                    <p>Todo.</p>        
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="React logo" src="./logos/react.png"/> &ensp; React</h4>
                    <p>Todo.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="database logo" src="./logos/database.png"/> &ensp; SQL & NoSQL</h4>
                    <p>Experience developing database solutions on local and cloud servers.  Understanding key differences between SQL and NoSQL solutions and utilizing both. </p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="HTML logo" src="./logos/html.png"/><img height="50" alt="CSS logo" src="./logos/css.png"/> &ensp; HTML & CSS</h4>
                    <p>Understanding of DOM tree use and manipulation to build and style websites.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="SpringBoot logo" src="./logos/springboot.png"/> &ensp; SpringBoot</h4>
                    <p>Creation of Java Web Applications using Spring Web for REST interactions, Spring Security for user authentication, Spring Data JDBC with PostgreSQL and Spring Actuator for application monitoring.</p>
                </div>
                <div className='skillsChild'>
                    <h4><img height="50" alt="AWS CDK logo" src="./logos/aws.png"/> &ensp; AWS CDK</h4>
                    <p>Utilization of several AWS Cloud tools to implement solutions including Amplify web hosting, Lambda functions, S3 storage, RDS database hosting, and API Gateway configurations.</p>
                </div>
            </div>
            
        </article>
        <article>
            <h3>Skills</h3>
        </article>
        
        <div className='skillsParent'>
            <div className='skillsChild'>
                <h4><img height="50" alt="Algorithm logo" src="./logos/algorithm.png"/> &ensp; Algorithms</h4>
                <p>Using Neetcode.io to learn efficient algorithm design and data structure implementations in Python, Java and Typescript.  Using Leetcode to practice accurate and efficient implementations.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="OOP logo" src="./logos/oop.png"/> &ensp; OOP</h4>
                <p>Todo.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Architecture logo" src="./logos/architecture.png"/> &ensp; Architecture</h4>
                <p>Todo.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="IDE logo" src="./logos/ide.png"/> &ensp; IDE's</h4>
                <p>Todo.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Debugging logo" src="./logos/debugging.png"/> &ensp; Debugging</h4>
                <p>Todo.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Git logo" src="./logos/git.png"/> &ensp; Git</h4>
                <p>Todo.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Cloud Computing logo" src="./logos/cloud.png"/> &ensp; Cloud Computing</h4>
                <p>Todo.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Agile logo" src="./logos/agile.png"/> &ensp; AGILE</h4>
                <p>Todo.</p>
            </div>
            <div className='skillsChild'>
                <h4><img height="50" alt="Docker logo" src="./logos/container.png"/> &ensp; Containers</h4>
                <p>Todo.</p>
            </div>
            
            
            
        </div>
        </>
        );
    }
    export default HomePage;