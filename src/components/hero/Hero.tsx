import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

import availabilityData from '../../data/availability/availability';
import statusConfig from './statusConfig';
import { TechStack } from './TechStack';

const Hero = () => {
  const activeStatus =
    availabilityData.options.find(option => option.status === availabilityData.status) || availabilityData.options[0];
  const visual = statusConfig[activeStatus.status];

  return (
    <section id="inicio" className="relative pt-28 pb-20 lg:pt-32 xl:pt-28 2xl:pt-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10 xl:gap-12 2xl:gap-28">
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-slide-up">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 transition-colors duration-300 ${visual.bg} ${visual.border}`}
            >
              <span className="relative flex h-2 w-2">
                {activeStatus.status !== 'unavailable' && (
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${visual.pulse}`}
                  ></span>
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${visual.dot}`}></span>
              </span>
              <span className={`text-sm font-semibold ${visual.text}`}>{activeStatus.text}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Transformando ideas en <br className="hidden lg:block" />
              <span className="text-indigo-600 dark:text-indigo-400 relative inline-block">
                Experiencias Digitales
                <svg
                  className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-indigo-300 dark:text-indigo-700 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg xl:text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Desarrollador Full Stack con sólida experiencia en la construcción de aplicaciones web y móviles
              escalables. Experto en integraciones Cloud en AWS, optimización de backend con Node/Python y creación de
              interfaces modernas con React.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <a
                href="#proyectos"
                className="w-full sm:w-auto justify-center group px-8 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2"
              >
                Ver Proyectos <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="../../../public/assets/cv.pdf"
                download="VEGA HERRERA MARIANO FULLSTACK DEV.pdf"
                className="w-full sm:w-auto justify-center px-8 py-3.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2"
              >
                <Download size={18} /> Descargar CV
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-400">
              <a
                href="https://github.com/mvegha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mvegha"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:mvegha.herrera@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center items-center animate-fade-in delay-200 mb-10 lg:mb-0">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] xl:w-[420px] xl:h-[420px] 2xl:w-[550px] 2xl:h-[550px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-purple-600/30 rounded-full blur-[40px] sm:blur-[60px] animate-pulse"></div>

              <div className="absolute inset-0 border border-indigo-500/20 rounded-full"></div>
              <div className="absolute inset-8 sm:inset-16 border border-white/10 dark:border-white/5 rounded-full"></div>

              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)] blur-[0.5px]"></div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <TechStack />
              </div>

              <div className="relative w-32 h-32 sm:w-52 sm:h-52 xl:w-56 xl:h-56 2xl:w-72 2xl:h-72 rounded-full shadow-2xl z-20 border-4 border-white dark:border-gray-800 bg-gray-900 flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-black"></div>

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }}
                ></div>

                <div className="relative z-10 text-center transform transition-transform duration-500 group-hover:scale-110">
                  <h1 className="text-4xl pb-1 sm:text-7xl xl:text-6xl 2xl:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-tighter">
                    VegHa
                  </h1>
                  <p className="text-[10px] pt-1 sm:text-xs xl:text-[10px] 2xl:text-sm text-gray-400 uppercase tracking-[0.3em] mt-2">
                    Dev
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="absolute right-0 bottom-0 translate-x-0 translate-y-0 sm:-right-4 sm:bottom-[10%] sm:translate-x-[20%] sm:translate-y-[20%] xl:right-0 xl:bottom-10 2xl:right-[5%] 2xl:bottom-[10%] z-30">
                <div
                  className="bg-white dark:bg-gray-900/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2 sm:gap-3 animate-bounce"
                  style={{ animationDuration: '4s' }}
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 font-bold text-xs sm:text-base">
                    3+
                  </div>
                  <div className="block">
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 leading-tight">Años de</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white leading-tight">
                      Experiencia
                    </p>
                  </div>
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
