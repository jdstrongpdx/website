import React from 'react';
import Certifications from '../components/Certifications';
import HelmetComponent from "../components/HelmetComponent";
import ResumeModal from "../components/ResumeModal";

function ResumePage() {
    return (
    <div>
        <HelmetComponent title="Resume" />
        <div className='project'>
            <h2>Resume</h2>
            <ResumeModal
                imageSrc="/images/Resume.png"
                altText="Joel Strong Resume"
                label="Resume"
            />
        </div>

        <Certifications/>
    </div>
    );
}
export default ResumePage;
