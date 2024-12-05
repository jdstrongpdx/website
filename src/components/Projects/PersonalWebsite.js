import React from "react";
import Project from "../Project";

const project = {
    name: "Personal Website",
    abbreviation: "Website",
    date: "December 2023 - Current",
    type: "React Website",
    description: "Development of a personal website to showcase my SWE skills.",
    stack: {
        frontend: "React, JavaScript, CSS, HTML.",
        hosting: "AWS Amplify with automatic deployment with commit to Main.",
    },
    website: null,
    websiteText: null,
    repo: "https://github.com/jdstrongpdx/website",
}

const Description = () => {
    return (
        <>
            <p>Description</p>
        </>
    )
}


function PersonalWebsite() {
    return (
        <>
            <Project project={project} description={<Description />} />
        </>
    )
}

export default PersonalWebsite;
