import ISkillLanguage from "../interfaces/ISkillLanguage";
import SkillsEnum from "../enums/SkillEnum";
import ProficiencyEnum from "../enums/ProficiencyEnum";

interface ISkillData {
    title: string;
    items: ISkillLanguage[];
}

interface ISkillDataList {
    items: ISkillData[];
}

const skillsData: ISkillDataList = {
    items: [
        {
            title: "Languages",
            items: [
                {
                    title: "C#",
                    image: "/logos/cSharp.png",
                    description: "Developing console, Unity and API applications using in OOP, generics, collections, asynchronous programming, exception handling, Entity Framework, and testing with NUnit and Moq.",
                    skill: SkillsEnum.CSharp,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Python",
                    image: "/logos/python.png",
                    description: "Building applications using OOP, file manipulation, database operations, networking, multi-threading, collections, wrappers, generators, and library integrations.",
                    skill: SkillsEnum.Python,
                    proficiency: ProficiencyEnum.Advanced,
                },
                {
                    title: "Java",
                    image: "/logos/java.png",
                    description: "Building applications using OOP, file manipulation, high and low level database operations, collections, streams, multi-threading, networking, serialization, and generics.",
                    skill: SkillsEnum.Java,
                    proficiency: ProficiencyEnum.Advanced,
                },
                {
                    title: "JavaScript",
                    image: "/logos/javascript.png",
                    description: "Using functional and OOP paradigms, data transformation, asynchronous programming, events, error handling, ES6+ syntax, and debugging.",
                    skill: SkillsEnum.JavaScript,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "TypeScript",
                    image: "/logos/typescript.png",
                    description: "Building React websites using interfaces, enums, generics, assertions, optional/nullish types, and advanced error handling.",
                    skill: SkillsEnum.TypeScript,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "HTML",
                    image: "/logos/html.png",
                    description: "Creating accessible web pages using semantic HTML elements, building complex forms with validation, implementing responsive elements, and SEO optimization.",
                    skill: SkillsEnum.HTML,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "CSS",
                    image: "/logos/css.png",
                    description: "Building highly stylized reactive websites. Experience using global CSS, inline CSS, Bootstrap and other styling tools.",
                    skill: SkillsEnum.CSS,
                    proficiency: ProficiencyEnum.Intermediate,
                },
            ],
        },
        {
            title: "Databases",
            items: [
                {
                    title: "SQL",
                    image: "/logos/sql.png",
                    description: "Designing, integrating, and maintaining SQL databases on local and hosted services. Performing data retrieval, manipulation, aggregation, transactions, stored procedures, and optimization.",
                    skill: SkillsEnum.SQL,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "NoSQL",
                    image: "/logos/noSql.png",
                    description: "Developing and implementing data, partitioning, indexing, and replication strategies for NoSQL databases. Understanding of using metrics to monitor and optimize NoSQL queries and databases. Completed Microsoft DP-420 Azure Cosmos DB training.",
                    skill: SkillsEnum.NoSQL,
                    proficiency: ProficiencyEnum.Intermediate,
                },
            ],
        },
        {
            title: "Frameworks",
            items: [
                {
                    title: "Node.js",
                    image: "/logos/node-js.png",
                    description: "Building full stack web applications utilizing a MERN (Mongoose NoSql, Express, React, and Node.js) stack. Used Express for RESTful API development, middleware for request handling, Mongoose for MongoDB interactions, JWT for authentication, and asynchronous operations.",
                    skill: SkillsEnum.NodeJs,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "React",
                    image: "/logos/react.png",
                    description: "Building dynamic data-driven Progressive Web Applications using advanced component architecture, state management, testing with Jest and React-Testing library, and packages like Lodash, Immer, Formik, Yup, and others.",
                    skill: SkillsEnum.React,
                    proficiency: ProficiencyEnum.Advanced,
                },
                {
                    title: ".NET",
                    image: "/logos/net.png",
                    description: "Developing backend API applications leveraging ASP.NET Core, Entity Framework, dependency injection, middleware, asynchronous programming, and testing with NUnit and Moq.",
                    skill: SkillsEnum.DotNet,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "ASP.NET",
                    image: "/logos/asp.png",
                    description: "Building ackend API applications utilizing MVC architecture, middleware (logging, error handling, routing, authentication and authorization), Entity Framework, dependency injection, and testing with NUnit and Moq.",
                    skill: SkillsEnum.AspNet,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "SpringBoot",
                    image: "/logos/springboot.png",
                    description: "Using Spring Web, JPA, Security, MVC, Jackson, Validation, JUnit, Actuator, Model-Mapper modules with Gradle/Maven to build and deploy web applications.",
                    skill: SkillsEnum.SpringBoot,
                    proficiency: ProficiencyEnum.Intermediate,
                },
            ],
        },
        {
            title: "Cloud Services",
            items: [
                {
                    title: "Amazon Web Services",
                    image: "/logos/aws.png",
                    description: "Configuring and deploying web applications using AWS offerings: Amplify, Lambda, S3, RDS, Lightsail RDS, Lightsail Container, Route53, API Gateway, IAM.",
                    skill: SkillsEnum.AWS,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Azure Services",
                    image: "/logos/azure.png",
                    description: "Using Azure Services to deploy .NET, Cosmos DB and React applications using App Service, Azure Cosmos DB, and Web Apps. Microsoft AZ-900 Azure Fundamentals Certified.",
                    skill: SkillsEnum.Azure,
                    specialText: "AZ-900 Azure Fundamentals Certified",
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Azure DevOps",
                    image: "/logos/azureDevOps.png",
                    description: "Utilizing Azure DevOps Boards for Agile Project Management, Repos for Version Control, Pipelines for CI/CD workflows including Building, Testing, and Deploying, Test Plans for comprehensive test case management and execution, and Artifacts for secure and efficient dependency management.",
                    skill: SkillsEnum.AzureDevOps,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Google Cloud Platform",
                    image: "/logos/gcp.png",
                    description: "Configuring and deploying web applications using GCP offerings: App Engine, Firestore, CloudSQL, Compute Engine, Storage, Artifact Registry.",
                    skill: SkillsEnum.GCP,
                    proficiency: ProficiencyEnum.Intermediate,
                },
            ],
        },
        {
            title: "Skills",
            items: [
                {
                    title: "Artificial Intelligence",
                    image: "/logos/ai.png",
                    description: "Using AI as a development tool and using prompt engineering to create AI-powered applications.",
                    skill: SkillsEnum.AI,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Algorithms",
                    image: "/logos/algorithm.png",
                    description: "Using Arrays, Linked Lists, Sorting, Trees, Heaps, Hashing, Recursion. Using Neetcode.io to learn algorithm design. Using Leetcode to practice accurate and efficient implementations.",
                    skill: SkillsEnum.Algorithms,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "OOP",
                    image: "/logos/oop.png",
                    description: "Utilizing classes, methods, static elements, nesting, inheritance, abstract classes, interfaces, overriding/overloading, and usage.",
                    skill: SkillsEnum.OOP,
                    proficiency: ProficiencyEnum.Advanced,
                },
                {
                    title: "Architecture",
                    image: "/logos/architecture.png",
                    description: "Building programs with a SOLID architecture, using Creational, Behavioral, and Structural design patterns.",
                    skill: SkillsEnum.Architecture,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Debugging",
                    image: "/logos/debugging.png",
                    description: "Utilizing a variety of debuggers to see the state of objects/threads at key points to make actionable design decisions.",
                    skill: SkillsEnum.Debugging,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Git",
                    image: "/logos/git.png",
                    description: "Utilizing Git commands, Gitflow, Git Actions, pull requests, code reviews, branching, tagging, version control, workflows, and using local and remote repositories.",
                    skill: SkillsEnum.Git,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Testing",
                    image: "/logos/testing.png",
                    description: "Utilizing a layered testing approach integrating Unit Tests, Integration Testing, and End-to-End testing. Experience using a wide range of testing tools including unittest, PyTest, JUnit, NUnit, Jest, Postman/Newman, Spring Test, MockMVC, Moq and other tools.",
                    skill: SkillsEnum.Testing,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Agile",
                    image: "/logos/agile.png",
                    description: "Utilizing Agile methodologies including Scrum and Kanban for value-driven prioritization and sprint planning. Experience using task managers such as Jira, Trello, Azure DevOps Boards, and Asana.",
                    skill: SkillsEnum.Agile,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Docker",
                    image: "/logos/container.png",
                    description: "Creating and deploying Dockerized Flask/Python applications to Google Cloud Platform and Java/Spring Boot applications to Amazon Web Services.",
                    skill: SkillsEnum.Docker,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "UX/UI Design",
                    image: "/logos/ux_ui.png",
                    description: "Designing UX/UI designs in Figma using Personas, Journey Maps, Wireframes, and Prototypes.",
                    skill: SkillsEnum.UxUi,
                    proficiency: ProficiencyEnum.Basic,
                },
            ],
        },
    ],
};

export default skillsData;
