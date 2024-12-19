import React from "react";
import Project from "../Project";
import projectData from "../../data/projectData";

function UserManager() {
    return (
        <>
            <Project
                project={projectData.UM}
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
            <h3>Overview</h3>
            <p>The UserManager API is a RESTful web service designed to record and manage user data, ensuring robust functionality through comprehensive unit and integration testing. It integrates seamlessly with Azure DevOps for efficient project management, version control, continuous integration, and quality assurance processes.</p>

                                                 <div>

                                                 <h3>Features</h3>
                                                 <ul>
                                                 <li>
                                                 <strong>RESTful API:</strong> Records user information using standard HTTP methods (GET,
                                                 POST, PUT, DELETE).{' '}
        </li>
    <li>
        <strong>Unit Tests:</strong> Thoroughly tests individual methods and components to ensure
        code correctness.
    </li>
    <li>
        <strong>Integration Tests:</strong> Verifies the interaction between different parts of
        the API and external services.
    </li>
    <li>
        <strong>Azure DevOps Integration:</strong> Leverages Azure DevOps for project management,
        version control, build automation, and test management.
    </li>
    <li>
        <strong>macOS Build Agent:</strong> Uses a self-hosted macOS agent for continuous
        integration and build processes.
    </li>
    <li>
        <strong>Comprehensive Test Plan:</strong> A detailed Test Plan in Azure DevOps ensures
        complete test coverage and quality assurance.
    </li>
</ul>

    <h3>Azure DevOps Integration</h3>
    <p>This project utilizes several Azure DevOps services:</p>
    <ul>
        <li>
            <strong>Boards:</strong> For managing project tasks, user stories, and sprint planning.
        </li>
        <li>
            <strong>Repos:</strong> Git repository for version control and collaboration.
        </li>
        <li>
            <strong>Pipelines:</strong> Automated build and release pipelines, including CI using a
            self-hosted macOS agent.
        </li>
        <li>
            <strong>Test Plans:</strong> Manages and executes test cases, tracks results, and
            integrates with build pipelines.
        </li>
    </ul>

    <h3>Build Process</h3>
    <p>The CI pipeline performs the following steps:</p>
    <ul>
        <li>
            <strong>Restore dependencies:</strong> Restores all required NuGet packages.
        </li>
        <li>
            <strong>Build the project:</strong> Compiles the API code.
        </li>
        <li>
            <strong>Run tests:</strong> Executes unit and integration tests and publishes results to Azure
            DevOps.
        </li>
    </ul>

    <h3>Test Plan</h3>
    <p>The Test Plan in Azure DevOps covers the following areas:</p>
    <ul>
        <li>
            <strong>API Endpoints:</strong> Verifies the functionality of each API endpoint.
        </li>
        <li>
            <strong>Data Validation:</strong> Ensures data integrity and input validation.
        </li>
        <li>
            <strong>Error Handling:</strong> Tests error handling and exception scenarios.
        </li>
    </ul>
</div>

        </>
    )
}

const ChildrenAfter = () => {
    return null
}



export default UserManager;
