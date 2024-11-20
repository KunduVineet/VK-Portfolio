import React, { useState } from 'react';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 1,
      role: 'Frontend Developer',
      company: 'Qubitnets Technologies',
      duration: '07/2024 - Present',
      responsibilities: [
        'Developed responsive, user-friendly web applications using React.js.',
        'Collaborated with cross-functional teams to enhance UI/UX.',
        'Integrated APIs and optimized frontend performance for faster load times.',
        'Worked extensively with HTML, CSS, and JavaScript to deliver functional components.',
        'Participated in code reviews to maintain clean, scalable codebases.',
      ],
    },
    
  ];

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-left mb-6 text-colorhead gap-6 px-4 animate-slide-in">Experience</h2>

      <div className="flex flex-wrap ml-5 gap-6 p-5 px-4 text-colorhead">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="border rounded-lg shadow-lg hover:shadow-xl transition-shadow p-4 w-72 bg-darkGray animate-flip-in"
          >
            <div className="flex items-center gap-4 mb-4">
              <FaBriefcase className="text-colorhead text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                <p className="text-sm text-gray-300">{exp.company}</p>
                <p className="text-xs text-gray-400">{exp.duration}</p>
              </div>
            </div>

            <button
              className="flex items-center text-colorhead mt-2 mb-2 hover:underline"
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
              <ul className="mt-4 space-y-2 text-gray-200">
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
