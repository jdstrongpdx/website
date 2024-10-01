import React from 'react';
import Certifications from '../components/Certifications';
import HelmetComponent from "../components/HelmetComponent";

function ResumePage() {
    return (
    <>
        <HelmetComponent title="Resume" />
    <div className='project'>
        <h2>Resume</h2>
            <figure>
                <img alt="Joel Strong Resume" src="/images/Resume.png"/>
            </figure>
    </div>

    <div className='project'>
        <h2>LinkedIn Profile: </h2>
        <h4><a href="https://www.linkedin.com/in/joel-strong/"> https://www.linkedin.com/in/joel-strong/</a></h4>
    </div>

    <Certifications id="certifications"/>
    </>
    );
}
export default ResumePage;