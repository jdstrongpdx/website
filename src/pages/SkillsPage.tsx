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

                <h2>About Me</h2>

                <p>My original background is in Manufacturing, where I worked my way from a temporary employee to managing half of the production departments in the company within 10 years. Three key factors drove my career growth: <strong>collaboration, Lean Manufacturing, and software development.</strong></p>

                <p>I frequently identified business needs where software could improve efficiency and quality, and I built solutions to address them:</p>

                <ul>
                    <li>Creating custom MRP solutions for inventory management, labeling, formulations, production batching, and quality testing.</li>
                    <li>Developing internal software tools that reduced errors, improved throughput, and optimized workflows.</li>
                    <li>Serving as a backup IT administrator, troubleshooting systems, managing databases, and ensuring uptime.</li>
                    <li>Serving as the technical lead for a SaaS ERP transition team, successfully migrating nine software modules over 16 months.</li>
                </ul>

                <p>I stepped away from my career to be a full-time parent and raised two fine young men. When it was time for me to return to work, I decided to return to software development. I pursued a Computer Science degree while independently developing the skills needed for enterprise software development, including React, TypeScript, Java, SQL, and Cloud Services.</p>

                <p>As the job market and internship opportunities tightened during my junior year, my mentor recommended that I build a full-stack web application to demonstrate my skills. That project, FragranceFreeResources.com, became a hands-on learning experience that solidified my expertise in full-stack development.</p>

                <p>Despite challenges in finding entry-level opportunities in my area, I have remained committed to continuous learning and upskilling. Since graduating, I have earned many certifications and certificates including:</p>

                <ul>
                    <li><strong>AZ-900 Azure Fundamentals Certified</strong></li>
                    <li><strong>Meta Front-End Developer Professional Certificate (Advanced React)</strong></li>
                    <li><strong>Meta React-Native Specialization Certificate</strong></li>
                    <li><strong>JetBrains Academy Java Developer (Advanced Java)</strong></li>
                    <li><strong>JetBrains Academy Java Backend Developer (Spring Boot)</strong></li>
                    <li><strong>Google Agile Project Management</strong></li>
                    <li><strong>Microsoft Back-End Developer Professional Certificate (In Progress)</strong></li>
                </ul>

                <p>I am currently developing <strong><a href="https://www.actuli.com">Actuli.com</a></strong>, a cross-platform AI-powered life coach and goal-setting application. This project allows me to apply my expertise in <strong>.NET, ASP.NET, React Native, Azure OpenAI, and CI/CD pipelines</strong> while continuing to grow as a developer.</p>


            </article>
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
