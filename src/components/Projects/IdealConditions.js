import React from "react";
import Project from "../Project";

const project = {
    name: "Ideal Conditions Full Stack Web Application",
    abbreviation: "IC",
    date: "September 2023",
    type: "Full Stack Serverless Web Application",
    description: "A application that takes in a Location string, uses an serverless microservice to return time windows when the weather conditions are ideal for ten popular outdoor activities.",
    stack: {
        frontend: "Uses React, JavaScript, HTML, CSS, Axios.",
        database: null,
        backend: "Uses an AWS Lambda Function running Python. Uses an AWS API Gateway with Proxy Integration to inject the request into the Lambda function and return the response. Code was written in PyCharm, tested, deployed to AWS and tested using Postman.",
        hosting: "The backend is served AWS Lambda/API Gateway and the frontend is served by an AWS Amplify app."
    },
    website: null,
    websiteText: null,
    repo: "https://github.com/jdstrongpdx/IdealConditionsWebApp",
}

const ChildrenAfter = () => {
    return (
        <>
            <h4>Frontend: </h4>
            <ol>
                <li>Takes in web form data and submits to my AWS Lambda API.</li>
                <li>Receives return data.</li>
                <li>Displays error or parses returned information by outdoor activity.</li>
                <li>Condenses consecutive hour blocks into time windows.</li>
                <li>Displays the results to the user.</li>
                <li>Note: At the time of development, I only had several weeks of experience using React. The
                    code and formatting are not ideal, but retained as an example of that moment in time.
                </li>
            </ol>
            <h4>Backend</h4>
            <ol>
                <li>Parses provided GET parameters with Try/Except error handling.</li>
                <li>Uses a geocode.maps.co API to lazily convert a string location into GPS coordinates.</li>
                <li>Uses a NOAA API to get the closest weather station to the requested GPS coordinates.</li>
                <li>Uses another NOAA API to request the forecast for the given weather forecast station.</li>
                <li>Parses the forecast into a simplified format.</li>
                <li>Creates a class for Activity objects to store and compare ideal weather conditions for
                    performing an outdoor activity.
                </li>
                <li>Instantiates ten Activity objects with (my) ideal weather condition parameters.</li>
                <li>Adds the Activity objects to a list for iteration.</li>
                <li>Iterates through each Activity using a method to compare the forecast to the Activity ideal
                    conditions, generating a nested dictionary of activities and ideal time windows.
                </li>
                <li>If successful, returns a summary of location and Activity weather data, else returns an
                    error.
                </li>
            </ol>
        </>
    )
}


function IdealConditions() {
    return (
        <>
            <Project project={project} childrenAfter={<ChildrenAfter/>}/>
        </>
    )
}

export default IdealConditions;
