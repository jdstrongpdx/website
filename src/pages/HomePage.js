import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import HelmetComponent from "../components/HelmetComponent";
import SkillsCard from "../components/SkillsCard";
import languageData from "../data/languageData";
import skillsData from "../data/skillsData";

function HomePage() {
    return (
        <>
            <h1>Joel Strong </h1>
            <HelmetComponent title="Home" />

            <article>
                <p><br></br>I am a full stack software engineer and September 2024 Computer Science graduate from Oregon State University. In addition to maintaining a 3.98
                    GPA in my Computer Science program, I spent hundreds of hours outside of class learning the
                    languages, skills, and certifications needed to build elegant and functional full
                    stack web applications. Please take a look at my Skills, Resume, and Portfolio!</p>
            </article>



        </>
        );
    }
    export default HomePage;
