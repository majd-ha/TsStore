import { motion } from "framer-motion";
//import { RxOpenInNewWindow } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Productstype } from "../pages/Products";
export default function Card({ el }: { el: Productstype }) {
  return (
    <motion.div
      className={`h-full w-[200px]  grow flex flex-col justify-between   shadow-lg  text-orange-600 border  ml-5 snap-center rounded-lg `}
    >
      <div className="w-[90%] mx-auto rounded-xl py-1  ">
        <Link to={`${el.id}`} className="block">
          <img
            src={el.image}
            alt="product image"
            className="rounded-xl object-contain aspect-[3/2] mx-auto block"
            width={190}
            height={70}
          />
        </Link>

        <h1 className="text-center ">{el.title.slice(0, 15)}</h1>
      </div>
      <div className="flex justify-between px-3 py-2">
        <p className="text-green-500 ">{el.price}$</p>
        <p className="text-black">{el.rating.rate}</p>
      </div>
    </motion.div>
  );
}
