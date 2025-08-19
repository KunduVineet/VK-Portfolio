import React from 'react';

const Projects = () => {
const techProjects = [
  {
    id: 1,
    image: "./resume-generator.jpg",
    title: "AI Resume Generator",
    description: "A full-stack application that generates tailored resumes using AI, with a user-friendly React frontend and a robust Spring Boot backend integrated with DeepSeek-R1 for personalized content generation.",
    techStack: "Spring Boot, Spring Security, Spring AOP, Spring Data JPA, MySQL, REST, Java 8, SOLID Principles, React, Tailwind CSS, DeepSeek-R1, Ollama, Maven",
    link: "https://github.com/KunduVineet/AI-Resume-Generation",
  },
  {
    id: 2,
    image: "./todo-summarizer.jpg",
    title: "To-Do Summarizer",
    description: "A full-stack application for managing to-do tasks with CRUD operations, summarizing pending tasks using Cohere's LLM API, and posting summaries to Slack for team visibility.",
    techStack: "Spring Boot, Spring Data JPA, MySQL, REST, Java, React, Axios, Cohere API, Slack Webhooks",
    link: "https://github.com/KunduVineet/To-Do-Summarizer",
  },
  {
    id: 3,
    image: "./tcp-ip-communication.jpg",
    title: "TCP/IP Communication",
    description: "A Java-based client-server application enabling real-time device communication over TCP/IP, designed for manufacturing setups with extensible protocol support and concurrent device handling.",
    techStack: "Spring Boot, Java, TCP/IP, React, JUnit 5, Maven",
    link: "https://github.com/KunduVineet/TCP-IP-Communication",
  },
  {
    id: 4,
    image: "./container-dockyard.jpg",
    title: "Container Placement Service DockYard",
    description: "A Java-based REST API that optimizes container placement in a shipping yard using a mathematical scoring algorithm, designed for efficient slot selection based on size, distance, and refrigeration needs.",
    techStack: "Spring Boot, Java 11, REST, JUnit 5, Maven, System Design",
    link: "https://github.com/KunduVineet/Container-Placement-Service-DockYard-",
  },
  {
    id: 5,
    image: "./email-sender.jpg",
    title: "Email Sender",
    description: "A Java application that reads recruiter details from Excel files and sends personalized cold emails using JavaMail API, with secure credential management via dotenv.",
    techStack: "Spring Boot, JavaMail API, Apache POI, Java, Maven",
    link: "https://github.com/KunduVineet/Email-Sender",
  },
  {
    id: 6,
    image: "./ecommerce-microservices.jpg",
    title: "E-commerce Microservices",
    description: "A microservices-based e-commerce platform built with Spring Boot, focusing on scalable architecture, system design, and deployment for handling complex business logic.",
    techStack: "Spring Boot, Java, Microservices, System Design, REST, Maven",
    link: "https://github.com/KunduVineet/Ecommerce-MicroServices-SpringBoot",
  },
  {
    id: 7,
    image: "./periodic.jpg",
    title: "Interactive Periodic Table Application",
    description: "A React-based application for 11th and 12th class students to easily learn the core concepts of chemistry.",
    techStack: "React.js, Three.js, React-Router-DOM, Chart.js, OAuth, Tailwind CSS, Figma",
    link: "https://interactve-periodic.vercel.app/",
  },
  {
    id: 8,
    image: "./food.jpg",
    title: "Food Order Web App",
    description: "A platform where users can order food from restaurants.",
    techStack: "React, HTML, CSS",
    link: "https://food-order-web-app-six.vercel.app/",
  },
  {
    id: 9,
    image: "./Courses.png",
    title: "Courses Web App",
    description: "A web application where users can enroll in one of the courses.",
    techStack: "React, HTML, CSS, Tailwind, Toast Notifications, API Integration",
    link: "https://courses-sigma.vercel.app/",
  },
  {
    id: 10,
    image: "./blog.png",
    title: "Blogs",
    description: "A blog platform showcasing articles with a user-friendly UI.",
    techStack: "React, HTML, CSS, JavaScript, Bootstrap, API Integration",
    link: "https://vk-blogs.vercel.app/",
  },
  {
    id: 11,
    image: "./appointment.jpg",
    title: "Appointment Booking Application",
    description: "A React.js-based application for booking appointments with doctors.",
    techStack: "React.js, Tailwind CSS, Firebase Authentication, Figma",
    link: "https://ideon-labs-assignment.vercel.app/",
  },
  {
    id: 12,
    image: "./real-time-chat.svg",
    title: "Real-Time Chatting Application",
    description: "A Java-based application with real-time messaging features.",
    techStack: "Java, Android X, Figma, XML, Firebase, Recycler View",
    link: "https://link-to-chatting-app",
  },
  {
    id: 13,
    image: "./trading.svg",
    title: "BitCoin Trading Charts",
    description: "A practical implementation of Bitcoin trading charts using React.js.",
    techStack: "React.js, Chart.js, Tailwind CSS, Figma",
    link: "https://koinx-assignment-trading-charts-zhpc-g8rx5ok5p.vercel.app/",
  },
  {
    id: 14,
    image: "./Tours.png",
    title: "Tours & Travels Web App",
    description: "An application that displays tours and travel packages.",
    techStack: "React, HTML, CSS",
    link: "https://tours-travels-mocha.vercel.app/",
  },
  {
    id: 15,
    image: "./password.svg",
    title: "Random Password Generator Web App",
    description: "A web app that generates different password combinations.",
    techStack: "React, HTML, CSS",
    link: "https://password-generator-pfa5s055y-kunduvineet6-gmailcoms-projects.vercel.app/",
  },
  {
    id: 16,
    image: "./medical.jpg",
    title: "SaaS DICOM Images Viewer",
    description: "A platform where users can view and edit DICOM images.",
    techStack: "React, CornerStone, Tailwind CSS",
    link: "https://saas-diacom-images-8xun.vercel.app/",
  },
];


    const handleItemClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <>
            <h2 className="text-4xl font-bold text-left mb-8 text-colorhead px-6 animate-slide-in my-6 sm:text-3xl md:text-4xl">
                Projects
            </h2>

            <div className="flex flex-wrap gap-8 p-6 text-colorhead justify-center">
                {techProjects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => handleItemClick(project.link)}
                        className="border rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-shadow p-6 w-full sm:w-full md:w-1/2 lg:w-1/3 bg-gray-800 animate-flip-in"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-3 sm:text-lg md:text-xl">{project.title}</h3>
                        <small className="block text-gray-400 mb-3 sm:text-xs md:text-sm">
                            Tech Stack: {project.techStack}
                        </small>
                        <p className="text-gray-300 sm:text-sm md:text-base">{project.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;