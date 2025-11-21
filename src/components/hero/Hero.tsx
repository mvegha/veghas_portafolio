import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Columna Izquierda: Contenido */}
          <div className="md:w-1/2 text-center md:text-left animate-slide-up">
            {/* Badge de Disponibilidad */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                Disponible para trabajar
              </span>
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Transformando ideas en <br className="hidden lg:block" />
              <span className="text-indigo-600 dark:text-indigo-400 relative">
                Experiencias Digitales
                {/* Decoración subrayado */}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-indigo-300 dark:text-indigo-700 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Desarrollador Full Stack especializado en crear aplicaciones web modernas, rápidas y escalables utilizando
              React, Node.js y arquitecturas cloud.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#proyectos"
                className="group px-8 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2"
              >
                Ver Proyectos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cv.pdf"
                className="px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Descargar CV
              </a>
            </div>

            {/* Iconos Sociales */}
            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-gray-400">
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Columna Derecha: Imagen/Avatar */}
          <div className="md:w-1/2 relative animate-fade-in delay-200">
            {/* Fondo decorativo abstracto */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] mx-auto">
              <div className="w-full h-full rounded-full border-4 border-white dark:border-gray-800 shadow-2xl overflow-hidden bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center relative z-10">
                {/* Aquí iría tu foto real: <img src="/mifoto.jpg" className="w-full h-full object-cover" /> */}
                <span className="text-6xl animate-bounce">👨‍💻</span>
              </div>

              {/* Floating Card 1: Tech Stack */}
              <div
                className="absolute -left-4 top-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600">
                  <code className="font-bold text-xs">TS</code>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Stack</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-white">TypeScript</p>
                </div>
              </div>

              {/* Floating Card 2: Experience */}
              <div
                className="absolute -right-4 bottom-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce"
                style={{ animationDuration: '4s', animationDelay: '1s' }}
              >
                <div className="w-10 h-10 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600">
                  <span className="font-bold">3+</span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Años de</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-white">Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
