import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { Productstype } from "../pages/Products";
export default function ExtendeCard({ el }: { el: Productstype }) {
  const { pathname } = useLocation();
  console.log(pathname.split("/")[2]);
  return (
    <div className=" rounded-xl w-[48%] max-sm:w-[100%] shadow-md m-2 max-sm:my-2 grid grid-rows-5">
      <div className="flex relative row-span-4">
        <div className="px-5">
          <h1 className="bold text-2xl ">{el.title}</h1>
          <p className="p-1 text-gray-400 italic">{el.description}</p>
          <div className="flex justify-between px-3 py-2">
            <p>rate :({el.rating.rate})</p>
            <p className="text-green-500 ">{el.price}$</p>
          </div>
        </div>
        <div
          className={`absolute top-0 right-2 px-2 py-1 ${
            pathname.split("/")[2] === "category" ? "" : "bg-orange-500"
          }  text-white rounded-xl`}
        >
          {pathname.split("/")[2] === "category" ? (
            <Link to={`/products/all/${el.id}`}>
              <AiOutlineInfoCircle size={"1.5rem"} color={"gray"} />
            </Link>
          ) : (
            <p>stock : {el.rating.count}</p>
          )}
        </div>
        <img
          src={el.image}
          alt="product image"
          className="rounded-xl object-contain aspect-[3/2] mx-auto block h-[50%]"
          width={190}
          height={70}
        />
      </div>
      <div className="flex justify-between p-3 row-span-1">
        <AiOutlineHeart size="1.4rem" color="red" />
        {/* <AiFillHeart />
        <BsFillCartPlusFill /> */}
        <BsCartCheck size="1.4rem" color="red" />
      </div>
    </div>
  );
}
