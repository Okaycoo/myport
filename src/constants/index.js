import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  seek,
  einstein,
  anime,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Dev(jr)",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Dev(jr)",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Learning React",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      " I have hands-on experience with React.js, a popular JavaScript library for building user interfaces. I can create interactive and dynamic web applications using this technology."
    ],
  },
  {
    title: "Html, Css, JS",
    company_name: "My first web",
    icon: html,
    iconBg: "#E6DEDD",
    points: [
      " I'm proficient in the foundational web technologies, including HTML, CSS, and JavaScript. These are the building blocks of the web, and I can use them to craft responsive and visually appealing websites."
    ],
  },
  {
    title: "Web Developer",
    company_name: "movie web",
    icon: nodejs,
    iconBg: "#383E56",
    points: [
      "I've worked with Next.js, a React framework, which allows for server-side rendering, routing, and other advanced features. It helps create fast and SEO-friendly web applications"
    ],
  },
  {
    title: "AI Saas",
    company_name: "I can also do AI Saas",
    icon: typescript,
    iconBg: "#E6DEDD",
    points: [
     "I have a basic understanding of Artificial Intelligence as a Service (AI SaaS) and can integrate AI functionalities into web applications, making them smarter and more user-friendly."
      ,
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Patrian proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Pat does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Pat came and made a new E-commerce website our customers where inviting new people",
    name: "Lisa Wang",
    designation: "CTO",
    company: "E-com",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Animeflix - movie web",
    description:
      " developed Animeflix, a movie web application, using HTML, CSS, and JavaScript. This project allowed me to create a user-friendly platform for anime and movie enthusiasts. I implemented features for browsing and searching for movies, viewing detailed information about each title, and possibly even streaming content. My skills in front-end development ensured an engaging and responsive user interface.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: seek,
    source_code_link: "https://animeflix-zoom.vercel.app",
  },
  {
    name: "Seek-Vibe - My own search Engine",
    description:
      "For Seek-Vibe, I utilized React.js, API integration, and the Tailwind CSS framework to build my own search engine. This project demonstrates my ability to work with advanced technologies and external data sources. I designed a sleek and efficient search interface, integrated APIs for retrieving search results, and utilized React components to make the user experience seamless and dynamic.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: anime,
    source_code_link: "https://seek-vibe.vercel.app",
  },
  {
    name: "AI SaaS - Einstein-AI",
    description:
      "n the realm of AI SaaS, I took a step forward by developing an application using Next.js 13 and TypeScript. This project showcases my proficiency in building modern web applications with server-side rendering and type safety. Leveraging Next.js, I created an AI-powered software as a service (SaaS) platform that offers innovative solutions. The integration of Tailwind CSS ensured a visually appealing and responsive design.",
    tags: [
      {
        name: "Nextjs 13",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: einstein,
    source_code_link: "https://einsteina-i.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
