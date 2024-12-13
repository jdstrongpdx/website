import ISkillLanguage from "../interfaces/ISkillLanguage";
import SkillsEnum from "./SkillEnum";

const skillsData: ISkillLanguage[] = [
    {
        title: "Artificial Intelligence",
        image: "/logos/ai.png",
        description: "Intermediate proficiency using AI as a development tool and using prompt engineering to create AI-powered applications.",
        skill: SkillsEnum.AI,
    },
    {
        title: "Algorithms",
        image: "/logos/algorithm.png",
        description: "Intermediate proficiency with experience using Arrays, Linked Lists, Sorting, Trees, Heaps, Hashing, Recursion. Using Neetcode.io to learn algorithm design. Using Leetcode to practice accurate and efficient implementations.",
        skill: SkillsEnum.Python,
    },
    {
        title: "OOP",
        image: "/logos/oop.png",
        description: "Advanced proficiency of classes, methods, static elements, nesting, inheritance, abstract classes, interfaces, overriding/overloading, and usage.",
        skill: SkillsEnum.OOP,
    },
    {
        title: "Architecture",
        image: "/logos/architecture.png",
        description: "Basic proficiency of building programs with a SOLID architecture, using Creational, Behavioral, and Structural design patterns.",
        skill: SkillsEnum.Architecture,
    },
    {
        title: "IDE's",
        image: "/logos/ide.png",
        description: "Intermediate proficiency using built-in features to streamline development, linting to produce error-free code, using integrated features for debugging, command line calls, and database changes.",
        skill: SkillsEnum.Other,
    },
    {
        title: "Debugging",
        image: "/logos/debugging.png",
        description: "Intermediate proficiency with experience using a variety of debuggers to see the state of objects/threads at key points to make actionable design decisions.",
        skill: SkillsEnum.Debugging,
    },
    {
        title: "Git",
        image: "/logos/git.png",
        description: "Intermediate proficiency of Git commands, Gitflow, Git Actions, pull requests, code reviews, branching, tagging, version control, workflows, and using local and remote repositories.",
        skill: SkillsEnum.Git,
    },
    {
        title: "Testing",
        image: "/logos/testing.png",
        description: "Intermediate proficiency using a layered testing approach integrating Unit Tests, Integration Testing, and End-to-End testing. Experience using a wide range of testing tools including unittest, PyTest, JUnit, Jest, Postman/Newman, Spring Test, MockMVC and other tools.",
        skill: SkillsEnum.Testing,
    },
    {
        title: "Agile",
        image: "/logos/agile.png",
        description: "Intermediate proficiency utilizing Agile methodologies including Scrum and Kanban for value-driven prioritization and sprint planning. Experience using task managers such as Jira, Trello, and Asana.",
        skill: SkillsEnum.Agile,
    },
    {
        title: "Docker",
        image: "/logos/container.png",
        description: "Intermediate proficiency with experience creating and deploying Dockerized Flask/Python applications to Google Cloud Platform and Java/Spring Boot applications to Amazon Web Services.",
        skill: SkillsEnum.Docker,
    },
    {
        title: "UX/UI",
        image: "/logos/ux_ui.png",
        description: "Basic proficiency with experience designing UX/UI designs in Figma using Personas, Journey Maps, Wireframes, and Prototypes.",
        skill: SkillsEnum.UxUi,
    },
];

export default skillsData;
