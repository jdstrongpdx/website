import React from 'react';
import { useNavigate } from 'react-router-dom';
import IProjectData from "../interfaces/IProject";

const ProjectCard: React.FC<{ project: IProjectData }> = ({ project }) => {
    const navigate = useNavigate();

    const handleClick = (src: string) => {
        navigate(src);
    }

    const skillDisplayNames = project.skills.slice().sort().join(", ");

    return (
        <div className="card"
             style={{ width: '400px', cursor: 'pointer'}}
             onClick={() => handleClick(project.route)}
        >
            <img src={project.image} alt={project.title} style={{ height: "200px" }} />
            {project.image
                ? <div className="card-content">
                    {project.title && <h3 className="card-title">{project.title}</h3>}
                    {project.description && <p className="card-text"><strong>Description:</strong> {project.description}
                    </p>}
                    <div className="card-text">
                        {project.type && <p><strong>Type:</strong> {project.type}</p>}
                        {project.stack?.frontend &&
                            <p><strong>Front-End:</strong> {project.stack.frontend}</p>}
                        {project.stack?.database &&
                            <p><strong>Database:</strong> {project.stack.database}</p>}
                        {project.stack?.backend &&
                            <p><strong>Backend:</strong> {project.stack.backend}</p>}
                        {project.stack?.hosting &&
                            <p><strong>Hosting:</strong> {project.stack.hosting}</p>}
                        {/*Displays project data not included in the standard project object format*/}
                        {project.data && project.data.map((item, index) =>
                            <p key={index}>
                                <span style={{fontWeight: 'bold'}}>{item[0]}</span> {item[1]}
                            </p>
                        )}
                        <p><strong>Skills: </strong>{skillDisplayNames}</p>
                    </div>

                </div>
                : null }
        </div>
    );
};

export default ProjectCard;
