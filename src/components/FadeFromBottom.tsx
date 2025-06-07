// components/FadeInFromBottom.jsx
import { motion } from "framer-motion";

const FadeInFromBottom = ({ children }) => {
      return (
            <motion.div
                  initial={{ y: 70, opacity: 0 }}  // start 50px below, invisible
                  animate={{ y: 0, opacity: 1 }}   // move to position, fade in
                  transition={{
                        duration: 0.8,
                        ease: "easeOut"
                  }}
            >
                  {children}
            </motion.div>
      );
};

export default FadeInFromBottom;
