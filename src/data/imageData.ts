import IImageData from "../interfaces/IImageData";
import ProjectEnum from "../enums/ProjectEnum";

const imageData: IImageData[] = [
    {
        src: 'images/Actuli/home.png',
        description: 'Actuli logo and introduction.',
        project: ProjectEnum.Actuli,
    }, {
        src: 'images/Actuli/actuliHome.png',
        description: 'Actuli Home Page with MSAL Login, Light/Dark Mode, and Navigation.',
        project: ProjectEnum.Actuli,
    }, {
        src: 'images/Actuli/contactEdit.png',
        description: 'Actuli Multi-Step Form with Validation.',
        project: ProjectEnum.Actuli,
    }, {
        src: 'images/LLMobile/profile.png',
        description: 'Mobile profile screen with validation and asyncStorage for user data.  Logout clears all data.',
        project: ProjectEnum.LLMobile,
    }, {
        src: 'images/LLMobile/menu.png',
        description: 'Menu data loaded from the backend and is saved locally in SQLite database.',
        project: ProjectEnum.LLMobile,
    }, {
        src: 'images/LLMobile/filteredMenu.png',
        description: 'Menu filtering by text and/or category using filtering SQLite SQL statements.',
        project: ProjectEnum.LLMobile,
    }, {
        src: 'images/UM/project.png',
        description: 'UserManager Project using Azure DevOps',
        project: ProjectEnum.UserManager,
    }, {
        src: 'images/UM/files.png',
        description: 'Nested Web and Web.Tests Project Structure using VS Code',
        project: ProjectEnum.UserManager,
    },
    {
        src: 'images/UM/pipeline.png',
        description: 'Creation of a Pipeline build using self-hosted macOS agent for builds',
        project: ProjectEnum.UserManager,
    }, {
        src: 'images/UM/testsCompleted.png',
        description: 'Unit and Integration CI build tests in Azure DevOps',
        project: ProjectEnum.UserManager,
    }, {
        src: 'images/UM/codeCoverage.png',
        description: 'Code Coverage integration in Azure DevOps',
        project: ProjectEnum.UserManager,
    }, {
        src: 'images/UM/openApi.png',
        description: 'Swagger/Swashbuckle integration for Open API documentation.',
        project: ProjectEnum.UserManager,
    }, {
        src: 'images/UM/projectPlan.png',
        description: 'Using Boards to create and manage the project plan and Sprint activity.',
        project: ProjectEnum.UserManager,
    }, {
        src: 'images/UM/resourceWiki.png',
        description: 'Creation of a Learning Resource Wiki page to easily access documentation and resources.',
        project: ProjectEnum.UserManager,
    }, {
        src: 'images/FFR/home.png',
        description: 'Fragrance Free Resources Home Page (Admin View)',
        project: ProjectEnum.FFR,
    }, {
        src: 'images/FFR/visitorView.png',
        description: 'Visitor view of a Product from FragranceFreeResources.com',
        project: ProjectEnum.FFR,
    }, {
        src: 'images/FFR/adminView.png',
        description: 'Administrator view of a Product with an active Review modal.',
        project: ProjectEnum.FFR,
    }, {
        src: 'images/FFR/endpoints.png',
        description: 'Spring Boot API endpoints for the FragranceFreeResources web application backend.',
        project: ProjectEnum.FFR,
    }, {
        src: 'images/FFR/schema.png',
        description: 'MySql schema created by Spring Boot JPA ODM',
        project: ProjectEnum.FFR,
    }, {
        src: 'images/FFR/security.png',
        description: 'Spring Security configuration for the FragranceFreeResources endpoints.',
        project: ProjectEnum.FFR,
    }, {
        src: 'images/FFR/lighthouse.png',
        description: 'Google Lighthouse analysis for performance and accessibility of the FragranceFreeResources website.',
        project: ProjectEnum.FFR,
    }, {
        src: 'images/LL/persona.png',
        description: 'Persona created in Figma',
        project: ProjectEnum.LL,
    }, {
        src: 'images/LL/journeyMap.png',
        description: 'Journey Map created in Figma',
        project: ProjectEnum.LL,
    }, {
        src: 'images/LL/wireframe.png',
        description: 'Wireframe prototype created in Figma',
        project: ProjectEnum.LL,
    }, {

        src: 'images/LL/styleGuide.png',
        description: 'Style Guide provided by Meta for the creation of the Little Lemon Project',
        project: ProjectEnum.LL,
    }, {
        src: 'images/LL/mobile.png',
        description: 'Development of a multi-part mobile table reservation system using React using a styleguide',
        project: ProjectEnum.LL,
    }, {
        src: 'images/LL/desktop.png',
        description: 'Development of a highly stylized React website based on a provided styleguide and wireframe.',
        project: ProjectEnum.LL,
    }, {
        src: 'images/LL/prototype.png',
        description: 'Functional prototype created in Figma',
        project: ProjectEnum.LL,
    }, {
        src: 'images/Website/website.png',
        description: 'React Personal Website to demonstrate my projects and skills.',
        project: ProjectEnum.Website,
    }, {
        src: 'images/Website/collapsed.png',
        description: 'Dynamically collapsed website view for mobile devices..',
        project: ProjectEnum.Website,
    }, {
        src: 'images/Website/projectData.png',
        description: 'Using objects to store data used to generate components throughout the website.',
        project: ProjectEnum.Website,
    }, {
        src: 'images/Website/projectCard.png',
        description: 'Dynamically generating Card content based on project data.',
        project: ProjectEnum.Website,
    }, {
        src: 'images/Website/card.png',
        description: 'Example Card generated by the ProjectCard component from the project data.',
        project: ProjectEnum.Website,
    }, {
        src: 'images/Website/projectComponent.png',
        description: 'Use of props data and children to generate project the detail page.',
        project: ProjectEnum.Website,
    }, {
        src: 'images/MLB/cover.png',
        description: 'Recreation of an Atari Breakout Game using Unity and Machine Learning to compete against.',
        project: ProjectEnum.MLB,
    }, {
        src: 'images/MLB/webGl.png',
        description: 'WebGL deployment of a Unity Atari Breakout clone and Machine Learned model development to play the game.',
        project: ProjectEnum.MLB,
    }, {
        src: 'images/MLB/poster.png',
        description: 'Oregon State University Showcase Poster for ML-Breakout Project.',
        project: ProjectEnum.MLB,
    }, {
        src: 'images/MLB/github.png',
        description: 'ML-Breakout repository using CI/CD and Pull Requests for code review and testing.',
        project: ProjectEnum.MLB,
    }, {
        src: 'images/GCP/flask.png',
        description: 'Flask/Python code for a Backend API endpoint using Auth hosted on GCP AppEngine.',
        project: ProjectEnum.GCP,
    }, {
        src: 'images/GCP/auth.png',
        description: 'Using Newman CLI to test user authentication and privileges using JWT and a Spring Security API.',
        project: ProjectEnum.GCP,
    }, {
        src: 'images/GCP/dockerNewman.png',
        description: 'Testing a Dockerized Python/Flask API app using Postman Collections before deploying to GCP.',
        project: ProjectEnum.GCP,
    }, {
        src: 'images/GCP/datastore.png',
        description: 'Using GCP Datastore to store user data.',
        project: ProjectEnum.GCP,
    }, {
        src: 'images/NetworkMonitor/monitor.png',
        description: 'Server(left) and Client(right) network traffic monitor using Python',
        project: ProjectEnum.NetworkMonitor,
    }, {
        src: 'images/NetworkMonitor/server.png',
        description: 'Server view showing the server status, received configurations, and async tests returned to the client.',
        project: ProjectEnum.NetworkMonitor,
    }, {
        src: 'images/NetworkMonitor/client.png',
        description: 'Client view showing the client status, configurations, and received test results processed by the server.',
        project: ProjectEnum.NetworkMonitor,
    }, {
        src: 'images/IC/home.png',
        description: 'Ideal Conditions App Home Banner.',
        project: ProjectEnum.IC,
    }, {
        src: 'images/IC/page.png',
        description: 'Ideal Conditions form and search results.',
        project: ProjectEnum.IC,
    }, {
        src: 'images/IC/jsonReturn.png',
        description: 'JSON return from the AWS Lambda function after fetch.',
        project: ProjectEnum.IC,
    }, {
        src: 'images/IC/lambda.png',
        description: 'Python code running in an AWS Lambda function to fetch data from the OpenWeatherMap API.',
        project: ProjectEnum.IC,
    }, {
        src: 'images/Blockchain/code.png',
        description: 'Multi-threaded Java Blockchain creator & miner',
        project: ProjectEnum.Blockchain,
    }, {
        src: 'images/Blockchain/load.png',
        description: 'Ten core processor mining 9 threads for Java Blockchain app.',
        project: ProjectEnum.Blockchain,
    }, {
        src: 'images/Blockchain/example.png',
        description: 'Example of a completed Blockchain transactions and mining.',
        project: ProjectEnum.Blockchain,
    }, {
        src: 'images/Gallery/matplot.png',
        description: 'Using wrappers in Python and Matplotlib to compare sorting algorithms.',
        project: ProjectEnum.Gallery,
    }, {
        src: 'images/IC/lambda.png',
        description: 'Programming an API Endpoint using AWS Lambda API Gateway in Python.',
        project: ProjectEnum.Gallery,
    }, {
        src: 'images/Gallery/snippets.png',
        description: 'Using SnippetsLab to save code snippets or prior work to quickly find function examples.',
        project: ProjectEnum.Gallery,
    }, {
        src: 'images/Gallery/desk.png',
        description: 'Using an ergonomic programmable split keyboard to increase productivity and ergonomics.',
        project: ProjectEnum.Gallery,
    }, {
        src: 'images/Gallery/books.png',
        description: 'A selection of programming books.',
        project: ProjectEnum.Gallery,
    }, {
        src: 'images/Gallery/inductiveProof.jpg',
        description: 'Detailed and organized work - Proof by induction example.',
        project: ProjectEnum.Gallery,
    }
]

export default imageData;
