import React from "react";
import projectData from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

const PortfolioPage = () => {
    return (
        <>
            <div className='skillsParent'>
                {Object.values(projectData).map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                ))}
            </div>
        </>
    );
}

export default PortfolioPage;
