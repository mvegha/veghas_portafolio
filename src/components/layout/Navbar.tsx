import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import type { NavbarProps } from '../../interfaces/layout/navbar';
import navLinks from '../../data/layout/navLinks';

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Filtramos el link de contacto para no duplicarlo, ya que tenemos un botón dedicado
  const filteredLinks = navLinks.filter(link => link.href !== '#contactame');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">&lt;DevFullStack /&gt;</span>
          </div>

          {/* --- MENU DE ESCRITORIO (Solo visible en pantallas Grandes 'lg') --- */}
          {/* Cambio clave: md:flex a lg:flex para evitar que se vea feo en tablets/laptops pequeñas */}
          <div className="hidden lg:flex items-center space-x-8">
            {filteredLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Toggle Tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors focus:outline-none"
              aria-label="Cambiar tema"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Boton de contacto (CTA) */}
            <a
              href="#contactame"
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-600/20"
            >
              Contáctame
            </a>
          </div>

          {/* --- CONTROLES MÓVIL Y TABLET (Visible hasta 'lg') --- */}
          {/* Cambio clave: md:hidden a lg:hidden */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- DROPDOWN MENU (Móvil y Tablet) --- */}
      {isMenuOpen && (
        // Cambio clave: md:hidden a lg:hidden
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 absolute w-full shadow-xl h-screen sm:h-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {/* Usamos filteredLinks para no mostrar 'Contáctame' dos veces */}
            {filteredLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 rounded-md text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-100 dark:border-gray-800 sm:border-none"
              >
                {link.name}
              </a>
            ))}

            {/* Botón grande de contacto al final */}
            <a
              href="#contactame"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-6 px-3 py-4 rounded-lg text-lg font-bold text-center text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
            >
              Contáctame
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
