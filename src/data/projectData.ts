import IProjectData from "../interfaces/IProject";
import ProjectEnum from "../enums/ProjectEnum";
import SkillsEnum from "../enums/SkillEnum";

type ProductDataMap = {
    [key: string]: IProjectData;
};

const projectData: ProductDataMap = {
    UM: {
        title: "Azure DevOps UserManager",
        image: "/images/UM/project.png",
        imageDisplay: true,
        data: null,
        route: "/portfolio/usermanager",
        project: ProjectEnum.UserManager,
        name: "UserManager API with Testing and Azure DevOps CI/CD",
        date: "December 2024 - Current",
        type: "API Backend with Testing and CI/CD",
        description: "Creation of a RESTful API backend using .NET and ASP.NET Core, Azure CosmosDB, Azure DevOps and testing using NUnit, Moq, and DevOps Test Plans.",
        stack: {
            frontend: null,
            database: "Azure CosmosDB",
            backend: ".NET and ASP.NET Core, Azure CosmosDB, NUnit and Moq",
            hosting: "Azure Services and Azure DevOps"
        },
        website: null,
        websiteText: null,
        repo: "https://dev.azure.com/actuli/UserManager",
        skills: [SkillsEnum.AspNet, SkillsEnum.Azure, SkillsEnum.CSharp, SkillsEnum.NoSQL, SkillsEnum.Architecture, SkillsEnum.DotNet, SkillsEnum.Testing, SkillsEnum.Agile, SkillsEnum.Git, SkillsEnum.Algorithms]
    },
    FFR: {
        title: "FragranceFreeResources.com",
        image: "/images/FFR/home.png",
        imageDisplay: true,
        data: null,
        route: "/portfolio/fragrancefreeresources",
        project: ProjectEnum.FFR,
        name: "FragranceFreeResources.com Full Stack Web Application",
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
        skills: [SkillsEnum.Git, SkillsEnum.Debugging, SkillsEnum.Docker, SkillsEnum.Algorithms, SkillsEnum.Agile, SkillsEnum.Architecture, SkillsEnum.OOP, SkillsEnum.UxUi, SkillsEnum.Testing, SkillsEnum.AWS, SkillsEnum.CSS, SkillsEnum.SpringBoot, SkillsEnum.HTML, SkillsEnum.SQL, SkillsEnum.React, SkillsEnum.TypeScript, SkillsEnum.Java, SkillsEnum.NodeJs]
    },
    LL: {
        title: "Little Lemon",
        image: "/images/LL/desktopThumb.png",
        imageDisplay: true,
        data: [["Figma:", "Development of a Persona, Journey Map, Wireframe, and Prototype"]],
        route: "/portfolio/littlelemon",
        project: ProjectEnum.LL,
        name: "Little Lemon UX/UI design and React implementation",
        date: "November 2024",
        type: "Frontend Design & Implementation",
        description: "This project was part of the Meta Front-End Developer Professional Certification and had the following objectives:",
        stack: {
            frontend: "React, JavaScript, HTML, CSS.",
            database: null,
            backend: null,
            hosting: null,
        },
        website: null,
        websiteText: null,
        repo: "https://github.com/jdstrongpdx/Meta-Front-End-Developer-Capstone",
        skills: [SkillsEnum.Git, SkillsEnum.UxUi, SkillsEnum.HTML, SkillsEnum.React, SkillsEnum.JavaScript, SkillsEnum.NodeJs, SkillsEnum.CSS, SkillsEnum.Algorithms]

    },
    Website:
        {
            title: "jdstrongpdx.com",
            image: "/images/Website/website.png",
            imageDisplay: true,
            data: null,
            route: "/portfolio/jdstrongpdx",
            project: ProjectEnum.Website,
            name: "Personal Website",
            date: "December 2023 - Current",
            type: "React Website",
            description: "Creation of a Personal Website to showcase my projects and skills. Built with React, TypeScript, HTML and CSS using reusable components, components generated from data, and routing.",
            stack: {
                frontend: "React, TypeScript, HTML, CSS.",
                database: null,
                backend: null,
                hosting: "AWS Amplify with automatic deployment with commit to Main.",
            },
            website: null,
            websiteText: null,
            repo: "https://github.com/jdstrongpdx/website",
            skills: [SkillsEnum.Git, SkillsEnum.Debugging, SkillsEnum.UxUi, SkillsEnum.AWS, SkillsEnum.CSS, SkillsEnum.HTML, SkillsEnum.React, SkillsEnum.TypeScript, SkillsEnum.NodeJs, SkillsEnum.Algorithms]

        },
    MLB: {
        title: "ML-Breakout",
        image: "/images/MLB/webGl.png",
        imageDisplay: false,
        data:
            [["Game Development:", "Created an Atari Breakout game clone in Unity, C++"],
                ["Model Development:", "Used ML-Agents Toolkit to reward, penalize, and train a Machine Learning Model to play the game."],
            ],
        route: "/portfolio/mlbreakout",
        project: ProjectEnum.MLB,
        name: "ML-Breakout",
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
        skills: [SkillsEnum.Git, SkillsEnum.Debugging, SkillsEnum.Agile, SkillsEnum.OOP, SkillsEnum.AI, SkillsEnum.Architecture, SkillsEnum.Algorithms, SkillsEnum.CSharp, SkillsEnum.UxUi]
    }
    ,
    GCP: {
        title: "GCP RESTful API",
        image: "/images/GCP/datastore.png",
        imageDisplay: true,
        data: null,
        route: "/portfolio/gcpapi",
        project: ProjectEnum.GCP,
        name: "Google Cloud Platform RESTful API backend using Python/Flask, Datastore, Storage",
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
        skills: [SkillsEnum.Git, SkillsEnum.Debugging, SkillsEnum.Testing, SkillsEnum.GCP, SkillsEnum.NoSQL, SkillsEnum.Python, SkillsEnum.Docker, SkillsEnum.Algorithms]
    }
    ,
    IC: {
        title: "Ideal Conditions",
        image:
            "/images/IC/home.png",
        imageDisplay: true,
        data: null,
        route:
            "/portfolio/idealconditions",
        project: ProjectEnum.IC,
        name: "Ideal Conditions Full Stack Web Application",
        date: "September 2023",
        type: "Full Stack Serverless Web Application",
        description: "A application that takes in a Location string, uses an serverless microservice to return time windows when the weather conditions are ideal for ten popular outdoor activities.",
        stack: {
            frontend: "Uses React, JavaScript, HTML, CSS, Axios.",
            database: null,
            backend: "Uses an AWS Lambda Function running Python. Uses an AWS API Gateway with Proxy Integration to inject the request into the Lambda function and return the response.",
            hosting: "The backend is served AWS Lambda/API Gateway and the frontend is served by an AWS Amplify app."
        },
        website: null,
        websiteText: null,
        repo: "https://github.com/jdstrongpdx/IdealConditionsWebApp",
        skills: [SkillsEnum.Git, SkillsEnum.Debugging, SkillsEnum.AWS, SkillsEnum.Python, SkillsEnum.OOP, SkillsEnum.CSS, SkillsEnum.HTML, SkillsEnum.React, SkillsEnum.NodeJs, SkillsEnum.JavaScript, SkillsEnum.Algorithms]
    },
    NetworkMonitor: {
        title: "Network Monitor",
        image:
            "/images/NetworkMonitor/monitor.png",
        imageDisplay: true,
        data: null,
        route:
            "/portfolio/networkmonitor",
        project: ProjectEnum.NetworkMonitor,
        name: "Python Server/Client Networking Monitor using TCP/IP",
        date: "March 2024",
        type: "Multi-Threaded Python Desktop Application",
        description: "Developed a multi-threaded object-oriented Python application utilizing TCP/IP Server/Client communication. Allows a remote client to configure of a wide range of network tests, transmit the tests to a server to perform, and ensures the reliable delivery and reconnection of results back to the client.",
        stack: null,
        website: null,
        websiteText: null,
        repo: "https://github.com/jdstrongpdx/NetworkMonitor",
        skills: [SkillsEnum.Git, SkillsEnum.Debugging, SkillsEnum.Architecture, SkillsEnum.Python, SkillsEnum.OOP, SkillsEnum.Algorithms]
    }
    ,
    Blockchain: {
        title: "Blockchain",
        image:
            "/images/Blockchain/load.png",
        imageDisplay: true,
        data: null,
        route:
            "/portfolio/blockchain",
        project: ProjectEnum.Blockchain,
        name: "Java Multi-threaded Blockchain App",
        date: "August 2023",
        type: "Multi-threaded Desktop Java Application",
        description: "Creation of a Blockchain message/transaction service including Block generation, messaging/transactions, mining, and validation.",
        stack: null,
        website: null,
        websiteText: null,
        repo: "https://github.com/jdstrongpdx/Blockchain-Java-App",
        skills: [SkillsEnum.Git, SkillsEnum.Debugging, SkillsEnum.Java, SkillsEnum.OOP, SkillsEnum.Architecture, SkillsEnum.Algorithms]
    }
}

export default projectData;
