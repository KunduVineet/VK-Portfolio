import React, { useState, useEffect } from 'react';
import Links from './Links';

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
    }, 10); // Adjust the speed of the animation by changing the interval duration

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [progress]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-medium">{currentProgress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="h-4 rounded-full"
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
    { label: 'HTML', progress: 100, color: '#f59e0b' },
    { label: 'CSS', progress: 95, color: '#f59e0b' },
    { label: 'Java', progress: 70, color: '#f59e0b' },
    { label: 'React.js', progress: 80, color: '#f59e0b' },
    { label: 'JS', progress: 80, color: '#f59e0b' },
    { label: 'Android', progress: 75, color: '#f59e0b' },
    { label: 'Spring', progress: 40, color: '#f59e0b' },
  ];

  return (
    <div className="p-6 bg-blackish w-[650px]">
      {/* Profile Section */}
      <div className="text-center mb-6 py-3 bg-darkGray">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-gray-300">
          <img src="./Vineet-Latest.svg" alt="Vineet Kundu" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-lg font-semibold mt-4 text-colorhead">Vineet Kundu</h2>
        <p className="text-sm text-colorhead">Frontend Developer</p>
        <p className="text-sm text-colorhead">Java Developer</p>
        <Links />
      </div>

      {/* Info Section */}
      <div className="text-sm bg-black py-3 px-2">
        <div className="mb-2 text-colorhead">
          <span className="font-semibold">Residence:</span> <span>India</span>
        </div>
        <div className="mb-2 text-colorhead">
          <span className="font-semibold">City:</span> <span>Gurgaon</span>
        </div>
        <div className="mb-2 text-colorhead">
          <span className="font-semibold">Age:</span> <span>21</span>
        </div>
      </div>
      <hr className="border-black my-4" />

      <div className="w-[calc(3.25/4*100%)] max-w-md text-white px-3">
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
