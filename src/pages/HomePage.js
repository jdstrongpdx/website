import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import HelmetComponent from "../components/HelmetComponent";
import SkillsCard from "../components/SkillsCard";
import languageData from "../data/languageData";
import skillsData from "../data/skillsData";

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
            {languageData.map((skill, index) => (
                <SkillsCard key={index}
                            title={skill.title}
                            image={skill.image}
                            description={skill.description}/>
            ))}
            </div>

        </article>
        <article>
            <h3>Skills</h3>
        </article>

        <div className='skillsParent'>
            {skillsData.map((skill, index) => (
                <SkillsCard
                    key={index}
                    title={skill.title}
                    image={skill.image}
                    description={skill.description}
                />
            ))}
        </div>
        </>
        );
    }
    export default HomePage;
