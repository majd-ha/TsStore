import { useQuery } from "react-query";
const fetcherfn = async () => {
    return await fetch("https://fakestoreapi.com/products/categories").then((res) =>
    res.json()
  );
}
export const useFetchCategories = () => {
    return useQuery('categories', fetcherfn, {
        staleTime: 10000,
        refetchOnWindowFocus: false,
        refetchOnMount : false
    })
}