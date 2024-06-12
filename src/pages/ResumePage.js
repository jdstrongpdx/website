import React from 'react';
import Certifications from '../components/Certifications';
import Classes from '../components/Classes';

function ResumePage() {
    return (
    <>
    <h1>Resume Page</h1>
    <p>
    <div className='project'>
    <h3>Resume</h3>
    <div className="centered">
                <figure>
                    <img width="1200"  alt="Joel Strong Resume" src="./images/Resume.png"/>
                </figure>
            </div>
    <p>For more detailed information, visit my LinkedIn profile:  <a href="https://www.linkedin.com/in/joel-strong/">https://www.linkedin.com/in/joel-strong/</a></p>

    </div>

    <div className='project'>
    <h3>LinkedIn Profile:  <a href="https://www.linkedin.com/in/joel-strong/"> https://www.linkedin.com/in/joel-strong/</a></h3>



    </div>
    </p>

    <p><Certifications id="certifications"/></p>
    </>
    );
}
export default ResumePage;