import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-left mb-8 text-colorhead px-6 animate-slide-in my-6 sm:text-3xl md:text-4xl">
        About Me
      </h2>
      <div className="p-6 bg-gray-900">
        <div className="flex flex-wrap gap-8 p-6 text-white justify-center">
          <div className="border border-gray-700 w-full sm:w-full md:w-3/4 lg:w-2/3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform p-8 bg-gray-800 animate-flip-in">
            <div className="mb-8">
              <p className="text-2xl text-gray-200 leading-relaxed mb-4 sm:text-xl md:text-2xl font-medium">
                Hello! I am{" "}
                <span className="text-colorhead font-bold">Vineet Kundu</span>.
              </p>

              <div className="text-3xl font-semibold text-colorhead leading-relaxed sm:text-2xl md:text-3xl">
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

            <p className="text-lg text-gray-300 leading-relaxed sm:text-base md:text-lg">
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