import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
function SideBar({ showSideBar, setShowSideBar }) {
  const [categories, setCategories] = useState([
    "all-categories",
    "men's-clothing",
    "women's-clothing",
    "electronics",
    "fashion",
    "jewelery",
  ]);
  const [menu2, setMenu2] = useState([
    "Gift-Cards",
    "My-Orders",
    "My-Account",
    "My-Notifications",
    "Choose-Language",
    "Contact-Us",
    "FAQs",
  ]);
  return (
    <div className="w-full h-full relative  z-50 ">
      {/* <div
        className="absolute top-1  right-1 text-black text-4xl "
        onClick={() => setShowSideBar(!showSideBar)}
      >
        <IoCloseSharp className="font-extrabold" />
      </div> */}
      <div>
        <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/e3e71e2e-0d20-4f42-a02a-74e4c65317a31698602536826-Flat_200--2-.jpg" />
      </div>
      <div className="  flex flex-col  gap-5 p-6 font-bold text-md">
        <div className="flex flex-col   gap-5">
          {categories.map((ele) => {
            return (
              <button className="flex justify-between   opacity-60">
                <NavLink
                  to={`/${ele.toLocaleLowerCase()}`}
                  className={(isActive) => (isActive ? "" : "text-orange-400")}
                >
                  {ele.substring(0, 1).toLocaleUpperCase() +
                    ele.substring(1).split("-").join(" ")}
                </NavLink>
                <p className="opacity-60 ">&gt;</p>
              </button>
            );
          })}
        </div>
        <div className="flex flex-col  text-md line  font-semibold  opacity-60 gap-5 ">
          {menu2.map((ele) => {
            return (
              <button className="flex justify-between ">
                <NavLink
                  to={`${ele.toLowerCase()}`}
                  className={(isActive) => (isActive ? "" : "")}
                >
                  {ele.substring(0, 1).toLocaleUpperCase() +
                    ele.substring(1).split("-").join(" ")}
                </NavLink>
                <p className="opacity-60 ">&gt;</p>
              </button>
            );
          })}
        </div>
        <div className="">
          <img src="https://assets.myntassets.com/assets/images/retaillabs/2022/12/30/856cb741-8473-4d5e-b6e3-a52b3d98c99e1672386455977-PWA---App-Download-banner.png" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
