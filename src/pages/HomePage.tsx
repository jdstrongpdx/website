import React from 'react';
import HelmetComponent from "../components/HelmetComponent";

function HomePage() {
    return (
        <div className="hero-section" >
            <h1>Joel Strong </h1>
            <HelmetComponent title="Home" />

            <article>
                <p><i><em>Summary:</em></i></p>

                <p>I spent 10 years in Manufacturing, working my way from a temporary employee up to Manager of half of
                    the production departments at the company. I used three main skills to advance my career:
                    collaboration, Lean Manufacturing, and software. ...
                </p>



                <p>
                    I am a full stack software engineer and September 2024 Computer Science graduate from Oregon State
                    University. In addition to maintaining a 3.98
                    GPA in my Computer Science program, I spent hundreds of hours outside of class learning the
                    languages, skills, and certifications needed to build elegant and functional full
                    stack web applications.</p>

                <p><i><em>About Me:</em></i></p>
                <p>
                    I spent my childhood living in the USA and Asia with 4 years in Seoul, South Korea and 5 years in
                    Manila, Philippines.
                </p>


            </article>


        </div>
    );
}

export default HomePage;
