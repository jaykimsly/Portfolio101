export interface SocialLink {
  url: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
  aboutImage: string;
  typewriterWords: string[];
  bio: string[];
  siteUrl: string;
  ogImage: string;
}

export interface ExperienceEntry {
  id: number;
  company: string;
  role: string;
  companyLogo: string;
  period: string;
  techStack: TechIcon[];
  points: string[];
}

export interface TechIcon {
  name: string;
  iconUrl: string;
}

export interface SkillEntry {
  name: string;
  iconUrl: string;
  proficiency: number;
}

export interface ProjectEntry {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  topics: string[];
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  socials: SocialLink[];
  experience: ExperienceEntry[];
  skills: SkillEntry[];
  projects: ProjectEntry[];
}
