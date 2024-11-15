import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { IoHeartCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { switchTheme } from "../Redux/reducers";
function Navbar({
  showCart,
  setShowCart,
  showWishlist,
  setShowWishlist,
  showSideBar,
  setShowSideBar,
}) {
  console.log(showCart, setShowCart, showWishlist, setShowWishlist);
  const cartItemsData = useSelector((state) => state.cartItems);
  const wishlistItemsData = useSelector((state) => state.wishlistItems);
  const darkMode = useSelector((state) => state.darkMode);

  let cartItemsCount = 0;
  cartItemsData.forEach((ele) => {
    cartItemsCount += ele.quantity;
  });
  let wishlistItemsCount = 0;
  wishlistItemsData.forEach((ele) => {
    wishlistItemsCount += ele.quantity;
  });
  const navigate = useNavigate();
  // const [showCart, setShowCart] = useState(false);
  const disPatch = useDispatch();

  return (
    <nav
      className={`sticky top-0 z-50
          text-white ${
            darkMode ? "bg-black " : "bg-sky-600"
          } xl:text-white items-center     xl:bg-slate-800 h-[100px] xl:h-[60px]  text-md w-full  `}
    >
      <div className="p-2  pr-4 flex justify-between items-center text-left ">
        {/* **** HAMBURGER ICON & LOGO ***** */}
        <div className="flex pb-1">
          {/* ***** HAMBURGER ICON ***** */}
          <div className="xl:hidden pt-2 mr-2 ">
            <button
              className="flex items-center gap-[0.20rem]"
              onClick={() => {
                setShowSideBar(!showSideBar);
              }}
            >
              <GiHamburgerMenu className="size-6" />
            </button>
          </div>
          {/* ***** AMAZON LOGO ***** */}
          <div className="">
            <Link to="/" className="text-2xl xl:text-3xl font-semibold">
              amazon
              <span className="text-xs xl:text-sm font-semibold">.in</span>
              {/* <span className="ml-4 text-sm text-red-400">|| श्री गणेश ||</span> */}
            </Link>
          </div>
        </div>
        {/* ***** LOCATION ***** */}
        <div className="hidden xl:flex  items-end ">
          <div className="text-xl font-bold">
            <CiLocationOn className="mr-[0.10rem] " />
          </div>
          <div>
            <p className="text-zinc-400 text-[0.600rem] leading-3 font-bold">
              Delivering to Surat 394101
            </p>
            <p className=" text-xs  leading-3 font-semibold">Update location</p>
          </div>
        </div>
        {/* ***** SEARCH INPUT ***** */}
        <div className="hidden xl:flex items-center pt-2 w-[50%] ">
          <input
            id="input_search"
            type="text"
            placeholder="Search Amazone.in                                               "
            className="z-50 text-black h-8 w-full text-sm p-[.35rem] outline outline-2 focus:outline-yellow-500 rounded-l-sm pl-2 pb-2 placeholder:text-sm placeholder:text-zinc-400 placeholder:font-semibold"
            onChange={() => {
              let searchValue = document.querySelector("#input_search").value;
              if (
                searchValue.includes("fashion") ||
                searchValue.includes("cloth")
              ) {
                navigate("/fashion");
              } else if (searchValue.includes("women")) {
                navigate("/women's-clothing");
              } else if (searchValue.includes("men")) {
                navigate("/men's-clothing");
              } else if (
                searchValue.includes("jewelery") ||
                searchValue.includes("ring")
              ) {
                navigate("/jewelery");
              } else if (
                searchValue.includes("accessories") ||
                searchValue.includes("bag")
              ) {
                navigate("/Accessories");
              } else if (
                searchValue.includes("electronics") ||
                searchValue.includes("lcd") ||
                searchValue.includes("ssd")
              ) {
                navigate("/electronics");
              }
            }}
          ></input>
          <button
            className="bg-yellow-500 h-8 w-12 px-4 rounded-r-sm text-black"
            onClick={() => {
              let searchValue = document.querySelector("#input_search").value;
              if (
                searchValue.includes("fashion") ||
                searchValue.includes("cloth")
              ) {
                navigate("/fashion");
              } else if (searchValue.includes("women")) {
                navigate("/women's-clothing");
              } else if (searchValue.includes("men")) {
                navigate("/men's-clothing");
              } else if (
                searchValue.includes("jewelery") ||
                searchValue.includes("ring")
              ) {
                navigate("/jewelery");
              } else if (
                searchValue.includes("accessories") ||
                searchValue.includes("bag")
              ) {
                navigate("/Accessories");
              } else if (
                searchValue.includes("electronics") ||
                searchValue.includes("lcd") ||
                searchValue.includes("ssd")
              ) {
                navigate("/electronics");
              }
            }}
          >
            <FaSearch className="text-center" />
          </button>
        </div>
        {/* ***** INDIA EN ***** */}
        <div className="hidden xl:flex gap-[0.15rem]">
          <div className="text-sm pt-1 opacity-80  "> &#x1f1ee;&#x1f1f3;</div>
          <div className="font-semibold">
            <button className="cursor:pointer">EN</button>
          </div>
          <div className="h-6">
            {" "}
            <button className="cursor:pointer">
              <GoTriangleDown className="mt-2 -ml-1 opacity-90" />
            </button>
          </div>
        </div>
        {/* ***** ACCOUNTS & LISTS ***** */}
        <div className="hidden xl:flex flex-col">
          <p className="opacity-80 text-xs ">Hello, sign in</p>
          <div className="flex">
            <a href="/accounts" className="text-sm font-semibold leading-3 ">
              Accounts & Lists
            </a>
            <div>
              {" "}
              <GoTriangleDown className=" opacity-80" />
            </div>
          </div>
        </div>
        {/* ***** RETURNS & ORDERS ***** */}
        <div className="hidden xl:flex">
          <a href="/orders">
            <p className="opacity-80 text-xs font-semibold ">Returns</p>
            <p className="text-sm font-semibold leading-3 ">& Orders</p>
          </a>
        </div>
        {/* ***** DARK MODE TOGGLE BUTON ***** */}

        {/* ***** WISHLIST BUTTON & CART BUTTON ***** */}
        <div className="flex gap-2 items-center">
          {/* ***** WISHLIST BUTTON ***** */}
          <button
            className="px-1 h-6 mr-3 w-10 rounded-full bg-white"
            onClick={() => disPatch(switchTheme())}
          >
            <p
              className={`w-4 h-4 text-xs rounded-full bg-black text-black ${
                darkMode ? "float-right" : "float-left "
              } `}
            >
              a
            </p>
          </button>
          <div className="flex items-center">
            <button
              className="relative text-black"
              onClick={() => {
                setShowWishlist(!showWishlist);
              }}
            >
              <IoHeartCircle className="size-8  text-white" />
              <p className="inline-block text-lg absolute -top-[0.85rem] -right-[0.35rem] font-bold rounded-full text-orange-200 w-4 text-center ">
                {wishlistItemsData ? wishlistItemsData.length : 0}
              </p>
            </button>
          </div>

          {/* ***** CART BUTTON ***** */}
          <div>
            <button
              className="relative flex items-center"
              onClick={() => {
                console.log("show");
                setShowCart(!showCart);
              }}
            >
              <div>
                <IoCartOutline className="size-8" />
              </div>
              <p className=" text-orange-200  font-bold rounded-full text-xl text-center absolute -top-[0.85rem] -right-[0.35rem] ">
                {cartItemsCount ? cartItemsCount : 0}
              </p>
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* ***** SEARCH INPUT ***** */}
        <div className="flex xl:hidden items-center w-full    px-2 ">
          {/* <div className="flex xl:hidden items-center w-full sm:w-[20%] md:w-[30%] lg:w-[40%] xl:w-[50%] 2xl:w-[60%] "> */}
          <input
            id="input_search2"
            type="text"
            placeholder="Search Amazone.in                                               "
            className="z-50 text-black h-10 w-full text-sm p-[.35rem]  outline outline-2  outline-orange-500  focus:outline-rose-600 rounded-l-sm pl-2 pb-2 placeholder:text-sm placeholder:text-zinc-500 placeholder:font-semibold"
            onChange={() => {
              let searchValue = document.querySelector("#input_search2").value;
              if (
                searchValue.includes("fashion") ||
                searchValue.includes("cloth")
              ) {
                navigate("/fashion");
              } else if (searchValue.includes("women")) {
                navigate("/women's-clothing");
              } else if (searchValue.includes("men")) {
                navigate("/men's-clothing");
              } else if (
                searchValue.includes("jewelery") ||
                searchValue.includes("ring")
              ) {
                navigate("/jewelery");
              } else if (
                searchValue.includes("accessories") ||
                searchValue.includes("bag")
              ) {
                navigate("/Accessories");
              } else if (
                searchValue.includes("electronics") ||
                searchValue.includes("lcd") ||
                searchValue.includes("ssd")
              ) {
                navigate("/electronics");
              }
            }}
          ></input>
          <button
            className="bg-orange-500  border-2 border-orange-600 h-[2.7rem] w-14 px-4 rounded-r-sm text-white"
            onClick={() => {
              let searchValue = document.querySelector("#input_search").value;
              if (
                searchValue.includes("fashion") ||
                searchValue.includes("cloth")
              ) {
                navigate("/fashion");
              } else if (searchValue.includes("women")) {
                navigate("/women's-clothing");
              } else if (searchValue.includes("men")) {
                navigate("/men's-clothing");
              } else if (
                searchValue.includes("jewelery") ||
                searchValue.includes("ring")
              ) {
                navigate("/jewelery");
              } else if (
                searchValue.includes("accessories") ||
                searchValue.includes("bag")
              ) {
                navigate("/Accessories");
              } else if (
                searchValue.includes("electronics") ||
                searchValue.includes("lcd") ||
                searchValue.includes("ssd")
              ) {
                navigate("/electronics");
              }
            }}
          >
            <FaSearch className="text-center" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
