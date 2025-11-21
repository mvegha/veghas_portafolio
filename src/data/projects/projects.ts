import type { Project } from '../../interfaces/app/app';

const projects: Project[] = [
  {
    title: 'E-Commerce Full Stack',
    description: 'Plataforma completa con carrito de compras, pasarela de pagos Stripe y panel de administración.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/tu-usuario/ecommerce',
    demo: 'https://tu-demo.com'
  },
  {
    title: 'Gestor de Tareas Real-Time',
    description:
      'Clon de Trello colaborativo. Permite arrastrar tareas y ver actualizaciones en tiempo real usando WebSockets.',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Dashboard Financiero',
    description: 'Visualización de datos complejos para una fintech, con gráficos interactivos y reportes exportables.',
    tags: ['React', 'D3.js', 'PostgreSQL'],
    github: '#',
    demo: '#'
  }
];

export default projects;
