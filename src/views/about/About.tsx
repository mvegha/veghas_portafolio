import { User, Heart, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100 dark:border-gray-800">
          {/* Columna Visual (Izquierda en Desktop / Arriba en Móvil) */}
          <div className="md:w-2/5 bg-indigo-600 dark:bg-indigo-900 p-12 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Patrón decorativo de fondo */}
            <div className="absolute inset-0 bg-indigo-900 opacity-20 pattern-grid-lg"></div>

            <User
              size={64}
              className="mb-6 opacity-90 relative z-10 transform hover:scale-110 transition-transform duration-500"
            />

            <h3 className="text-2xl font-bold mb-3 relative z-10">Más allá del código</h3>
            <p className="opacity-90 text-sm relative z-10 max-w-xs font-medium leading-relaxed">
              "La programación es mi herramienta, pero resolver problemas es mi verdadera pasión."
            </p>
          </div>

          {/* Columna de Texto (Derecha en Desktop / Abajo en Móvil) */}
          <div className="md:w-3/5 p-10 md:p-14">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Sobre Mí</h2>

            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
              Soy un desarrollador apasionado por construir soluciones web y mobile que no solo funcionen, sino que
              ofrezcan una gran experiencia de usuario. Aunque mi especialidad es el stack{' '}
              <span className="font-bold text-indigo-600 dark:text-indigo-400">MERN</span>, soy agnóstico a la
              tecnología: uso la mejor herramienta para cada trabajo.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Cuando no estoy programando, me encontrarás aprendiendo sobre arquitectura de software, contribuyendo en
              comunidades open source o disfrutando de un buen café mientras leo sobre las últimas tendencias tech.
            </p>

            {/* Pequeñas tarjetas de hobbies/valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors">
                <Heart size={24} className="text-red-500 mr-3" />
                <span className="font-medium text-gray-700 dark:text-gray-200">Aprendizaje Continuo</span>
              </div>
              <div className="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-amber-800 transition-colors">
                <Coffee size={24} className="text-amber-600 mr-3" />
                <span className="font-medium text-gray-700 dark:text-gray-200">Café & Código</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
