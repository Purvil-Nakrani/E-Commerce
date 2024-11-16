import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
// import { productsList } from "../Redux/data";

import MyProductCompo from "../Components/MyProductCompo";
import Cart from "../Components/Cart";
import { useSelector } from "react-redux";
import Wishlist from "../Components/Wishlist";
import { Outlet, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageSlider from "../Components/ImageSlider";
import Footer from "../Components/Footer";
import BreadCrumb from "../Components/BreadCrumb";
import SideBar from "../Components/SideBar";
import ScrollToTop from "../Components/ScrollToTop";

function WomensClothing() {
  const productsList = useSelector((state) => state.products);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/");
  console.log("Path in HOME", path);
  const allProductsData = useSelector((state) => state.products);
  const similarProducts = allProductsData.filter(
    (item) => item.category == "women's-clothing"
  );
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <div className={`mb-14 lg:mb-0 ${darkMode ? "text-white" : ""}`}>
      <>
        <Navbar
          showCart={showCart}
          setShowCart={setShowCart}
          showWishlist={showWishlist}
          setShowWishlist={setShowWishlist}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
          className=""
        />
        <Navbar2 />
        <div className="mt-40 w-full pl-2 lg:w-[85%] mx-auto">
          <BreadCrumb title="Women's Clothing" />
        </div>
        {showCart || showWishlist || showSideBar ? (
          <div
            className={`fixed top-0 w-screen h-screen ${
              darkMode ? "bg-black  opacity-30" : "bg-black opacity-60"
            } z-[52]  `}
            onClick={() => setShowSideBar(false)}
          ></div>
        ) : (
          ""
        )}
        <div
          className={`${
            showCart
              ? `z-[80] ${darkMode ? "bg-black" : ` bg-white `}`
              : "hidden"
          } fixed    border-gray-200 border-opacity-75 opacity-96 top-0 right-0 min-h-lvh w-full lg:w-[30rem]   transition-transform`}
        >
          <Cart showCart={showCart} setShowCart={setShowCart} />
        </div>

        <div
          className={`${
            showWishlist
              ? `z-[80] ${darkMode ? "bg-black" : ` bg-white `}`
              : "hidden"
          } fixed    border-gray-200 border-opacity-75 opacity-96 top-0 right-0 h-lvh w-full lg:w-[30rem]  transition-transform}`}
        >
          <Wishlist
            showWishlist={showWishlist}
            setShowWishlist={setShowWishlist}
          />
        </div>
        <div
          className={`${
            showSideBar
              ? `z-[80]] ${darkMode ? "bg-black text-white" : ` bg-white `}`
              : "hidden"
          }  
             h-lvh w-3/4 fixed top-0 
            `}
        >
          <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </div>
        <p className="mt-5 w-full text-center font-bold text-xl opacity-75">
          WOMEN'S CLOTHING
        </p>
        <div
          className="mt-1 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  min-[1700px]:grid-cols-6 gap-3 w-full  lg:w-[85%] xl:justify-start mx-auto 
         p-5   "
        >
          {/* <Slider {...settings}> */}
          {similarProducts?.length >= 1 ? (
            similarProducts.map((ele, index) => <MyProductCompo ele={ele} />)
          ) : (
            <p className="text-2xl font-bold opacity-40">
              No Similar Products Available
            </p>
          )}
          {/* </Slider> */}
        </div>
        {/* ***** SCROLL TO TOP BUTTON ***** */}
        <ScrollToTop />
        <Footer />
      </>
    </div>
  );
}

export default WomensClothing;
