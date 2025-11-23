import React from 'react';

import MyStack from './myStack/MyStack';
import Skill from './skill/Skill';
import About from './about/About';
import Experience from './experience/Experience';
import Project from './project/Project';
import Contact from './contact/Contact';

const Home: React.FC = () => {
  return (
    <>
      {/* Secccion Llamativa */}
      <MyStack />

      {/* Seccion Acerca de */}
      <About />

      {/* Seccion Skills */}
      <Skill />

      {/*  Seccion de experiencia */}
      <Experience />

      {/* Seccion de proyectos*/}
      <Project />

      {/* Seccion de Contactos */}
      <Contact />
    </>
  );
};

export default Home;
