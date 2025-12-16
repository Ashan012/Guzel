import React, { useContext, useState } from "react";
import "./ProductItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/storecontext";
import { motion } from "framer-motion";

const ProductItem = ({ id, name, price, image, description }) => {
  const { cartItem, addToCart, removeCart } = useContext(StoreContext);

  return (
    <motion.div
      className="Product-item"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px #00000030" }}
      transition={{ duration: 0.3 }}
    >
      <div className="Product-item-img-container">
        <img className="Product-item-image" src={image} alt={name} />

        {!cartItem[id] ? (
          <motion.img
            className="add"
            src={assets.add_icon_white}
            whileHover={{ scale: 1.2 }}
            onClick={() => addToCart(id)}
          />
        ) : (
          <motion.div
            className="Product-item-counter"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              src={assets.add_icon_green}
              alt=""
              whileTap={{ scale: 0.9 }}
              onClick={() => addToCart(id)}
            />
            <p>{cartItem[id]}</p>
            <motion.img
              src={assets.remove_icon_red}
              alt=""
              whileTap={{ scale: 0.9 }}
              onClick={() => removeCart(id)}
            />
          </motion.div>
        )}
      </div>

      <div className="Product-item-info">
        <div className="Product-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>

        <p className="Product-item-desc">{description}</p>
        <p className="Product-item-price">{price}</p>
      </div>
    </motion.div>
  );
};

export default ProductItem;
