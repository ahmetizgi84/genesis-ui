import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { useData } from '../context/DataContext';
import { Props } from '../types';

const AnimationWrapper: FC<Props> = ({ children }) => {
  const { summary } = useData();

  return (
    <div className="App">
      <div className="wrapper">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={summary.length.toString()}
            // variants={horizontalVariant}
            // variants={verticalVariant}
            // variants={nextVariant}
            variants={upDownUpVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, type: 'easeInOut' }}>
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimationWrapper;

/*
const horizontalVariant = {
  initial: { y: 0, x: '-50%', opacity: 0 },
  animate: { y: 0, x: 0, opacity: 1 },
  exit: { y: 0, x: '50%', opacity: 0 }
};

const verticalVariant = {
  initial: { y: -100, x: 0, opacity: 0 },
  animate: { y: 0, x: 0, opacity: 1 },
  exit: { y: 100, x: 0, opacity: 0 }
};

const nextVariant = {
  initial: { y: 250, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -250, opacity: 0 }
};


*/
const upDownUpVariant = {
  initial: { y: 40, x: 0, opacity: 0 },
  animate: { y: 0, x: 0, opacity: 1 },
  exit: { y: 40, x: 0, opacity: 0 }
};
