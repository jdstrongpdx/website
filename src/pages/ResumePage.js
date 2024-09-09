import React from 'react';
import Certifications from '../components/Certifications';

function ResumePage() {
    return (
    <>
    <h1>Resume Page</h1>
    <div className='project'>
        <h3>Resume</h3>
        <div className="centered">
            <figure>
                <img width="1200"  alt="Joel Strong Resume" src="/images/Resume-9-2024.png"/>
            </figure>
        </div>
    </div>

    <div className='project'>
        <h3>LinkedIn Profile: </h3>
        <h4><a href="https://www.linkedin.com/in/joel-strong/"> https://www.linkedin.com/in/joel-strong/</a></h4>
    </div>

    <Certifications id="certifications"/>
    </>
    );
}
export default ResumePage;