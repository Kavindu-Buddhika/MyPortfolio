import {
  pba,
  cscu,
  uwu,
  eligerlogo,
  villa,
  reviewer,
} from "../assets";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHtml5,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiC,
  SiGit,
  SiMysql,
  SiVite,
  SiDotnet,
  SiJsonwebtokens,
  SiDjango,
  SiPhp,
  SiTypescript,
  SiDialogflow,
} from "react-icons/si";

import { DiCss3, DiMsqlServer,DiPostgresql } from "react-icons/di";

import { TbBrandCSharp, TbBrandNextjs, TbBrandThreejs, TbBrandTypescript, TbBrandFlutter } from "react-icons/tb";

import { VscVscodeInsiders } from "react-icons/vsc";

export const resumeLink =
  "https://drive.google.com/file/d/1vkxyMDB5_KpMwt4QXFgT2aqdRizr8Czh/view?usp=sharing";

export const callToAction = "https://www.linkedin.com/in/kavindu-buddhika";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "extraCurricular",
  //   title: "Extra Curricular",
  // },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: uwu,
    title: " BSc (Hons) Computer Science & Technology",
    degree: "Bachelor of Science",
    duration: "2021 - 2025",
    content1: "Major: Software Development",
    content2: "Minor: Human-Computer Interaction",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Asoka Vidyalaya Colombo-10",
    degree: "",
    duration: "2012-2019",
    content1:
      "Completed G.C.E. Advanced Level examination in the Mathematics stream with a successful academic record.",
  },
];

// Add your past achievments
export const achievements = [
  {
    id: "a-1",
    icon: cscu,
    event: "CSCU | Certified Secure Computer User v2 exam",
    position: "Successfully completed",
    content1: "EC-Council certification",
    content2: "All requirements and criteria for Certified Secure Computer User v2 certification through examination administrated by EC-Council.",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: SiPhp,
        name: "php",
      },
      {
        id: "pl-2",
        icon: TbBrandCSharp,
        name: "Csharp",
      },
      {
        id: "pl-3",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-4",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-5",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-6",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-7",
        icon: DiCss3,
        name: "CSS",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiReact,
        name: "ReactJS", // JavaScript Library.
      },
      {
        id: "f-2",
        icon: SiBootstrap,
        name: "Bootstrap", // CSS framework.
      },
      {
        id: "f-3",
        icon: SiTailwindcss,
        name: "Tailwind CSS", // CSS framework.
      },
      {
        id: "f-4",
        icon: SiDotnet,
        name: ".NET", // Csharp framework.
      },
      {
        id: "f-5",
        icon: TbBrandNextjs,
        name: "next.js", //react framework.
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: VscVscodeInsiders,
        name: "VS Code",
      },
      {
        id: "t-3",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-4",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-5",
        icon: SiVite,
        name: "ViteJS",
      },
      {
        id: "t-6",
        icon: DiMsqlServer,
        name: "SQLServer",
      },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  // {
  //   organisation: "",
  //   logo: ,
  //   link: "",
  //   positions: [
  //     {
  //       title: "",
  //       duration: "",
  //       content: [
  //         {
  //           text: "",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "project-1",
    title: "The-Villa-Hotel",
    github: "https://github.com/kavindu-mane/The-Villa-Hotel",
    link: "",
    image: villa,
    content:
      "Streamlined Room Booking and Food Reservation Web Application",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: TbBrandThreejs,
        name: "ThreeJS",
      },
      {
        id: "icon-4",
        icon: TbBrandTypescript,
        name: "TypeScript",
      },
      {
        id: "icon-5",
        icon: DiPostgresql,
        name: "Postgresql",
      },
      {
        id: "icon-6",
        icon: TbBrandNextjs,
        name: "NextJS",
      },
      {
        id: "icon-7",
        icon: SiDialogflow,
        name: "Dialogflow",
      },
    ],
  },
  {
    id: "project-2",
    title: "ReViewer",
    github: "https://github.com/Kavindu-Buddhika/ReViewer",
    image: reviewer,
    content:
      "Online Book Review Web Application by using Python Django Framework.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS",
      },
      {
        id: "icon-3",
        icon: SiJsonwebtokens,
        name: "JWT",
      },
      {
        id: "icon-4",
        icon: SiDjango,
        name: "Django",
      },
    ],
  },
  {
    id: "project-3",
    title: "Eliger",
    github: "https://github.com/Kavindu-Buddhika/Eliger",
    image: eligerlogo,
    content:
      "The Vehicle and Driver Rent System is a platform that connects vehicle owners, drivers, and customers who need transportation service.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React",
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwindcss",
      },
      {
        id: "icon-3",
        icon: SiPhp,
        name: "PHP",
      },
      {
        id: "icon-4",
        icon: TbBrandFlutter,
        name: "Flutter",
      },
    ],
  },
];

// List out the extra curricular activities.
// export const extraCurricular = [
//   {
//     id: 1,
//     organisation: "Devfolio",
//     title: "UniDAO Lead",
//     duration: "December 2021 - Present",
//     content: [
//       {
//         text: "Selected among 5 students across the country to lead the initiative and grow the culture of Blockchain and Ethereum, powered by Devfolio.",
//         link: "https://www.linkedin.com/feed/update/urn:li:activity:7097977924686942209/",
//       },
//       {
//         text: "Led a cohort of 37 selected students over 6 weeks to learn and build in the Ethereum ecosystem.",
//         link: "https://www.linkedin.com/feed/update/urn:li:activity:7095310520282480641/",
//       },
//     ],
//     logo: devfolio,
//   },
//   {
//     id: 2,
//     organisation: "Google Developer Student Club, NITK",
//     title: "Co-Chair",
//     duration: "December 2021 - Present",
//     content: [
//       {
//         text: "Started HackClub to promote and spread the culture of Hackathons in the college. 20+ hackathons particiaptions, 15+ wins over the year.",
//         link: "",
//       },
//       {
//         text: "Co-designed and developed the official website of Incident, NITK with 15K+ visitors",
//         link: "https://incident.nitk.ac.in/",
//       },
//     ],
//     logo: gdsc,
//   },
// ];

// Links to the social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/kavindu-buddhika",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/Kavindu-Buddhika",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "kavindulakshan2980@gmail.com",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Kavindu Buddhika",
  githubUsername: "kavindu-buddhika",
  tagLine: "UWU | Uva Wellassa University of Sri Lanka",
  intro:
    "software developer who builds digital experiences, turning lines of code into meaningful creations.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];
