const slideIn = (
  type: string,
  duration: number,
  delay: number,
  offsetX: number,
  offsetY: number
) => {
  return {
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        type: type,
        duration: duration,
      },
    },
    hidden: {
      x: offsetX,
      y: offsetY,
      opacity: 0,
    },
  };
};

const zoomIn = (
  type: string,
  duration: number,
  delay: number,
  initialScale: number
) => {
  return {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: type,
        duration: duration,
        delay: delay,
      },
    },
    hidden: {
      opacity: 0,
      scale: initialScale,
    },
  };
};

const fadeIn = (type: string, duration: number, delay: number) => {
  return {
    visible: {
      opacity: 1,
      transition: {
        type: type,
        duration: duration,
        delay: delay,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
};

export { slideIn, zoomIn, fadeIn };
