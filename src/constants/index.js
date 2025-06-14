import {
    contact,
    css,
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
    react,
    tailwindcss,
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
        title: "MERN Developer (internship)",
        company_name: "ZeoNest",
        icon: '',
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'https://srikar-protfolio-two.vercel.app',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Srikar132',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/srikar-chinthala-b99a5a2a2',
    }
];

export const projects = [
    {
        iconUrl: '',
        name: 'Snapcast',
        description:  'SnapCast is a modern, lightweight screen recording platform designed for quick and efficient screen capture directly from the browser. With a minimal UI and powerful functionality, users can start recording their screen, pause/resume, preview the recording, and download the final video — all without needing any external software',
        gitLink : 'https://github.com/Srikar132/snap-cast',
        imagePreview : 'https://res.cloudinary.com/dujzx8959/image/upload/v1749903983/Screenshot_2025-06-14_175557_xvmu6w.png',
        liveLink: 'https://sm-snap-cast.vercel.app/',
    },
    {
        iconUrl: '',
        name: 'Medium clone',
        gitLink : 'https://github.com/Srikar132/medium-clone',
        imagePreview : 'https://res.cloudinary.com/dujzx8959/image/upload/v1749904205/Screenshot_2025-06-14_175908_onxxol.png',
        liveLink: 'https://medium-clone-nine-topaz.vercel.app/',
        description: 'A clone of Medium built with Next.js, React, and Tailwind CSS. Users can create an account, create posts, and comment on other posts. The site is fully responsive and uses a custom theme.',
    },
    {
        iconUrl: '',
        theme: 'btn-back-red',
        name: 'Iphone 15 pro',
        description: 'A visually engaging 3D website designed to present the iPhone 15 Pro in an interactive and modern way. Built with React Three Fiber, the site features a fully rotatable 3D model of the phone, smooth animations, and responsive layouts. Users can explore the phone’s design, colors, and specifications through real-time interactions.',
        gitLink : 'https://github.com/Srikar132/IPhone_15_Pro',
        imagePreview : 'https://res.cloudinary.com/dujzx8959/image/upload/v1749902835/Screenshot_2025-06-14_172859_j3ys6r.png',
        liveLink: 'https://i-phone-15-pro-psi.vercel.app/',
    },
    {
        iconUrl: '',
        theme: 'btn-back-blue',
        name: 'Yc Directory',
        description: 'A 3D model of a fox built with React Three Fiber. The model features a fully animated 3D model of the fox, smooth animations, and responsive layouts. Users can explore the fox’s design, colors, and specifications through real-time interactions.',
        liveLink : 'https://yc-directory-le6u.vercel.app/',
        gitLink: 'https://github.com/Srikar132/yc_directory',
        imagePreview: 'https://res.cloudinary.com/dujzx8959/image/upload/v1749904530/Screenshot_2025-06-14_180506_omgkjs.png'
    }
];