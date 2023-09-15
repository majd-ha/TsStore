import { ImArrowLeft } from "react-icons/im";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useFetchProducts } from "../hooks/useFetchProducts";

export default function ProductsLayout() {
  const navigate = useNavigate();
  const allData = useFetchProducts();
  return (
    <div>
      <Navbar />
      <main className=" max-sm:w-[95%] overflow-hidden mx-auto">
        <button onClick={() => navigate(-1)}>
          <ImArrowLeft color="orange" size="1.4rem" />
        </button>
        <Outlet context={allData} />
      </main>
    </div>
  );
}
