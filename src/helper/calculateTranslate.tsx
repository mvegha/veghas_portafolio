const calculateTranslate = (windowWidth: number): string => {
  let containerSize: number = 0;
  let inset: number = 0;
  let cardHalfWidth: number = 0;

  // Determinamos las dimensiones del contenedor padre (que contiene los anillos)
  if (windowWidth >= 1536) {
    // 2xl
    containerSize = 650;
    inset = 16;
    cardHalfWidth = 35;
  } else if (windowWidth >= 1280) {
    // xl
    containerSize = 520;
    inset = 16;
    cardHalfWidth = 25;
  } else if (windowWidth >= 1024) {
    // lg
    containerSize = 480;
    inset = 16;
    cardHalfWidth = 35;
  } else if (windowWidth >= 768) {
    // md
    containerSize = 480;
    inset = 16;
    cardHalfWidth = 15;
  } else if (windowWidth >= 640) {
    // sm
    containerSize = 450;
    inset = 16;
    cardHalfWidth = 15;
  } else if (windowWidth >= 350) {
    // xs
    containerSize = 350;
    inset = 16;
    cardHalfWidth = 15;
  } else {
    //  muy pequeño
    containerSize = 350;
    inset = 16;
    cardHalfWidth = 5;
  }

  // Cálculo: (Diámetro del Anillo - 2 * Inset) / 2
  const ringDiameter: number = containerSize - 2 * inset;
  const ringRadius: number = ringDiameter / 2;

  // Distancia de Traslación = Radio del Anillo - Ajuste para centrar la tarjeta
  const T: number = ringRadius - cardHalfWidth;

  return `${T}px`;
};

export default calculateTranslate;
