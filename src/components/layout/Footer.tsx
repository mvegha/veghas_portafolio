const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 py-8 border-t border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Desarrollado por{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Mariano Vega</span>
        </p>
        <p className="text-xs text-gray-400 mt-2">DevFullStack</p>
      </div>
    </footer>
  );
};

export default Footer;
