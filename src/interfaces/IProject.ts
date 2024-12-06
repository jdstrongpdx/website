import ProjectEnum from "../enums/ProjectEnum";

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
}

interface ProjectStack {
    frontend: string | null;
    database: string | null;
    backend: string | null;
    hosting: string | null;
}
