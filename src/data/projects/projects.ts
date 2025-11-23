import type { ProjectProps } from '../../interfaces/project/project';

const projects: ProjectProps[] = [
  {
    title: 'App "Extensionismo" (Gestión Agrícola)',
    description:
      'Plataforma completa de extensionismo agrícola que conecta agricultores con expertos para mejorar prácticas y aumentar la productividad. ' +
      'Backend desarrollado con arquitectura de microservicios (NestJS) y base de datos relacional para gestionar la lógica de expertos y agricultores.',
    tags: ['AWS', 'Node', 'Serverless', 'Git', 'React Native', 'React', 'Nest', 'SQLite', 'Tailwind'],
    github: '#',
    demo: '#',
    imageUrl: 'extensionismo.webp',
    imageAlt: 'Proyecto Extensionismo',
    isArchitecturalDiagram: true
  },
  {
    title: 'Qaliproveedor (Sistema de Logística y Calidad)',
    description:
      'Plataforma web de logística y gestión de calidad para la distribución de alimentos del programa QaliWarma en San Martín y Amazonas (Perú). ' +
      'Desarrollo del backend para facilitar auditorías y la generación de reportes detallados. Integración crucial con SUNAT (vía Nubefact) para la emisión automática de guías de conducción.',
    tags: ['Node', 'MongoDB', 'Git', 'React', 'Express', 'Docker', 'Linux', 'PostgreSQL', 'Tailwind'],
    github: '#',
    demo: '#',
    imageUrl: 'qaliproveedor.png',
    imageAlt: 'Proyecto Qaliproveedor',
    isArchitecturalDiagram: false
  },
  {
    title: 'Portal Web y Gestión de Incidencias',
    description:
      'Modernización del portal web corporativo, migrando la interfaz a React para optimizar la respuesta y las ventas. ' +
      'Desarrollo de un sistema de backend (Node.js/Express) para la gestión de incidencias, incluyendo notificaciones transaccionales y despliegue en Linux.',
    tags: ['React', 'Node', 'Express', 'MySQL', 'Tailwind', 'Linux', 'Redes'],
    github: '#',
    demo: '#',
    imageUrl: 'cm.jpg',
    imageAlt: 'Proyecto Cable Mundo',
    isArchitecturalDiagram: false
  }
];

export default projects;
