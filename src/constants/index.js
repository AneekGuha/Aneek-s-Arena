export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];
export const code = `
const profile = {
  name: 'Aneek Kumar Guha',
  title: 'Full-Stack Developer | Devops Enthusiast | Problem Solver',
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 1,
  hireable: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.yearsOfExperience == 1 
    );
  }
};
`;


export const myProjects = [
  {
    title: `Aneek's Area: Developer Portfolio`,
    desc: 'Built an interactive 3D portfolio website using React, Three.js, and React Three Fiber, featuring immersive animations, interactive models, and smooth transitions powered by GSAP. The site showcases projects, skills, and contact information through a modern, responsive, and visually engaging UI.',
    subdesc:
      'Developed a fully interactive developer portfolio integrating React Three Fiber and Drei to render 3D scenes, models, and dynamic environments. Implemented advanced animations using GSAP and Maath, enabling smooth camera motions, object interactions, and responsive model behavior across devices. Leveraged TailwindCSS for clean styling, EmailJS for functional contact forms, and Vite for optimized builds and fast development workflows. Integrated visual enhancements such as floating 3D objects, animated backgrounds, and interactive UI components to create an immersive user experience. The portfolio is fully responsive, SEO-friendly, and structured to highlight projects, technical skills, and professional experience in an engaging and modern format.',
    href: '#',
    texture: 'https://res.cloudinary.com/dcfy2u7br/video/upload/f_mp4/v1764826735/Recording_2025-10-12_034216_ufmcbx.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Narad: Learn Languages with Peers',
    desc: 'Engineered a full-stack MERN application featuring real-time communication through instant messaging, video calling, and live notifications powered by Stream API and WebSockets. The system supports secure authentication, seamless user interactions, and efficient server-state handling, ensuring a scalable and responsive chat experience.',
    subdesc:
      'Designed and developed robust RESTful APIs using Node.js and Express.js to manage authentication, user operations, and chat functionalities with high scalability and clean architecture. Implemented JWT-based authentication along with role-based access control (RBAC) to reinforce security and manage user sessions effectively. Integrated TanStack Query for optimized server-state management, resulting in reduced redundant network requests and enhanced application performance. Real-time communication was delivered using WebSockets and Stream API, enabling smooth messaging, video calls, and notification delivery across the platform',
    href: 'https://narad-video-chat.onrender.com/',
    texture: 'https://res.cloudinary.com/dcfy2u7br/video/upload/f_mp4/v1764827468/Video_Project_jubdhe.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Technogang: Crypto Management System',
    desc: 'Developed a dynamic cryptocurrency analytics platform by integrating the CoinGecko API to display live prices, market trends, and real-time trading insights. Users can seamlessly switch between fiat currencies, while interactive Chart.js visualizations present detailed performance metrics in a clean and responsive interface.',
    subdesc:
      'Integrated the CoinGecko API to fetch real-time cryptocurrency data, including price movements, market capitalization, trading volumes, and historical trends. Implemented interactive and responsive visualizations using Chart.js to display price history, performance charts, and key financial metrics for each coin. Enabled dynamic currency conversion between USD, INR, and other supported fiat currencies to enhance user accessibility. Designed responsive line charts optimized for desktop, tablet, and mobile devices, ensuring smooth navigation and an intuitive analytics experience across all screen sizes.',
    href: 'https://technogang.netlify.app/',
    texture: 'https://res.cloudinary.com/dcfy2u7br/video/upload/f_mp4/v1764827622/project3_bnspjk.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: `Component Generator AI`,
    desc: 'Built an AI-powered Component Generator that automatically converts natural language descriptions into ready-to-use UI components. Users can select their preferred framework—HTML, CSS, JavaScript, Tailwind, or Bootstrap—and instantly generate, preview, and download production-ready code through a clean, dark-themed interface.',
    subdesc:
      'Developed an intelligent component generation tool with a sleek dual-pane layout, allowing users to describe any UI element and instantly receive AI-generated code. The app supports multiple frameworks, including HTML + CSS + JS, Tailwind CSS, and Bootstrap, providing developers with flexibility and rapid prototyping capabilities. It features a live preview panel, syntax-highlighted code editor, and one-click copy/download options for seamless workflow integration. Designed with a modern, responsive UI and intuitive UX, the tool enhances developer productivity by transforming component ideas—such as dark mode togglers, cards, buttons, and widgets—into complete, ready-to-use code within seconds.',
    href: 'https://compgenai.netlify.app/',
    texture: 'https://res.cloudinary.com/dcfy2u7br/video/upload/f_mp4/v1764826754/project4_fizysk.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Cognizant',
    pos: 'Programmer Analyst Trainee',
    duration: 'May 2025- Oct 2025',
    title:
      'I designed and implemented a robust BDD test automation framework using Selenium WebDriver, TestNG, and Cucumber, automating UI validations and form field behaviors for a university web application. I integrated data-driven testing with Apache POI, implemented Log4j for structured logging, and ensured seamless traceability through Jira, contributing to test planning and defect reporting.',
    icon: '/assets/cognizant.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'LancyFirm',
    pos: 'Full Stack Web Developer Intern',
    duration: '2022 - 2023',
    title:
      'I designed and integrated real-time chat functionality using WebSocket protocols and JavaScript frameworks, boosting user engagement by 35% and increasing session duration. I developed modular, reusable form components with custom validation using React Hook Form, enhancing input accuracy and form reliability. Additionally, I implemented responsive design practices to ensure a consistent, optimized user experience across all devices.',
    icon: '/assets/lancyfirm.jpeg',
    animation: 'clapping',
  },
];
