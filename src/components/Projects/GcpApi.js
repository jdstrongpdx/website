import React from "react";
import Project from "../Project";

const project = {
    name: "Google Cloud Platform RESTful API backend using Python/Flask, Datastore, Storage",
    abbreviation: "GCP",
    date: "May 2024",
    type: "RESTful API Backend",
    description: "Portfolio project for my Cloud Application Development course with the following features:",
    stack: null,
    website: null,
    websiteText: null,
    repo: null,
}


const Description = () => {
    return (
        <>
            <ul>
                <li>User authentication and authorization using Auth0 and JWTs.</li>
                <li>Development of RESTful API endpoints following a provided API specification including:</li>
                <ul>
                    <li>Returning the correct HTTP Response Codes based on a series of possible errors and their
                        respective priorities.
                    </li>
                    <li>Generation of dynamic "self" url links to access linked information.</li>
                    <li>Use of Pagination and dynamic "next" url links.</li>
                </ul>
                <li>Creating and configuring Google Cloud Platform to host a Python/Flask app utilizing AppEngine,
                    Datastore, Storage.
                </li>
                <li>Using GCP Datastore to perform CRUD operations on User, Course, and Enrollment entities.</li>
                <li>Using GCP Storage to upload, retrieve and delete user avatar image files.</li>
                <li>Testing API endpoints using Postman/Newman including the creation of tests to meet the API
                    specification.
                </li>
            </ul>
        </>
    )
}

function GcpApi() {
    return (
        <>
            <Project project={project} description={<Description />}/>
        </>
    )
}

export default GcpApi;
