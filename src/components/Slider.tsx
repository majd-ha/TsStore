import { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Productstype } from "../pages/Products";
import Card from "./Card";

export default function Slider({
  cat,
  eles,
}: {
  cat: string;
  eles: Productstype[];
}) {
  const slideref = useRef<HTMLDivElement>(null);
  const [catdata, setCatData] = useState<Productstype[]>([]);
  useEffect(() => {
    const catproducts = eles.filter((el) => {
      return el.category === cat;
    });
    setCatData(catproducts);
  }, [cat, eles]);

  const slideright = () => {
    slideref.current?.scrollBy({ behavior: "smooth", left: -450 });
  };
  const slideLeft = () => {
    slideref.current?.scrollBy({ behavior: "smooth", left: 450 });
  };
  return (
    <div className="relative mt-5 ">
      <div className=" absolute top-0 h-full -left-1  flex justify-center bg-white items-center  sldr">
        <button className="" onClick={() => slideright()}>
          <IoIosArrowDropleftCircle
            size={"2.5rem"}
            color={"white"}
            fill={"lightgray"}
          />
        </button>
      </div>
      <div className=" absolute top-0 h-full -right-1  flex justify-center bg-white items-center  sldr2">
        <button className="  " onClick={() => slideLeft()}>
          <IoIosArrowDroprightCircle
            size={"2.5rem"}
            color={"white"}
            fill={"lightgray"}
          />
        </button>
      </div>
      <div
        className="w-[100%]  overflow-x-auto snap-mandatory bg-transparent"
        ref={slideref}
      >
        <div
          className={` flex gap-2 items-center w-fit px-10 self-stretch h-[200px]`}
        >
          {catdata.map((el, i) => {
            return <Card el={el} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
