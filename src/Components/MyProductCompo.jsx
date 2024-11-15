import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  addWishListItem,
  removeWishListItem,
} from "../Redux/reducers";
import { Link, useLocation, useNavigate } from "react-router-dom";
function MyProductCompo(props) {
  const location = useLocation();
  const path = location.pathname.split("/").slice(1);
  console.log("Path in MyPRODUCT", path);
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.darkMode);
  const {
    id,
    name,
    title,
    description,
    price,
    image,
    category,
    rating,
    liked,
    discount,
  } = props.ele;
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`${
          darkMode
            ? "bg-zinc-700 text-white shadow-orange-100 "
            : "border-4 shadow-orange-200"
        }  bg-white relative  h-[20rem]  
          w-full sm:w-60 min-w-60 max-w-80
           p-3 rounded-lg  font-semibold mx-auto shadow-md   `}
        // ${path.includes("") ? "w-60 sm:w-60" : "w-60"}
      >
        <button
          className=""
          onClick={() => {
            liked
              ? dispatch(removeWishListItem(id))
              : dispatch(addWishListItem({ id }));
          }}
        >
          {liked ? (
            <FaHeart className="absolute size-5 right-4 top-4 cursor-pointer  font-bold text-red-400  text-md hover:scale-[1.04]" />
          ) : (
            <FaRegHeart className="absolute size-5 right-4 top-4 cursor-pointer hover:text-red-600 font-bold text-gray-400 text-md " />
          )}
        </button>
        <Link to={`/${category}/${id}`}>
          <img
            src={image}
            className="size-32 mx-auto mt-2 mb-4 hover:cursor-pointer hover:scale-[1.04] transition-all"
            // onClick={() => {
            //   navigate(`/${category}/${id}`);
            // }}
          />
        </Link>
        <Link to={`/${category}/${id}`}>
          <p
            className={`text-sm ${
              darkMode
                ? "text-white hover:text-gray-200"
                : "text-gray-600 hover:text-black"
            } font-bold cursor-pointer underline underline-offset-2 hover:scale-[1.02]  `}
            //  onClick={() => {
            //    navigate(`/${category}/${id}`);
            //  }}}
          >
            {title.length < 30 ? title : title.substring(0, 40) + ".."}
          </p>
        </Link>
        <div className="flex gap-[0.15rem] mt-1">
          {[...Array(5)]?.map((ele, index) => {
            return index + 1 <= rating.rate ? (
              <FaStar className="text-yellow-500" />
            ) : (
              <></>
            );
          })}
        </div>
        <div className="flex justify-between   items-center  mt-3">
          <p className="absolute bottom-7 left-3">
            {" "}
            <span className="">₹</span>
            {price}{" "}
            <span
              className={`${
                darkMode ? "text-gray-400" : "text-gray-500"
              } text-xs`}
            >
              ({discount}% Off)
            </span>
          </p>
          <p className="absolute bottom-[0.85rem] left-3  line-through text-gray-400 text-xs">
            {" "}
            <span className="">MRP </span>₹{(price * 1.5).toFixed(2)}
          </p>
          {path.includes("") || path.length == 1 ? (
            <button
              className="bg-orange-400 text-white lg:bg-yellow-400 lg:text-black text-xs font-bold rounded-md hover:bg-yellow-500 p-1 px-2 border-2 mr-2 absolute bottom-3 h-8 right-2  border-orange-500 lg:border-yellow-700 hover:scale-[1.04] "
              onClick={() => {
                dispatch(addCartItem({ id }));
              }}
            >
              Add to Cart
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default MyProductCompo;
