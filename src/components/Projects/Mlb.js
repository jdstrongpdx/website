import React from "react";

function Mlb() {
    return (
        <>
            <div className="project">
                <h3>ML-Breakout</h3>
                <h4>June 2024 - August 2024</h4>

                <p><strong>App Type:</strong>Unity Game Development and Machine Learning Model Training</p>
                <p><strong>Description:</strong> Development of an Atari Breakout game clone and train a neural network
                    with reinforcement learning using Unity ML-Agents to play the game. This project was a Capstone
                    group project for the Oregon State Computer Science Bachelors degree and developed over 8 weeks
                    during Summer 2024.</p>
                <ul>
                    <li><em>Framework: </em>Unity and ML-Agents</li>
                    <li><em>Deployments: </em>Desktop MacOS Application and Hosted WebGL Version</li>
                    <li><em>Hosting: </em> Unity Play using a WebGL Deployment</li>
                </ul>

                <p><strong>Project Poster and Description (click to open as a PDF):</strong></p>
                <div className="centered">
                    <a href="/images/MLB-Poster.pdf" target="_blank" rel="noopener noreferrer">
                        <img width="1200px" alt="OSU Project Poster" src="/images/MLB-Poster.png"/>
                    </a>
                </div>

                <p><strong>Playable Example (click to play):</strong></p>
                <div className="centered">
                    <a href="https://play.unity.com/en/games/29073861-10a0-4027-839c-303f0eb8d8ac/ml-breakout"
                       target="_blank" rel="noopener noreferrer">
                        <img width="1200px" alt="Playable Unity Game" src="/images/MLB-WebGL.png"/>
                    </a>
                </div>

                <p><strong>Project Development Overview Video (8 minutes):</strong></p>
                <div className="video">
                    <iframe src="https://www.youtube.com/embed/rb-hE1FlDYA?si=0J_4DSOEOixOWqA4"
                            title="ML-Breakout Project Overview"
                            width="100%"
                            height="600"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                    ></iframe>
                </div>

                <p><strong>Development Environment</strong></p>
                <ul>
                    <li>Unity for Game Development and Deployment (coding in C#)</li>
                    <li>Non-integrated GitHub with CI/CD for Shared Repository</li>
                    <li>Trello Kanban board for managing Tasks, Deadlines, and Issues</li>
                    <li>Bi-Weekly Team Meetings on Camera</li>
                </ul>

                <p><strong>Git Repository (click to open):</strong></p>
                <div className="centered">
                    <a href="https://github.com/ReuterJo/ML-Breakout" target="_blank" rel="noopener noreferrer">
                        <img width="1200px" alt="GitHub Repository" src="/images/MLB-GitHub.png"/>
                    </a>
                </div>
                <a href="#top">Back to top</a>
            </div>
        </>
    )
}

export default Mlb;