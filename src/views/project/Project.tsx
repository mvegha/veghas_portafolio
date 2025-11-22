import { useState } from 'react';

import Card from '../../components/proyect/Card';

import projects from '../../data/projects/projects';

import extensionismoDiagram from '../../assets/arqui_extensionismo.jpg';

const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="proyectos" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Proyectos Destacados</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Del concepto a la producción.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, index) => (
            <Card
              key={index}
              project={project}
              extensionismoDiagram={extensionismoDiagram}
              isExpanded={expandedIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
