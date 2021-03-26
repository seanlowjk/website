import { SocialLink } from "./UserTypes";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
