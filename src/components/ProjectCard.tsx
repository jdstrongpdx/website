import React from 'react';
import { useNavigate } from 'react-router-dom';
import IProjectData from "../interfaces/IProject";

const ProjectCard: React.FC<{ project: IProjectData }> = ({ project }) => {
    const navigate = useNavigate();

    const handleClick = (src: string) => {
        navigate(src);
    }

    return (
        <div className="card"
             style={{ width: '400px'}}
             onClick={() => handleClick(project.route)}
        >
            <img src={project.image} alt={project.title} style={{ height: "200px" }} />
            {project.image
                ? <div className="card-content">
                    {project.title && <h3 className="card-title">{project.title}</h3>}
                    {project.description && <p className="card-text"><strong>Description:</strong> {project.description}
                    </p>}
                    {project.type && <p className="card-text"><strong>Type:</strong> {project.type}</p>}
                    {project.stack?.frontend &&
                        <p className="card-text"><strong>Front-End:</strong> {project.stack.frontend}</p>}
                    {project.stack?.database &&
                        <p className="card-text"><strong>Database:</strong> {project.stack.database}</p>}
                    {project.stack?.backend &&
                        <p className="card-text"><strong>Backend:</strong> {project.stack.backend}</p>}
                    {project.stack?.hosting &&
                        <p className="card-text"><strong>Hosting:</strong> {project.stack.hosting}</p>}
                    {/*Displays project data not included in the standard project object format*/}
                    {project.data && project.data.map((item, index) =>
                        <p key={index}>
                            <span style={{fontWeight: 'bold'}}>{item[0]}</span> {item[1]}
                        </p>
                    )}
                </div>
                : null }
        </div>
    );
};

export default ProjectCard;
