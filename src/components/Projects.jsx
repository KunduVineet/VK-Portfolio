import React from 'react';

const Projects = () => {
    const techProjects = [
        {
            id: 1,
            image: "./real-time-chat.svg", // Replace with the actual image URL
            title: "Real-Time Chatting Application",
            description: "A Java-based application with real-time messaging features.",
            techStack: "Java, XML, Firebase",
            link: "https://link-to-chatting-app", // Replace with the actual link if available
        },
        {
            id: 2,
            image: "./blog.svg", // Replace with the actual image URL
            title: "Blogs",
            description: "A blog platform showcasing articles with a user-friendly UI.",
            techStack: "React, HTML, CSS",
            link: "https://vk-blogs.vercel.app/", // Replace with the actual link if available
        },
        {
            id: 3,
            image: "food-order-image-url", // Replace with the actual image URL
            title: "Food Order Web App",
            description: "A platform where users can order food from restaurants.",
            techStack: "React, HTML, CSS",
            link: "https://link-to-food-order", // Replace with the actual link if available
        },
        {
            id: 4,
            image: "./Tours.png", // Replace with the actual image URL
            title: "Tours & Travels Web App",
            description: "An application that displays tours and travel packages.",
            techStack: "React, HTML, CSS",
            link: "https://tours-travels-mocha.vercel.app/", // Replace with the actual link if available
        },
        {
            id: 5,
            image: "tours-travel-image-url", // Replace with the actual image URL
            title: "Tours & Travels Web App",
            description: "An application that displays tours and travel packages.",
            techStack: "React, HTML, CSS",
            link: "https://link-to-tours-travel", // Replace with the actual link if available
        },
        {
            id: 6,
            image: "tours-travel-image-url", // Replace with the actual image URL
            title: "Tours & Travels Web App",
            description: "An application that displays tours and travel packages.",
            techStack: "React, HTML, CSS",
            link: "https://link-to-tours-travel", // Replace with the actual link if available
        },
    ];

    const handleItemClick = (link) => {
        window.open(link, "_blank");
    };

    return (
        <>
            <h2 className="text-3xl font-bold text-left mb-6 text-colorhead gap-6 px-4 animate-slide-in">Projects</h2>

            <div className="flex flex-wrap ml-5 gap-6 p-5 px-4 text-colorhead">
                {techProjects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => handleItemClick(project.link)}
                        className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 w-72 cursor-pointer bg-darkGray "
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
