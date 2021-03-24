import { JobExperienceItem, ProjectItem, SocialLink } from "./UserTypes";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const ExperienceItems: JobExperienceItem[] = [
  {
    title: "NUS CS2030: Programming Methodology II",
    role: "Teaching Assistant",
    duration: "Aug 2019 - ",
    description:
      `
        Facilitated the teaching of Object-Oriented Programming, Fundamental Software Engineering Principles 
        and Java 11 Streams Marked and went through coding to give feedback to undergraduates to 
        improve general code quality and fundamental software engineering principles.
      `
  },
  {
    title: "NUS CS2102: Database Systems", 
    role: "Teaching Assistant", 
    duration: "Jan 2021 - Apr 2021", 
    description: 
      `
        Facilitated the teaching of Relational Algebra, ER Diagram, SQL, Functional Dependencies and Normalization as part 
        of the course curriculum. Went through tutorial submissions and solutions to clarify uunderstanding and review
        concepts learnt throughout the semester. 
      `
  }, 
  {
    title: "Source Academy",
    role: "Research Intern",
    duration: "May 2020 - Jul 2020",
    description:
      "Worked as a Full-Stack Developer to deliver a gamefied platform for students in CS1101S: Programming Methodology. " +
      "Worked closely with the teaching team to gather user feedback to develop fluid user experience for incoming freshmen.",
  },
  {
    title: "NodeFlair",
    role: "Software Engineering Intern",
    duration: "Jan 2020 - Apr 2020",
    description:
      "Worked as a Full-Stack Developer to deliver features for talents and administrators in a fast-paced tech recruitment market. " +
      "Worked closely with product and engineering teams by running back-end features to deliver smoother user experience.",
  },
  {
    title: "NUS CS1101S: Programming Methodology",
    role: "Teaching Assistant",
    duration: "Aug 2019 - Dec 2019",
    description:
      "Taught basic recursion, lambda calculus and data structures such as lists and binary search trees for 7 Computer Science freshmen. " +
      "Marked and went through coding to give feedback to freshmen to clarify understanding and review basic concepts.",
  },
];

export const ProjectItems: ProjectItem[] = [
  {
    title: "CATcher",
    summary: `
    CATcher is a cross-platform application for Crowd-sourced 
    Anonymous Testing of software. It uses GitHub as the backend 
    for hosting bug reports.
    `, 
    backgroundImageUrl: "images/CATcher_logo.png",
    githubLink: "https://github.com/CATcher-org/CATcher",
    linkText: "Github Link",
  },
  {
    title: "Project Aether",
    summary:
      "Aether is a co-op multiplayer adventure game developyed for CS3247: Game Development. " +
      "Developed by a Team of 6 using Unity and GLSL",
    backgroundImageUrl: "images/aether.png",
    githubLink: "https://github.com/Eclmist/Aether",
    linkText: "Github Link",
  },
  {
    title: "Drop The Beat",
    summary:
      "Drop The Beat is a Flutter iOS and Android application built for real-time sharing of" +
      "music by geolocation! Built in a day for Hack n' Roll 2020.",
    backgroundImageUrl: "images/dropthebeat.png",
    githubLink: "https://github.com/seanlowjk/DropTheBeat",
    linkText: "Github Link",
  },
  {
    title: "$aveNUS",
    summary:
      "$aveNUS is a financial planning app for meal planning in NUS. " +
      "This was developed using Java and JavaFX for CS2103T: Software Engineering",
    backgroundImageUrl: "images/saveNUS.png",
    githubLink: "https://github.com/AY1920S1-CS2103T-F13-2/main",
    linkText: "Github Link",
  },
  {
    title: "Travelling Salesman Design Task",
    summary:
      "This project aims to design an interactive calendar to help travelling salesman navigate through cities and his or her meetings",
    backgroundImageUrl: "images/salesman.png",
    githubLink: "Salesman.pdf",
    linkText: "View PDF",
  },
  {
    title: "Roommates Design Task",
    summary:
      "This project aims to design an interactive mobile application to help young adults find roommates and enhance their roommate living experience",
    backgroundImageUrl: "images/roommates.png",
    githubLink: "Roommates.pdf",
    linkText: "View PDF",
  },
];

export const SocialLinks: SocialLink[] = [
  {
    buttonColor: "#545454",
    icon: faGithub,
    link: "https://github.com/seanlowjk",
  },
  {
    buttonColor: "#0e76a8",
    icon: faLinkedin,
    link: "https://linkedin.com/in/seanlowjk",
  },
  {
    buttonColor: "#0088CC",
    icon: faTelegram,
    link: "https://t.me/seanlowjk",
  },
  {
    buttonColor: "#0072c6",
    icon: faEnvelope,
    link: "mailto:sean.low.jk@u.nus.edu",
  },
];