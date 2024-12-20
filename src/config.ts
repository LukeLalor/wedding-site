import type {
  Site,
  SocialObjects,
  WeddingConfig,
} from "./types";
import yaml from 'js-yaml';
import fs from "node:fs";

export const SITE: Site = {
  website: "https://ainara-luke.github.io/", // replace this with your deployed domain
  author: "Luke & Ainara",
  profile: "https://github.com/LukeLalor",
  desc: "Luke & Ainara's Wedding Website",
  title: "Ainara & Luke",
  ogImage: "luke-and-ainara-skiing.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  editPost: {},
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [];

const fileContents = fs.readFileSync('wedding-config.yaml', 'utf8');
export const WEDDINGCONFIG: WeddingConfig = yaml.load(fileContents) as WeddingConfig;
