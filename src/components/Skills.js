import React from "react";

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: "⚛️", // Example icon
      title: "React.js",
      topics: "Hooks, Context API, State Management",
    },
    {
      id: 2,
      icon: "☕", // Example icon
      title: "Java",
      topics: "Basics, OOPS, Exception Handling, Multi-Threading",
    },
    {
      id: 3,
      icon: "💻", // Example icon
      title: "Advanced Java",
      topics: "Servlets, JSP, Spring, SpringBoot",
    },
    {
      id: 4,
      icon: "⚛️", // Example icon
      title: "React.js",
      topics: "Advanced Patterns, Performance Optimization",
    },
    {
        id: 5,
        icon: "⚛️", // Example icon
        title: "Android",
        topics: "Basics, Android Native, Android X, XML",
    },
  ];

  return (
    <>
    <h2 className="text-3xl font-bold text-left mb-6 text-colorhead gap-6 px-4 animate-slide-in">
        Skills
      </h2>
    <div className="max-w-4xl mx-auto ml-5 gap-6 p-5 px-4">
      
      <div className="space-y-4">
        {skills.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="text-3xl text-blue-500 mr-4">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.topics}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Skills;
