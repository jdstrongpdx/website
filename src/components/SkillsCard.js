import React from 'react';
import { useNavigate } from 'react-router-dom';

const SkillsCard = ({ title, image, description, width, imgWidth, route, data }) => {
    const navigate = useNavigate();

    const cardWidth = width ? width : '300px';
    const imageWidth = imgWidth ? imgWidth : '50px';

    const handleClick = (src) => {
        navigate(src);
    }

    return (
        <div className="card"
             style={{ width: cardWidth}}
             onClick={() => handleClick(route)}
        >
            <img src={image} alt={title} style={{ maxWidth: imageWidth }} />
            {image
                ? <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    {description && <p className="card-description">{description}</p>}
                    {data && data.map((item, index) =>
                            <p key={index}>
                                <span style={{fontWeight: 'bold'}}>{item[0]}</span> {item[1]}
                            </p>
                        )}
                </div>
                : null }
        </div>
    );
};

export default SkillsCard;
