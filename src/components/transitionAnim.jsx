import { motion } from "framer-motion";

const anim = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  end: { opacity: 0 },
};

const TransitionAnim = ({ children }) => {
  return (
    <motion.div
      variants={anim}
      initial="initial"
      animate="animate"
      exit={"exit"}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionAnim;
