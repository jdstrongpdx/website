import React from 'react';
import languageData from "../data/languageData";
import SkillsCard from "../components/SkillsCard";
import skillsData from "../data/skillsData";
import HelmetComponent from "../components/HelmetComponent";

const SkillsPage = () => {
    return (
        <>

            <HelmetComponent title="Skills and Languages Page" />
            <article>
                <h2>Welcome to my Website!</h2>
                <p>
                    Hi, my name is Joel Strong and I am a full stack software engineer and September 2024 Computer Science graduate from Oregon State
                    University. In addition to maintaining a 3.98 GPA in my Computer Science program, I spent hundreds
                    of hours outside of class learning the languages, skills, and certifications needed to build
                    beautiful and functional full stack web applications. Check out my Portfolio page to see examples
                    of my websites and projects!
                </p>

                <h2>Languages & Frameworks</h2>
                <p>This is a list of languages & frameworks that I have learned with the expressed interest in building
                    applications with them. I am a life-long learner and interested in adding new languages and
                    frameworks that help me achieve the goals of the projects I am working on.</p>

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
            <h2>Skills</h2>

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
            </article>
        </>
    )
}

export default SkillsPage;
