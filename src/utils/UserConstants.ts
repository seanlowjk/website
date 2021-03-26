import { ProjectItem, SocialLink } from "./UserTypes";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
