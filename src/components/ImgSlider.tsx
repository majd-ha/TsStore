import { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import Four from "../assets/christopher-gower-_aXa21cf7rY-unsplash.jpg";
import Two from "../assets/jonas-leupe-Fhwg7BrGUpk-unsplash.jpg";
import Three from "../assets/tetiana-shyshkina-HC-FGU-chN0-unsplash.jpg";
import { useFetchCategories } from "../hooks/useFetchCategory";
import ImgContainer from "./ImgContainer";

export default function ImgSlider() {
  const { data, isLoading, isFetching } = useFetchCategories();
  const slideref = useRef<HTMLDivElement>(null);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(windowSize.innerWidth);
  const slideright = () => {
    slideref.current?.scrollBy({
      behavior: "smooth",
      left: windowSize.innerWidth,
    });
  };
  const slideLeft = () => {
    slideref.current?.scrollBy({
      behavior: "smooth",
      left: -windowSize.innerWidth,
    });
  };
  return (
    <div className="relative">
      <button
        className="absolute top-[50%] right-0 "
        onClick={() => slideright()}
      >
        <IoIosArrowDroprightCircle
          size={"2.5rem"}
          color={"white"}
          fill={"lightgray"}
        />
      </button>
      <button className="absolute top-[50%] left-0" onClick={() => slideLeft()}>
        <IoIosArrowDropleftCircle
          size={"2.5rem"}
          color={"white"}
          fill={"lightgray"}
        />
      </button>

      <div
        className="w-screen overflow-x-scroll  snap-mandatory  "
        ref={slideref}
      >
        <div className="flex justify-between items-center w-fit">
          <ImgContainer Imgsrc={Two} />
          <ImgContainer Imgsrc={Three} />
          <ImgContainer Imgsrc={Four} />
        </div>
      </div>
      <div className="absolute rounded-xl top-[90%] max-sm:right-0 max-sm:left-0 h-[10%] bg-[#eee] right-[10%]  left-[10%] flex justify-between items-center ">
        {isLoading || isFetching ? (
          <p className="text-center text-gray-700 animate-pulse w-[100%]">
            Loading ....
          </p>
        ) : (
          data.map((el: string) => {
            return (
              <Link
                to={`category/${el}`}
                className=" px-3 py-2 rounded-xl shadow-lg"
              >
                <h1 className="text-center">{el}</h1>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}
