import React from 'react'

const Experience = () => {

    const experiences = [
        {
          id: 1,
          role: "Frontend Developer",
          company: "Qubitnets Technologies",
          duration: "MM/YYYY - MM/YYYY or Present",
          responsibilities: [
            "Developed responsive, user-friendly web applications using React.js.",
            "Collaborated with cross-functional teams to enhance UI/UX.",
            "Integrated APIs and optimized frontend performance for faster load times.",
            "Worked extensively with HTML, CSS, and JavaScript to deliver functional components.",
            "Participated in code reviews to maintain clean, scalable codebases.",
          ],
        },
      ];
    
      
  return (
    <div>
        <>
        <h2 className="text-3xl font-bold text-left mb-6 text-colorhead gap-6 px-4 animate-slide-in">Experience</h2>
        
        </>
    </div>
  )
}

export default Experience