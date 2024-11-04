import React from "react";

const Certification = ({ link, type, imgLink, title}) => {
    if (type === "wide") {
        return (
            <container className="skillsChildWide">
                <a href={link}
                   target="_blank" rel="noopener noreferrer">
                    <img width="410" alt={title} border="0" align="center"
                         src={imgLink}/>
                </a><p><strong>{title}</strong></p>
            </container>
        )
    } else {
        return (
            <container className="skillsChild">
                <a href={link}
                   target="_blank" rel="noopener noreferrer">
                    <img height="425" alt={title} border="0" align="center"
                         src={imgLink}/>
                </a><p><strong>{title}</strong></p>
            </container>
        )
    }

}

export default Certification
