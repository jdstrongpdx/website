import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import HelmetComponent from "../components/HelmetComponent";
import SkillsCard from "../components/SkillsCard";

function HomePage() {
    return (<>

    <img height="100" alt="Website logo" className='right' src="/logo192.png"/>
    <h1>Joel Strong </h1>
            <HelmetComponent title="Home" />

            <article>
                <p><br></br>I am a full stack software engineer and September 2024 Computer Science graduate from Oregon State University. In addition to maintaining a 3.98
                    GPA in my Computer Science program, I spent hundreds of hours outside of class learning the
                    languages, skills, and certifications needed to build elegant and functional full
                    stack web applications. Please take a look at my Skills, Resume, and Portfolio!</p>
                <div className="centered">
                    <button><FaLaptopCode/>&ensp;
                        <Link
                        to="/portfolio"
                        style={{ color: 'white', textDecoration: 'none' }}
                    >
                        Portfolio
                    </Link>
                    </button>
                    &emsp;
                    <button className='styledButton'>
                        <IoDocument/>&ensp;
                        <Link
                            to="/resume"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            Resume
                        </Link>
                    </button>
                </div>
            </article>


            <article>
                <h3>Languages & Frameworks</h3>
                <p>This is a list of languages & frameworks that I have learned with the expressed interest in building
                    applications with them. I am a life-long learner and interested in adding new languages and frameworks that help me achieve the goals of the projects I am working on.</p>

        <div className='skillsParent'>
            <SkillsCard
                title="Python"
                image="/logos/python.png"
                description="Advanced proficiency with experience building applications using OOP, file manipulation, database operations, networking, multi-threading, collections, wrappers, generators, library integrations and more."
            />
            <SkillsCard
                title="Java"
                image="/logos/java.png"
                description="Advanced proficiency with experience building applications using OOP, file manipulation, high and low level database operations, collections, streams, multi-threading, networking, serialization, generics and more."
            />
            <SkillsCard
                title="JavaScript"
                image="/logos/javascript.png"
                description="Intermediate proficiency using functional and OOP paradigms, data transformation, asynchronus programming, events, error handling, ES6+ syntax, and debugging."
            />
            <SkillsCard
                title="TypeScript"
                image="/logos/typescript.png"
                description="Itermediate proficiency extending my JavaScript knowledge to build React websites using interfaces, enums, generics, assertions, optional/nullish types, and advanced error handling. "
            />
            <SkillsCard
                title="React"
                image="/logos/react.png"
                description="Advanced proficiency with experience in building dynamic Progressive Web Applications using hooks, props, context, reducer, memo, callback, Lodash, Formik, Yup, Jest, and React-Testing library."
            />
            <SkillsCard
                title="SQL & NoSQL"
                image="/logos/database.png"
                description="Intermediate proficiency with experience designing, integrating, and maintaining SQL and NoSQL databases on local and hosted services. Performing data retrieval, manipulation, aggregation, transactions, stored procedures, and optimization."
            />
            <SkillsCard
                title="HTML"
                image="/logos/html.png"
                description="Advanced proficiency with experience creating accessible web pages using semantic HTML elements, building complex forms with validation, implementing responsive elements, and SEO optimization."
            />
            <SkillsCard
                title="CSS"
                image="/logos/css.png"
                description="Intermediate proficiency in CSS syntax format and building highly stylized reactive websites. Experience using global CSS, inline CSS, Bootstrap and other styling tools."
            />
            <SkillsCard
                title="SpringBoot"
                image="/logos/springboot.png"
                description="Intermediate proficiency with experience using Spring Web, JPA, Security, MVC, Jackson, Validation, JUnit, Actuator, Model-Mapper modules with Gradle/Maven to build and deploy web applications."
            />
            <SkillsCard
                title="Amazon Web Services"
                image="/logos/aws.png"
                description="Intermediate proficiency with experience configuring and deploying web applications using AWS offerings: Amplify, Lambda, S3, RDS, Lightsail RDS, Lightsail Container, Route53, API Gateway, IAM."
            />
            <SkillsCard
                title="Google Cloud Platform"
                image="/logos/gcp.png"
                description="Intermediate proficiency with experience configuring and deploying web applications using GCP offerings: App Engine, Firestore, CloudSQL, Compute Engine, Storage, Artifact Registry."
            />
            <SkillsCard
                title="Artificial Intelligence"
                image="/logos/ai.png"
                description="Intermediate proficiency using AI as a learning and development tool with ChatGPT and JetBrains AI Assistant. Experienced in prompt engineering for functions, data sets, documentation, and testing."
            />
            </div>

        </article>
        <article>
            <h3>Skills</h3>
        </article>

        <div className='skillsParent'>
            <SkillsCard
                title="Algorithms"
                image="/logos/algorithm.png"
                description="Intermediate proficiency with experience using Arrays, Linked Lists, Sorting, Trees, Heaps, Hashing, Recursion. Using Neetcode.io to learn algorithm design. Using Leetcode to practice accurate and efficient implementations."
            />
            <SkillsCard
                title="OOP"
                image="/logos/oop.png"
                description="Advanced proficiency of classes, methods, static elements, nesting, inheritance, abstract classes, interfaces, overriding/overloading, and usage."
            />
            <SkillsCard
                title="Architecture"
                image="/logos/architecture.png"
                description="Basic proficiency of building programs with a SOLID architecture, using Creational, Behavioral, and Structural design patterns."
            />
            <SkillsCard
                title="IDE's"
                image="/logos/ide.png"
                description="Intermediate proficiency using built-in features to streamline development, linting to produce error-free code, using integrated features for debugging, command line calls, and database changes."
            />
            <SkillsCard
                title="Debugging"
                image="/logos/debugging.png"
                description="Intermediate proficiency with experience using a variety of debuggers to see the state of objects/threads at key points to make actionable design decisions."
            />
            <SkillsCard
                title="Git"
                image="/logos/git.png"
                description="Intermediate proficiency of Git commands, Gitflow, Git Actions, pull requests, code reviews, branching, tagging, version control, workflows, and using local and remote repositories."
            />
            <SkillsCard
                title="Testing"
                image="/logos/testing.png"
                description="Intermediate proficiency using a layered testing approach integrating Unit Tests, Integration Testing, and End-to-End testing. Experience using a wide range of testing tools including unittest, PyTest, JUnit, Jest, Postman/Newman, Spring Test, MockMVC and other tools."
            />
            <SkillsCard
                title="AGILE"
                image="/logos/agile.png"
                description="Intermediate proficiency utilizing Agile methodologies including Scrum and Kanban for value-driven prioritization and sprint planning. Experience using task managers such as Jira, Trello, and Asana."
            />
            <SkillsCard
                title="Containers"
                image="/logos/container.png"
                description="Intermediate proficiency with experience creating and deploying Dockerized Flask/Python applications to Google Cloud Platform and Java/Spring Boot applications to Amazon Web Services."
            />
        </div>
        </>
        );
    }
    export default HomePage;
