import { RxOpenInNewWindow } from "react-icons/rx";
import { Link } from "react-router-dom";
import Shoping from "../assets/jon-ly-Xn7GvimQrk8-unsplash.jpg";
import CustomButton from "../components/CustomButton";
import Items from "../components/Items";
export default function Home() {
  return (
    <div className=" w-full mt-20">
      <div className="w-[80%]  max-sm:w-[100%]">
        <Items delay={0.2}>
          <div className="w-full flex px-3 max-sm:block">
            <img src={Shoping} alt="" className="object-cover h-[400px] px-3" />
            <div>
              <p className="uppercase font-serif text-4xl max-sm:text-center">
                E-Shop
              </p>
              <p className=" leading-8 italic text-gray-400 p-2 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae maxime sit facere maiores dicta beatae rerum odio
                atque aspernatur expedita laborum, inventore neque molestias?
                Omnis animi esse in nam ducimus.
              </p>
              <CustomButton delay={1.6}>
                <Link to={"products"} className="flex items-center gap-1">
                  <p> get started</p>
                  <RxOpenInNewWindow />
                </Link>
              </CustomButton>
            </div>
          </div>
        </Items>
      </div>
    </div>
  );
}
