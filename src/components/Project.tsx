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
    const images = !project.imageDisplay ? null :
        imageData.filter(image => image.project === project.project);
    return (
        <>
            <div className="project">
                <h3>{project.name}</h3>
                <h4>{project.date}</h4>
                <p><strong>App Type:</strong> {project.type}</p>

                {project.description ? <p><strong>Description:</strong> {project.description}</p> : null}
                {description}

                { project.stack &&
                    <>
                    <p><strong>Project Stack:</strong></p>
                    <ul>
                        {project.stack.frontend ? <li><strong>Frontend: </strong> {project.stack.frontend}</li> : null}
                        {project.stack.database ? <li><strong>Database: </strong> {project.stack.database}</li>: null}
                        {project.stack.backend ? <li><strong>Backend: </strong> {project.stack.backend}</li>: null}
                        {project.stack.hosting ? <li><strong>Hosting: </strong> {project.stack.hosting}</li>: null}
                    </ul>
                    </>
                }

                {project.repo ? <p><strong>Repository: </strong> <a href={project.repo}>{project.repo}</a></p> : null}
                {project.website ? <p><strong>Website: </strong> <a href={project.website}>{project.websiteText}</a></p> : null}

                {childrenBefore}

                {/* Note: images are prevented from being generated if project.imageDisplay is false in func above.*/}
                {images && (
                    <>
                        <h4>Project Images</h4>
                        <div className="gallery-row">
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
