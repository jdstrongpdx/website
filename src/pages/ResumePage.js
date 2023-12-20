import React from 'react';
import Certifications from '../components/Certifications';

function ResumePage() {
    return (<>
 
    <h1>Resume</h1>

    <p className='warning'>OLD RESUME - NEED TO UPDATE & POST</p>

    {/* <img className='address' alt="Joel Strong Resume" border="0" align="center"  src="./images/Resume.png"/> */}

    <p>
    <Certifications id="certifications"/>
    </p>
    </>
    );
}
export default ResumePage;