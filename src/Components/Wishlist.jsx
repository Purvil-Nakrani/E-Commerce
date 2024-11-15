import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { removeWishListItem } from "../Redux/reducers";

function Wishlist({ showWishlist, setShowWishlist }) {
  const wishlistItemsData = useSelector((state) => state.wishlistItems);
  console.log("wishlistItemsData in Wishlist Compo : ", wishlistItemsData);
  const dispatch = useDispatch();

  console.log(
    "store state",
    useSelector((state) => state)
  );
  console.log("wishlistItemsData in Wishlist compo", wishlistItemsData);
  const darkMode = useSelector((state) => state.darkMode);
  return (
    // <div
    //   className={`${showWishlist ? "hidden" : "visible"}px-4 py-2  flex flex-col`}
    // >
    <div
      className={` ${
        darkMode ? "bg-black text-white" : "bg-white"
      } px-4 py-5  flex flex-col`}
    >
      <div className="relative flex justify-between mb-8  ">
        <p
          className={`font-bold ${
            darkMode ? "text-white" : "text-slate-800"
          }  text-2xl`}
        >
          Items in My Wishlist
        </p>
        <button onClick={() => setShowWishlist(!showWishlist)}>
          <IoCloseSharp className="mt-1 font-extrabold text-3xl" />
        </button>
      </div>
      <div className="text-lg -mt-2 mb-1">
        <p>
          You loves :{" "}
          <span className="font-bold">{wishlistItemsData.length} Items</span>
        </p>
      </div>
      {wishlistItemsData.length > 0 ? (
        <div className=" h-[40rem]  overflow-y-hidden ">
          {wishlistItemsData.map((ele) => {
            const { id, title, price, image } = ele;
            console.log("id", id);

            return (
              <div
                className={`mb-2 ${
                  darkMode ? "bg-zinc-800" : "bg-red-50"
                }  >mb-2   `}
              >
                <div className="p-3 border-2 rounded-sm border-gray-300     hover:shadow-md  shadow  flex justify-between items-center">
                  <img src={image} alt="product img" className="size-14 ml-3" />
                  <div className="w-[56%] text-left flex flex-col ">
                    <a
                      href="#"
                      className="underline
                     underline-offset-[3px]"
                    >
                      {title.length < 30
                        ? title
                        : title.substring(0, 27) + ".."}
                    </a>
                    <p>₹{price}</p>
                  </div>

                  <div className="  text-right  ">
                    <div className="  w-full ">
                      <button
                        className="bg-red-100 p-1 px-2 border-2 rounded-md  font-bold hover:border-red-200 
                        hover:bg-red-200  text-gray-700"
                        onClick={() => dispatch(removeWishListItem(id))}
                      >
                        Remove
                        {/* {ele.liked ? (
                          <FaHeart className="text-lg cursor-pointer  font-bold text-red-500  text-md mr-4" />
                        ) : (
                          <FaRegHeart className="absolute size-5 right-4 top-4 cursor-pointer hover:text-red-600 font-bold text-gray-400 text-md" />
                        )} */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-[70%] p-5 my-20 flex flex-col  items-center">
          <img
            src="https://harshcreation.com/images/emptywishlist.jpg"
            className=""
          />
          <h1 className="text-2xl -mt-6 text-slate-400 font-bold">
            Your wishlist is empty!
          </h1>
          <h1 className="text-xl text-gray-400 font-bold">
            Explore more and shortlist some items
          </h1>
        </div>
      )}

      <div className="-ml-4 mx-auto absolute bottom-5 w-full  mt-4 p-2 ">
        <div className="mt-2 mx-auto w-[90%]  ">
          <button
            className=" font-bold  w-full bg-yellow-300 p-2 border-2 text-slate-600 border-yellow-500 rounded-md"
            onClick={() => setShowWishlist(!showWishlist)}
          >
            Explore other Items
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
