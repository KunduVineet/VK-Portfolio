import React, { useState } from 'react';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
  {
    id: 1,
    role: 'FullStack Java Web Developer',
    company: 'Qubitnets Technologies',
    duration: '03/2024 - 03/2025',
    responsibilities: [
      'Designed and developed backend services using Java and Spring Boot to support scalable web applications.',
      'Implemented RESTful APIs to facilitate seamless communication between frontend and backend systems.',
      'Utilized Spring Data JPA for efficient database operations and management of relational data.',
      'Collaborated with cross-functional teams to define and implement business logic in alignment with project requirements.',
      'Participated in code reviews to ensure adherence to coding standards and maintain high-quality, scalable codebases.',
    ],
    skills: [
      'Java',
      'Spring Boot',
      'Spring Data JPA',
      'RESTful APIs',
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Git',
      'Agile Methodologies',
    ],
  },
  {
    id: 2,
    role: 'FullStack Java Web Developer',
    company: 'Novaluna Technologies',
    duration: '03/2025 - Present',
    responsibilities: [
      'Architected and developed microservices using Spring Boot to enhance system modularity and scalability.',
      'Implemented secure authentication and authorization mechanisms using Spring Security for robust application security.',
      'Designed event-driven architectures with Apache Kafka to handle asynchronous data processing and messaging.',
      'Deployed and managed containerized applications using Docker and Kubernetes on AWS infrastructure.',
      'Developed comprehensive unit and integration tests using JUnit and Mockito to ensure code reliability and performance.',
    ],
    skills: [
      'Java',
      'Spring Boot',
      'Microservices',
      'Spring Security',
      'Apache Kafka',
      'AWS',
      'Docker',
      'Kubernetes',
      'JUnit',
      'Mockito',
      'RESTful APIs',
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Git',
      'CI/CD',
      'Agile Methodologies',
    ],
  },
];


  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-left mb-8 text-colorhead px-6 animate-slide-in my-6 sm:text-3xl md:text-4xl">
        Experience
      </h2>

      <div className="flex flex-wrap gap-8 p-6 text-colorhead justify-center">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="border rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 w-full sm:w-full md:w-1/2 lg:w-1/3 bg-gray-800 animate-flip-in hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBriefcase className="text-colorhead text-3xl sm:text-2xl" />
              <div>
                <h3 className="text-xl font-semibold text-white sm:text-lg md:text-xl">{exp.role}</h3>
                <p className="text-sm text-gray-300 sm:text-xs md:text-sm">{exp.company}</p>
                <p className="text-xs text-gray-400 sm:text-xs md:text-xs">{exp.duration}</p>
              </div>
            </div>

            <button
              className="flex items-center text-colorhead mt-4 mb-4 hover:underline sm:text-sm md:text-base font-medium"
              onClick={() => toggleDetails(exp.id)}
            >
              {expandedId === exp.id ? 'Hide Responsibilities' : 'View Responsibilities'}
              {expandedId === exp.id ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>

            {expandedId === exp.id && (
              <ul className="mt-4 space-y-3 text-gray-200 sm:text-sm md:text-base">
                {exp.responsibilities.map((res, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-colorhead">•</span>
                    {res}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;