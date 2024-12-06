import React from "react";
import Project from "../Project";
import projectData from "../../data/projectData";

const Description = () => {
    return (
        <>
            <ul>
                <li>Created data objects to store project, image, skill, language and certification data.</li>
                <li>Iterated over data objects to dynamically generate components.</li>
                <li>Utilized Components to provide uniformity by passing data as props or children.</li>
                <li>Performed dynamic image resizing onClick using state to change views.</li>
                <li>Used React-Router to provide routing, nested paths, and navigation with active links.</li>
                <li>Created a collapsable sidebar menu for viewing on different device sizes.</li>
            </ul>
        </>
    )
}


function PersonalWebsite() {
    return (
        <>
            <Project project={projectData.Website} description={<Description />} />
        </>
    )
}

export default PersonalWebsite;
