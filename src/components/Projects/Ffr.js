function Ffr() {
    return (
        <>
            <div className="project">
                <h3>FragranceFreeResources.com Full Stack Web Application</h3>
                <h4>April 2024 - Current</h4>
                <div className="centered">
                    <figure>
                        <img width="900px" alt="fragrancefreeresources app screenshot" src="./images/FFR.png"/>
                        <figcaption>Fragrance Free Resources Home Page (Admin View)</figcaption>
                    </figure>
                </div>

                <p><strong>App Type:</strong> Full Stack Single Page Web Application</p>
                <p><strong>Description:</strong> A Full Stack web application that allows people that are sensitive to
                    fragrances to share resources on Businesses, Products, and Rental Homes that are safe environments.
                </p>
                <ul>
                    <li><em>Frontend: </em> React/Typescript using axios, react-bootstrap, and react-touch.</li>
                    <li><em>Database: </em> MySql running on AWS Lightsail RDS</li>
                    <li><em>Backend: </em> Dockerized Java/Spring Boot container using Spring Web, Data JPA, Security,
                        WebMVC, Test, and Actuator.
                    </li>
                    <li><em>Hosting: </em> The backend is deployed to a AWS Lightsail container instance and the
                        frontend is served by an AWS Amplify.
                    </li>
                </ul>


                <p><strong>Overview</strong></p>
                <p>This full stack web application was developed over 11 weeks as part of a Personal Projects
                    elective class as part of my Computer Science bachelors degree at Oregon State University. In
                    addition to my classwork, I dedicated myself to learning additional languages and frameworks with
                    the goal of independently developing a web application. This website is a realization of those
                    efforts.</p>

                <p><strong>Web Application Features</strong></p>
                <ul>
                    <li>Security - Implemented Spring Security using JWT with backend access privileges for each
                        endpoint and frontend dynamic page rendering based on roles and record creator.
                    </li>
                    <li>User Interface - Developed a dynamic SPA using React, Typescript, and React-Bootstrap. Used
                        React-Toastify to display non-obtrusive messages to the user and Modals for simple form
                        interactions.
                    </li>
                    <li>Cloud Development - Used Amazon Web Services to deploy MVC elements: AWS Lightsail RDS for MySQL
                        hosting, AWS Amplify for hosting the frontend, and AWS Lightsail Container running a Dockerized
                        SpringBoot/Java application backend.
                    </li>
                    <li>Database Design - Database fields are created/updated using SpringBoot JPA based on annotated
                        field specifications. Used MySQLWorkbench to populate initial values and make modifications
                        during testing.
                    </li>
                    <li>Compatibility - Used flexible React and Bootstrap features to build a dynamic website
                        accessible on cell phones, tablets, and computers of different screen sizes.
                    </li>
                    <li>Pagination - Used Spring Boot Pageable and React-Bootstrap Pagination to deliver paginated
                        result
                        lists to the user.
                    </li>
                    <li>Performance - Implemented database connection pools, simple entity architecture that did not
                        require the use of mapping and DTO's, and used caching on the frontend to improve application
                        performance.
                    </li>
                    <li>Entities - Enabled CRUD operations on a range of entities: Businesses, Products, Rental Homes,
                        Entity Reviews, Support Tickets, and Users.
                    </li>
                    <li>SEO - Used React-Helmet to create informative page headers</li>
                    <li>Lighthouse - Used Google Lighthouse analysis to improve the web application design including
                        Progressive Web Application badge.
                    </li>
                </ul>
                <div className="centered">
                    <figure>
                        <img width="900px" alt="product visitor view" src="./images/FFR-Visitor.png"/>
                        <figcaption>Visitor View of a Product</figcaption>
                    </figure>
                </div>

                <div className="centered">
                    <figure>
                        <img width="900px" alt="product user review modal" src="./images/FFR-User.png"/>
                        <figcaption>User View of a Product with an active Review modal</figcaption>
                    </figure>
                </div>

                <div className="centered">
                    <figure>
                        <img width="700px" alt="google lighthouse review" src="./images/lighthouse.png"/>
                        <figcaption>Google Chrome Lighthouse Performance Rating for a PWA</figcaption>
                    </figure>
                </div>

                <br></br>
                <p><strong>Experience Gained and Lessons Learned</strong></p>
                <ul>
                    <li>Build a functional full-stack web application from the ground up.</li>
                    <li>Learn to implement more complicated features and design patterns of a Spring Boot application
                        using a MVC model, REST APIs, Spring Security for user Auth using JWTs, JPA ODM, DTOs, Mappers
                        and OOP.
                    </li>
                    <li>Using Maven to test, build, and package Spring Boot applications.</li>
                    <li>Using Docker to containerize and deploy a Spring Boot application.</li>
                    <li>Learning to use Typescript and Bootstrap. Fortunately Typescript and Java are similar in their
                        typing and syntax, so it was easier to learn than I had initially expected.
                    </li>
                    <li>Learning more complicated React implementations using Components, Props, State, Hooks, Contexts,
                        Event Handling and Conditional Rendering.
                    </li>
                    <li>Using Postman/Newman to design and test API endpoints.</li>
                    <li>Configuring and working with local development environments and remotely hosted production
                        environments.
                    </li>
                    <li>Using MySQLWorkbench to manage local and remote SQL servers.</li>
                    <li>Using git to effectively manage the two code bases.</li>
                    <li>Gain experience testing different designs and evaluating the tradeoffs of different design
                        choices.
                    </li>
                </ul>

                <p><strong>Development Environment</strong></p>
                <ul>
                    <li>JetBrains WebStorm for the Frontend</li>
                    <li>JetBrains IntelliJ for the Backend</li>
                    <li>MySQLWorkbench for Database Administration.</li>
                    <li>Use of JetBrains AI Assistant for Learning and Development Assistance</li>
                    <li>GitHub for VCS</li>
                </ul>

                <p><em>Project Link: </em> <a href="https://fragrancefreeresources.com">FragranceFreeResources.com</a>
                </p>

                <div className="centered">
                    <figure>
                        <img width="900px" alt="api endpoint spreadsheet" src="./images/FFRendpoints.png"/>
                        <figcaption>Spring Boot Backend API Endpoints</figcaption>
                    </figure>
                </div>


            </div>
        </>
    )
}

export default Ffr;