import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Joachim N Mhlongo",
    title: "Full Stack Developer",
    email: "jnmhlongo@hotmail.com",
    phone: "+27837824119",
    location: "Barberton & Matsulu, Mpumalanga | Pretoria & Johannesburg, Gauteng",
    profileImage:
      "https://res.cloudinary.com/jaykimsly/image/upload/v1668129061/Portfolio/2017-06-19-15-34-49-383_e2hhjo.jpg",
    aboutImage:
      "https://res.cloudinary.com/jaykimsly/image/upload/v1668129061/Portfolio/IMG_20200922_090340_w8hwc3.jpg",
    ogImage:
      "https://res.cloudinary.com/jaykimsly/image/upload/v1668129061/Portfolio/2017-06-19-15-34-49-383_e2hhjo.jpg",
    siteUrl: "https://joachim-portfolio.vercel.app",
    typewriterWords: [
      "Hi, I'm Joachim N Mhlongo",
      "Full-Stack Developer | .NET Core · C# · Vue.js · Flutter · Azure",
      "Available for Hire — Intermediate to Senior Roles & Project Contracts",
      "<Wanted To Be A Ninja But Chose Code Instead />",
    ],
    bio: [
      "Full-stack developer specialising in scalable, cloud-driven systems built on modern Microsoft and JavaScript technologies. I operate across backend, frontend, mobile, and cloud automation — engineering solutions that are stable, performant, and maintainable.",
      "My track record includes delivering enterprise features in .NET Core, C#, Vue.js 3, Flutter, and SQL Server, engineering Azure Function Apps with Speech-to-Text pipelines, driving ML-related integrations, and modelling data for Power BI reporting. I contribute to architecture decisions, conduct cross-team code reviews, and unblock technical challenges across the stack.",
      "I perform best when solving complex problems, optimising systems end-to-end, and shipping clean engineering that aligns with business objectives. I thrive in roles where I can build, improve, mentor, and collaborate.",
      "Currently open to intermediate and senior-level positions — whether that is a permanent role within a product or engineering team, or contract-based project work where you need a reliable developer to ship and deliver. Let's talk.",
    ],
  },

  socials: [
    { url: "https://wa.me/+27837824119", label: "WhatsApp" },
    { url: "https://instagram.com/jaykimsly", label: "Instagram" },
    { url: "https://gitlab.com/jaykimsly", label: "GitLab" },
    { url: "https://github.com/jaykimsly", label: "GitHub" },
    { url: "https://linkedin.com/in/jaykimsly", label: "LinkedIn" },
  ],

  experience: [
    {
      id: 1,
      company: "Digital Solution Foundry",
      role: "Software Developer",
      companyLogo:
        "https://media.licdn.com/dms/image/v2/C4D0BAQEQb8dJUvgzpA/company-logo_200_200/company-logo_200_200/0/1630570227521/digital_solution_foundry_logo",
      period: "March 2023 - Present",
      techStack: [
        {
          name: "C#",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: ".NET",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
        },
        {
          name: "Vue.js",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Flutter",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
          name: "SQL Server",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
        },
        {
          name: "Azure",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        },
      ],
      points: [
        "Contributed to the architecture and development of enterprise-grade systems including Pace and Case Management platforms",
        "Built and maintained full-stack web applications using .NET Framework, .NET Core, Vue.js 3, Flutter, and SQL Server",
        "Engineered and maintained Azure Function Apps, including a production Speech-to-Text processing pipeline",
        "Managed cloud infrastructure through Azure Portal and orchestrated deployments via Azure DevOps Server",
        "Delivered feature updates for the EPPI Mapper project (University of London, Cambridge) and supported ML-driven requirements",
        "Designed and optimised Power BI data models for reporting and business analytics",
        "Conducted pull request reviews across multiple codebases to enforce code quality and architectural consistency",
        "Mentored team members and drove technical collaboration across cross-functional teams within an Agile workflow",
      ],
    },
    {
      id: 2,
      company: "The Digital Academy",
      role: "Full Stack Developer Intern",
      companyLogo:
        "https://ui-avatars.com/api/?name=Digital+Academy&background=2563eb&color=fff&size=200&font-size=0.33",
      period: "June 2022 - May 2023",
      techStack: [
        {
          name: "Angular",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
          name: "Node.js",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "PostgreSQL",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Docker",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "React",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
      ],
      points: [
        "Built full-stack applications using Angular 2+, Bootstrap, Node.js, and PostgreSQL",
        "Designed UI/UX prototypes and interactive wireframes in Figma",
        "Delivered responsive web applications on the MEAN and PERN stacks",
        "Managed version control with Git and containerised deployments using Docker and Heroku",
        "Led sprint deliverables and mentored fellow developers across project teams",
        "Applied React, containerisation workflows, and modern software development patterns",
      ],
    },
    {
      id: 3,
      company: "Tshwane University of Technology",
      role: "Student Assistant",
      companyLogo:
        "https://ui-avatars.com/api/?name=TUT&background=006400&color=fff&size=200&font-size=0.4",
      period: "March 2019 - December 2019",
      techStack: [
        {
          name: "C++",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "Java",
          iconUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
      ],
      points: [
        "Facilitated instruction in Object-Oriented Programming and Data Structures",
        "Guided students across multiple programming languages and development environments",
        "Delivered troubleshooting and technical support during practical lab sessions",
        "Supported faculty with system administration, lab setup, and curriculum resource preparation",
      ],
    },
  ],

  skills: [
    // Backend & Languages
    {
      name: "C#",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      proficiency: 80,
    },
    {
      name: ".NET",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
      proficiency: 80,
    },
    {
      name: "TypeScript",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      proficiency: 85,
    },
    {
      name: "JavaScript",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      proficiency: 85,
    },
    // Frontend Frameworks
    {
      name: "Vue.js",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      proficiency: 80,
    },
    {
      name: "Angular",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      proficiency: 75,
    },
    {
      name: "React",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      proficiency: 85,
    },
    {
      name: "Next.js",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      proficiency: 80,
    },
    // Mobile & UI
    {
      name: "Flutter",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      proficiency: 70,
    },
    {
      name: "Tailwind CSS",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      proficiency: 90,
    },
    // Cloud & DevOps
    {
      name: "Azure",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      proficiency: 75,
    },
    {
      name: "Docker",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      proficiency: 70,
    },
    // Databases
    {
      name: "SQL Server",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      proficiency: 80,
    },
    {
      name: "PostgreSQL",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      proficiency: 75,
    },
    // Runtime & Tools
    {
      name: "Node.js",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      proficiency: 80,
    },
    {
      name: "Git",
      iconUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      proficiency: 85,
    },
  ],

  projects: [
    {
      id: 1,
      name: "My Portfolio",
      description:
        "Personal portfolio built with Next.js, TypeScript, and Tailwind CSS featuring dynamic content and responsive design",
      html_url: "https://github.com/jaykimsly/Portfolio101",
      homepage: "https://www.jaykimsly.co.za",
      language: "TypeScript",
      topics: ["nextjs", "portfolio"],
      updated_at: "2023-01-13",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 2,
      name: "Magobholi",
      description: "Modern, responsive portfolio website showcasing brand identity, services, and online presence with scalable architecture",
      html_url: "https://github.com/jaykimsly/magobholi",
      homepage: "https://www.magobholi.co.za",
      language: "TypeScript",
      topics: ["portfolio", "business"],
      updated_at: "2025-01-11",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 3,
      name: "Lisedasc",
      description: "Professional portfolio for a safety consulting firm with SEO-optimised structure and responsive layout",
      html_url: "https://github.com/jaykimsly/lisedasc-portfolio",
      homepage: "https://www.lisedasc.co.za",
      language: "TypeScript",
      topics: ["portfolio", "consulting"],
      updated_at: "2025-12-09",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 4,
      name: "Eduscope",
      description: "Educational platform demo with dynamic content management and modern UI architecture",
      html_url: "https://github.com/jaykimsly/eduscope",
      homepage: "https://eduscope.vercel.app",
      language: "TypeScript",
      topics: ["education", "demo"],
      updated_at: "2025-05-21",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 5,
      name: "Snevek Engineering",
      description: "Corporate website for an engineering firm featuring service showcases and professional branding",
      html_url: "https://github.com/jaykimsly/snevek-engineering",
      homepage: "https://www.snevek.co.za",
      language: "TypeScript",
      topics: ["engineering", "business"],
      updated_at: "2025-06-21",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 6,
      name: "Mountain View Bar",
      description: "Modern landing page for a hospitality business with responsive design and visual storytelling",
      html_url: "https://github.com/jaykimsly/Mountain-view-bar",
      homepage: "https://mountain-view-bar.vercel.app",
      language: "TypeScript",
      topics: ["landing-page", "coffee"],
      updated_at: "2025-07-15",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 7,
      name: "Hospital Management System",
      description: "Full-stack hospital management system with patient records, scheduling, and admin dashboards",
      html_url: "https://github.com/jaykimsly/Hospital-Management-System",
      homepage: "https://hospital-management-system-phi.vercel.app",
      language: "TypeScript",
      topics: ["healthcare", "management"],
      updated_at: "2023-01-15",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 8,
      name: "Email Signature Generator",
      description: "Developer utility for generating standards-compliant professional email signatures",
      html_url: "https://github.com/jaykimsly/email-signature-generator",
      homepage: "https://email-signature-generator-drab.vercel.app",
      language: "JavaScript",
      topics: ["tool", "email"],
      updated_at: "2023-02-05",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 9,
      name: "Bottle Store Frontend",
      description: "E-commerce frontend with product catalogue, cart functionality, and responsive UI",
      html_url: "https://github.com/jaykimsly/bottleStore_frontend",
      homepage: "https://bottle-store-frontend.vercel.app",
      language: "TypeScript",
      topics: ["ecommerce", "frontend"],
      updated_at: "2023-02-23",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 10,
      name: "Legacy Gray Frontend",
      description: "Modern frontend leveraging React Server Components for optimised rendering and performance",
      html_url: "https://github.com/jaykimsly/legacy-gray-frontend",
      homepage: "https://legacy-gray-frontend.vercel.app",
      language: "TypeScript",
      topics: ["react", "frontend"],
      updated_at: "2025-12-09",
      stargazers_count: 0,
      forks_count: 0,
    },
    {
      id: 11,
      name: "Final Project",
      description: "Capstone full-stack application demonstrating end-to-end software development capabilities",
      html_url: "https://github.com/jaykimsly/FinalXongie",
      homepage: "https://final-project-six-alpha.vercel.app",
      language: "JavaScript",
      topics: ["project"],
      updated_at: "2023-06-09",
      stargazers_count: 0,
      forks_count: 0,
    },
  ],
};
