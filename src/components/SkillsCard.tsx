import React from 'react';

interface SkillsCardProps {
    key: number;
    title: string
    image: string;
    description: string;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, image, description }) => {

    return (
        <div className="card"
        >
            <img src={image} alt={title} style={{ height: '50px' }} />
            {image
                ? <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    {description && <p className="card-text">{description}</p>}
                </div>
                : null }
        </div>
    );
};

export default SkillsCard;
