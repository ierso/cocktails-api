import { spring } from 'react-router-transition';

export const mapStyles = (styles) => {
    return {
        opacity: styles.opacity,
        transform: `translateX(${styles.offset}px)`,
    };
}

const glide = (val) => {
    return spring(val, {
      stiffness: 174,
      damping: 19,
    });
}

export const pageTransitions = {
    atEnter: {
      offset: 200,
      opacity: 0,
    },
    atLeave: {
      offset: glide(-100),
      opacity: glide(0),
    },
    atActive: {
      offset: glide(0),
      opacity: glide(1),
    }
};