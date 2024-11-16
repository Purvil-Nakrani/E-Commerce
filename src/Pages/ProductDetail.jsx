import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Navbar2 from "../Components/Navbar2";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  addWishlistItem,
  addCartItemWithSelectedProductDetailsForOrder,
  removeWishListItem,
  addWishListItem,
  addOrderPincode,
} from "../Redux/reducers";
import MyProductCompo from "../Components/MyProductCompo";
import Wishlist from "../Components/Wishlist";
import Cart from "../Components/Cart";
import BreadCrumb from "../Components/BreadCrumb";
import { IoCartOutline } from "react-icons/io5";
import { FaAngleUp, FaHeart } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { RiStarSLine } from "react-icons/ri";
import { RiStarSFill } from "react-icons/ri";
import Slider from "react-slick";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegThumbsDown } from "react-icons/fa";
import ImageSlider from "../Components/ImageSlider";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import ScrollToTop from "../Components/ScrollToTop";

// import { baseUrl } from "./config";
function ProductDetail() {
  const [allProductsData, setAllProductsData] = useState(
    useSelector((state) => state.products)
  );

  const params = useParams();
  const [item, setItem] = useState(
    allProductsData.find((ele) => ele.id == params.id)
  );
  const {
    id,
    title,
    price,
    discount,
    sizesAvailable,
    colorsAvailable,
    description,
    image,
    productDetails,
    supplier_Information,
    category,
    images,
    availability,
    rating,
    reviews,
    liked,
  } = item;
  const [likedStatus, setLikedStatus] = useState(!liked);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [
    showProductAdditionalInformation,
    setShowProductAdditionalInformation,
  ] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  let pincode = useSelector((state) => state.orderPincode);

  console.log("PINCODE", pincode);
  const [viewComments, setViewComments] = useState(2);
  const darkMode = useSelector((state) => state.darkMode);

  const location = useLocation();
  const path = location.pathname.split("/");
  console.log("Path in PRODUCT PAGE", path);

  const [
    selectedDetailsofProductForOrder,
    setSelectedDetailsofProductForOrder,
  ] = useState({
    selected_Size: "",
    selected_Color: "",
    // pincode: "",
  });

  console.log(
    "selectedDetailsofProductForOrder",
    selectedDetailsofProductForOrder
  );

  const [similarProducts, setSimilarProducts] = useState(
    allProductsData.filter(
      (item) => item.category == category && item.id !== id
    )
  );
  useEffect(() => {
    setSimilarProducts(
      allProductsData.filter(
        (item) => item.category == category && item.id !== id
      )
    );
    console.log(
      "SIM",
      allProductsData.filter(
        (item) => item.category == category && item.id !== id
      )
    );
  }, [params.id]);
  console.log("similarProducts", similarProducts, id);
  console.log("Single Item", item);
  console.log(item.id, "item id");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    document.querySelector("body").scrollIntoView();
    setItem(allProductsData.find((ele) => ele.id == params.id));
  }, [params.id]);
  // }, [likedStatus, params.id]);

  // const similarProducts = allProductsData.filter(
  //   (item) => item.category == category && item.id !== id
  // );

  const dispatch = useDispatch();

  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 1000,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  // };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <div
      className={`${darkMode ? "bg-black text-white" : ""} mb-14 lg:mb-0 full`}
    >
      <>
        <Navbar
          showCart={showCart}
          setShowCart={setShowCart}
          showWishlist={showWishlist}
          setShowWishlist={setShowWishlist}
          showSideBar={showSideBar}
          setShowSideBar={setShowSideBar}
        />
        <Navbar2 />
        <div className="mt-40  w-full pl-2 lg:w-[85%] mx-auto">
          <BreadCrumb title={title} />
        </div>
        {/* //***** CART SECTION ***** */}
        {/* //***** WISHLIST SECTION ***** */}
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
          } fixed   border-gray-200 border-opacity-75 opacity-96 top-0 right-0 min-h-lvh w-full lg:w-[30rem]   transition-transform`}
        >
          <Cart showCart={showCart} setShowCart={setShowCart} />
        </div>

        <div
          className={`${
            showWishlist
              ? `z-[80] ${darkMode ? "bg-black " : ` bg-white `}`
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
              ? `z-[80] ${darkMode ? "bg-black text-white" : ` bg-white `}`
              : "hidden"
          }  
             h-lvh w-3/4 fixed top-0 
            `}
        >
          <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-[85%] mt-2 mx-auto">
          {/* //***** IMAGES DIV ****** */}
          <div className=" w-full mx-auto lg:pr-5 mt-8 mb-4 lg:my-0 h-60 lg:h-fit  flex overflow-scroll lg:overflow-visible lg:grid  lg:grid-cols-2 lg:gap-3  ">
            {item.images?.map((ele) => {
              return (
                <div className="hidden lg:inline-block   slider-container box-border overflow-hidden">
                  {/* <Slider {...settings}> */}
                  {/* <div> */}
                  <img
                    alt="product_image"
                    src={ele}
                    className="   cursor-pointer     hover:scale-[1.08]  transition-all hover:cursor-zoom-in object-cover duration-500 "
                  />
                  {/* </div> */}
                  {/* </Slider> */}
                </div>
              );
            })}
            <img
              alt="product_image"
              src={image}
              className="visible lg:hidden  cursor-pointer mx-auto    transition-all hover:cursor-zoom-in object-cover duration-500 "
            />
          </div>
          {/* </div> */}

          <div className="px-5 mt-5 lg:mt-0 w-full lg:w-[65%] flex flex-col gap-6">
            {/****** PRODUCT TITLE ***** */}
            <div>
              <p className="font-bold uppercase text-2xl">{title}</p>
              <p className="hidden xl:flex font-semibold text-lg opacity-50">
                {description}
              </p>
              {/* 
               DESCRIPTION & PRICE SWAP */}
              <div className="xl:hidden">
                <div>
                  <div className="flex gap-3 items-baseline">
                    <span className="font-bold text-2xl">₹{price}</span>
                    <span className="text-lg opacity-70">
                      MRP{" "}
                      <span className="line-through text-lg">
                        ₹{((price * 100) / discount).toFixed(2)}
                      </span>
                    </span>
                    <span className="text-xl text-orange-500  font-bold">
                      ({discount}% OFF)
                    </span>
                  </div>
                  <p className="text-green-600 font-bold text-sm">
                    inclusive of all taxes
                  </p>
                </div>
              </div>
            </div>

            {/* ***** PRICE ***** */}
            <div className="hidden xl:flex ">
              <div>
                <div className="flex gap-3 items-baseline">
                  <span className="font-bold text-2xl">₹{price}</span>
                  <span className="text-lg opacity-70">
                    MRP{" "}
                    <span className="line-through text-lg">
                      ₹{((price * 100) / discount).toFixed(2)}
                    </span>
                  </span>
                  <span className="text-xl text-orange-500  font-bold">
                    ({discount}% OFF)
                  </span>
                </div>
                <p className="text-green-600 font-bold text-sm">
                  inclusive of all taxes
                </p>
              </div>
            </div>
            {/*  DESCRIPTION & PRICE SWAP  */}
            <p className=" xl:hidden font-semibold text-lg opacity-50">
              {description}
            </p>
            {/* ***** SIZE ****** */}
            <div>
              <p className="font-bold mb-2">SELECT SIZE</p>
              <div className="flex gap-1">
                {sizesAvailable?.map((size) => {
                  return (
                    <button
                      className={`border-2  size-10 border-red-400 ${
                        size == selectedDetailsofProductForOrder.selected_Size
                          ? "bg-rose-500 text-white scale-105"
                          : ""
                      } hover:scale-105 rounded-full font-bold hover:bg-rose-500 hover:text-white`}
                      onClick={() =>
                        setSelectedDetailsofProductForOrder({
                          ...selectedDetailsofProductForOrder,
                          selected_Size: size,
                        })
                      }
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* ***** COLOR ****** */}
            {colorsAvailable ? (
              <div className="mb-3">
                <p className="font-bold mb-2">SELECT COLOR</p>
                <div className="flex gap-1">
                  {/* {colorsAvailable.map((color) => {
              return (
                <button
                  className={`border-2   hover:scale-105 rounded-sm p-1 w-20 h-12 font-bold bg-${color}-700  text-white  `}
                >
                  {color}
                </button>
              );
            })} */}

                  <button
                    className={`border-2 ${
                      selectedDetailsofProductForOrder.selected_Color == "Cyan"
                        ? "border-2 border-red-500 scale-105"
                        : ""
                    }  hover:scale-105 rounded-sm p-1 h-12 w-20 font-bold bg-cyan-700  text-white`}
                    onClick={() =>
                      setSelectedDetailsofProductForOrder({
                        ...selectedDetailsofProductForOrder,
                        selected_Color: "Cyan",
                      })
                    }
                  >
                    Cyan
                  </button>
                  <button
                    className={`border-2 ${
                      selectedDetailsofProductForOrder.selected_Color == "Teal"
                        ? "border-2 border-red-500 scale-105"
                        : ""
                    }  hover:scale-105 rounded-sm p-1 h-12 w-20 font-bold bg-teal-700  text-white`}
                    onClick={() =>
                      setSelectedDetailsofProductForOrder({
                        ...selectedDetailsofProductForOrder,
                        selected_Color: "Teal",
                      })
                    }
                  >
                    Teal
                  </button>
                  <button
                    className={`border-2 ${
                      selectedDetailsofProductForOrder.selected_Color ==
                      "Orange"
                        ? "border-2 border-red-500 scale-105"
                        : ""
                    }  hover:scale-105 rounded-sm p-1 h-12 w-20 font-bold bg-orange-700  text-white`}
                    onClick={() =>
                      setSelectedDetailsofProductForOrder({
                        ...selectedDetailsofProductForOrder,
                        selected_Color: "Orange",
                      })
                    }
                  >
                    Orange
                  </button>
                  <button
                    className={`border-2 ${
                      selectedDetailsofProductForOrder.selected_Color == "Lime"
                        ? "border-2 border-red-500 scale-105"
                        : ""
                    }  hover:scale-105 rounded-sm p-1 h-12 w-20 font-bold bg-lime-700  text-white`}
                    onClick={() =>
                      setSelectedDetailsofProductForOrder({
                        ...selectedDetailsofProductForOrder,
                        selected_Color: "Lime",
                      })
                    }
                  >
                    Lime
                  </button>
                  <button
                    className={`border-2 ${
                      selectedDetailsofProductForOrder.selected_Color == "Blue"
                        ? "border-2 border-red-500 scale-105"
                        : ""
                    }  hover:scale-105 rounded-sm p-1 h-12 w-20 font-bold bg-blue-700  text-white`}
                    onClick={() =>
                      setSelectedDetailsofProductForOrder({
                        ...selectedDetailsofProductForOrder,
                        selected_Color: "Blue",
                      })
                    }
                  >
                    Blue
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            {/* ***** BUTTONS ****** */}
            <div className="flex gap-2 w-full">
              <button
                className="text-center h-12 w-[60%]  bg-rose-500 hover:opacity-95 text-white font-bold rounded-md"
                onClick={() =>
                  dispatch(
                    addCartItemWithSelectedProductDetailsForOrder(
                      id,
                      selectedDetailsofProductForOrder
                    )
                  )
                }
              >
                <div className=" flex justify-center gap-2  mx-auto">
                  <span className="font-bold text-2xl">
                    <IoCartOutline />
                  </span>

                  <span>ADD TO CART</span>
                </div>
              </button>
              <button
                className="h-12 w-[40%]  text-gray-400 hover:bg-zinc-200 font-bold border-2 border-gray-200 rounded-md"
                onClick={() => {
                  likedStatus
                    ? dispatch(addWishListItem({ id }))
                    : dispatch(removeWishListItem(id));
                  setLikedStatus(!likedStatus);
                }}
              >
                <div className="flex gap-1 w-fit justify-center items-center mx-auto">
                  <span className="font-bold text-xl text-gray-500">
                    {!likedStatus ? (
                      <span className="text-red-500 ]">
                        <FaHeart />
                      </span>
                    ) : (
                      <CiHeart />
                    )}
                  </span>
                  <span>WISHLIST</span>
                </div>
              </button>
            </div>
            {darkMode ? "" : <hr />}
            {/* ***** DELIVERY OPTIONS ***** */}
            <div className="flex flex-col gap-2 w-full">
              <p className="flex gap-2">
                <span className="font-bold">DELIVERY OPTIONS</span>
                <span className="text-2xl">
                  <CiDeliveryTruck />
                </span>
              </p>
              <div className="relative w-full ">
                <input
                  id="deliveryOptionPincodeAvailable"
                  type="text"
                  name="pincode delivery option check"
                  placeholder="Enter Pincode"
                  className="w-full  border-2 border-gray-400 rounded-md p-3 placeholder:font-semibold placeholder:text-lg outline-none"
                />
                <button
                  className="absolute  top-3 right-[5%]    text-orange-500 font-extrabold "
                  onClick={() =>
                    dispatch(
                      addOrderPincode(
                        availability?.locations?.includes(
                          document.querySelector(
                            "#deliveryOptionPincodeAvailable"
                          ).value
                        )
                          ? document.querySelector(
                              "#deliveryOptionPincodeAvailable"
                            ).value
                          : "null"
                      )
                    )
                  }
                  //     setSelectedDetailsofProductForOrder({
                  //       ...selectedDetailsofProductForOrder,
                  //     pincode: availability?.locations?.includes(
                  //       document.querySelector(
                  //         "#deliveryOptionPincodeAvailable"
                  //       ).value
                  //     )
                  // ? document.querySelector(
                  //     "#deliveryOptionPincodeAvailable"
                  //   ).value
                  // : "null",
                  //   })
                  // }
                >
                  check
                </button>
              </div>
              {availability?.locations?.includes(pincode) ? (
                <p className="text-sm font-bold opacity-100 -mt-1  text-green-700">
                  🎉 WOOH! Delivery available in your area.
                </p>
              ) : (
                <p className="text-sm font-semibold  -mt-1">
                  {pincode == "" ? (
                    <span className="opacity-50">
                      Please enter PIN code to check delivery time & Pay on
                      Delivery Availability.
                    </span>
                  ) : (
                    <span className="text-red-400 opacity-100 font-bold">
                      🙇‍♀️ SORRY, Delivery in your area is not available.
                    </span>
                  )}
                </p>
              )}
            </div>
            <div className="opacity-80 ">
              <div>100% Original Products</div>
              <div>Pay on delivery might be available</div>
              <div>Easy 14 days returns and exchanges</div>
            </div>
            {darkMode ? "" : <hr />}
            {/* ***** BEST OFFERS ***** */}
            <div>
              <h1 className="font-bold mb-2 flex gap-2 items-center">
                <span>BEST OFFERS </span>
                <span className="text-xl">
                  <MdOutlineLocalOffer />
                </span>
              </h1>
              <div className="flex flex-row gap-2">
                <button className="flex flex-col justify-between border-2 p-2 w-1/2 max-w-64 lg:w-1/3 text-left text-sm ">
                  <p className="font-semibold mb-2">Bank offer</p>
                  <p className="opacity-90">Upto ₹1500 discount on select...</p>
                  <div className="flex items-baseline gap-1 text-red-500">
                    <p className="font-semibold  mt-1 underline underline-offset-2">
                      10 offers
                    </p>
                    <span className="outline-none">&gt;</span>
                  </div>
                </button>
                <button className="flex flex-col justify-between max-w-64 border-2 p-2 w-1/2 lg:w-1/3 text-left text-sm ">
                  <p className="font-semibold mb-2">Partner offer</p>
                  <p className="opacity-90">Save up to 28% on GST...</p>
                  <div className="flex items-baseline gap-1 text-red-500">
                    <p className="font-semibold  mt-1 underline underline-offset-2">
                      1 offers
                    </p>
                    <span className="outline-none">&gt;</span>
                  </div>
                </button>
              </div>
            </div>
            {darkMode ? "" : <hr />}
            <div>
              <h1 className="font-bold mb-2 flex gap-2 items-center">
                <span>Product Details </span>
                <span className="text-xl">
                  <CgDetailsMore />
                </span>
              </h1>
              {/* <p className="font-bold uppercase mb-2">Product Details <CgDetailsMore/></p> */}
              <table className="text-left text-sm">
                {Object.entries(productDetails)?.map((arr) => {
                  return (
                    <tr className="grid grid-cols-2 gap-2">
                      <th className="font-bold opacity-70">{arr[0]}</th>
                      <td>{arr[1]}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            {darkMode ? "" : <hr />}
            <div className="pb-10">
              <button
                className="mt-3 font-bold uppercase mb-2 underline underline-offset-4"
                onClick={() => {
                  setShowProductAdditionalInformation(
                    !showProductAdditionalInformation
                  );
                }}
              >
                <div className="flex items-center gap-1 ">
                  <p>Supplier Information</p>{" "}
                  {showProductAdditionalInformation ? (
                    <FaAngleUp />
                  ) : (
                    <FaAngleDown />
                  )}
                </div>
              </button>
              {showProductAdditionalInformation ? (
                <table className="text-left text-sm w-full xl:w-2/3">
                  {Object.entries(supplier_Information)?.map((arr) => {
                    return (
                      <tr className="grid grid-cols-2  ">
                        <th className="font-bold opacity-70">{arr[0]}</th>
                        <td>{arr[1]}</td>
                      </tr>
                    );
                  })}
                </table>
              ) : (
                ""
              )}
            </div>
            {/* ***** CHECK ORDER DETAILS BUTTON ***** */}
            {/* <div className="mb-10 -mt-10  ">
              <button
                className="bg-rose-500  text-white font-semibold p-3 px-10 rounded-md"
                onClick={() => setShowOrderDetails(!showOrderDetails)}
              >
                CHECK ORDER DETAILS
              </button>
            </div>
            {showOrderDetails ? (
              <div className="w-64 h-[17rem] fixed top-24 right-2 p-5 bg-gray-200 pl-7  mx-auto flex flex-col gap-5 ">
                <div>
                  <p className="fixed top-5  font-bold text-lg bg-slate-300 w-2/3 text-center">
                    ORDER DETAILS
                  </p>
                  <div className="relative  mt-10">
                    {Object.entries(selectedDetailsofProductForOrder)?.map(
                      (entry) => {
                        return (
                          <p>
                            <span>{entry[0]} : </span>
                            <span className="font-bold">{entry[1]}</span>
                          </p>
                        );
                      }
                    )}
                  </div>
                  <button className="bg-rose-500 text-lg font-bold text-white rounded-md p-2 w-full mt-5">
                    Place Order
                  </button>
                </div>
              </div>
            ) : (
              ""
            )} */}

            {/* ***** COMMENT SECTION ***** */}
            <div className="overflow-hidden w-full flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <div>
                  <p className="flex items-start gap-1 font-bold">
                    <span>RATINGS </span>
                    <span className="text-xl text-red-500 pt-[0.12rem]">
                      <RiStarSLine />
                    </span>
                  </p>
                </div>
                <div className="flex gap-20 items-center ">
                  <div className="">
                    <p className="flex items-center ">
                      <span className="text-4xl">{rating.rate}</span>
                      <span className="text-2xl text-green-700 ">
                        <RiStarSFill />
                      </span>
                    </p>
                    <p className="mt-3">
                      <span className="font-semibold">
                        {reviews.reviewsCount}
                      </span>{" "}
                      Verified Buyers
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <span className="opacity-40 font-bold">5</span>
                      <span className="opacity-40 font-bold -ml-1">
                        <RiStarSFill />
                      </span>
                      <button>
                        <progress
                          value={
                            reviews.customerReviews.filter((review) => {
                              return Math.floor(review.rating) == 5;
                            }).length * 50
                          }
                          max={reviews.reviewsCount}
                          className={`${
                            darkMode
                              ? "text-green-200 "
                              : "text-green-600 opacity-45"
                          } h-3  hover:outline hover:outline-rose-500   `}
                        >
                          {reviews.reviewsCount}
                        </progress>
                      </button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="opacity-40 font-bold">4</span>
                      <span className="opacity-40 font-bold -ml-1">
                        <RiStarSFill />
                      </span>
                      <button>
                        <progress
                          value={
                            reviews.customerReviews.filter((review) => {
                              return Math.floor(review.rating) == 4;
                            }).length * 60
                          }
                          max={reviews.reviewsCount}
                          className={`${
                            darkMode
                              ? "text-green-200 "
                              : "text-green-600 opacity-45"
                          } h-3  hover:outline hover:outline-rose-500   `}
                        >
                          {reviews.reviewsCount}
                        </progress>
                      </button>
                    </div>
                    <div className="flex gap-2 items-center ">
                      <span className="opacity-40 font-bold">3</span>
                      <span className="opacity-40 font-bold -ml-1">
                        <RiStarSFill />
                      </span>
                      <button>
                        <progress
                          value={
                            reviews.customerReviews.filter((review) => {
                              return Math.floor(review.rating) == 3;
                            }).length * 50
                          }
                          max={reviews.reviewsCount}
                          className={`${
                            darkMode
                              ? "text-green-200 "
                              : "text-green-600 opacity-45"
                          } h-3  hover:outline hover:outline-rose-500   `}
                        >
                          {reviews.reviewsCount}
                        </progress>
                      </button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="opacity-40 font-bold">2</span>
                      <span className="opacity-40 font-bold -ml-1">
                        <RiStarSFill />
                      </span>
                      <button>
                        <progress
                          value={
                            reviews.customerReviews.filter((review) => {
                              return Math.floor(review.rating) == 2;
                            }).length * 40
                          }
                          max={reviews.reviewsCount}
                          className={`${
                            darkMode
                              ? "text-green-200 "
                              : "text-green-600 opacity-45"
                          } h-3  hover:outline hover:outline-rose-500   `}
                        >
                          {reviews.reviewsCount}
                        </progress>
                      </button>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="opacity-40 font-bold">1</span>
                      <span className="opacity-40 font-bold -ml-1">
                        <RiStarSFill />
                      </span>
                      <button>
                        <progress
                          value={
                            reviews.customerReviews.filter((review) => {
                              return Math.floor(review.rating) == 1;
                            }).length * 30
                          }
                          max={reviews.reviewsCount}
                          className={`${
                            darkMode
                              ? "text-green-200 "
                              : "text-green-600 opacity-45"
                          } h-3  hover:outline hover:outline-rose-500   `}
                        >
                          {reviews.reviewsCount}
                        </progress>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                {reviews?.customerReviews?.map((ele) => {
                  const {
                    user_id,
                    user_name,
                    rating,
                    comment,
                    date,
                    likesCount,
                    dislikesCount,
                  } = ele;

                  return reviews.customerReviews.indexOf(ele) < viewComments ? (
                    <div className="flex flex-col gap-3">
                      <div className="flex  gap-3">
                        <div className="text-sm flex h-fit mt-1 opacity-80 w-fit gap-1 items-center  text-white px-1 bg-emerald-600">
                          <span className=" font-bold">{rating}</span>
                          <span className=" font-bold -ml-1">
                            <RiStarSFill />
                          </span>
                        </div>
                        <p className="align-text-top text-sm opacity-80">
                          {comment}
                        </p>
                      </div>
                      <div className="pr-7 flex justify-between text-xs font-semibold opacity-50">
                        <p>
                          <span className="font-bold">{user_name}</span> |{" "}
                          {date}
                        </p>
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1 ">
                            <span className="hover:scale-125">
                              <FaRegThumbsUp />
                            </span>
                            <span>{likesCount}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="hover:scale-125">
                              <FaRegThumbsDown />
                            </span>
                            <span>{dislikesCount}</span>
                          </div>
                        </div>
                      </div>
                      {darkMode ? "" : <hr />}
                    </div>
                  ) : (
                    <></>
                  );
                })}
                <div className="pr-5 flex justify-between font-semibold opacity-90 text-rose-500 -mt-5 mb-10 ">
                  {viewComments < reviews.customerReviews.length ? (
                    <button
                      onClick={() => setViewComments(viewComments + 2)}
                      className="underline underline-offset-2"
                    >
                      Show More ..
                    </button>
                  ) : (
                    <p className="opacity-90 text-rose-500 no-underline">
                      no more reviews
                    </p>
                  )}
                  {viewComments >= 4 ? (
                    <button
                      onClick={() => setViewComments(2)}
                      className="underline underline-offset-2"
                    >
                      Show Less ..
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              {/* <div className="flex flex-col gap-3">

            <div className="flex  gap-3">
              <div className="text-sm flex h-fit  w-fit gap-1 items-center  text-white px-1 bg-emerald-600">
                <span className=" font-bold">4</span>
                <span className=" font-bold -ml-1">
                  <RiStarSFill />
                </span>
              </div>
              <p className="align-text-top text-sm opacity-80">
                The product is okay overall but the size chart is misleading.
                I bought an XL and the width was more than an inch lower than
                stated and so it ended up being tight. Unfortunately, the next
                size was too large.
              </p>
            </div>
            <div className="pr-7 flex justify-between text-xs font-semibold opacity-50">
              <p>Aman | {new Date().toDateString()}</p>
              <div className="flex gap-4">
                <div className="flex items-center gap-1 ">
                  <span className="hover:scale-125">
                    <FaRegThumbsUp />
                  </span>
                  <span>12</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="hover:scale-125">
                    <FaRegThumbsDown />
                  </span>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div> */}
            </div>
          </div>
        </div>
        {darkMode ? "" : <hr />}
        <hr />
        {/* ***** SIMILAR PRODUCTS ***** */}
        <div className="w-[90%] mx-auto mt-10">
          <p className="w-full mx-auto px-5 font-bold text-xl">
            SIMILAR PRODUCTS{" "}
            <span className="font-semibold text-sm opacity-50 ml-1 ">
              {" "}
              FOR {category.toUpperCase()}
            </span>
          </p>
          {darkMode ? "" : <hr />}

          <div
            className=" flex flex-wrap gap-3 w-fit   
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
        </div>
        {/* ***** SCROLL TO TOP BUTTON ***** */}
        <ScrollToTop />
        <Footer />
      </>
    </div>
  );
}
export default ProductDetail;
