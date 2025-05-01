import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of hands-on experience, I have worked with a variety of technologies, including React, Next.js, Flask, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Software Engineer",
    company: "Personal Projects",
    description: `Developed full-stack applications such as DriveBuddy, a car rental platform, and SolarMart, an e-commerce site for solar products. Contributed to open-source projects on GitHub, focusing on JavaScript, Python, and web technologies.`,
    technologies: ["React.js", "Next.js", "Flask", "MongoDB", "Stripe", "MySQL"],
  },
  {
    year: "September 2024",
    role: "Software Engineering Virtual Experience",
    company: "J.P. Morgan (Forage)",
    description: `Completed a virtual internship where I set up a local development environment, fixed repository issues, and utilized JPMorgan Chase’s open-source library Perspective to generate a real-time data feed for traders.`,
    technologies: ["Python", "JavaScript", "React.js", "Perspective"],
  }
];

export const PROJECTS = [
  // {
  //   title: "E-Commerce Website",
  //   image: project1,
  //   description:
  //     "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  //   technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  // },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  // },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
  {
    title: "Prayer App",
    image: "/projects/prayer-app.png",
    description: "A web app that shows daily prayer times based on location. Built with React and Tailwind CSS.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    liveDemo: "https://prayer-app-beta.vercel.app/",
    github: "https://github.com/aissap/Prayer_app",
  },
  {
    title: "Food App",
    image: "/projects/food-app.png",
    description: "A clean and responsive food ordering interface where users can browse and place orders.",
    technologies: ["React.js", "Tailwind CSS", "Vite"],
    liveDemo: "https://food-app-namk-6hhaiyt6l-aissa-zerrads-projects.vercel.app/",
    github: "https://github.com/aissap/food-app",
  },
  {
    title: "Crypto Price Tracker",
    image: "/projects/crypto-tracker.png",
    description: "Track real-time prices of cryptocurrencies using the CoinGecko API. Clean charts and fast updates.",
    technologies: ["React.js", "Tailwind CSS", "CoinGecko API"],
    liveDemo: "https://price-tracking-gamma.vercel.app/",
    github: "https://github.com/aissap/priceTracking",
  },
  {
    title: "Resume Screening App",
    image: "/projects/resume-analyzer.png",
    description: "Analyzes resumes using NLP to help recruiters assess candidates faster. Built with Streamlit and Python.",
    technologies: ["Streamlit", "Python", "NLP"],
    liveDemo: "https://resume-screening-app-lbvszzdkkdg6brlprrwqrp.streamlit.app/",
    github: "https://github.com/aissap/Resume-Screening-App",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
