import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <>
    
    <h2 className="text-3xl font-bold text-left mb-6 text-colorhead gap-6 px-4 animate-slide-in my-4">
        About Me
      </h2>
    <div className="p-5 bg-gray-900 ">
      <div className="flex flex-wrap gap-6 p-5 px-4 text-white">
        <div className="border border-gray-700 w-full rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform p-6 bg-gray-800 animate-flip-in">
          <div className="mb-6">
            <p className="text-xl text-gray-300 leading-relaxed mb-2">
              Hello! I am{" "}
              <span className="text-colorhead font-semibold">Vineet Kundu</span>.
            </p>

            <div className="text-2xl font-medium text-colorhead leading-relaxed">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to my Portfolio!",
                    "I am a passionate Frontend and Java Developer.",
                    "I specialize in Creating Seamless User Experiences.",
                    "I Love Exploring New Technologies.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed">
            In my free time, I love contributing to open-source projects,
            delving into UI/UX design principles, and staying curious about all
            things tech.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
