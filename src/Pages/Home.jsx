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
import SideBar from "../Components/SideBar";
import { FaArrowCircleUp } from "react-icons/fa";
import ScrollToTop from "../Components/ScrollToTop";
function Home() {
  const productsList = useSelector((state) => state.products);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/");
  console.log("Path in HOME", path);
  const darkMode = useSelector((state) => state.darkMode);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className={`mb-14 lg:mb-0 ${darkMode ? "text-white" : ""}`}>
      <>
        <div className={`positive `}>
          <Navbar
            showCart={showCart}
            setShowCart={setShowCart}
            showWishlist={showWishlist}
            setShowWishlist={setShowWishlist}
            showSideBar={showSideBar}
            setShowSideBar={setShowSideBar}
            className=""
          />
          <Navbar2 showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
          {showCart || showWishlist || showSideBar ? (
            <div
              className={`fixed top-0 w-screen h-screen ${
                darkMode ? "bg-black  opacity-30" : "bg-black opacity-60"
              } z-[80]  `}
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
            } fixed    border-gray-200 border-opacity-75 opacity-96 top-0 right-0 h-lvh overflow-scroll w-full lg:w-[30rem]   transition-transform`}
          >
            <Cart showCart={showCart} setShowCart={setShowCart} />
          </div>

          <div
            className={`${
              showWishlist
                ? `z-[80] ${
                    darkMode
                      ? "bg-black"
                      : ` bg-white border-l-4 border-y-4  border-t-4`
                  }`
                : "hidden"
            } fixed    border-gray-200 border-opacity-75 opacity-96 top-0 right-0 h-lvh w-full lg:w-[30rem]   transition-transform}`}
          >
            <Wishlist
              showWishlist={showWishlist}
              setShowWishlist={setShowWishlist}
            />
          </div>

          <div
            className={`${
              showSideBar
                ? `z-[80] ${
                    darkMode
                      ? "bg-black text-white"
                      : ` bg-white border-l-4 border-y-4  border-t-4`
                  }`
                : "hidden"
            }  
             h-lvh w-3/4 fixed top-0 z-[81]
            `}
          >
            <SideBar
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
            />
          </div>

          {/* ***** IMAGES ***** */}
          <div className="mt-40 lg:mt-40 xl:mt-32 text-center   ">
            <img
              src="https://m.media-amazon.com/images/I/71lWydXqfDL._SR1236,1080_.jpg"
              className="md:hidden pt-1 border-t-2"
            />
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/LEO/Jup24/Phase3/FDFO_PC.gif"
              className="hidden md:flex w-[100%]  xl:w-[80%] mx-[0.15rem] mx-auto"
            ></img>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/G/31/LEO/Jup24/Phase3/Unrec_Rewards-Stripe_PC.jpg"
              className="hidden md:flex w-[100%]   mx-[0.15rem] mx-auto xl:w-[80%]"
            ></img>
          </div>

          <div className="bg-orange-300 mt-3 w-[95%] p-3 mx-auto">
            <p className="ml-3 cursor-pointer opacity-50  underline underline-offset-8 text-md  font-bold  p-1 px-2    rounded-md  w-fit">
              Pocket friendly deals for you
            </p>
            {/* <div
        className="grid w-full grid-cols-2   [400px]:grid-col-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7
       gap-3 gap-y-4 p-3 "
      > */}
            <div
              className=" flex-row flex-wrap overflow-visible w-full   
        mx-auto p-5  "
            >
              {/* {productsList.map((ele, index) => (
          <MyProductCompo ele={ele} />
        ))} */}
              <Slider {...settings}>
                {productsList.map((ele, index) => (
                  <MyProductCompo ele={ele} />
                ))}
              </Slider>
              {/* const { id, title, price, description, category, image, rating } = ele; */}
            </div>
          </div>

          <ImageSlider />

          {/* ***** SCROLL TO TOP BUTTON ***** */}
          <ScrollToTop />

          {/* ***** FOOTER ***** */}
          <Footer />
        </div>
      </>
    </div>
  );
}

export default Home;
