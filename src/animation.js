export const titleAnimation = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 2 },
  },
};
export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: 'easeOut', delay: 1 },
  },
};

export const buttonAnimation = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut', delay: 3 },
  },
};
