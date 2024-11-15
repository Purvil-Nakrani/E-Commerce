import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoTriangleDown } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
function Navbar2() {
  const [categories, setCategories] = useState([
    "electronics",
    "jewelery",
    "men's-clothing",
    "women's-clothing",
    "fashion",
  ]);
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <nav
      className={`z-40 w-screen fixed top-[100px] xl:top-[3.75rem] ${
        darkMode ? "bg-black " : "bg-sky-600"
      } text-white flex   xl:bg-slate-700 h-12 items-center overflow-x-scroll md:overflow-hidden border-b-4 border-gray-200`}
    >
      <div className=" hidden xl:flex">
        <button className="flex items-center gap-[0.20rem]">
          <GiHamburgerMenu className="size-6" />
          <span className="text-sm font-bold">All</span>
        </button>
      </div>
      <div className="">
        <ul className="flex  gap-5 ml-4 text-sm font-semibold  ">
          {categories.map((ele) => {
            return (
              <li className="  font-bold  ">
                <NavLink
                  to={`/${ele}`}
                  className={({ isActive }) =>
                    isActive ? "text-orange-300" : ""
                  }
                >
                  {" "}
                  {ele.substring(0, 1).toUpperCase() + "" + ele.substring(1)}
                  {/* aaaaaaaaaaaaaaaaaaaaaaaaab */}
                </NavLink>
              </li>
            );
          })}
          {/* <li className=" font-bold">
            <Link to="/fashion"> Fashion</Link>
          </li> */}
          <li className=" font-bold">
            <Link to="/Accessories"> Accessories</Link>
          </li>
          <li className=" font-bold">
            <a href="/computers">Computers</a>
          </li>
          <li className=" font-bold">
            <a href="newReleases"> New Releases</a>
          </li>
          {/* <li>
            <a href=""> MX Player</a>
          </li>
          <li>
            <a href=""> Sell</a>
          </li>
          <li>
            <a href=""> Best Sellers</a>
          </li>
          <li>
            <a href=""> Todays Deals</a>
          </li>
          <li>
            <a href=""> Mobiles</a>
          </li>
          <li>
            <a href=""> Electronics</a>
          </li>
          <li>
            <a href=""> Home & Kitchen</a>
          </li>*/}
          <li className=" font-bold">
            <a href="" className="flex">
              {" "}
              prime
              <span className="items-center mt-1">
                <GoTriangleDown className="  opacity-90" />
              </span>
            </a>
          </li>
          <li className=" font-bold">
            <Link to=""> Customer Service </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar2;
