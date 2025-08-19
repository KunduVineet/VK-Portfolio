import React from "react";
import { FaCss3, FaHtml5, FaJava, FaReact, FaAndroid } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Skills = () => {
 const skills = [
  {
    id: 1,
    icon: <FaJava className="text-orange-600" />,
    title: "Java",
    topics: "Basics, OOPS, Exception Handling, Multi-Threading, Java 8, SOLID Principles",
  },
  {
    id: 2,
    icon: <FaJava className="text-orange-600" />,
    title: "Advanced Java",
    topics: "Servlets, JSP, Java Mail API, Struts",
  },
  {
    id: 3,
    icon: <FaJava className="text-orange-600" />,
    title: "Spring Boot",
    topics: "Spring Core, Spring MVC, Spring Data JPA, Spring REST, Spring Boot Actuator",
  },
  {
    id: 4,
    icon: <FaJava className="text-orange-600" />,
    title: "Microservices",
    topics: "Service Discovery, API Gateway, Circuit Breaker, Distributed Tracing, Event-Driven Architecture",
  },
  {
    id: 5,
    icon: <FaCloud className="text-blue-600" />,
    title: "Cloud and Deployment",
    topics: "AWS (EC2, S3, Lambda), Docker, Kubernetes, CI/CD Pipelines",
  },
  {
    id: 6,
    icon: <FaDatabase className="text-blue-700" />,
    title: "Databases",
    topics: "MySQL, MongoDB, Redis, Neo4j, PostgreSQL",
  },
  {
    id: 7,
    icon: <FaReact className="text-blue-500" />,
    title: "React.js",
    topics: "Hooks, Context API, State Management",
  },
  {
    id: 8,
    icon: <FaAndroid className="text-green-600" />,
    title: "Android",
    topics: "Basics, Android Native, Android X, XML, Activities, Fragments, RecyclerView, Firebase Integration",
  },
  {
    id: 9,
    icon: <SiFirebase className="text-yellow-500" />,
    title: "Firebase",
    topics: "Authentication, Firestore, Cloud Messaging, Hosting",
  },
  {
    id: 10,
    icon: <FaJava className="text-orange-600" />,
    title: "System Design Basics",
    topics: "Scalability, Load Balancing, Caching, Database Design, API Design",
  },
];

  return (
    <>
      <h2 className="text-4xl font-bold text-left mb-8 text-colorhead px-6 animate-slide-in my-6 sm:text-3xl md:text-4xl">
        Skills
      </h2>
      <div className="w-full sm:w-full md:w-3/4 lg:w-2/3 mx-auto gap-8 p-6">
        <div className="space-y-6">
          {skills.map((item) => (
            <div
              key={item.id}
              className="flex items-center bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-transform duration-300 hover:scale-105 hover:animate-bounce-slow"
            >
              <div className="text-4xl text-blue-500 mr-6 sm:text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-colorhead sm:text-lg md:text-xl">
                  {item.title}
                </h3>
                <p className="text-base text-gray-300 sm:text-sm md:text-base">{item.topics}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;