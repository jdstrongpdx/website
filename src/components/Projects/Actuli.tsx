import React from "react";
import Project from "../Project";
import projectData from "../../data/projectData";

function Actuli() {
    return (
        <>
            <Project
                project={projectData.Actuli}
                childrenBefore={<ChildrenBefore/>}
                childrenAfter={<ChildrenAfter/>}
            >
            </Project>
        </>
    )
}

const ChildrenBefore = () => {
    return (
        <>
            <article>
                <h4>Backend</h4>
                <p>Building a scalable RESTful API using:</p>
                <ul>
                    <li>C#, .NET, ASP.NET Core</li>
                    <li>Microsoft Identity for authentication and authorization</li>
                    <li>Entity Framework for database interactions</li>
                    <li>Cosmos DB for scalable, distributed NoSQL database solutions</li>
                </ul>

                <h4>Frontend</h4>
                <p>Developing a cross-platform app for iOS, Android, and web using:</p>
                <ul>
                    <li>React-Native and TypeScript for a single codebase and strong type-checking</li>
                    <li>MSAL for authentication with Microsoft services</li>
                    <li>Axios for smooth API communication</li>
                    <li>Jest for robust testing</li>
                </ul>

                <h4>AI Development</h4>
                <p>Integrating intelligent and context-aware goal setting features with the power of Azure OpenAI
                    Service.</p>

                <h4>Cloud & DevOps</h4>
                <p>Automating deployments and scaling with modern tools:</p>
                <ul>
                    <li>CI/CD pipelines using GitHub Actions and Azure DevOps Pipelines</li>
                    <li>Azure App Engine for deploying scalable cloud applications</li>
                    <li>Cosmos DB for handling distributed cloud-based storage</li>
                </ul>

                <h4>Testing</h4>
                <p>Ensuring robust code quality through:</p>
                <ul>
                    <li>Integrated pipeline test builds</li>
                    <li>Over 80% backend code coverage</li>
                    <li>Unit, integration, and functional testing</li>
                </ul>

                <h4>Agile</h4>
                <p>Managing the project execution with structured Agile workflows:</p>
                <ul>
                    <li>Organizing sprints, user stories, and epics using Azure DevOps Boards</li>
                    <li>Ensuring efficient collaboration and tracking of progress</li>
                </ul>
            </article>

        </>
    )
}

const ChildrenAfter = () => {
    return null
}


export default Actuli;
