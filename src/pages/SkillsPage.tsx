import React from 'react';
import SkillsCard from "../components/SkillsCard";
import skillsData from "../data/skillsData";
import HelmetComponent from "../components/HelmetComponent";
import certificateData from "../data/certificateData";
import {ICertificationCategory} from "../interfaces/ICertificate";
import SkillsEnum from "../enums/SkillEnum";
import IProjectData from "../interfaces/IProject";
import projectData from "../data/projectData";

type ProductDataMap = {
    [key: string]: IProjectData;
};

const SkillsPage = () => {

    // Creates a map of the number of certificates of each skill and the certificate names
    function getSkillCertificateMap(data: ICertificationCategory[]): Record<
        SkillsEnum,
        { count: number; titles: string[] }
    > {
        const skillsCertificateMap: Record<SkillsEnum, { count: number; titles: string[] }> = {} as Record<
            SkillsEnum,
            { count: number; titles: string[] }
        >;

        data.forEach((category: ICertificationCategory) => {
            category.certifications.forEach((certification) => {
                certification.skills?.forEach((skill) => {
                    // Initialize the skills entry if it doesn't already exist
                    if (!skillsCertificateMap[skill]) {
                        skillsCertificateMap[skill] = { count: 0, titles: [] };
                    }

                    // Increment the skill count and add the title if it's not already present
                    skillsCertificateMap[skill].count += 1;
                    if (!skillsCertificateMap[skill].titles.includes(certification.title)) {
                        skillsCertificateMap[skill].titles.push(certification.title);
                    }
                });
            });
        });

        return skillsCertificateMap;
    }

    // Creates a map of the number of projects created with each skill
    function getSkillProjectMap(projectData: ProductDataMap): Map<SkillsEnum, number> {
        const skillProjectCounts = new Map<SkillsEnum, number>();

        // Iterate through each project in the dataset
        Object.values(projectData).forEach(project => {
            // For each skill in the project's skills list
            project.skills.forEach(skill => {
                // Increment the count for the skill
                skillProjectCounts.set(skill, (skillProjectCounts.get(skill) || 0) + 1);
            });
        });

        return skillProjectCounts;
    }

    const skillsCertificateMap = getSkillCertificateMap(certificateData);
    const skillsProjectMap = getSkillProjectMap(projectData);

    return (
        <>

            <HelmetComponent title="Skills and Languages Page"/>
            <article>
                <h2>Skills and Proficiencies</h2>

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
                                {category.items
                                    .sort((a, b) => a.title.localeCompare(b.title)) // Sort skills by title
                                    .map((skill, skillIndex) => (
                                        <SkillsCard
                                            key={skillIndex}
                                            title={skill.title}
                                            image={skill.image}
                                            description={skill.description}
                                            proficiency={skill.proficiency}
                                            skill={skill.skill}
                                            specialText={skill.specialText}
                                            skillsCertificateMap={skillsCertificateMap}
                                            skillsProjectMap={skillsProjectMap}
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
