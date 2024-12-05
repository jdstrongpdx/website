import React from "react";
import imageData from "../../data/imageData";
import GalleryModal from "../GalleryModal";

function Ffr() {
    const images = imageData.filter(image => image.project === "FFR");

    return (
        <>
            <div id="Ffr" className="project">
                <h2>FragranceFreeResources.com Full Stack Web Application</h2>
                <h3>April 2024 - Current</h3>

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

                <h4>Overview</h4>
                <p>This full stack web application was developed over 11 weeks as part of a Personal Projects
                    elective class as part of my Computer Science bachelors degree at Oregon State University. In
                    addition to my classwork, I dedicated myself to learning additional languages and frameworks with
                    the goal of independently developing a web application. This website is a realization of those
                    efforts.</p>

                <h4>Web Application Features</h4>
                <ul>
                    <li><strong>Security</strong> - Implemented Spring Security using JWT with backend access privileges
                        for each
                        endpoint and frontend dynamic page rendering based on roles and record creator.
                    </li>
                    <li><strong>User Interface</strong> - Developed a dynamic SPA using React, Typescript, and
                        React-Bootstrap. Used
                        React-Toastify to display non-obtrusive messages to the user and Modals for simple form
                        interactions.
                    </li>
                    <li><strong>Cloud Development</strong> - Used Amazon Web Services to deploy MVC elements: AWS
                        Lightsail RDS for MySQL
                        hosting, AWS Amplify for hosting the frontend, and AWS Lightsail Container running a Dockerized
                        SpringBoot/Java application backend.
                    </li>
                    <li><strong>Database Design</strong> - Database fields are created/updated using SpringBoot JPA
                        based on annotated
                        field specifications. Used MySQLWorkbench to populate initial values and make modifications
                        during testing.
                    </li>
                    <li><strong>Device Compatibility</strong> - Used flexible React and Bootstrap features to build a
                        dynamic website
                        accessible on cell phones, tablets, and computers of different screen sizes.
                    </li>
                    <li><strong>Pagination</strong> - Used Spring Boot Pageable and React-Bootstrap Pagination to
                        deliver paginated
                        result
                        lists to the user.
                    </li>
                    <li><strong>Performance</strong> - Implemented database connection pools, simple entity architecture
                        that did not
                        require the use of mapping and DTO's, and used caching on the frontend to improve application
                        performance.
                    </li>
                    <li><strong>Entities</strong> - Enabled CRUD operations on a range of entities: Businesses,
                        Products, Rental Homes,
                        Entity Reviews, Support Tickets, and Users.
                    </li>
                    <li><strong>SEO</strong> - Used React-Helmet to create informative page headers</li>
                    <li><strong>Lighthouse</strong> - Used Google Lighthouse analysis to improve the web application
                        design including
                        Progressive Web Application badge.
                    </li>
                </ul>

                <h4>Project Images</h4>
                <div className="centered">
                    {images.map((image, index) => (
                        <GalleryModal
                            key={index}
                            imageSrc={image.src}
                            altText={image.description}
                            label={image.description}
                        />
                    ))}
                </div>

                <GalleryModal
                    imageSrc="/images/FFR/home.png"
                    altText="FFR screenshot"
                    label="FFR screenshot"
                />
                <img src="/images/FFR/home.png" alt="FFR screenshot" width="1000px"/>

                <h4>CI/CD</h4>
                <p>Since the release of the product, the following continuous development activities have occurred:</p>
                <ul>
                    <li>Added backend support for sending simple email messages with integrations to provide emails on
                        support ticket creation, forgotten usernames, and password resets.
                    </li>
                    <li>Refactored the back and frontend away from JWT using local storage and to secure HttpOnly
                        cookies.
                    </li>
                    <li>Implemented refresh tokens to improve the need for constant user login requirements.</li>
                    <li>Refactored frontend to use Formik and Yup to simplify state and validation management.</li>
                    <li>Created a single axios service to provide uniform handling for fetch and errors.</li>
                </ul>

                <h4>Experience Gained and Lessons Learned</h4>
                <ul>
                    <li>Security - Implemented Spring Security using JWT with backend access privileges for each
                        endpoint and frontend dynamic page rendering based on roles and record creator.
                    </li>
                    <li>User Interface - Developed a dynamic SPA using React, Typescript, and React-Bootstrap. Used
                        React-Toastify to display non-obtrusive messages to the user and Modals for simple form
                        interactions.
                    </li>
                    <li>Cloud Development - Used Amazon Web Services to deploy MVC elements: AWS Lightsail RDS for
                        MySQL
                        hosting, AWS Amplify for hosting the frontend, and AWS Lightsail Container running a
                        Dockerized
                        SpringBoot/Java application backend.
                    </li>
                    <li>Database Design - Database schema was created/updated using Spring Boot JPA based on
                        annotated
                        class variable specifications. Used MySQLWorkbench to populate initial values and make
                        modifications
                        during testing.
                    </li>
                    <li>Compatibility - Used flexible React and Bootstrap features to build a dynamic website
                        accessible on cell phones, tablets, and computers of different screen sizes.
                    </li>
                    <li>Pagination - Used Spring Boot Pageable and React-Boostrap Pagination to deliver paginated
                        result
                        lists to the user.
                    </li>
                    <li>Performance - Implemented memoized context caching on the frontend to improve application
                        performance and efficient use of API routes to decrease page load times..
                    </li>
                    <li>Entities - Enabled CRUD operations on a range of entities: Businesses, Products, Rental
                        Homes, Support Groups,
                        Entity Reviews, Support Tickets, and Users.
                    </li>
                    <li>SEO - Used React-Helmet to create dynamic page meta tags, Sitemap for sitemap.xml
                        generation, and Google Search Console for optimization.
                    </li>
                    <li>Lighthouse - Used Google Lighthouse analysis to improve the web application design including
                        Progressive Web Application badge.
                    </li>
                </ul>

                <h4>Development Environment</h4>
                <ul>
                    <li>JetBrains WebStorm for the Frontend</li>
                    <li>JetBrains IntelliJ for the Backend</li>
                    <li>MySQLWorkbench for Database Administration.</li>
                    <li>Use of JetBrains AI Assistant for Learning and Development Assistance</li>
                    <li>GitHub for VCS</li>
                </ul>

                <h4><em>Project Link: </em> <a href="https://fragrancefreeresources.com">FragranceFreeResources.com</a>
                </h4>

            </div>
        </>
    )
}

export default Ffr;
