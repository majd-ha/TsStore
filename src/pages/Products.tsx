import { useEffect, useState } from "react";
// import Aside from "../components/Aside";

import Loader from "../components/Loader";
import Slider from "../components/Slider";
import { useFetchProducts } from "../hooks/useFetchProducts";
export type Productstype = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export default function Products() {
  const { data, isLoading, isError, isFetching } = useFetchProducts();
  if (isError) {
    throw Error("error happend");
  }

  const [categories, setcategories] = useState<string[]>([]);

  const getcategories = async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    setcategories(data);
  };
  useEffect(() => {
    // getProducts();
    getcategories();
  }, []);
  return (
    <div className="flex justify-between">
      {/* <aside className="w-[17%]">
        <Aside />
      </aside> */}
      <main className=" w-[90%] mx-auto  rounded-xl p-4 ">
        <p className="capitalize text-2xl border border-transparent border-b-orange-700 py-1">
          products
        </p>

        {isLoading || isFetching ? (
          <Loader />
        ) : (
          categories.map((el) => {
            return (
              <div className=" rounded-xl my-3">
                <p className="mr-2 capitalize text-xl py-1">{el}</p>
                <Slider cat={el} eles={data} />
              </div>
            );
          })
        )}

        {/* <p className="mr-2 capitalize text-2xl border border-transparent border-b-orange-700 py-1">
          women
        </p>
        <Slider /> */}
      </main>
    </div>
  );
}
