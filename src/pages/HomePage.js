import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";

function HomePage() {
    return (<>
 
    <h1>Joel Strong</h1>

    <article>
        <h4>Full Stack Software Engineer</h4>
        <p>I am a full time student and aspiring Full Stack developer in Portland, Oregon.  In addition to maintaining a 4.0 GPA in my Computer Science degree, I have spent hundreds of hours working towards the languages, skills, and certifications needed to be a successful developer. developing projects</p>
    </article>

    <button><Link to="/PortfolioPage"><FaLaptopCode />Portfolio</Link></button> &emsp;
    <button className='styledButton'><Link to="/ResumePage"><IoDocument />Resume</Link></button>

    <article>
        <h3>Skills & Languages</h3>
        <p>Text here</p>
    </article>

    <div className='skillsParent'>
        <div className='skillsChild'>
            <h4><img height="50" alt="Python logo" src="./logos/python.png"/> &ensp; Python</h4>
            <p>Text that describes the language and what I have done to be able to learn the language and demonstrate skills needed to be successful as a programmer.</p>
        </div>
        <div className='skillsChild'>
            <h4><img height="50" alt="Java logo" src="./logos/java.png"/> &ensp; Java</h4>
            <p>Text that describes the language and what I have done to be able to learn the language and demonstrate skills needed to be successful as a programmer.</p>
        </div>
        <div className='skillsChild'>
            <h4><img height="50" alt="JavaScript logo" src="./logos/javascript.png"/> &ensp; JavaScript</h4>
            <p>Text that describes the language and what I have done to be able to learn the language and demonstrate skills needed to be successful as a programmer.</p>
        </div>
        <div className='skillsChild'>
            <h4><img height="50" alt="React logo" src="./logos/react.png"/> &ensp; React</h4>
            <p>Text that describes the language and what I have done to be able to learn the language and demonstrate skills needed to be successful as a programmer.</p>
        </div>
        <div className='skillsChild'>
            <h4><img height="50" alt="HTML logo" src="./logos/html.png"/><img height="50" alt="CSS logo" src="./logos/css.png"/> &ensp; HTML & CSS</h4>
            <p>Text that describes the language and what I have done to be able to learn the language and demonstrate skills needed to be successful as a programmer.</p>
        </div>
        <div className='skillsChild'>
            <h4><img height="50" alt="SpringBoot logo" src="./logos/springboot.png"/> &ensp; SpringBoot</h4>
            <p>Text that describes the language and what I have done to be able to learn the language and demonstrate skills needed to be successful as a programmer.</p>
        </div>
        <div className='skillsChild'>
            <h4><img height="50" alt="AWS CDK logo" src="./logos/aws.png"/> &ensp; AWS CDK</h4>
            <p>Text that describes the language and what I have done to be able to learn the language and demonstrate skills needed to be successful as a programmer.</p>
        </div>
    </div>


    
        </>
    );
}
export default HomePage;