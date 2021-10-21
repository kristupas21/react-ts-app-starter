import { MotionProps } from 'framer-motion';

const opacity = (duration = 0.1): MotionProps => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration }
});

export default {
  opacity,
};
