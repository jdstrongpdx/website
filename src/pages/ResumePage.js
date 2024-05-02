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


    {/* <img className='address' alt="Joel Strong Resume" border="0" align="center"  src="./images/Resume.png"/> */}
    </div>
    </p>

    {/* <p><Classes id="classes"/></p> */}
    <p><Certifications id="certifications"/></p>
    </>
    );
}
export default ResumePage;