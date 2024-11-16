import "./App.css";
import React, { useState } from "react";
// import { Provider } from "react-redux";

import Home from "./Pages/Home";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  // Flavoro
  // const [showCart, setShowCart] = useState(false);
  // const [showWishlist, setShowWishlist] = useState(false);
  const darkMode = useSelector((state) => state.darkMode);
  const root = document.getElementsByTagName("body");
  // root.style.backgroundColor = darkMode ? "black" : "white";

  return (
    <>
      <div
        className={`min-h-lvh ${darkMode ? "bg-zinc-800" : ""} scroll-smooth`}
      >
        {/* <Home /> or <Outlet /> */}
        <Outlet
        // showCart={showCart}
        // setShowCart={setShowCart}
        // showWishlist={showWishlist}
        // setShowWishlist={setShowWishlist}
        />
      </div>
    </>
  );
}

export default App;
