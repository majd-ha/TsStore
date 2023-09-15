import { motion } from "framer-motion";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 30 }}
      className="flex justify-between items-center px-5 py-3 border border-transparent mb-1 border-b-orange-600 h-[70px] sticky top-0"
    >
      <NavLink to={""}>E-Shope</NavLink>
      <NavLink to={"/products/all"}>All </NavLink>
      <div className="flex justify-between items-center px-2 w-1/3 ">
        <NavLink to={"cart"}>
          {" "}
          <BsCart4 size={"1.8rem"} />{" "}
        </NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
    </motion.div>
  );
}
