import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RxCircleBackslash } from "react-icons/rx";
import { TbArrowBack, TbMathGreater } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { RiCoupon2Line } from "react-icons/ri";
import {
  addOrderPincode,
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  removeCartItem,
} from "../Redux/reducers";
import { IoShareSocialSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
function Cart({ showCart, setShowCart }) {
  const cartItemsData = useSelector((state) => state.cartItems);
  console.log("cartItemsData in Cart Compo : ", cartItemsData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let pincode = useSelector((state) => state.orderPincode);
  let items = 0;

  cartItemsData.forEach((ele) => {
    items += ele.quantity;
  });

  let totalAmount = 0;
  cartItemsData.forEach((ele) => {
    totalAmount += ele.price * ele.quantity;
  });
  const darkMode = useSelector((state) => state.darkMode);
  let Total_MRP = 0;

  cartItemsData.forEach(
    (ele) => (Total_MRP += (ele.price * 100) / (100 - ele.discount))
  );
  const [showEnterDeliveryPincodeBox, setShowEnterDeliveryPincodeBox] =
    useState(false);
  const [showRemoveItemFromBag, setShowRemoveItemFromBag] = useState(false);
  const [showAllRemoveItemFromBag, setAllShowRemoveItemFromBag] =
    useState(false);
  // const [Total_MRP, setTotal_MRP] = useState(0);
  // useEffect(() => {
  //   cartItemsData.forEach((ele) =>
  //     setTotal_MRP(Total_MRP + (ele.price * 100) / (100 - ele.discount))
  //   );
  // }, [cartItemsData]);
  return (
    // <div
    //   className={`${showcart ? "hidden" : "visible"}px-4 py-2  flex flex-col`}
    // >
    <div
      className={` ${
        darkMode ? "bg-black text-white" : "bg-white"
      }  pb-5 flex flex-col overflow-scroll`}
    >
      {/* ***** SHOPING BAG HEADER NAVBAR ***** */}
      <div
        className={` flex justify-between fixed top-0 h-14 ${
          darkMode ? "bg-black" : "bg-white"
        } z-[100] w-full  items-center shadow-sm shadow-gray-300 p-4`}
      >
        <div className="flex gap-4 text-sm items-center ">
          <button onClick={() => setShowCart(!showCart)}>
            <IoMdArrowBack className=" font-extrabold text-2xl opacity-70" />
          </button>
          <p
            className={` ${
              darkMode ? "text-white" : "text-gray-500"
            }  text-[1rem] font-semibold `}
          >
            SHOPPING BAG
          </p>
        </div>
        {items > 0 ? (
          <p className="text-[0.800rem] text-gray-600 ">
            STEP{" "}
            <span>
              {1}/{3}
            </span>
          </p>
        ) : (
          ""
        )}
      </div>

      {items > 0 ? (
        <div className=" p-3 overflow-y-auto mt-[55px] mb-5  text-sm">
          {/* ***** CHECK DELIVERY TIME AND SERVICES ***** */}
          {pincode && pincode !== "null" && pincode !== "" ? (
            <div className="flex justify-between mb-10 ">
              <p className=" text-gray-600 ">
                Deliver to : <span className="font-bold">{pincode}</span>
              </p>
              <button
                className="text-rose-400 font-bold"
                onClick={() =>
                  setShowEnterDeliveryPincodeBox(!showEnterDeliveryPincodeBox)
                }
              >
                Change{" "}
              </button>
            </div>
          ) : (
            <div className="flex justify-between  ">
              <p className="font-semibold text-gray-600 ">
                Check delivery time & services
              </p>
              <button
                className="text-rose-400 font-bold"
                onClick={() =>
                  setShowEnterDeliveryPincodeBox(!showEnterDeliveryPincodeBox)
                }
              >
                ENTER PIN CODE
              </button>
            </div>
          )}

          {/* ***** ITEMS OUT OF STOCKS ***** */}
          <div className="flex items-center justify-between mt-5 text-sm">
            <div className="flex items-center gap-1 font-semibold">
              <MdErrorOutline />
              <p className="text-gray-600">Items out of stock.</p>
            </div>
            <button className="text-rose-400  font-bold ">VIEW</button>
          </div>
          {/* ***** ITEMS SELECTED ***** */}
          <div className="mt-10  flex justify-between items-center">
            <div className="  flex gap-3 items-center font-bold text-sm ">
              <input type="checkbox" className="size-4  accent-rose-500" />
              <p className="text-gray-500">
                {items}/{items} ITEMS SELECTED{" "}
                <span className="text-rose-400">
                  (₹{Math.floor(totalAmount)})
                </span>
              </p>
            </div>
            <div className="flex gap-6 opacity-60 ">
              <button>
                <IoShareSocialSharp className="size-5" />
              </button>
              <button>
                <RiDeleteBin5Line className="size-5" />
              </button>
              <button>
                <FaHeart className="size-5" />
              </button>
            </div>
          </div>
          {/* ***** CART ITEMS ***** */}
          <div className="w-full">
            {cartItemsData.map((ele) => {
              const {
                id,
                title,
                description,
                price,
                productDetails,
                image,
                discount,
                sizesAvailable,
                quantity,
                returnable,
              } = ele;
              console.log("Quantity inside cart", quantity);
              return (
                <div className={`mb-7 ${darkMode ? "bg-black" : ""}  `}>
                  <div className="relative py-1 h-[140px]  rounded-sm gap-4   w-full hover:shadow-md   mb-7  flex float-left ">
                    <input
                      type="checkbox"
                      className="absolute top-2 left-2 size-4 accent-rose-500 opacity-70 "
                    />
                    <button
                      className="absolute top-[5px] right-2 "
                      onClick={() => dispatch(removeCartItem(id))}
                    >
                      <RxCross2 className="size-4" />
                    </button>
                    <div className="w-[130px]">
                      <img
                        src={image}
                        alt="product img"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col w-full  justify-between gap-1 pb-2">
                      <div className="w-full text-left flex flex-col text-xs ">
                        <a
                          href="#"
                          className="pb-1 font-bold text-gray-700
                     "
                        >
                          {title.length < 30
                            ? title
                            : title.substring(0, 27) + ".."}
                        </a>
                        <p className="text-gray-500 text-xs">
                          {description.substring(0, 40) + "..."}
                        </p>
                        <p className="text-gray-400 ">
                          Sold by : {productDetails.Brand}
                        </p>
                      </div>
                      <div className="mt-1 text-sm font-semibold flex  gap-7 pl-2">
                        <p>
                          Size : {ele.selectedProductDetails?.selected_Size}
                        </p>
                        {ele.selectedProductDetails?.selected_Color ? (
                          <p>
                            Color :
                            <span className={` rounded-full  ml-1`}>
                              {ele.selectedProductDetails?.selected_Color}{" "}
                            </span>
                          </p>
                        ) : (
                          ""
                        )}
                        <p>Qty : {quantity}</p>
                      </div>
                      <div className="text-xs font-semibold flex gap-2 mt-1 ">
                        <p className="font-bold">₹{price}</p>
                        <p className="opacity-50 line-through">
                          ₹{Math.floor((price * 100) / (100 - discount))}
                        </p>
                        <p className="text-rose-400">{discount}% OFF</p>
                      </div>
                      <div className=" mt-[3px]">
                        {returnable ? (
                          <span className="text-xs flex gap-1 items-center ">
                            <TbArrowBack className="text-sm  border-[1px] p-[1px] border-slate-900 rounded-full" />
                            <span className="font-bold text-xs text-gray-700">
                              {Math.floor(Math.random() * 15)} days{" "}
                            </span>{" "}
                            return available
                          </span>
                        ) : (
                          <span className="font-bold text-sm flex gap-1 items-center text-gray-600">
                            <span>
                              <RxCircleBackslash className="font-xs font-bold" />
                            </span>
                            Not returnable
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* >>>>> COUPON SECTION >>> START  */}
          <div className="px-3 flex flex-col text-sm pt-6 ">
            <p className="font-bold text-gray-500 text-sm">COUPON</p>
            <div className="flex justify-between font-semibold items-center  mt-7">
              <div className="flex gap-2 items-center text-gray-900">
                <span>
                  <RiCoupon2Line className="size-4" />
                </span>
                <span className="font-bold">Best Coupon For You</span>
              </div>
              <button className="flex gap-1 items-center text-rose-500 opacity-90">
                <span>All Coupons </span>
                <span>
                  <TbMathGreater className="size-3" />
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-3 border-[1px] border-green-300 p-3 rounded-md mt-3 ">
              <div className=" flex flex-col gap-1">
                <span className="font-bold text-gray-800">save upto ₹50 </span>
                <span>Shop for Rs. 100 more to apply.</span>
              </div>
              <div className="flex justify-between font-bold text-xs">
                <p className="text-gray-400 border-[1px] border-gray-400 border-dashed p-2">
                  MENS25PERCENT
                </p>
                <button className="text-rose-500 border-[1px] rounded-sm border-rose-500 p-2">
                  +ADD ITEM
                </button>
              </div>
            </div>
          </div>
          {/* <<<<< COUPON SECTION <<< END  */}

          {/* >>>>> PRICE DETAILS >> START */}
          <div className="flex flex-col gap-3 px-3 mt-10  text-sm opacity-75">
            <p className=" leading-10 font-bold">
              PRICE DETAILS ({items} Items)
            </p>
            <div className="leading-5">
              <div className="flex justify-between leading-7">
                <p>Total MRP</p>
                {/* <p>₹{Math.floor(Total_MRP)}</p> */}
                <p>₹{Math.floor(Total_MRP)}</p>
              </div>
              <div className="flex justify-between  leading-7">
                <p>
                  Discount on MRP{" "}
                  <span className="font-bold text-rose-600">Know More</span>
                </p>
                <p className="text-green-700">
                  -₹{Math.floor(Total_MRP - totalAmount)}
                </p>
              </div>
              <div className="flex justify-between  leading-7">
                <p>Coupon Discount</p>
                <button className="font-semibold text-rose-600">
                  Apply Coupon
                </button>
              </div>
              <div className="flex justify-between  leading-7">
                <p>
                  Platform Fee{" "}
                  <span className="font-bold text-rose-600">Know More</span>
                </p>
                <p className="text-green-700">FREE</p>
              </div>
              <div className="flex justify-between  leading-7">
                <p>
                  Shipping Fee{" "}
                  <span className="font-bold text-rose-600">Know More</span>
                </p>
                <p className="text-green-700">FREE</p>
              </div>
            </div>
            <div className="flex justify-between  leading-10 font-bold">
              <p>Total Amount</p>
              <p>₹{Math.floor(totalAmount)}</p>
            </div>
          </div>
          {/* <<<<< PRICE DETAILS << END */}
          <img
            src="https://assets.myntassets.com/f_webp,dpr_2,q_60,c_limit,fl_progressive/assets/images/retaillabs/2020/6/24/11940eed-9b55-4171-9e59-dfb273b3f5961592993834502-1--1-.png"
            className="w-full mt-1"
          />
          <p className="ml-3 mt-2 mb-24 text-sm opacity-70 font-semibold">
            By placing the order, you agree to Site's{" "}
            <button className="text-rose-600 font-semibold">
              Terms of Use
            </button>{" "}
            and{" "}
            <button className="text-rose-600 font-semibold">
              Privacy Policy
            </button>
          </p>
        </div>
      ) : (
        <div className="h-[70%] p-5 my-20 flex flex-col  items-center px-4">
          <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" />
          <h1 className="text-2xl -mt-6 text-slate-400 font-bold">
            Cart is Empty
          </h1>
          <h1 className="text-2xl text-slate-500 font-bold">
            Please select Items
          </h1>
        </div>
      )}

      {/* >>>>> CART FOOTER PLACE ORDER >>> START /}
      {/* <div className=" mx-auto absolute bottom-5  w-full mt-4 px-4">
        <div className="text-lg">
          <div>
            <p>
              Items : <span className="">{items}</span>
            </p>
            <p>
              Total Amount : <span> ₹{totalAmount.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div> */}
      <div
        className={`fixed bottom-0 mt-2 px-4  h-28 w-full mx-auto flex flex-col pt-1 gap-3 justify-start ${
          darkMode ? "bg-black text-white" : "bg-white"
        } border-t-[2px]`}
      >
        <p className="mx-auto text-sm font-bold opacity-70">
          {cartItemsData.length} Items selected for order
        </p>
        <button
          className=" font-bold mx-auto w-full bg-rose-500 p-2 border-2 text-white border-rose-500 rounded-md   h-12"
          onClick={() => setShowCart(!showCart)}
        >
          PLACE ORDER
        </button>
      </div>
      {/* <<<<< CART FOOTER PLACE ORDER <<< END   */}

      {/* >>>>> ENTER DELIVERY PINCODE BOX BOTTOM >>> START  */}
      {showEnterDeliveryPincodeBox ? (
        <div
          className="fixed top-0 bg-black opacity-60 h-full w-full z-[99]"
          onClick={() =>
            setShowEnterDeliveryPincodeBox(!showEnterDeliveryPincodeBox)
          }
        ></div>
      ) : (
        ""
      )}
      {showEnterDeliveryPincodeBox ? (
        <div className="flex flex-col justify-between bg-white z-[101] fixed bottom-0 w-full min-h-32 px-3 pt-4 pb-4 ">
          <div className="flex justify-between font-semibold">
            <p>Enter Delivery Pincode</p>
            <button
              onClick={() => {
                setShowEnterDeliveryPincodeBox(!showEnterDeliveryPincodeBox);
              }}
            >
              <RxCross2 className="size-6" />
            </button>
          </div>
          <div className="mx-auto w-full mt-10">
            <div className="relative w-full mb-2">
              <input
                id="deliveryOptionPincodeAvailableCart"
                type="text"
                name="pincode delivery option check"
                placeholder="Enter Pincode"
                className="w-full  border-2 border-gray-400 rounded-md p-3 placeholder:font-semibold placeholder:text-lg outline-none"
              />
              <button
                className="absolute  top-3 right-[5%]    text-orange-500 font-extrabold "
                onClick={() => {
                  dispatch(
                    addOrderPincode(
                      cartItemsData[0].availability?.locations?.includes(
                        document.querySelector(
                          "#deliveryOptionPincodeAvailableCart"
                        ).value
                      )
                        ? document.querySelector(
                            "#deliveryOptionPincodeAvailableCart"
                          ).value
                        : "null"
                    )
                  );
                  if (
                    cartItemsData[0].availability?.locations?.includes(
                      document.querySelector(
                        "#deliveryOptionPincodeAvailableCart"
                      ).value
                    )
                  ) {
                    setShowEnterDeliveryPincodeBox(
                      !showEnterDeliveryPincodeBox
                    );
                  }
                }}
              >
                check
              </button>
            </div>
            {cartItemsData[0].availability?.locations?.includes(pincode) ? (
              <p className="text-sm font-bold opacity-100 -mt-1  text-green-700 pl-2">
                {/* Delivery is available in your area. */}
              </p>
            ) : (
              <p className="text-sm font-semibold  -mt-1">
                {pincode == "" ? (
                  <span className="opacity-50"></span>
                ) : (
                  <span className="text-red-400 opacity-100 font-bold pl-2">
                    Invalid Pincode, Please enter a valid pincode.
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* >>>>> REMOVE ITEM FROM BAG BOX BOTTOM >>> START  */}
      {showRemoveItemFromBag ? (
        <div
          className="fixed top-0 bg-black opacity-60 h-full w-full z-[99]"
          onClick={() => setShowRemoveItemFromBag(!showRemoveItemFromBag)}
        ></div>
      ) : (
        ""
      )}
      {showEnterDeliveryPincodeBox ? (
        <div className="flex flex-col justify-between bg-white z-[101] fixed bottom-0 w-full min-h-32 px-3 pt-4 pb-4 ">
          <div className="flex justify-between font-semibold">
            <p>Enter Delivery Pincode</p>
            <button
              onClick={() => {
                setShowEnterDeliveryPincodeBox(!showEnterDeliveryPincodeBox);
              }}
            >
              <RxCross2 className="size-6" />
            </button>
          </div>
          <div className="mx-auto w-full mt-10">
            <div className="relative w-full mb-2">
              <input
                id="deliveryOptionPincodeAvailableCart"
                type="text"
                name="pincode delivery option check"
                placeholder="Enter Pincode"
                className="w-full  border-2 border-gray-400 rounded-md p-3 placeholder:font-semibold placeholder:text-lg outline-none"
              />
              <button
                className="absolute  top-3 right-[5%]    text-orange-500 font-extrabold "
                onClick={() => {
                  dispatch(
                    addOrderPincode(
                      cartItemsData[0].availability?.locations?.includes(
                        document.querySelector(
                          "#deliveryOptionPincodeAvailableCart"
                        ).value
                      )
                        ? document.querySelector(
                            "#deliveryOptionPincodeAvailableCart"
                          ).value
                        : "null"
                    )
                  );
                  if (
                    cartItemsData[0].availability?.locations?.includes(
                      document.querySelector(
                        "#deliveryOptionPincodeAvailableCart"
                      ).value
                    )
                  ) {
                    setShowEnterDeliveryPincodeBox(
                      !showEnterDeliveryPincodeBox
                    );
                  }
                }}
              >
                check
              </button>
            </div>
            {cartItemsData[0].availability?.locations?.includes(pincode) ? (
              <p className="text-sm font-bold opacity-100 -mt-1  text-green-700 pl-2">
                {/* Delivery is available in your area. */}
              </p>
            ) : (
              <p className="text-sm font-semibold  -mt-1">
                {pincode == "" ? (
                  <span className="opacity-50"></span>
                ) : (
                  <span className="text-red-400 opacity-100 font-bold pl-2">
                    Invalid Pincode, Please enter a valid pincode.
                  </span>
                )}
              </p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;

/* <div className="  text-right  ">
                        <div className="  w-full ">
                          {/* <button onClick={() => dispatch(removeCartItem(id))}>
                            <MdDelete className="size-6  " />
                          </button> */

//   </div>
//   <div className="flex gap-[0.35rem]">
//     <button
//       onClick={() =>
//         dispatch(decreaseCartItemQuantity(id))
//       }
//     >
//       <CiSquareMinus className="size-6 font-bold" />
//     </button>
//     <span className="font-bold ">{quantity}</span>
//     <button
//       onClick={() =>
//         dispatch(increaseCartItemQuantity(id))
//       }
//     >
//       <CiSquarePlus className="size-6 font-bold" />
//     </button>
//   </div>
// </div> */}
