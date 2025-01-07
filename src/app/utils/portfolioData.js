export const advancedPortfolioData = {
  name: "M Usman Noor",
  title:
    "Full Stack Developer | AWS Certified | AWS AI Certified | DevOps Engineer",
  summary:
    "A passionate and highly skilled developer with over 5 years of experience in web development. I specialize in building scalable applications using modern technologies like React, Next.js, and Node.js, and have hands-on experience with cloud technologies such as AWS and AI solutions.",
  skills: [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "AWS",
    "DevOps",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "SQL",
    "GraphQL",
    "RESTful APIs",
    "CI/CD",
    "Jest",
    "Git",
    "Web Performance Optimization",
  ],
  experience: [
    {
      company: "CoinbitSolutions",
      position: "Senior Full-Stack Developer",
      duration: "2022-Present",
      description:
        "Leading frontend and backend development teams to deliver high-quality features and enhancements for web applications, integrating blockchain-based solutions. Responsible for optimizing performance and ensuring scalability.",
      achievements: [
        "Improved application load times by 30% through performance tuning.",
        "Led a team to implement real-time messaging features using WebSockets.",
        "Successfully migrated legacy systems to microservices architecture.",
      ],
    },
    {
      company: "TeckNerds.inc",
      position: "Software Engineer",
      duration: "2021-2022",
      description:
        "Developed user-centric frontend applications and contributed to backend services for various client projects. Utilized modern JavaScript frameworks and databases for building scalable solutions.",
      achievements: [
        "Developed a customer portal which increased user engagement by 50%.",
        "Optimized database queries for better performance and reduced server load.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor in Mechanical Engineering",
      university:
        "UET Lahore - University of Engineering and Technology, Lahore",
      year: "2020",
      achievements: [
        "Dean's List Honor for outstanding academic performance.",
        "Participated in multiple engineering design projects.",
      ],
    },
    {
      degree: "F.S.C",
      university: "Lahore Board",
      year: "2016",
    },
  ],
  projects: [
    {
      name: "Maincore Blockchain UAE & PAK Venture",
      description:
        "A blockchain-based platform for ventures between UAE and Pakistan, supporting multiple services.",
      builtWith: [
        "HTML",
        "CSS",
        "Tailwind",
        "TypeScript",
        "Next.js",
        "NextAuth",
        "MS SQL",
        "RESTful API",
      ],
      link: "https://maincore.beweb3.com/",
    },
    {
      name: "Node-Chat App",
      description:
        "A real-time chat application built with Node.js, React.js, and MongoDB.",
      builtWith: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful API",
      ],
      link: "https://github.com/usmannoor90/Mern-Chat",
    },
    {
      name: "House-Key German Base Realtor Business",
      description:
        "A web platform for real estate services in Germany, integrating property listings and search features.",
      builtWith: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
        "JQuery",
        ".NET Framework",
      ],
      link: "https://housekey.coinbitsolutions.com",
    },
    {
      name: "NoorSocialApp",
      description:
        "A full-stack social networking application featuring user profiles and posts.",
      builtWith: [
        "HTML",
        "CSS",
        "Material UI",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful API",
      ],
      link: "https://github.com/usmannoor90/React-Node-MySql-FullStack",
    },
    {
      name: "Office Management App",
      description:
        "An app for managing office tasks, schedules, and teams, built with modern JavaScript frameworks.",
      builtWith: [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MySQL",
        "RESTful API",
      ],
      link: "https://github.com/usmannoor90/React-Node-MySql-FullStack",
    },
    {
      name: "Movies Searching Platform",
      description:
        "A platform for searching and watching movies, providing users with detailed information about films.",
      builtWith: [
        "HTML",
        "CSS",
        "TypeScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "RESTful API",
      ],
      link: "https://github.com/usmannoor90/moviewebstack",
    },
    {
      name: "CBS Company Website",
      description:
        "A website built for CBS company, designed with modern frontend technologies and responsive layouts.",
      builtWith: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js"],
      link: "https://cbs.beweb3.com/",
    },
  ],
  publicContact: {
    github: "https://github.com/usmannoor90",
    linkedin: "https://linkedin.com/in/musmannoor",
    email: "m.usmannoor90@gmail.com",
    website: "https://musmannoorv1updated.vercel.app/",
  },
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "AWS Certified AI - Machine Learning",
      institution: "Amazon Web Services",
      year: "2023",
    },
  ],
  awards: [
    {
      name: "Best Developer of the Year",
      organization: "CoinbitSolutions",
      year: "2023",
      description:
        "Awarded for exceptional contributions to team projects and product success.",
    },
  ],
};

