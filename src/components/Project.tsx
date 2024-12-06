import imageData from "../data/imageData";
import GalleryModal from "./GalleryModal";
import React from "react";
import IProjectData from "../interfaces/IProject";

interface ProjectProps {
    project: IProjectData;
    childrenBefore?: React.ReactNode;
    childrenAfter?: React.ReactNode;
    description?: React.ReactNode;
}


const Project: React.FC<ProjectProps> = ({ project, childrenBefore, childrenAfter, description }) => {
    const images = !project.abbreviation ? null :
        imageData.filter(image => image.project === project.abbreviation);
    return (
        <>
            <div className="project">
                <h3>{project.name}</h3>
                <h4>{project.date}</h4>
                <p><strong>App Type:</strong>{project.type}</p>

                {project.description ? <p><strong>Description:</strong>{project.description}</p> : null}
                {description}

                { project.stack &&
                    <>
                    <p><strong>Project Stack:</strong></p>
                    <ul>
                        {project.stack.frontend ? <li><em>Frontend: </em>{project.stack.frontend}</li> : null}
                        {project.stack.database ? <li><em>Database: </em>{project.stack.database}</li>: null}
                        {project.stack.backend ? <li><em>Backend: </em>{project.stack.backend}</li>: null}
                        {project.stack.hosting ? <li><em>Hosting: </em>{project.stack.hosting}</li>: null}
                    </ul>
                    </>
                }

                {project.repo ? <p><em>GitHub Repository: </em> <a href={project.repo}>{project.repo}</a></p> : null}
                {project.website ? <p><em>Website: </em> <a href={project.website}>{project.websiteText}</a></p> : null}

                {childrenBefore}

                {images && (
                    <>
                        <h4>Project Images</h4>
                        <div className="centered">
                            {images.map((image, index) => (
                                <GalleryModal
                                    key={index}
                                    imageSrc={'/' + image.src}
                                    altText={image.description}
                                    label={image.description}
                                />
                            ))}
                        </div>
                    </>
                )}

                {childrenAfter}
            </div>
        </>
    )
}

export default Project;
