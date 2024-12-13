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
                    description: "Using C# to build console applications, and Unity games. Currently learning via courses on Coursera and Microsoft Learn.",
                    skill: SkillsEnum.CSharp,
                    proficiency: ProficiencyEnum.Basic,
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
                    description: "Designing, integrating, and maintaining NoSQL databases on local and hosted services. Performing data retrieval, manipulation, aggregation, and transactions.",
                    skill: SkillsEnum.NoSQL,
                    proficiency: ProficiencyEnum.Basic,
                },
            ],
        },
        {
            title: "Frameworks",
            items: [
                {
                    title: "React",
                    image: "/logos/react.png",
                    description: "Building dynamic Progressive Web Applications using hooks, props, context, reducer, memo, callback, Lodash, Formik, Yup, Jest, and React-Testing library.",
                    skill: SkillsEnum.React,
                    proficiency: ProficiencyEnum.Advanced,
                },
                {
                    title: ".NET",
                    image: "/logos/net.png",
                    description: "Building console applications and basic backend APIs. Currently learning via courses on Coursera and Microsoft Learn.",
                    skill: SkillsEnum.DotNet,
                    proficiency: ProficiencyEnum.Basic,
                },
                {
                    title: "ASP.NET",
                    image: "/logos/asp.png",
                    description: "Using ASP.NET to build RESTful API backends. Currently learning via courses on Coursera and Microsoft Learn.",
                    skill: SkillsEnum.AspNet,
                    proficiency: ProficiencyEnum.Basic,
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
                    title: "Azure",
                    image: "/logos/azure.png",
                    description: "Configuring and deploying web applications using Azure offerings. Currently learning via courses on Coursera and Microsoft Learn.",
                    skill: SkillsEnum.Azure,
                    proficiency: ProficiencyEnum.Basic,
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
                    title: "IDE's",
                    image: "/logos/ide.png",
                    description: "Utilizing built-in features to streamline development, linting to produce error-free code, using integrated features for debugging, command line calls, and database changes.",
                    skill: SkillsEnum.Other,
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
                    description: "Utilizing a layered testing approach integrating Unit Tests, Integration Testing, and End-to-End testing. Experience using a wide range of testing tools including unittest, PyTest, JUnit, Jest, Postman/Newman, Spring Test, MockMVC and other tools.",
                    skill: SkillsEnum.Testing,
                    proficiency: ProficiencyEnum.Intermediate,
                },
                {
                    title: "Agile",
                    image: "/logos/agile.png",
                    description: "Utilizing Agile methodologies including Scrum and Kanban for value-driven prioritization and sprint planning. Experience using task managers such as Jira, Trello, and Asana.",
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
