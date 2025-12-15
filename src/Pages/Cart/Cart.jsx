import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/storecontext";
import CartTotal from "../../components/CartTotal/CartTotal.jsx";

const Cart = () => {
  const { food_list, cartItem, removeCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            {
              return (
                <div key={index}>
                  <div className="cart-item-title cart-item-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>${item.price * cartItem[item._id]}</p>
                    <p className="cross" onClick={() => removeCart(item._id)}>
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          }
        })}
      </div>
      <div className="cart-bottom">
        <CartTotal prop={"Checkout"} />
        <div className="cart-promocode">
          <div>if you have a promo code enter here</div>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promocode" className="promo-code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
