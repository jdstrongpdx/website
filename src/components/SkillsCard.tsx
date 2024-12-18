import React from 'react';
import ProficiencyEnum from "../enums/ProficiencyEnum";
import SkillsEnum from "../enums/SkillEnum";

interface SkillsCardProps {
    key: number;
    title: string
    image: string;
    description: string;
    skill: SkillsEnum
    proficiency: ProficiencyEnum;
    skillMap: Record<SkillsEnum, { count: number; titles: string[] }>;
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title, image, description, proficiency, skill, skillMap}) => {
    const certificateCountString: string = !skillMap[skill]?.count ? ""
                                            : skillMap[skill]?.count === 1 ? "1 Certificate"
                                            : `${skillMap[skill]?.count} Certificates`;

    return (
        <div className="card"
        >
            <img src={image} alt={title} style={{ height: '50px' }} />
            {image
                ? <div className="card-content">
                    <h3>{title}</h3>
                    <h5 style={{marginTop: '15px', marginBottom: '0'}}>{ProficiencyEnum[proficiency]}</h5>
                    <input
                        style={{marginTop: '0', marginBottom: '0', width: '90%'}}
                        type="range"
                        id="proficiency"
                        name="proficiency"
                        min="-1"
                        max="3"
                        value={proficiency}
                        disabled
                    />
                    <p style={{color: '#4e6b97', fontWeight: '700'}}>{certificateCountString}</p>
                    {description && <p><strong>Experience: </strong>{description}</p>}
                </div>
                : null}


        </div>
    );
};

export default SkillsCard;
