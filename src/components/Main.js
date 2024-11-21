import React from 'react'
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import About from './About';

const Main = () => {
  return (
   <div className=' bg-blackish overflow-auto'>
    <About />
    <Projects />
    <Skills />
    <Experience />
   </div>
  );
}

export default Main