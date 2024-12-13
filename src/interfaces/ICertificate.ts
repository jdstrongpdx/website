import SkillsEnum from "../enums/SkillEnum";

export interface ICertification {
    link: string;
    type: string;
    imgLink: string;
    title: string;
    skills?: SkillsEnum[];
}

export interface ICertificationCategory {
    title: string;
    certifications: ICertification[];
}
