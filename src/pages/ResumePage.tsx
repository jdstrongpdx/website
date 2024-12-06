import React, {useState} from 'react';
import Certifications from '../components/Certifications';
import HelmetComponent from "../components/HelmetComponent";

function ResumePage() {
    const [isOpen, setIsOpen] = useState(false);
    const data = {
        imageSrc: "/images/Resume.png",
        altText: "Joel Strong Resume",
        label: "Resume",
    }

    return (
    <div>
        <HelmetComponent title="Resume" />
        <div className='project'>
            <h2>Resume</h2>
            <div
                onClick={() => setIsOpen(true)}
                style={{ cursor: 'pointer', justifyContent: "center", alignItems: "center", display: "flex" }}
            >
                <img src={data.imageSrc}
                     alt={data.altText}
                     className="shadow"
                     style={{ width: "90%", maxWidth: "1000px"  }}
                />

            </div>

            {isOpen && (
                <div onClick={() => setIsOpen(false)}
                     style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={data.imageSrc}
                         alt="Full Size" style={{ maxWidth: '90%', maxHeight: '90%' }} />
                </div>
            )}
        </div>

        <Certifications/>
    </div>
    );
}
export default ResumePage;
