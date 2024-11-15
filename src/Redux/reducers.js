import { productsList } from "./data";
const Add_Item_To_Cart = "addItemToCart";
const Remove_Item_To_Cart = "removeItemToCart";
const Increse_Item_Quantity = "increaseItemQuantity";
const Decrese_Item_Quantity = "decreaseItemQuantity";
const Add_Item_To_Wishlist = "addItemToWishlist";
const Remove_Item_To_Wishlist = "removeItemFromWishlist";
const Switch_Theme = "switchTheme";
const Add_Cart_Item_With_Selected_Product_Details_For_Order =
  "addCartItemWithSelectedProductDetailsForOrder";
const Add_Order_Pincode = "addOrderPincode";
// Action Creators
export function addCartItem(id) {
  return { type: Add_Item_To_Cart, payload: id };
}
export function addCartItemWithSelectedProductDetailsForOrder(
  id,
  selectedDetailsForOrder
) {
  return {
    type: Add_Cart_Item_With_Selected_Product_Details_For_Order,
    payload: { id, selectedDetailsForOrder },
  };
}

export function removeCartItem(id) {
  return { type: Remove_Item_To_Cart, payload: { id } };
}

export function decreaseCartItemQuantity(id) {
  return {
    type: Decrese_Item_Quantity,
    payload: { id },
  };
}

export function increaseCartItemQuantity(id) {
  return {
    type: Increse_Item_Quantity,
    payload: { id },
  };
}

export function addWishListItem(id) {
  return { type: Add_Item_To_Wishlist, payload: id };
}

export function removeWishListItem(id) {
  return { type: Remove_Item_To_Wishlist, payload: { id } };
}
export function switchTheme() {
  return { type: Switch_Theme };
}

export function addOrderPincode(pincode) {
  return { type: Add_Order_Pincode, payload: pincode };
}

const initialStore = {
  products: productsList,
  cartItems: [],
  wishlistItems: [],
  orderPincode: "",
  darkMode: false,
};

