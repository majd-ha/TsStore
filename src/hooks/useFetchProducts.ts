import { useQuery } from "react-query";
const fetcherfn = async () => {
    return await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
}
export const useFetchProducts = () => {
    return useQuery('products',fetcherfn)
}