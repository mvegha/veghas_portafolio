import type { AvailabilityConfig } from '../../interfaces/availability/availability';

const availability: AvailabilityConfig = {
  // Cambio estado de acuerdo a mi disponibilidad ('available' | 'unavailable' | 'preorder')
  status: 'available',
  options: [
    {
      status: 'available',
      text: 'Disponible para trabajar'
    },
    {
      status: 'unavailable',
      text: 'Actualmente trabajando'
    },
    {
      status: 'preorder',
      text: 'Abierto a proyectos puntuales'
    }
  ]
};

export default availability;
