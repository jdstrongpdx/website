import SkillsEnum from "../enums/SkillEnum";

export interface ICertification {
    link: string;
    type: string;
    imgLink: string;
    title: string;
    redText?: string;
    skills?: SkillsEnum[];
}

export interface ICertificationCategory {
    title: string;
    certifications: ICertification[];
}
