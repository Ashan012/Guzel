import React, { useContext } from "react";
import "./cartTotal.css";
import { StoreContext } from "../../context/storecontext";
import { useNavigate } from "react-router-dom";

const CartTotal = ({ prop }) => {
  const { getTotalAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart-total">
      <h2>Cart Total</h2>
      <div className="cart-total-details">
        <p>Subtotal</p>
        <p>{getTotalAmount()}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <p>Delivery Fess</p>
        <p>{getTotalAmount() === 0 ? 0 : 2}</p>
      </div>
      <hr />
      <div className="cart-total-details">
        <b>Total </b>
        <b>{getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</b>
      </div>

      <button onClick={() => navigate("/order")}>Proceed To {prop}</button>
    </div>
  );
};

export default CartTotal;
