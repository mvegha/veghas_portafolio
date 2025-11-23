import type { AvailabilityConfigProps } from '../../interfaces/myStack/availability';

const availability: AvailabilityConfigProps = {
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
