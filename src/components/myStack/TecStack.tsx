import React, { useState, useEffect } from 'react';

import calculateTranslate from '../../helper/calculateTranslate';

import stackItems from '../../data/myStack/stackItem';

const TecStack: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 640);
  const [activeText, setActiveText] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Esta función maneja tanto el ancho como la lógica del estado.
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      const shouldActivateText = newWidth >= 350;

      // Usamos el callback de setState para no depender de 'activeText'
      setActiveText(currentActiveText => {
        if (currentActiveText !== shouldActivateText) {
          return shouldActivateText;
        }
        return currentActiveText;
      });
    };

    // Agrega el listener.
    window.addEventListener('resize', handleResize);

    // Llama a la función una vez al montar para establecer los valores iniciales.
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const dynamicTranslate = calculateTranslate(windowWidth);

  return (
    <div className="relative flex justify-center items-center w-auto ">
      {stackItems.map((item, index) => {
        const IconComponent = item.icon;

        return (
          <div
            key={index}
            className={`
              absolute flex items-center gap-1 sm:gap-2  sm:px-3 xl:px-0 py-1 sm:py-2 rounded-xl shadow-xl backdrop-blur-sm z-10
              ${item.bg} ${item.color}
              border border-gray-100 dark:border-gray-700
              `}
            style={{
              transform: `rotate(${item.angle}deg) translate(${dynamicTranslate}, 0) rotate(-${item.angle}deg)`
            }}
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center rounded-md border border-gray-300 dark:border-[#202051] backdrop-blur-sm shrink-0">
              {IconComponent ? (
                <IconComponent size={14} />
              ) : (
                <code className="font-bold text-xs">{item.shortText}</code>
              )}
            </div>

            {activeText && (
              <div className="flex flex-col  sm:w-24  xl:w-18 whitespace-nowrap overflow-hidden ">
                <span className="text-[10px] opacity-70 font-bold uppercase truncate leading-tight">{item.label}</span>
                <span className="text-xs font-semibold truncate leading-tight">{item.text}</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TecStack;
