const email = import.meta.env.VITE_EMAIL;

const Contact = () => {
  return (
    <section id="contactame" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400 opacity-20 rounded-full blur-2xl -ml-10 -mb-10"></div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">¿Listo para construir algo increíble?</h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">
            Actualmente disponible para nuevos retos. Si buscas un desarrollador comprometido, hablemos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <a
              href={`mailto:${email}`}
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-50 transition shadow-lg"
            >
              Enviar Correo
            </a>
            <a
              href="https://www.linkedin.com/in/mvegha"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-indigo-400 bg-indigo-800/50 text-white font-bold rounded-xl hover:bg-indigo-800 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
