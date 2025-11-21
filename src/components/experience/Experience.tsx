import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

import history from '../../data/experience/experience';

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la Vista */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mi Trayectoria</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">El camino que me ha traído hasta aquí.</p>
        </div>

        {/* Contenedor del Timeline */}
        <div className="relative border-l-2 border-indigo-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12 pb-4">
          {history.map(item => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              {/* Icono del timeline (Círculo flotante) */}
              <div
                className={`absolute -left-3 top-0 p-2 rounded-full border-4 border-white dark:border-gray-950 shadow-md transition-colors z-10 ${
                  item.type === 'work' ? 'bg-indigo-600' : 'bg-emerald-500'
                }`}
              >
                {item.type === 'work' ? (
                  <Briefcase size={16} className="text-white" />
                ) : (
                  <GraduationCap size={16} className="text-white" />
                )}
              </div>

              {/* Contenido de la tarjeta */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.role}
                </h3>
                <span className="inline-flex items-center text-sm text-indigo-600 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded mt-1 sm:mt-0">
                  <Calendar size={14} className="mr-1.5" /> {item.date}
                </span>
              </div>

              <div className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-3">{item.company}</div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
