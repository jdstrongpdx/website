import React from 'react';

const SkillsCard = ({ title, image, description }) => {
    return (
        <card>
            <img src={image} alt={title} />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
        </card>
    );
};

export default SkillsCard;
