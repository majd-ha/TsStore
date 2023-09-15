import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Footer from "./components/Footer";
import ProductsLayout from "./layoutes/ProductsLayout";
import RootLayout from "./layoutes/RootLayout";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const queryclient = new QueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <ProductsLayout />,
          children: [
            {
              index: true,
              element: <Categories />,
            },
            {
              path: "all",
              element: <Products />,
            },
            {
              path: "all/:productId",
              element: <SingleProduct />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
            {
              path: "category/:category",
              element: <Category />,
            },
          ],
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ]);
  return (
    <div className="min-h-[100vh]  ">
      <QueryClientProvider client={queryclient}>
        <RouterProvider router={router} />

        <Footer />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
