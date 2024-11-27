import React from "react";

const Certification = ({ link, type, imgLink, title}) => {
        return (
            <div className={type === "wide" ? "skillsChildWide" : "skillsChild"}>
                <a href={link}
                   target="_blank" rel="noopener noreferrer">
                    <img width={type === "wide" ? "410" : "300"}
                         alt={title}
                         border="0"
                         align="center"
                         src={imgLink}/>
                </a><p><strong>{title}</strong></p>
            </div>
        )

}

export default Certification
