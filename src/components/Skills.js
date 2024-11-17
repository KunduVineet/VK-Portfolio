import React from "react";
import { FaCss3, FaHtml5, FaJava, FaReact, FaAndroid } from "react-icons/fa"; // Import Java icon
import { SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: <FaReact className="text-blue-500" />,
      title: "React.js",
      topics: "Hooks, Context API, State Management",
    },
    {
      id: 2,
      icon: <FaJava className="text-orange-600" />,
      title: "Java",
      topics: "Basics, OOPS, Exception Handling, Multi-Threading",
    },
    {
      id: 3,
      icon: <FaJava className="text-orange-600" />,
      title: "Advanced Java",
      topics: "Servlets, JSP, Spring, SpringBoot",
    },
    {
      id: 4,
      icon: <FaAndroid className="text-green-600" />,
      title: "Android",
      topics: "Basics, Android Native, Android X, XML, Activities, Fragments, RecyclerView, Firebase Integration",
    },
    {
      id: 5,
      icon: <FaHtml5 className="text-orange-600" />,
      title: "HTML5",
      topics: "Semantic HTML, Forms, Accessibility, SEO",
    },
    {
      id: 6,
      icon: <FaCss3 className="text-blue-600" />,
      title: "CSS3",
      topics: "Flexbox, Grid, Responsive Design, Animations",
    },
    {
      id: 7,
      icon: <SiFirebase className="text-yellow-500" />, // Firebase icon
      title: "FireBase",
      topics: "Authentication, Firestore, Cloud Messaging, Hosting",
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
              className="flex items-center  bg-darkGray p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-3xl text-blue-500 mr-4">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-colorhead">
                  {item.title}
                </h3>
                <p className="text-sm text-white">{item.topics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
