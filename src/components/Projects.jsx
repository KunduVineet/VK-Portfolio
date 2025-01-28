import React from 'react';

const Projects = () => {
    const techProjects = [
        {
            id: 1,
            image: "./periodic.jpg",
            title: "Interactive Periodic Table Application",
            description: "A React-based for 11th and 12th Class Students to easily learn the Core Concepts of Chemistry.",
            techStack: "React.js, Three.js, React-Router-DOM, Chart.js, OAuth Tailwind CSS, Figma",
            link: "https://interactve-periodic.vercel.app/",
        },
        {
            id: 2,
            image: "./food.jpg",
            title: "Food Order Web App",
            description: "A platform where users can order food from restaurants.",
            techStack: "React, HTML, CSS",
            link: "https://food-order-web-app-six.vercel.app/",
        },
        {
            id: 3,
            image: "./Courses.png",
            title: "Courses Web App",
            description: "A Web where users can enroll in one of the courses.",
            techStack: "React, HTML, CSS, TailWind, Toast Notifications, API Integration",
            link: "https://courses-sigma.vercel.app/",
        },
        {
            id: 4,
            image: "./blog.png",
            title: "Blogs",
            description: "A blog platform showcasing articles with a user-friendly UI.",
            techStack: "React, HTML, CSS, JS, BootStrap, API Integration",
            link: "https://vk-blogs.vercel.app/",
        },
        {
            id: 5,
            image: "./appointment.jpg",
            title: "Appointment Booking Application",
            description: "A React.js based application for booking appointments with doctors.",
            techStack: "React.js, Tailwind CSS, Firebase Authentication, Figma",
            link: "https://ideon-labs-assignment.vercel.app/",
        },
        {
            id: 6,
            image: "./real-time-chat.svg",
            title: "Real-Time Chatting Application",
            description: "A Java-based application with real-time messaging features.",
            techStack: "Java, Android X, Figma, XML, Firebase, Recycler View",
            link: "https://link-to-chatting-app",
        },
        {
            id: 7,
            image: "./trading.svg",
            title: "BitCoin Trading Charts",
            description: "A practical Implementation of BitCoin Trading Charts using React.js.",
            techStack: "React.js, Chart.js, Tailwind CSS, Figma",
            link: "https://koinx-assignment-trading-charts-zhpc-g8rx5ok5p.vercel.app/",
        },
        {
            id: 8,
            image: "./Tours.png",
            title: "Tours & Travels Web App",
            description: "An application that displays tours and travel packages.",
            techStack: "React, HTML, CSS",
            link: "https://tours-travels-mocha.vercel.app/",
        },
        {
            id: 9,
            image: "./password.svg",
            title: "Random Password Generator Web App",
            description: "A Web App that makes Different Password Combinations for you.",
            techStack: "React, HTML, CSS",
            link: "https://password-generator-pfa5s055y-kunduvineet6-gmailcoms-projects.vercel.app/",
        },
        {
            id: 10,
            image: "./medical.jpg",
            title: "SaaS DICOM Images Viewer",
            description: "A platform where users can see and edit dicom Images",
            techStack: "React, CornerStone, TailWind CSS",
            link: "https://saas-diacom-images-8xun.vercel.app/",
        },
    ];
    

    const handleItemClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-left mb-6 text-colorhead gap-6 px-4 animate-slide-in">Projects</h2>

            <div className="flex flex-wrap ml-5 gap-6 p-5 px-4 text-colorhead ">
                {techProjects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => handleItemClick(project.link)}
                        className="border rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-shadow p-4 w-72 cursor-pointer bg-darkGray animate-flip-in"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                        <small className="block text-gray-600 dark:text-gray-400 mb-2">
                            Tech Stack: {project.techStack}
                        </small>
                        <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Projects;
