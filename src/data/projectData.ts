import IProjectData from "../interfaces/IProject";

type ProductDataMap = {
    [key: string]: IProjectData;
};

const projectData: ProductDataMap = {
    FFR: {
        title: "FragranceFreeResources.com",
        image: "/images/FFR/home.png",
        data: null,
        route: "/portfolio/fragrancefreeresources",
        name: "FragranceFreeResources.com Full Stack Web Application",
        abbreviation: "FFR",
        date: "April 2024 - Current",
        type: "Full Stack Single Page Web Application",
        description: "A Full Stack web application that allows people that are sensitive to fragrances to share resources on Businesses, Products, and Rental Homes that are safe environments.",
        stack: {
            frontend: "React/Typescript using axios, react-bootstrap, and react-touch.",
            database: "MySql running on AWS Lightsail RDS",
            backend: "Dockerized Java/Spring Boot container using Spring Web, Data JPA, Security, WebMVC, Test, and Actuator.",
            hosting: "The backend is deployed to a AWS Lightsail container instance and the frontend is served by an AWS Amplify."
        },
        website: "https://fragrancefreeresources.com",
        websiteText: "FragranceFreeResources.com",
        repo: null,
    },
    LL: {
        title: "Little Lemon",
        image: "/images/LL/desktopThumb.png",
        data: [["Figma:", "Development of a Persona, Journey Map, Wireframe, and Prototype"]],
        route: "/portfolio/littlelemon",
        name: "Little Lemon UX/UI design and React implementation",
        abbreviation: "LL",
        date: "November 2024",
        type: "Frontend Design & Implementation",
        description: "This project was part of the Meta Front-End Developer Professional Certification and had the following objectives:",
        stack: null,
        website: null,
        websiteText: null,
        repo: "https://github.com/jdstrongpdx/Meta-Front-End-Developer-Capstone",
    },
    Website:
        {
            title: "jdstrongpdx.com",
            image:
                "/images/Website/website.png",
            data: null,
            route:
                "/portfolio/jdstrongpdx",
            name: "Personal Website",
            abbreviation: "Website",
            date: "December 2023 - Current",
            type: "React Website",
            description: "Creation of a Personal Website to showcase my projects and skills. Built with React using reusable components, components generated from data, and routing.",
            stack: {
                frontend: "React, JavaScript, CSS, HTML.",
                database: null,
                backend: null,
                hosting: "AWS Amplify with automatic deployment with commit to Main.",
            },
            website: null,
            websiteText: null,
            repo: "https://github.com/jdstrongpdx/website",
        },
    MLB: {
        title: "ML-Breakout",
        image:
            "/images/MLB/webGl.png",
        data:
            [["Game Development:", "Created an Atari Breakout game clone in Unity, C++"],
                ["Model Development:", "Used ML-Agents Toolkit to reward, penalize, and train a Machine Learning Model to play the game."],
            ],
        route:
            "/portfolio/mlbreakout",
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
    ,
    GCP: {
        title: "GCP RESTful API",
        image:
            "/images/GCP/datastore.png",
        data: null,
        route:
            "/portfolio/gcpapi",
        name: "Google Cloud Platform RESTful API backend using Python/Flask, Datastore, Storage",
        abbreviation: "GCP",
        date: "May 2024",
        type: "RESTful API Backend",
        description: "Created a Role Based Auth secured backend using Auth0 and Flask, NoSQL persistence using GCP Datastore, and Avatar image handling using GCP Storage",
        stack: {
            frontend: null,
            database: "GCP No-SQL Datastore",
            backend: "Python/Flask RESTful API using Auth0, GCP Datastore, and GCP Storage",
            hosting: "GCP AppRunner, Datastore, Storage and Auth0"
        },
        website: null,
        websiteText: null,
        repo: null,
    }
    ,
    IC: {
        title: "Ideal Conditions",
        image:
            "/images/IC/home.png",
        data: null,
        route:
            "/portfolio/idealconditions",
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
    },
    NetworkMonitor: {
        title: "Network Monitor",
        image:
            "/images/NetworkMonitor/monitor.png",
        data: null,
        route:
            "/portfolio/networkmonitor",
        name: "Python Server/Client Networking Monitor using TCP/IP",
        abbreviation: "NetworkMonitor",
        date: "March 2024",
        type: "Multi-Threaded Python Desktop Application",
        description: "Developed a multi-threaded object-oriented Python application utilizing TCP/IP Server/Client communication. Allows a remote client to configure of a wide range of network tests, transmit the tests to a server to perform, and ensures the reliable delivery and reconnection of results back to the client.",
        stack: null,
        website: null,
        websiteText: null,
        repo: "https://github.com/jdstrongpdx/NetworkMonitor",
    }
    ,
    Blockchain: {
        title: "Blockchain",
        image:
            "/images/Blockchain/load.png",
        data: null,
        route:
            "/portfolio/blockchain",
        name: "Java Multi-threaded Blockchain App",
        abbreviation: "Blockchain",
        date: "August 2023",
        type: "Multi-threaded Desktop Java Application",
        description: "Creation of a Blockchain message/transaction service including Block generation, messaging/transactions, mining, and validation.",
        stack: null,
        website: null,
        websiteText: null,
        repo: "https://github.com/jdstrongpdx/Blockchain-Java-App",
    }
}

export default projectData;
