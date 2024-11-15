import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMessenger } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
function Footer() {
  const darkMode = useSelector((state) => state.darkMode);
  return (
    <>
      <div
        className={`z-40 sm:justify-evenly xl:hidden ${
          darkMode ? "bg-black" : "bg-sky-600"
        } pt-3 text-white fixed bottom-0 flex justify-between w-full h-14 px-8 py-2 border-t-4 text-sm `}
      >
        {/* <Link to="/"> */}
        <Link to="/" className="flex flex-col  justify-center">
          <span className="text-2xl  mx-auto">
            <TiHomeOutline />
          </span>
          <p>Home</p>
        </Link>
        {/* </Link> */}
        <div className="flex flex-col  justify-center">
          <span className="text-2xl  mx-auto">
            <BiCategory />
          </span>
          <p>All Category</p>
        </div>
        <div className="flex flex-col  justify-center">
          <span className="text-2xl  mx-auto">
            <TbBrandMessenger />
          </span>
          <p>Messenger</p>
        </div>
        <div className="flex flex-col  justify-center">
          <span className="text-2xl mx-auto">
            <MdOutlineAccountCircle />
          </span>
          <p>Account</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
