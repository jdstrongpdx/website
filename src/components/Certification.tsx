import React from "react";

interface CertificationProps {
    link: string,
    type: string,
    imgLink: string,
    title: string
}

const Certification: React.FC<CertificationProps> = ({ link, type, imgLink, title}) => {
        return (
            <div className={type === "wide" ? "skillsChildWide" : "skillsChild"}>
                <a href={link}
                   target="_blank" rel="noopener noreferrer">
                    <img width={type === "wide" ? "410" : "300"}
                         alt={title}
                         className="shadow"
                         style={{ border:"0", alignItems:"center"}}
                         src={imgLink}/>
                </a><p><strong>{title}</strong></p>
            </div>
        )

}

export default Certification
