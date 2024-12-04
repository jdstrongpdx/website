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
