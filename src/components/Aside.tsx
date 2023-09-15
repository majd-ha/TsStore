import { motion } from "framer-motion";
import { useState } from "react";
import FilterItem from "./FilterItem";
export default function Aside() {
  const [filters, setFiltrs] = useState<string[]>([]);
  const addfilter = (name: string) => {
    if (!filters.includes(name)) {
      setFiltrs((prev) => [...prev, name]);
    }
  };
  const removefilter = (name: string) => {
    if (filters.includes(name)) {
      const filtereddata = filters.filter((el) => el !== name);
      setFiltrs(filtereddata);
    }
  };
  console.log(filters);
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "just" }}
      className="flex flex-col  p-3 min-h-screen"
    >
      <p className="capitalize text-xl text-center bg-orange-700 text-white  rounded-xl py-2">
        Filters
      </p>
      <FilterItem
        name="price"
        addfilter={addfilter}
        removefilter={removefilter}
      />
      <FilterItem
        name="rate"
        addfilter={addfilter}
        removefilter={removefilter}
      />
    </motion.div>
  );
}
