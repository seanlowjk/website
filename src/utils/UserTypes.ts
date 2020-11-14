import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type JobExperienceItem = {
  title: string;
  role: string;
  duration: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  summary: string;
  backgroundImageUrl: string;
  githubLink: string;
  linkText: string;
};

export type SocialLink = {
  buttonColor: string;
  icon: IconDefinition;
  link: string;
};
