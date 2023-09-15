import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFetchProducts } from "../hooks/useFetchProducts";

export default function ProductsLayout() {
  const allData = useFetchProducts();
  return (
    <div>
      <Navbar />
      <main className=" max-sm:w-[95%] overflow-hidden mx-auto">
        <Outlet context={allData} />
      </main>
    </div>
  );
}
