import { ImArrowLeft } from "react-icons/im";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import ExtendeCard from "../components/ExtendeCard";
import Loader from "../components/Loader";

export default function SingleProduct() {
  const navigate = useNavigate();
  const fetcherfn = async (id: string | undefined) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => res.json()
    );
    return res;
  };
  const { productId } = useParams<string>();
  const { data, isLoading } = useQuery(["product", productId], () =>
    fetcherfn(productId)
  );
  console.log(data);
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <ImArrowLeft color="orange" size="1.4rem" />
      </button>
      {isLoading ? <Loader /> : <ExtendeCard el={data} key={data.id} />}
    </div>
  );
}
