import ProjectEnum from "../enums/ProjectEnum";
import SkillEnum from "../enums/SkillEnum";

export default interface IProjectData {
    title: string;
    image: string;
    data: [string, string][] | null;
    route: string;
    name: string;
    project: ProjectEnum;
    imageDisplay: boolean;
    date: string;
    type: string;
    description: string;
    stack: ProjectStack | null;
    website: string | null;
    websiteText: string | null;
    repo: string | null;
    skills: SkillEnum[];
}

interface ProjectStack {
    frontend: string | null;
    database: string | null;
    backend: string | null;
    hosting: string | null;
}
