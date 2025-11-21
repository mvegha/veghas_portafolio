import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

import Hero from '../../components/hero/Hero';
import About from '../../components/about/About';
import Experience from '../../components/experience/Experience';

import skills from '../../data/skills/skills';
import projects from '../../data/projects/projects';

const Home: React.FC = () => {
  return (
    <>
      {/* Secccion Llamativa */}
      <Hero />

      {/* Seccion Acerca de */}
      <About />

      {/* Seccion Skills */}
      <section id="habilidades" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Stack Tecnológico</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Herramientas modernas para soluciones robustas.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              // Extraemos el icono para usarlo como componente
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{skill.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.tools}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/*  Seccion de experiencia */}
      <Experience />

      {/* Seccion de proyectos*/}
      <section id="proyectos" className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Proyectos Destacados</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Del concepto a la producción.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Imagen del proyecto (Placeholder) */}
                <div className="h-48 bg-indigo-100 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden">
                  <span className="text-indigo-300 dark:text-gray-500 font-bold text-4xl opacity-20">IMG</span>
                  {/* Overlay al hacer hover */}
                  <div className="absolute inset-0 bg-indigo-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-white text-indigo-900 rounded-full font-bold text-sm hover:bg-indigo-50 transition"
                    >
                      Ver Demo
                    </a>
                  </div>
                </div>

                {/* Info del proyecto */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-xs rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
                    >
                      <Github size={18} className="mr-2" /> Código
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium transition-colors"
                    >
                      Demo <ExternalLink size={18} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seccion de Contactos */}
      <section id="contacto" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400 opacity-20 rounded-full blur-2xl -ml-10 -mb-10"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">¿Listo para construir algo increíble?</h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
              Actualmente disponible para nuevos retos. Si buscas un desarrollador comprometido, hablemos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a
                href="mailto:tu@email.com"
                className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-50 transition shadow-lg"
              >
                Enviar Correo
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-indigo-400 bg-indigo-800/50 text-white font-bold rounded-xl hover:bg-indigo-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
