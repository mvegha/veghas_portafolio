import skills from '../../data/skill/skills';

const Skill = () => {
  return (
    <section id="stack-tecnologico" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Stack Tecnológico</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Herramientas modernas para soluciones robustas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            // Extraemos el icono para usarlo como componente
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.tools}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skill;
