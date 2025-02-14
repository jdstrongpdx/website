import SkillsEnum from "../enums/SkillEnum";
import {ICertificationCategory} from "../interfaces/ICertificate";

const certificateData: ICertificationCategory[] = [
    {
        title: "Microsoft AZ-900 Certification",
        certifications: [
            {
                link: "https://learn.microsoft.com/api/credentials/share/en-us/JoelStrong-5632/3D4C9BB4C55BA02D?sharingId=70B86CF6B6C94B8",
                type: "wide",
                imgLink: "./certifications/AZ900.png",
                title: "AZ-900 Azure Fundamentals Certified",
                redText: "AZ-900 Azure Fundamentals Certified",
                skills: [SkillsEnum.Azure]
            } , {
                link: "https://coursera.org/verify/specialization/UXVG5T2J9G5Y",
                type: "wide",
                imgLink: "./certifications/AZ900prep.png",
                title: "AZ-900 Azure Fundamentals Exam Prep",
                skills: [SkillsEnum.Azure]
            }
        ]}, {
        title: "Microsoft Back-End Developer Professional Certificates",
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
            , {
                link: "https://coursera.org/verify/P5SNT8T9G54C",
                type: "wide",
                imgLink: "./certifications/dotNetBackend.png",
                title: "Back-End Development with .NET",
                skills: [SkillsEnum.CSharp, SkillsEnum.DotNet, SkillsEnum.AspNet]
            }, {
                link: "https://coursera.org/verify/151QZMNKPYUA",
                type: "wide",
                imgLink: "./certifications/microsoftDatabase.png",
                title: "Database Integration and Management",
                skills: [SkillsEnum.SQL]
            }, {
                link: "https://coursera.org/verify/RTGIA65S5J4G",
                type: "wide",
                imgLink: "./certifications/microsoftSecurityAuthentication.png",
                title: "Security and Authentication",
                skills: [SkillsEnum.Security]
            }
        ]}, {
        title: "Meta Front-End Developer Professional Certificate",
        certifications: [
            {
                link: "https://coursera.org/verify/professional-cert/R64MC41UJZ6N",
                type: "wide",
                imgLink: "./certifications/metaFrontEndDeveloper.png",
                title: "Meta Front-End Developer Professional Certificate",
                skills: []
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
                link: "https://coursera.org/verify/F2HMGSIQPOW6",
                type: "wide",
                imgLink: "./certifications/metaReactBasics.png",
                title: "Meta React Basics",
                skills: [SkillsEnum.React]
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
            } , {

                link: "https://coursera.org/verify/SRG8ZTR5AYPP",
                type: "wide",
                imgLink: "./certifications/metaVersionControl.png",
                title: "Version Control",
                skills: [SkillsEnum.Git]
            } , {

                link: "https://coursera.org/verify/Q0H9IOR5ZNCG",
                type: "wide",
                imgLink: "./certifications/metaCapstone.png",
                title: "Front-End Developer Capstone",
                skills: []
            }
        ]}, {
        title: "Front-End Certificates",
        certifications: [
            {
                link: "https://coursera.org/verify/specialization/CFTYPY5EEDKE",
                type: "wide",
                imgLink: "./certifications/AdvancedJavaScript.png",
                title: "Advanced JavaScript",
                skills: [SkillsEnum.JavaScript]
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
            }, {
                link: "https://hyperskill.org/certificates/a1710545-13b2-45a1-b4fd-144ce0dc0519.pdf",
                type: "normal",
                imgLink: "./certifications/JavascriptIntro.png",
                title: "Introduction to JavaScript",
                skills: [SkillsEnum.JavaScript]
            }
        ]}, {
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
        title: "Python Certificates",
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
            },
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
                link: "https://hyperskill.org/certificates/e644e4cf-640a-4c89-88bb-a90f09e0b699.pdf",
                type: "normal",
                imgLink: "./certifications/IntroGit.png",
                title: "Introduction to Git",
                skills: [SkillsEnum.Git]
            }, {
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
