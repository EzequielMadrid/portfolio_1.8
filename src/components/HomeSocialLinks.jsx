import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HomeSocialLinks = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.a
      key={index}
      href={data.uri}
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 25 }}
      transition={{ delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-8 h-8 p-[2px] rounded-full cursor-pointer bg-gradient-to-br from-cyan-300 to-cyan-500"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute inset-1 blur-sm bg-gradient-to-br from-cyan-300 to-cyan-500 -z-10`}
          ></motion.div>
        )}
        <div className="mb-10 w-full h-full flex items-center justify-center rounded-full bg-bgPrimary ">
          <data.Icon className={`text-cyan-900 `} />
        </div>
      </AnimatePresence>
    </motion.a>
  );
};

export default HomeSocialLinks;
