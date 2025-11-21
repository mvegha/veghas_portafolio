import React, { useState, useEffect } from 'react';

import './index.css';

import Navbar from './components/Navbar';
import Home from './views/home/Home';

const App: React.FC = () => {
  // LÓGICA DEL MODO OSCURO (DARK MODE) 
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Verifica si hay una preferencia guardada en localStorage o usa la del sistema
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Efecto para aplicar la clase 'dark' al HTML cuando cambia el estado
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  // RENDERIZADO (LAYOUT GLOBAL)
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white">
      {/* NAVBAR  */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-grow">
        <Home />
      </main>

      {/*  FOOTER */}
      <footer className="bg-white dark:bg-gray-950 py-8 border-t border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Desarrollado por{' '}
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Mariano Vega</span>
          </p>
          {/* <p className="text-xs text-gray-400 mt-2">Hecho con React, Vite & Tailwind CSS</p> */}
        </div>
      </footer>
    </div>
  );
};

export default App;
