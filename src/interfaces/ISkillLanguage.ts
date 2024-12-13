import SkillsEnum from "../enums/SkillEnum";
import ProficiencyEnum from "../enums/ProficiencyEnum";

export default interface ISkillLanguage {
    title: string;
    image: string;
    description: string;
    skill: SkillsEnum;
    proficiency: ProficiencyEnum;
}
