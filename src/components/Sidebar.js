import React, { useState, useEffect } from "react";
import Links from "./Links";
import ProfileImage from "./profileImage";

const ProgressBar = ({ label, progress, color }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgress((prev) => {
        if (prev >= progress) {
          clearInterval(interval);
          return progress;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-base font-medium sm:text-sm md:text-base text-gray-200">{label}</span>
        <span className="text-base font-medium sm:text-sm md:text-base text-gray-200">{currentProgress}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className="h-3 rounded-full transition-all duration-500"
          style={{
            width: `${currentProgress}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

const Sidebar = () => {
const skills = [
  { label: "Java 8", progress: 85, color: "#f59e0b" },
  { label: "React.js", progress: 80, color: "#f59e0b" },
  { label: "Spring Boot", progress: 80, color: "#f59e0b" },
  { label: "Microservices", progress: 75, color: "#f59e0b" },
  { label: "Cloud (AWS)", progress: 70, color: "#f59e0b" },
  { label: "Docker", progress: 70, color: "#f59e0b" },
  { label: "Kubernetes", progress: 65, color: "#f59e0b" },
  { label: "Spring Security", progress: 70, color: "#f59e0b" },
  { label: "Apache Kafka", progress: 65, color: "#f59e0b" },
  { label: "Databases (MySQL, MongoDB, Redis, Neo4j, PostgreSQL)", progress: 75, color: "#f59e0b" },
  { label: "System Design", progress: 70, color: "#f59e0b" },
  { label: "RESTful APIs", progress: 80, color: "#f59e0b" },
  { label: "JUnit/Mockito", progress: 70, color: "#f59e0b" },
  { label: "Android", progress: 70, color: "#f59e0b" },
];

  const info = [
    { label: "Residence", value: "India" },
    { label: "City", value: "Gurgaon" },
    { label: "Age", value: "21" },
  ];

  return (
    <div className="p-8 bg-gray-900 w-full sm:w-3/4 md:w-1/2 lg:w-1/4 overflow-hidden rounded-xl shadow-lg">
      <div className="text-center mb-8 py-4 bg-gray-800 rounded-lg shadow-md">
        <div className="w-28 h-28 mx-auto">
          <ProfileImage />
        </div>

        <h2 className="text-xl font-semibold mt-4 text-colorhead sm:text-lg md:text-xl">
          Vineet Kundu
        </h2>
        <p className="text-sm text-gray-300 sm:text-xs md:text-sm">Full Stack Java Developer</p>
        <Links />
      </div>

      <div className="text-base bg-gray-800 py-4 px-3 rounded-lg shadow-md sm:text-sm md:text-base">
        <div className="flex flex-col gap-4 text-gray-200">
          {info.map((item, index) => (
            <div key={index}>
              <span className="font-semibold">{item.label}:</span>{" "}
              <span>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-700 my-6" />

      <div className="w-full text-white px-3">
        {skills.map((skill, index) => (
          <ProgressBar
            key={index}
            label={skill.label}
            progress={skill.progress}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;