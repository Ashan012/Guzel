import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/storecontext";
import CartTotal from "../../components/CartTotal/CartTotal.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { product_list, cartItem, removeCart } = useContext(StoreContext);

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
        <AnimatePresence>
          {product_list.map((item) => {
            if (cartItem[item._id] > 0) {
              return (
                <motion.div
                  key={item._id}
                  className="cart-item-title cart-item-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>{item.price * cartItem[item._id]}</p>
                  <p className="cross" onClick={() => removeCart(item._id)}>
                    x
                  </p>
                </motion.div>
              );
            }
          })}
        </AnimatePresence>
        <hr />
      </div>

      <div className="cart-bottom">
        <CartTotal prop={"Checkout"} />
        <div className="cart-promocode">
          <div>If you have a promo code enter here</div>
          <div className="cart-promocode-input">
            <input
              type="text"
              placeholder="Promo code"
              className="promo-code"
            />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
