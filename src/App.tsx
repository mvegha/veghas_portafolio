import React, { useState, useEffect } from 'react';

import './index.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Home from './views/home/Home';

const App: React.FC = () => {
  // Logica del modo oscuro (DARK MODE)
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <main className="flex-grow">
        <Home />
      </main>

      <Footer />
    </div>
  );
};

export default App;
