import { motion } from "framer-motion";
import React from "react";
type itemProps = {
  delay: number;
  children: React.ReactNode;
};
export default function Items({ delay, children }: itemProps) {
  const cardvariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      className="  my-4 p-4 border-2 border-transparent border-l-orange-500 bg-white text-orange-700"
      variants={cardvariants}
      initial={"hidden"}
      animate={"visible"}
      transition={{ delay: delay, type: "spring", stiffness: 40 }}
    >
      {children}
    </motion.div>
  );
}
