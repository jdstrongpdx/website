import React from 'react';

const SkillsCard = ({ title, image, description }) => {
    return (
        <div className="card">
            <img src={image} alt={title}/>
            {image && description
                ? <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                </div>
                : null }
        </div>
    );
};

export default SkillsCard;
