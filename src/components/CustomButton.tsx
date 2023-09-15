import { motion } from "framer-motion";
import React from "react";
export default function CustomButton({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      className="capitalize bg-orange-600 px-3 py-2 rounded-lg text-white w-fit mt-3 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay, type: "spring" }}
    >
      {children}
    </motion.div>
  );
}
