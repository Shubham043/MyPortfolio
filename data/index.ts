export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration through open communication and partnership",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/Profile.jpeg",
        spareImg: "",
    },
    {
        id: 2,
        title: "Flexible across time zones for seamless global communication",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My Tech Stack & Expertise",
        description: "Continuously evolving with the latest technologies",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Passionate developer dedicated to creating innovative solutions",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Currently building RescueLink - A Roadside Assistance Platform",
        description: "Real-time emergency response system",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Ready to bring your next project to life?",
        description: "Let's collaborate and create something amazing together",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Typing Arcade - Competitive Typing Platform",
        des: "An immersive typing competition platform where users can test their speed, compete in real-time leaderboards, and improve their typing skills through engaging challenges.",
        img: "/p2.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://type-arcade.vercel.app/",
    },
    {
        id: 2,
        title: "RescueLink - Emergency Response Platform",
        des: "Comprehensive emergency management system featuring real-time crisis support, integrated payment processing, and a credits-based assistance system for rapid response coordination.",
        img: "/p3.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://rescue-link-three.vercel.app/",
    },
    {
        id: 3, // Fixed duplicate ID
        title: "TaskMaster - Productivity Management App",
        des: "Intuitive task management application built with modern React and Tailwind CSS, featuring streamlined UI/UX for efficient project tracking and deadline management.",
        img: "/p1.png",
        iconLists: ["/re.svg", "/tail.svg"],
        link: "https://taskmaster-rt.netlify.app",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Full Stack Engineer Intern",
        desc: "Developed and integrated features for a SaaS platform using React.js, Node.js, NestJS, and PostgreSQL, improving system performance and user experience.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Backend Developer - Mobile App Team",
        desc: "Engineered backend systems for quiz functionality in the Nimbuzz application, supporting scalable user interactions and real-time data processing.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Frontend Developer - Srijan Magazine",
        desc: "Designed and developed the official website for Srijan Magazine, creating an engaging digital presence with responsive design and optimal user experience.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        name: "GitHub",
        link: "https://github.com/Shubham043",
    },
    {
        id: 2,
        img: "/link.svg",
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/shubham-sharma-070064232/",
    },
];
