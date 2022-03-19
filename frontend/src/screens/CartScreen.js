import React, { useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroupItem,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Message } from "../components/Message";
import { addToCart, removeFromCart } from "../actions/cartAction";

function CartScreen() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const qty = Number(searchParams.get("qty"));

  const dispatch = useDispatch();
  console.log("qty.id => ", id);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  return <div>Cart</div>;
}

export default CartScreen;
