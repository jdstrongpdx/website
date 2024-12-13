import SkillsEnum from "./SkillEnum";

const certificateData = [
    {
        title: "Java",
        certifications: [
            {
                link: "https://hyperskill.org/certificates/f2e02db5-f71e-49f6-8d0e-16ab49feb9a7.pdf",
                type: "normal",
                imgLink: "./certifications/IntroJava.png",
                title: "Introduction to Java",
                skills: [SkillsEnum.Java]
            },
            {
                link: "https://hyperskill.org/certificates/df6a1e14-ac88-40f7-96bf-2a5e31fa7e14.pdf",
                type: "normal",
                imgLink: "./certifications/JavaDeveloper.png",
                title: "Java Developer",
                skills: [SkillsEnum.Java]
            },
            {
                link: "https://hyperskill.org/certificates/e2d4693c-4e90-450d-a207-7d9acc9e374c.pdf",
                type: "normal",
                imgLink: "./certifications/IntroSpringBoot.png",
                title: "Introduction to Spring Boot",
                skills: [SkillsEnum.Java, SkillsEnum.SpringBoot]
            },
            {
                link: "https://hyperskill.org/certificates/e2d4693c-4e90-450d-a207-7d9acc9e374c.pdf",
                type: "normal",
                imgLink: "./certifications/JavaBackend.png",
                title: "Java Backend Developer (Spring Boot)",
                skills: [SkillsEnum.Java, SkillsEnum.SpringBoot]
            },
        ]}, {
        title: "Front-End",
        certifications: [
            {
                link: "https://coursera.org/verify/professional-cert/R64MC41UJZ6N",
                type: "wide",
                imgLink: "./certifications/meta_front_end.png",
                title: "Meta Front-End Developer Professional Certificate",
                skills: [SkillsEnum.HTML, SkillsEnum.HTML, SkillsEnum.JavaScript, SkillsEnum.React, SkillsEnum.UxUi, SkillsEnum.Git]
            }, {
                link: "https://coursera.org/verify/specialization/CFTYPY5EEDKE",
                type: "wide",
                imgLink: "./certifications/AdvancedJavaScript.png",
                title: "Advanced JavaScript",
                skills: [SkillsEnum.JavaScript]
            }, {
                link: "https://coursera.org/verify/9HO3N1IXEHL0",
                type: "wide",
                imgLink: "./certifications/metaHtmlCss.png",
                title: "HTML and CSS in Depth",
                skills: [SkillsEnum.HTML, SkillsEnum.CSS]
            }, {
                link: "https://coursera.org/verify/TLLPJGAZ3B2A",
                type: "wide",
                imgLink: "./certifications/metaJavaScript.png",
                title: "Programming with JavaScript",
                skills: [SkillsEnum.JavaScript]
            }, {
                link: "https://coursera.org/verify/8U39UCIHFL04",
                type: "wide",
                imgLink: "./certifications/metaReactAdvanced.png",
                title: "Meta Advanced React",
                skills: [SkillsEnum.React]
            }, {
                link: "https://coursera.org/verify/43GJ80J0798S",
                type: "wide",
                imgLink: "./certifications/metaUiUx.png",
                title: "Principles of UX/UI Design",
                skills: [SkillsEnum.UxUi]
            }, {
                link: "https://coursera.org/verify/AFAOSQ30WF8Y",
                type: "wide",
                imgLink: "./certifications/AdvancedReactScrimba.png",
                title: "Scrimba Advanced React",
                skills: [SkillsEnum.React]
            }, {
                link: "https://coursera.org/verify/KRRVQWPS7HY5",
                type: "wide",
                imgLink: "./certifications/ReusableReact.png",
                title: "Building Reusable React",
                skills: [SkillsEnum.React]
            }
        ]}, {
        title: "Microsoft Backend",
        certifications: [
            {
                link: "https://coursera.org/verify/CV3XUHHEAVSP",
                type: "wide",
                imgLink: "./certifications/MicrosoftBackend.png",
                title: "Foundations of Coding Back-End",
                skills: [SkillsEnum.CSharp, SkillsEnum.DotNet]
            }, {
                link: "https://coursera.org/verify/VRG300EL9FD4",
                type: "wide",
                imgLink: "./certifications/CSharp.png",
                title: "Introduction to Programming with C#",
                skills: [SkillsEnum.CSharp]
            }
        ]}, {
        title: "Python ",
        certifications: [
            {
                link: "https://hyperskill.org/certificates/142107e4-68cd-4d83-bd0c-1d53b085e767.pdf",
                type: "normal",
                imgLink: "./certifications/IntroPython.png",
                title: "Introduction to Python",
                skills: [SkillsEnum.Python]
            } , {
                link: "https://hyperskill.org/certificates/f2e02db5-f71e-49f6-8d0e-16ab49feb9a7.pdf",
                type: "normal",
                imgLink: "./certifications/PythonCore.png",
                title: "Python Core",
                skills: [SkillsEnum.Python]
            }
        ]}, {
        title: "Artificial Intelligence",
        certifications: [
            {
                link: "https://coursera.org/verify/specialization/O3FHPSKMKPN3",
                type: "wide",
                imgLink: "./certifications/gcpGenerativeAI.png",
                title: "Introduction to Generative AI",
                skills: [SkillsEnum.AI]
            }
        ]}, {
        title: "DevOps",
        certifications: [
            {
                link: "https://hyperskill.org/certificates/9451fed6-62ed-4538-8b3c-5e4b418593c2.pdf",
                type: "normal",
                imgLink: "./certifications/IntroDocker.png",
                title: "Introduction to Docker",
                skills: [SkillsEnum.Docker]
            } , {
                link: "https://coursera.org/verify/IK02GKZWTS14",
                type: "wide",
                imgLink: "./certifications/AgileProjectManagement.png",
                title: "Agile Project Management",
                skills: [SkillsEnum.Agile]
            } , {

                link: "https://coursera.org/verify/SRG8ZTR5AYPP",
                type: "wide",
                imgLink: "./certifications/metaVersionControl.png",
                title: "Version Control",
                skills: [SkillsEnum.Git]
            }
        ]}, {
        title: "Diploma - Bachelor of Science in Computer Science",
        certifications: [
            {
                link: "https://www.michaelsutter.com/ediploma?fn=diplomastatuscheck&key=02000000343d3683d10c064811946bb80683c96d85b6c0b9fa40c5cfe971fa505ced7b2c54a73b35856352081c6fb8833728fa7c1a1f042659c17369b0c64c4cb2f3bfff",
                type: "wide",
                imgLink: "./certifications/Diploma.png",
                title: "Bachelor of Science in Computer Science",
            }
        ]},
];

export default certificateData;
