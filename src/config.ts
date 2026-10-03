export interface Project {
    id: number;
    title: string;
    category: string;
    technologies: string | string[];
    image: string;
    description: string;
    githubLink?: string;
    liveLink?: string;
    youtubeLink?: string;
}

export interface Certificate {
    title: string;
    credential: string;
    issuer: string;
    date?: string;
    verifyLink?: string;
}

export const config = {
    developer: {
        name: "Adeeb",
        fullName: "Mohammed Ainan Adeeb",
        title: "Student Software Developer",
        description:
            "Computer Science (Data Science) student building practical software with Python, AI, data, APIs, and modern development tools.",
    },

    social: {
        github: "adeebadel",
        email: "adelarective@gmail.com",
        location: "Bengaluru, India",
    },

    about: {
        title: "About Me",
        description:
            "I am a Computer Science (Data Science) student at CMR University, Bengaluru, building my skills across Python, AI, data, software development, and modern web technologies.\n\nI enjoy turning ideas into practical software projects, especially projects involving AI, automation, data, and useful developer tools.\n\nAlongside technology, my experience in business development and AIESEC has helped me develop leadership, teamwork, communication, and cross-cultural collaboration skills.\n\nI am currently working toward a career in Data Science and AI while continuing to build, experiment, and learn through real projects.",
    },

    certificates: [
        {
            title: "Excel from Beginner to Advanced 2026",
            issuer: "Udemy",
            date: "October 3, 2026",
            credential: "Course Certificate",
            verifyLink:
                "https://ude.my/UC-f61a2f3d-fe41-430a-a2dd-b9b1e24a6e60",
        },
        {
            title: "Data Science Methodology",
            issuer: "IBM / Coursera",
            date: "August 15, 2025",
            credential: "Course Certificate",
            verifyLink:
                "https://coursera.org/verify/0O7WYZ38PDP3",
        },
        {
            title: "Tools for Data Science",
            issuer: "IBM / Coursera",
            date: "August 14, 2025",
            credential: "Course Certificate",
            verifyLink:
                "https://coursera.org/verify/STXSFOJG349U",
        },
        {
            title: "Data Science Orientation",
            issuer: "Coursera",
            date: "August 7, 2025",
            credential: "Credly Badge",
            verifyLink:
                "https://www.credly.com/badges/beff42ac-5d4e-4c99-9154-869d3c6b36f8",
        },
        {
            title: "What is Data Science?",
            issuer: "IBM / Coursera",
            date: "August 7, 2025",
            credential: "Course Certificate",
            verifyLink: "",
        },
        {
            title: "Time Series Analysis using Python",
            issuer: "Wingspan",
            date: "September 30, 2026",
            credential: "Course Certificate",
            verifyLink: "",
        },
        {
            title: "Leadership Development Experience",
            issuer: "AIESEC",
            date: "October 9, 2024",
            credential: "Leadership Certificate",
            verifyLink: "",
        },
        {
            title: "Digital Marketing Internship",
            issuer: "Peunier",
            date: "August 1, 2024",
            credential: "Internship Certificate",
            verifyLink: "",
        },
    ] as Certificate[],

    experiences: [
        {
            position: "Business Development Intern",
            company: "Peunier",
            period: "July 2024 - August 2024",
            location: "Bengaluru, India",
            description:
                "Business development internship experience at Peunier.",
            responsibilities: [
                "Worked as a Business Development Intern at Peunier",
                "Gained practical exposure to business development in a professional environment",
            ],
            technologies: ["Business Development", "Communication", "Research"],
        },
        {
            position: "Exchange Volunteer",
            company: "AIESEC — Skill Up / Egypt",
            period: "August 2024 - October 2024",
            location: "Egypt",
            description:
                "Participated in an AIESEC global volunteer experience involving collaboration with local NGOs and community projects.",
            responsibilities: [
                "Collaborated with local NGOs and community projects to drive meaningful social impact",
                "Planned and executed cultural and educational initiatives",
                "Developed leadership, teamwork, and cross-cultural communication skills",
            ],
            technologies: [
                "Global Volunteering",
                "Leadership",
                "Teamwork",
                "Cross-cultural Communication",
            ],
        },
        {
            position: "Member & Leadership Roles",
            company: "AIESEC Bengaluru Local Committee",
            period: "August 2024 - August 2025",
            location: "Bengaluru, India",
            description:
                "Progressed through multiple leadership and international relations roles, working with multicultural teams and international talent programs.",
            responsibilities: [
                "Team Member — Outgoing Global Volunteer (Aug 2024 - Feb 2025): Facilitated and supported global volunteer programs, ensuring smooth onboarding and ongoing engagement for outgoing talent",
                "Team Leader — Incoming Global Talent (Feb 2025 - Apr 2025): Led operational management for international talent programs and supervised new members",
                "Vice President — Youth Speak Forum 2025 Conference Committee (Feb - Mar 2025): Led the student conference with a focus on youth leadership and social impact",
                "International Relations Specialist — Philippines Entity Support Team (Mar - Jun 2025): Supported collaborative projects with AIESEC Philippines and strengthened international team coordination",
            ],
            technologies: [
                "Leadership",
                "International Relations",
                "Team Management",
                "Event Management",
                "Cross-cultural Communication",
            ],
        },
        {
            position: "Student Program Ambassador",
            company: "Internshala",
            period: "",
            location: "India",
            description:
                "Participated as an Internshala Student Program Ambassador.",
            responsibilities: [
                "Represented the Internshala Student Program",
            ],
            technologies: [
                "Communication",
                "Student Engagement",
                "Community",
            ],
        },
    ],

    projects: [
        {
            id: 1,
            title: "ProcureAI",
            category: "AI / Document Intelligence",
            technologies:
                "Python, Flask, pypdf, ReportLab, Gunicorn, PDF Processing",
            image:
                "https://raw.githubusercontent.com/adeebadel/procureAI/main/procureai-dashboard.png.png",
            description:
                "An AI-powered tender and bid compliance intelligence platform that extracts requirements from procurement documents, matches them against bidder evidence, identifies missing or conflicting information, and generates evidence-based compliance reports.",
            githubLink: "https://github.com/adeebadel/procureAI",
        },
        {
            id: 2,
            title: "CareerAI",
            category: "AI / Career Tech",
            technologies:
                "Python, Flask, HTML5, CSS3, Jinja2, pdfplumber, python-docx, Regular Expressions",
            image:
                "https://raw.githubusercontent.com/adeebadel/ATS-Resume-Builder/main/assets/Home-Page.png.png",
            description:
                "A Flask-based resume analyzer and ATS checker that parses PDF and DOCX resumes, calculates ATS scores, detects technical skills and contact information, compares resumes with job descriptions, and provides actionable improvement suggestions.",
            githubLink:
                "https://github.com/adeebadel/ATS-Resume-Builder",
        },
        {
            id: 3,
            title: "Project NOVA",
            category: "Python / Productivity",
            technologies:
                "Python, OOP, JSON, File Handling, Datetime, Python Modules",
            image: "https://raw.githubusercontent.com/adeebadel/Project-Nova/main/nova.png",
            description:
                "A continuously evolving Python productivity application built while learning software development. NOVA includes user profiles, task management, priorities, persistent JSON storage, task statistics, motivation features, error handling, and an expanding modular architecture.",
            githubLink:
                "https://github.com/adeebadel/Project-Nova",
        },
    ] as Project[],

    contact: {
        email: "",
        github: "https://github.com/adeebadel",
        linkedin:
            "https://www.linkedin.com/in/mohammed-ainan-adeeb-24a8a1288/",
        instagram:
            "https://www.instagram.com/adeebadelarective/?hl=en",
    },

    skills: {
        develop: {
            title: "AI & SOFTWARE DEVELOPMENT",
            description: "Building with AI, code & modern tools",
            details:
                "Building software with Python, AI technologies, APIs, automation, and modern development tools. Experienced in using AI-assisted workflows to prototype, develop, analyze, and improve practical applications.",
            tools: [
                "Python",
                "AI",
                "Machine Learning",
                "Generative AI",
                "LLMs",
                "AI APIs",
                "Prompt Engineering",
                "AI Tools",
                "Flask",
                "JavaScript",
                "HTML",
                "CSS",
                "REST APIs",
                "Git",
                "GitHub",
            ],
        },

        design: {
            title: "DATA & BUSINESS",
            description: "Data-driven thinking & execution",
            details:
                "Working with data analysis, SQL, visualization, business development, product strategy, and collaborative projects while applying technology to practical problems.",
            tools: [
                "SQL",
                "Pandas",
                "NumPy",
                "Data Visualization",
                "Product Strategy",
                "Business Development",
                "Digital Content Creation",
                "Leadership",
                "Teamwork",
                "Problem-Solving",
            ],
        },
    },
};