export const reducer = (state = initialStore, action) => {
  switch (action.type) {
    // **********************************************************
    // **********************************************************
    case Add_Item_To_Cart: {
      console.log("********************************************");
      // console.log("AddToCart button clicked");
      // console.log("Store state:", state);
      console.log("a");

      const clickedItem = state.products.find((ele) => {
        return ele.id === action.payload.id;
      });
      console.log("clicked item id  :", clickedItem.id);
      console.log("b");

      if (state.cartItems.length === 0) {
        // console.log("if(state.cartItems.length == 0)  ", {
        //   ...state,
        //   cartItems: [{ ...clickedItem, quantity: 1 }],
        // });

        console.log("c");

        return { ...state, cartItems: [{ ...clickedItem, quantity: 1 }] };
      }
      console.log("d");

      const tempCartItems = state.cartItems.map((ele) => {
        console.log("e");

        if (ele.id == action.payload.id) {
          // console.log("Inside tempCartItems ");
          console.log("f");

          let tempEle = ele;
          if (!ele.quantity) {
            console.log("g");

            tempEle = { ...ele, quantity: 1 };
            return tempEle;
          }
          // console.log("tempEle", tempEle);
          console.log("h");

          return {
            ...tempEle,
            quantity: tempEle.quantity + 1,
          };
        }
        console.log("i");
        // tempCartItems.push({ ...clickedItem, quantity: 1 });

        return ele;
      });
      const findEle = tempCartItems.find((ele) => {
        return ele.id == clickedItem.id;
      });
      !findEle
        ? tempCartItems.push({ ...clickedItem, quantity: 1 })
        : console.log("findEle");
      console.log("j");

      // console.log("tempCartItems", tempCartItems);
      // console.log("cartItems", state.cartItems);
      console.log({ ...state, cartItems: tempCartItems });

      return { ...state, cartItems: tempCartItems };
    }
    // **********************************************************
    // **********************************************************
    // **********************************************************
    // **********************************************************
    case Add_Cart_Item_With_Selected_Product_Details_For_Order: {
      console.log("********************************************");

      const clickedItem = state.products.find((ele) => {
        return ele.id === action.payload.id;
      });

      if (state.cartItems.length === 0) {
        return {
          ...state,
          cartItems: [
            {
              ...clickedItem,
              quantity: 1,
              selectedProductDetails: action.payload.selectedDetailsForOrder,
            },
          ],
        };
      }

      const tempCartItems = state.cartItems.map((ele) => {
        if (ele.id == action.payload.id) {
          let tempEle = ele;
          if (!ele.quantity) {
            tempEle = {
              ...ele,
              quantity: 1,
              selectedProductDetails: action.payload.selectedDetailsForOrder,
            };
            return tempEle;
          }

          return {
            ...tempEle,
            quantity: tempEle.quantity + 1,
            selectedProductDetails: action.payload.selectedDetailsForOrder,
          };
        }

        // tempCartItems.push({ ...clickedItem, quantity: 1 });

        return ele;
      });
      const findEle = tempCartItems.find((ele) => {
        return ele.id == clickedItem.id;
      });
      !findEle
        ? tempCartItems.push({
            ...clickedItem,
            quantity: 1,
            selectedProductDetails: action.payload.selectedDetailsForOrder,
          })
        : console.log("findEle");

      return { ...state, cartItems: tempCartItems };
    }
    // **********************************************************
    // **********************************************************

    case Remove_Item_To_Cart: {
      console.log("Remove_Item_To_Cart clicked");
      const tempCartItems = state.cartItems.filter((ele) => {
        return ele.id !== action.payload.id;
      });
      // console.log("tempCartItems", tempCartItems);
      // console.log("tempCartItems", { ...state, cartItems: tempCartItems });
      return { ...state, cartItems: tempCartItems };
    }

    case Increse_Item_Quantity: {
      const tempCartItems = state.cartItems.map((ele) => {
        if (ele.id === action.payload.id) {
          return {
            ...ele,
            quantity: ele.quantity + 1,
          };
        }
        return ele;
      });
      return { ...state, cartItems: tempCartItems };
    }

    case Decrese_Item_Quantity: {
      const tempCartItems = state.cartItems.map((ele) => {
        if (ele.id === action.payload.id && ele.quantity > 1) {
          return {
            ...ele,
            quantity: ele.quantity - 1,
          };
        }
        if (ele.id === action.payload.id && ele.quantity == 1) {
          return {};
        }
        return ele;
      });
      const tempCartItems2 = tempCartItems.filter((ele) => {
        return ele.quantity > 0;
      });
      return { ...state, cartItems: tempCartItems2 };
    }

    // ******  For  WishList  ******
    case Add_Item_To_Wishlist: {
      console.log("Add_Item_To_Wishlis************");
      console.log("state.wishlistItems", state.wishlistItems);
      const tempProductlist = state.products.map((ele) => {
        console.log(ele.id, action.payload.id);
        if (ele.id === action.payload.id) {
          console.log("######### ele.id == action.payload.id  ###########");
          return { ...ele, liked: true };
        }
        return ele;
      });
      console.log(action.payload.id);
      console.log("tempProductList", tempProductlist);
      const tempWishlist2 = tempProductlist.filter((ele) => {
        return ele.liked == true;
      });
      console.log("tempWishlist2", tempWishlist2);
      console.log("hello", {
        ...state,
        products: tempProductlist,
        wishlistItems: tempWishlist2,
      });
      return {
        ...state,
        products: tempProductlist,
        wishlistItems: tempWishlist2,
      };
    }
    case Remove_Item_To_Wishlist: {
      console.log("Remove_Item_To_Wishlist");
      const tempProductlist = state.products.map((ele) => {
        console.log(ele.id, action.payload.id, ele.id == action.payload.id);
        return ele.id == action.payload.id ? { ...ele, liked: false } : ele;
      });
      console.log("xyz");
      const tempWishlist2 = tempProductlist.filter((ele) => {
        console.log(ele.liked);
        return ele.liked === true;
      });
      console.log("xyz");
      return {
        ...state,
        products: tempProductlist,
        wishlistItems: tempWishlist2,
      };
    }
    case Add_Order_Pincode: {
      return {
        ...state,
        orderPincode: action.payload,
      };
    }
    case Switch_Theme: {
      return { ...state, darkMode: !state.darkMode };
    }
    default: {
      return state;
    }
  }
};
