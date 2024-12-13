import React from 'react';
import SkillsCard from "../components/SkillsCard";
import skillsData from "../data/skillsData";
import HelmetComponent from "../components/HelmetComponent";
import certificateData from "../data/certificateData";
import {ICertification, ICertificationCategory} from "../interfaces/ICertificate";
import SkillsEnum from "../enums/SkillEnum";

const SkillsPage = () => {

    function createSkillsMap(data: ICertificationCategory[]): Record<
        SkillsEnum,
        { count: number; titles: string[] }
    > {
        const skillsMap: Record<SkillsEnum, { count: number; titles: string[] }> = {} as Record<
            SkillsEnum,
            { count: number; titles: string[] }
        >;

        data.forEach((category: ICertificationCategory) => {
            category.certifications.forEach((certification) => {
                certification.skills?.forEach((skill) => {
                    // Initialize the skills entry if it doesn't already exist
                    if (!skillsMap[skill]) {
                        skillsMap[skill] = { count: 0, titles: [] };
                    }

                    // Increment the skill count and add the title if it's not already present
                    skillsMap[skill].count += 1;
                    if (!skillsMap[skill].titles.includes(certification.title)) {
                        skillsMap[skill].titles.push(certification.title);
                    }
                });
            });
        });

        return skillsMap;
    }

    const skillsMap = createSkillsMap(certificateData);


    return (
        <>

            <HelmetComponent title="Skills and Languages Page"/>
            <article>
                <h2>Welcome to my Website!</h2>
                <h5>
                    Hi, my name is Joel Strong and I am a full stack software engineer and September 2024 Computer
                    Science graduate from Oregon State
                    University. In addition to maintaining a 3.98 GPA in my Computer Science program, I spent hundreds
                    of hours outside of class learning the languages, skills, and certifications needed to build
                    beautiful and functional full stack web applications. Check out my Portfolio page to see examples
                    of my websites and projects!
                </h5>

                <h5>This is a list of skills that I have learned with the expressed interest in building
                    applications with them. I am a life-long learner and interested in adding new skills that help me
                    achieve the goals of the projects I am working on.</h5>

            </article>
            <article>
                <div>
                    {skillsData.items.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <h3>{category.title}</h3>
                            <div className="skillsParent">
                                {category.items.map((skill, skillIndex) => (
                                    <SkillsCard
                                        key={skillIndex}
                                        title={skill.title}
                                        image={skill.image}
                                        description={skill.description}
                                        proficiency={skill.proficiency}
                                        skill={skill.skill}
                                        skillMap={skillsMap}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </>
    )
}

export default SkillsPage;
