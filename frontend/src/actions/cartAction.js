import axios from 'axios';
import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_SAVE_SHIPPING_ADDRESS,
    CART_SAVE_PAYMENT_METHOD
} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(
        `/api/products/${id}/`
    );
    const state = getState();
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    });
    console.log('cart_items from state', JSON.stringify(state.cart.cartItems));
    localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
    );
    // localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    const state = getState();

    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
    });

    localStorage.setItem('cartItems', JSON.stringify(state.cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data
    });

    console.log('saveShippingAddress data is', data);

    localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data
    });

    localStorage.setItem('paymentMethod', JSON.stringify(data));
};
