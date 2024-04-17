import { Ariya } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "WEB DEVELOPER",
        company_name: "Ariya Infotech",
        icon: Ariya,
        iconBg: "#accbe1",
        date: "May 2020 - June 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "WEB INTERN",
        company_name: "Ariya Infotech",
        icon: Ariya,
        iconBg: "#fbc3bc",
        date: "April 2019 - April 2020",
        points: [
            "Initiated career in web development as an intern, gaining hands-on experience in building and testing features for e-commerce platforms using technologies such as React.js and Three.js. Collaborated with senior developers and cross-functional teams to learn best practices and contribute to the development cycle.",
        ],
    },
    

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/jdeora',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jyotiradityasinghdeora/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B98u8JJ54STKPad5ACH8n0A%3D%3D',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'King County House Sales',
        description: 'Developed an interactive Tableau dashboard to visualize real estate sales data for King County.',
        link: 'https://public.tableau.com/app/profile/jyotiraditya.singh.deora/viz/KingCountyHouseSales_17128008319570/KingCountyHouseSales?publish=yes',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Customer Churn Analysis',
        description: 'Engineered and fine-tuned a random forest algorithm to forecast customer churn.',
        link: 'https://github.com/jdeora/Customer-Churn-Analysis.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Call Center Trends',
        description: 'Enhanced Power BI proficiency through a PwC Switzerland job simulation, crafting dashboards for churn retention, call center operations, and diversity and inclusion, which optimized client insights through meticulous data visualization practices.',
        link: 'https://app.powerbi.com/groups/me/reports/a61e7911-dfde-42dd-984d-0b23c1bb4bdd?ctid=8d1a69ec-03b5-4345-ae21-dad112f5fb4f&pbi_source=linkShare',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Churn Customer Retention',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://app.powerbi.com/links/RuibUUNDaD?ctid=8d1a69ec-03b5-4345-ae21-dad112f5fb4f&pbi_source=linkShare',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Diversity & Inclusion',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://app.powerbi.com/links/8eIr7CIT_u?ctid=8d1a69ec-03b5-4345-ae21-dad112f5fb4f&pbi_source=linkShare',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
