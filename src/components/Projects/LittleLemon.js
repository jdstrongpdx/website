import { Link } from "react-router-dom";

function IdealConditions() {
    return (
        <>
            <div id="LittleLemon" className="project">
                <h3>Little Lemon UX/UI design and React implementation</h3>
                <h4>November 2024</h4>


                <p><strong>App Type:</strong>Frontend Design & Implementation</p>
                <p><strong>Description: </strong> This project was part of the Meta Front-End Developer Professional Certification and had the following objectives:</p>

                <ul>
                    <li>Development of the Little Lemon UI/UX using:</li>
                    <ol>
                        <li>Development of a problem statement.</li>
                        <li>Development of a user persona in Figma.</li>
                        <li>Development of a user journey map in Figma.</li>
                        <li>Development of a wireframe in Figma.</li>
                        <li>Development of an interactive prototype in Figma.</li>
                    </ol>
                    <li>Development of the Little Lemon Desktop Implementation using a Style Guide</li>
                    <li>Development of the Little Lemon Mobile Table Reservation form including:</li>
                    <ol>
                        <li>Creation of a multi-part form using params and state to control form implementation.</li>
                        <li>Using a Reducer at the root of the project to hold reservation dates and times for use in the project.</li>
                        <li>Using an API fetch to get reservation dates and times for Reducer population.</li>
                        <li>Implementing form validation, flow, and submit logic.</li>
                        <li>Implementing unit and integration testing into project.</li>
                    </ol>
                </ul>

                Development of a UI/UX implementation using Personas, Journey Map, Figma
                Wireframe and Figma Prototype. Implementation of a highly stylized Advanced React frontend using
                    specifications and instructions provided. This project was the Capstone project for the Meta
                    Front-End Professional Certification.

                <p><strong>Persona:</strong></p>

                <div className="centered">
                    <figure>
                        <img width="1000px" alt="little lemon persona" src="images/persona.png"/>
                    </figure>
                </div>

                <p><strong>Journey Map:</strong></p>

                <div className="centered">
                    <figure>
                        <img width="1000px" alt="little lemon journey map" src="images/journeyMap.png"/>
                    </figure>
                </div>

                <p><strong>Wireframe (Desktop)</strong></p>

                <div className="centered">
                    <figure>
                        <img width="1000px" alt="little lemon wireframe" src="images/wireframe.png"/>
                    </figure>
                </div>

                <p><strong>Provided Style Guide</strong></p>

                <div className="centered">
                    <figure>
                        <img alt="little lemon style guide" src="images/styleGuide1.png"/>
                    </figure>
                </div>

                <p><strong>Stylized Website Implementation using React and Bootstrap (Desktop)</strong></p>
                <div className="centered">
                    <figure>
                        <img alt="little lemon desktop" src="images/LLdesktop.png"/>
                    </figure>
                </div>

                <p><strong>Table Reservation Multi-Part Form - First Page (Mobile)</strong></p>
                <div className="centered">
                    <figure>
                        <img width="500px" alt="little lemon desktop" src="images/LLmobile.png"/>
                    </figure>
                </div>

                <p><em>GitHub Link: </em> <a href="https://github.com/jdstrongpdx/Meta-Front-End-Developer-Capstone">Meta
                    Front-End Developer Capstone GitHub</a></p>
                <a href="#top">Back to top</a>
            </div>
        </>
    )
}

export default IdealConditions;
