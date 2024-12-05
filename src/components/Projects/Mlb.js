import React from "react";
import Project from "../Project";

const project = {
    name: "ML-Breakout",
    abbreviation: null,
    date: "June 2024 - August 2024",
    type: "Unity Game Development and Machine Learning Model Training",
    description: "Development of an Atari Breakout game clone and train a neural network with reinforcement learning using Unity ML-Agents to play the game. This project was a Capstone group project for the Oregon State Computer Science Bachelors degree and developed over 8 weeks during Summer 2024.",
    stack: {
        frontend: "Unity and ML-Agents",
        database: null,
        backend: null,
        hosting: "Unity Play using a WebGL Deployment"
    },
    website: "https://play.unity.com/en/games/29073861-10a0-4027-839c-303f0eb8d8ac/ml-breakout",
    websiteText: "ML-Breakout on Unity Play",
    repo: "https://github.com/ReuterJo/ML-Breakout",
}

const ChildrenBefore = () => {
    return (
        <>
            <h4>Project Poster:</h4>
            <div className="centered">
                <img width="2200px" alt="OSU Project Poster" src="/images/MLB/poster.png"/>
            </div>

            <h4>Playable Example (click to play):</h4>
            <div className="centered">
                <a href="https://play.unity.com/en/games/29073861-10a0-4027-839c-303f0eb8d8ac/ml-breakout"
                   target="_blank" rel="noopener noreferrer">
                    <img width="1200px" alt="Playable Unity Game" src="/images/MLB/webGl.png"/>
                </a>
            </div>

            <h4>Project Development Overview Video (8 minutes):</h4>
            <div className="video">
                <iframe src="https://www.youtube-nocookie.com/embed/rb-hE1FlDYA?si=tRR2oPOp38vatDt8"
                        title="ML-Breakout Project Overview"
                        width="100%"
                        height="600"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                ></iframe>
            </div>

            <h4>Development Environment</h4>
            <ul>
                <li>Unity for Game Development and Deployment (coding in C#)</li>
                <li>Non-integrated GitHub with CI/CD for Shared Repository</li>
                <li>Trello Kanban board for managing Tasks, Deadlines, and Issues</li>
                <li>Bi-Weekly Team Meetings on Camera</li>
            </ul>

            <h4>Git Repository (click to open):</h4>
            <div className="centered">
                <a href="https://github.com/ReuterJo/ML-Breakout" target="_blank" rel="noopener noreferrer">
                    <img width="1200px" alt="GitHub Repository" src="/images/MLB/github.png"/>
                </a>
            </div>
        </>
    )
}

function Mlb() {
    return (
        <>
            <Project project={project} childrenBefore={<ChildrenBefore/>}/>
        </>
    )
}

export default Mlb;
