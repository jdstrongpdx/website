import React from "react";
import Project from "../Project";
import projectData from "../../data/projectData";

const Description = () => {
    return (
        <>
            <ul>
                <li>Development of the Little Lemon UI/UX including a problem statement, user persona, journey map,
                    wireframe and interactive prototype in Figma.
                </li>
                <li>Development of the Little Lemon Desktop Implementation using a Style Guide</li>
                <li>Development of the Little Lemon Mobile Table Reservation form including:</li>
                <ol>
                    <li>Creation of a multi-part form using params and state to control form implementation.</li>
                    <li>Using a Reducer at the root of the project to hold reservation dates and times for use in
                        the project.
                    </li>
                    <li>Using an API fetch to get reservation dates and times for Reducer population.</li>
                    <li>Implementing form validation, flow, and submit logic.</li>
                    <li>Implementing unit and integration testing into project.</li>
                </ol>
            </ul>
        </>
    )
}

function LittleLemon() {
    return (
        <>
            <Project
                project={projectData.LL}
                description={<Description />}
                ></Project>
        </>
    )
}

export default LittleLemon;
