import { Github, ExternalLink, Image } from 'lucide-react';

import type { CardProps } from '../../interfaces/project/card';

const Card = ({ project, extensionismoDiagram, isExpanded, onToggle }: CardProps) => {
  return (
    <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-fit">
      <div className="h-48 bg-indigo-100 dark:bg-gray-700 flex items-center justify-center relative overflow-hidden rounded-t-2xl">
        <span className="text-indigo-300 dark:text-gray-500 font-bold text-4xl opacity-20">IMG</span>

        <div className="absolute inset-0 bg-indigo-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.demo !== '#' ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-white text-indigo-900 rounded-full font-bold text-sm hover:bg-indigo-50 transition"
            >
              Ver Demo
            </a>
          ) : (
            <span className="text-white text-lg font-medium">Demo Privado</span>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors md:min-h-[3.5rem] flex items-start">
          {project.title}
        </h3>

        <p className={`text-gray-600 dark:text-gray-400 text-sm mb-2 ${!isExpanded ? 'line-clamp-3' : ''}`}>
          {project.description}
        </p>

        <button
          onClick={onToggle}
          className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:text-indigo-800 dark:hover:text-indigo-300 mb-4 transition-colors focus:outline-none"
        >
          {isExpanded ? 'Leer menos' : 'Leer más...'}
        </button>

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

        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.github !== '#' ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
            >
              <Github size={18} className="mr-2" /> Código
            </a>
          ) : project.isArchitecturalDiagram ? (
            <a
              href={extensionismoDiagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-yellow-600 dark:text-yellow-400 hover:text-yellow-800 dark:hover:text-yellow-300 text-sm font-medium transition-colors"
              title="Diagrama de infraestructura no-propietario"
            >
              <Image size={18} className="mr-2" /> Arquitectura
            </a>
          ) : (
            <span className="flex items-center text-gray-400 dark:text-gray-600 text-sm font-medium">
              <Github size={18} className="mr-2" /> Código Privado
            </span>
          )}

          {project.demo !== '#' ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium transition-colors"
            >
              Demo <ExternalLink size={18} className="ml-2" />
            </a>
          ) : (
            <span className="text-gray-400 dark:text-gray-600 text-sm font-medium">No Disponible</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
