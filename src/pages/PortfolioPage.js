import React from "react";
import projectData from "../data/projectData";
import SkillsCard from "../components/SkillsCard";

function PortfolioPage() {

    return (
        <>
            <div className='skillsParent'>
                {projectData.map((project, index) => (
                    <SkillsCard
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        width='400px'
                        imgWidth='350px'
                        route={project.route}
                        data={project.data}
                    />
                ))}
            </div>
        </>
    );
}

export default PortfolioPage;
