import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
// import { useFetchProducts } from "../hooks/useFetchProducts";
import { Productstype } from "../pages/Products";
import ExtendeCard from "./ExtendeCard";
import Loader from "./Loader";
export type OutletData = {
  data: Productstype[];
  isLoading: boolean;
  isFetching: boolean;
  isError?: boolean;
};
export default function Category() {
  const { data, isFetching, isLoading } = useOutletContext<OutletData>();
  // const { data, isFetching, isLoading } = useFetchProducts();

  const { category } = useParams();
  const [filtredData, setFilteredData] = useState<Productstype[]>();
  useEffect(() => {
    const filterd = data?.filter((el: Productstype) => el.category == category);
    setFilteredData(filterd);
  }, [category, data]);

  return (
    <div className="">
      <h1 className="text-center text-2xl italic ">{category}</h1>
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <main className="flex justify-between flex-wrap px-3 py-2 rounded-xl shadow-lg">
          {filtredData?.map((el) => {
            return <ExtendeCard el={el} />;
          })}
        </main>
      )}
    </div>
  );
}
