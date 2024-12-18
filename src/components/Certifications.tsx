import React from "react";
import Certification from "./Certification";
import certificateData from "../data/certificateData";

const Certifications = () => {
    return (
        <>
            <div className="project">
                <h2>Course Certificates:</h2>
                <h4>These are a selection of certificates earned through courses aimed at gaining knowledge and
                    experience across various skills in full-stack development.</h4>
                {/* Map over the certification Data array to show categories and certifications */}
                {certificateData.map((category, index) => (
                    <div key={index}>
                        <h3>{category.title}</h3>
                        <div className='skillsParent'>
                            {category.certifications.map((certification, index) => (
                                <Certification
                                    key={index}
                                    link={certification.link}
                                    type={certification.type}
                                    imgLink={certification.imgLink}
                                    title={certification.title}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Certifications;
