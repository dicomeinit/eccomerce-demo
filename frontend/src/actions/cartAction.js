import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://127.0.0.1:8000/api/products/${id}/`);
  const state = getState()
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  console.log("cart_items from state", JSON.stringify(state.cart.cartItems))
  localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
};