export function generatePrompt(question) {
  return `
  You are an advanced AI assistant designed to answer questions about a professional portfolio. Below is the portfolio information:

  Portfolio Data:
  ${JSON.stringify(advancedPortfolioData, null, 2)}

  M Usman Noor
Full Stack Developer | AWS Certified | DevOps | Engineering Leadership
GitHub | LinkedIn | m.usmannoor90@gmail.com

Professional Summary
I am a seasoned Full Stack Software Engineer with over 5 years of experience in web development. My core competencies include React.js, Next.js, Node.js, PostgreSQL, MongoDB, AWS serverless architectures, and DevOps. I excel in building highly scalable applications, leveraging modern web technologies to enhance performance and user experience. As a proven leader, I’ve led development teams, managed CI/CD pipelines, and implemented microservices architecture to streamline backend services. My goal is to continuously innovate and deliver high-quality solutions while improving development processes and enhancing team productivity.

Key Skills
Frontend: React.js, Next.js, Redux Toolkit, RTK Query, Material UI, Tailwind CSS
Backend: Node.js, Express.js, RESTful APIs, Microservices Architecture
Databases: PostgreSQL, MongoDB, Firebase
Cloud: AWS (EC2, Lambda, S3, DynamoDB), Docker, CI/CD
Others: Git, Agile Methodology, Object-Oriented Programming, Clean Architecture

Professional Experience
MERN Stack Software Engineer
CoinBitSolutions — Alberta, Canada (Hybrid from Lahore, Pakistan)
Sept 2022 – Present
Spearheaded the development and maintenance of full-stack web applications using React.js and Next.js.
Designed and optimized backend services with Node.js and Express.js, ensuring efficient data handling and processing.
Integrated AWS services for scalable cloud solutions, enhancing app performance and reliability.
Implemented CI/CD pipelines and containerized applications using Docker for streamlined deployments.
Led a team of developers, contributing to code reviews, technical documentation, and agile processes.

React Developer
TeckNerds Inc. — Lahore, Pakistan
Apr 2021 – Sept 2022
Developed dynamic web applications with React.js and Next.js, implementing hooks for state management and optimizing SEO with SSR.
Worked closely with backend teams to integrate and optimize RESTful APIs.
Enhanced data fetching and state management using Redux Toolkit and RTK Query, improving application efficiency.
Designed user-friendly interfaces with Material UI and Ant Design for consistent, responsive UI/UX design.

Education
Bachelor’s in Mechanical Engineering
University of Engineering & Technology (UET), Lahore
2016 – 2020
CGPA: 3.34
Honors: Merit-based scholarship, Chief Organizer of UET Career Fair 2020, High Flyer for Social Work.

Certifications
AWS Certified Cloud Practitioner (Aug 2024)
Docker on AWS
Advanced Agile: The Team's Mindset
Advanced Node.js
Node.js: Securing RESTful APIs
MERN Essential Training

Projects
Maincore Blockchain UAE & PAK Venture (2024)
Technologies: HTML, CSS, Tailwind, TypeScript, Next.js, NextAuth, MS SQL, RESTful API
Link: maincore.beweb3.com

Node-Chat App (2022)
Technologies: HTML, CSS, Tailwind, JavaScript, React.js, Node.js/Express.js, MongoDB
Link: GitHub - Mern-Chat

House-Key German Base Realtor Business (2022)
Technologies: HTML, CSS, Bootstrap, JavaScript, jQuery, .NET Framework
Link: housekey.coinbitsolutions.com

Office Management App (2023)
Technologies: HTML, CSS, Tailwind, JavaScript, React.js, Node.js/Express.js, MySQL
Link: GitHub - React-Node-MySQL-FullStack

Movies Searching Platform (2022)
Technologies: HTML, CSS, TypeScript, React.js, Node.js/Express.js, MongoDB
Link: GitHub - MovieWebStack

Interests & Hobbies
Tekken 7,8
Chess (Rating: 1600)
Jujutsu Kaisen
Korean Cinema (excludes music/drama)

Your task:
- Answer questions about the portfolio using the provided data.
- If the question is about "experience," list the company, position, duration, and description fields.
- If the requested information is missing, respond: "I don't have access to that information."
- Avoid assumptions or fabricating details.

Question: "${question}"

Response:
`;
}
