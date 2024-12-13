import ISkillLanguage from "../interfaces/ISkillLanguage";
import SkillsEnum from "./SkillEnum";

const languageData: ISkillLanguage[] = [
    {
        title: "C#",
        image: "/logos/cSharp.png",
        description: "Basic proficiency with experience using C# to build console applications, and Unity games. Currently learning via courses on Coursera and Microsoft Learn.",
        skill: SkillsEnum.CSharp,
    },
    {
        title: ".NET",
        image: "/logos/net.png",
        description: "Basic proficiency with experience using dotnet to build console applications and basic backend APIs. Currently learning via courses on Coursera and Microsoft Learn.",
        skill: SkillsEnum.DotNet,
    },
    {
        title: "Python",
        image: "/logos/python.png",
        description: "Advanced proficiency with experience building applications using OOP, file manipulation, database operations, networking, multi-threading, collections, wrappers, generators, library integrations and more.",
        skill: SkillsEnum.Python,
    },
    {
        title: "Java",
        image: "/logos/java.png",
        description: "Advanced proficiency with experience building applications using OOP, file manipulation, high and low level database operations, collections, streams, multi-threading, networking, serialization, generics and more.",
        skill: SkillsEnum.Java,
    },
    {
        title: "JavaScript",
        image: "/logos/javascript.png",
        description: "Intermediate proficiency using functional and OOP paradigms, data transformation, asynchronous programming, events, error handling, ES6+ syntax, and debugging.",
        skill: SkillsEnum.JavaScript,
    },
    {
        title: "TypeScript",
        image: "/logos/typescript.png",
        description: "Intermediate proficiency extending my JavaScript knowledge to build React websites using interfaces, enums, generics, assertions, optional/nullish types, and advanced error handling.",
        skill: SkillsEnum.TypeScript,
    },
    {
        title: "HTML",
        image: "/logos/html.png",
        description: "Advanced proficiency with experience creating accessible web pages using semantic HTML elements, building complex forms with validation, implementing responsive elements, and SEO optimization.",
        skill: SkillsEnum.HTML,
    },
    {
        title: "CSS",
        image: "/logos/css.png",
        description: "Intermediate proficiency in CSS syntax format and building highly stylized reactive websites. Experience using global CSS, inline CSS, Bootstrap and other styling tools.",
        skill: SkillsEnum.CSS,
    },
    {
        title: "SQL & NoSQL",
        image: "/logos/database.png",
        description: "Intermediate proficiency with experience designing, integrating, and maintaining SQL and NoSQL databases on local and hosted services. Performing data retrieval, manipulation, aggregation, transactions, stored procedures, and optimization.",
        skill: SkillsEnum.SQL,
    },
    {
        title: "React",
        image: "/logos/react.png",
        description: "Advanced proficiency with experience in building dynamic Progressive Web Applications using hooks, props, context, reducer, memo, callback, Lodash, Formik, Yup, Jest, and React-Testing library.",
        skill: SkillsEnum.React,
    },
    {
        title: "ASP.NET",
        image: "/logos/asp.png",
        description: "Basic proficiency with experience using ASP.NET to build RESTful API backends. Currently learning via courses on Coursera and Microsoft Learn.",
        skill: SkillsEnum.AspNet,
    },
    {
        title: "SpringBoot",
        image: "/logos/springboot.png",
        description: "Intermediate proficiency with experience using Spring Web, JPA, Security, MVC, Jackson, Validation, JUnit, Actuator, Model-Mapper modules with Gradle/Maven to build and deploy web applications.",
        skill: SkillsEnum.SpringBoot,
    },
    {
        title: "Amazon Web Services",
        image: "/logos/aws.png",
        description: "Intermediate proficiency with experience configuring and deploying web applications using AWS offerings: Amplify, Lambda, S3, RDS, Lightsail RDS, Lightsail Container, Route53, API Gateway, IAM.",
        skill: SkillsEnum.AWS,
    },
    {
        title: "Azure",
        image: "/logos/azure.png",
        description: "Basic proficiency with experience configuring and deploying web applications using Azure offerings. Currently learning via courses on Coursera and Microsoft Learn.",
        skill: SkillsEnum.Azure,
    },
    {
        title: "Google Cloud Platform",
        image: "/logos/gcp.png",
        description: "Intermediate proficiency with experience configuring and deploying web applications using GCP offerings: App Engine, Firestore, CloudSQL, Compute Engine, Storage, Artifact Registry.",
        skill: SkillsEnum.GCP,
    },
];

export default languageData
