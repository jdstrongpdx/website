import React from "react";
import Certification from "./Certification";

function Certifications() {
    return (
        <>

        <div className="project">
            <h2>Certifications:</h2>
            <h3>JetBrains Java Certifications</h3>

            <div className='skillsParent'>
                <Certification
                    link="https://hyperskill.org/certificates/f2e02db5-f71e-49f6-8d0e-16ab49feb9a7.pdf"
                    type="normal"
                    imgLink="./certifications/IntroJava.png"
                    title="Introduction to Java"
                />
                <Certification
                    link="https://hyperskill.org/certificates/df6a1e14-ac88-40f7-96bf-2a5e31fa7e14.pdf"
                    type="normal"
                    imgLink="./certifications/JavaDeveloper.png"
                    title="Java Developer"
                />
                <Certification
                    link="https://hyperskill.org/certificates/e2d4693c-4e90-450d-a207-7d9acc9e374c.pdf"
                    type="normal"
                    imgLink="./certifications/IntroSpringBoot.png"
                    title="Introduction to Spring Boot"
                />
                <Certification
                    link="https://hyperskill.org/certificates/e2d4693c-4e90-450d-a207-7d9acc9e374c.pdf"
                    type="normal"
                    imgLink="./certifications/JavaBackend.png"
                    title="Java Backend Developer (using Spring Boot)"
                />
            </div>

            <h3>Meta Front-End Professional Certificates</h3>
            <div className='skillsParent'>
                <Certification
                    link="https://coursera.org/verify/SRG8ZTR5AYPP"
                    type="wide"
                    imgLink="./certifications/metaVersionControl.png"
                    title="Version Control"
                />
                <Certification
                    link="https://coursera.org/verify/9HO3N1IXEHL0"
                    type="wide"
                    imgLink="./certifications/metaHtmlCss.png"
                    title="HTML and CSS in Depth"
                />
                <Certification
                    link="https://coursera.org/verify/TLLPJGAZ3B2A"
                    type="wide"
                    imgLink="./certifications/metaJavaScript.png"
                    title="Programming with JavaScript"
                />
                <Certification
                    link="https://coursera.org/verify/8U39UCIHFL04"
                    type="wide"
                    imgLink="./certifications/metaReactAdvanced.png"
                    title="Meta Advanced React"
                />
                <Certification
                    link="https://coursera.org/verify/43GJ80J0798S"
                    type="wide"
                    imgLink="./certifications/metaUiUx.png"
                    title="Principles of UX/UI Design"
                />
            </div>

            <h3>JetBrains Python</h3>
            <div className='skillsParent'>
                <Certification
                    link="https://hyperskill.org/certificates/142107e4-68cd-4d83-bd0c-1d53b085e767.pdf"
                    type="normal"
                    imgLink="./certifications/IntroPython.png"
                    title="Introduction to Python"
                />
                <Certification
                    link="https://hyperskill.org/certificates/f2e02db5-f71e-49f6-8d0e-16ab49feb9a7.pdf"
                    type="normal"
                    imgLink="./certifications/PythonCore.png"
                    title="Python Core"
                />
            </div>

            <h3>Google Artificial Intelligence</h3>
            <div className='skillsParent'>
                <Certification
                    link="https://coursera.org/share/0e340a32d14f1aad0b6fcf23c8da42ca"
                    type="wide"
                    imgLink="./certifications/gcpGenerativeAI.png"
                    title="Introduction to Generative AI"
                />
            </div>

            <h3>DevOps</h3>
            <div className='skillsParent'>
                <Certification
                    link="https://hyperskill.org/certificates/9451fed6-62ed-4538-8b3c-5e4b418593c2.pdf"
                    type="normal"
                    imgLink="./certifications/IntroDocker.png"
                    title="Introduction to Docker"
                />
                <Certification
                    link="https://coursera.org/verify/IK02GKZWTS14"
                    type="wide"
                    imgLink="./certifications/AgileProjectManagement.png"
                    title="Agile Project Management"
                />
                <Certification
                    link="https://coursera.org/verify/SRG8ZTR5AYPP"
                    type="wide"
                    imgLink="./certifications/metaVersionControl.png"
                    title="Version Control"
                />
            </div>

            <h3>Diploma - Bachelor of Science in Computer Science</h3>
            <div className='skillsParent'>
                <Certification
                    link="https://www.michaelsutter.com/ediploma?fn=diplomastatuscheck&key=02000000343d3683d10c064811946bb80683c96d85b6c0b9fa40c5cfe971fa505ced7b2c54a73b35856352081c6fb8833728fa7c1a1f042659c17369b0c64c4cb2f3bfff"
                    type="normal"
                    imgLink="./certifications/Diploma.png"
                    title="Bachelor of Science in Computer Science"
                />
            </div>

        <a href="#top">Back to top</a>
        </div>

</>
)
}

export default Certifications;
