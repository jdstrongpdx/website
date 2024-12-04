import { Link } from "react-router-dom";

function IdealConditions() {
    return (
        <>
            <div  id="IdealConditions" className="project">
                <h3>Ideal Conditions Microservice using React/JS fronend and Python AWS Lambda backend</h3>
                <h4>September 2023</h4>
                <div className="centered">
                    <figure>
                        <img width="1000px" alt="ideal conditions app screenshot" src="/images/idealConditions.png"/>
                    </figure>
                </div>

                <p><strong>App Type:</strong> SPA/Serverless Microservice Application</p>
                <p><strong>Description:</strong> A application that takes in a Location string, uses an serverless
                    microservice to return time windows when the weather conditions are ideal for ten popular outdoor
                    activities.</p>

                <ul>
                    <li><em>Frontend: </em> Uses a HTML, CSS, JavaScript and React with several React modules, Axios,
                        Express.
                    </li>
                    <li><em>Backend: </em> Uses an AWS Lambda Function running Python. Uses an AWS API Gateway with
                        Proxy Integration to inject the request into the Lambda function and return the response. Code
                        was written in PyCharm, tested, deployed to AWS and tested using Postman.
                    </li>
                    <li><em>Hosting: </em> The backend is served AWS Lambda/API Gateway and the frontend is served by an
                        AWS Amplify app.
                    </li>
                </ul>
                <p><strong>Details:</strong> This web application performs the following: </p>

                <ul>
                    <li><em>Frontend: </em></li>
                    <ol>
                        <li>Takes in web form data and submits to my AWS Lambda API.</li>
                        <li>Receives return data: <a
                            href="https://9w160flmwj.execute-api.us-east-2.amazonaws.com/V2?location=Portland,OR">Example
                            JSON return data for Portland, OR</a></li>
                        <li>Displays error or parses returned information by outdoor activity.</li>
                        <li>Condenses consecutive hour blocks into time windows.</li>
                        <li>Displays the results to the user.</li>
                        <li>Note: At the time of development, I only had several weeks of experience using React. The
                            code and formatting are not ideal, but retained as an example of that moment in time.
                        </li>
                    </ol>
                    <div className="centered">
                        <figure>
                            <img width="500" alt="JSON data example" src="/images/idealConditionsResults.png"/>
                            <figcaption>Results example after Time Window Parsing in JavaScript</figcaption>
                        </figure>
                    </div>
                    <li><em>Backend: </em></li>
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
                        <div className="centered">
                            <figure>
                                <img width="900px" alt="JSON data example" src="/images/idealConditionsJSON.png"/>
                                <figcaption>Example JSON API return data from AWS Lambda Function running Python
                                </figcaption>
                            </figure>
                        </div>

                    </ol>
                </ul>
                <p><em>GitHub Link: </em> <a href="https://github.com/jdstrongpdx/IdealConditionsWebApp">Ideal
                    Conditions GitHub</a></p>
            </div>
        </>
    )
}

export default IdealConditions;
