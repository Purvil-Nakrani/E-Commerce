import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import Home from "./Pages/Home";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/store";
import Home2 from "./Pages/Products";
import { useParams } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import Products from "./Pages/Products";
import Electronics from "./Pages/Electronics";
import MensClothing from "./Pages/MensClothing";
import WomensClothing from "./Pages/WomensClothing";
import Jewelery from "./Pages/Jewelery";
import Accessories from "./Pages/Accessories";
import Fashion from "./Pages/Fashion";
// import Cart from "./Pages/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home2",
        element: <Home2 />,
      },
      {
        path: "/:category/:id",
        element: <ProductDetail />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/men's-clothing",
        element: <MensClothing />,
      },
      {
        path: "/women's-clothing",
        element: <WomensClothing />,
      },
      {
        path: "/Accessories",
        element: <Accessories />,
      },
      {
        path: "/jewelery",
        element: <Jewelery />,
      },
      {
        path: "/fashion",
        element: <Fashion />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
