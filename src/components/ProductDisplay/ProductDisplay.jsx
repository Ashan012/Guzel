import React, { useContext } from "react";
import { StoreContext } from "../../context/storecontext";
import "./ProductDisplay.css";
import ProductItem from "../ProductItem/ProductItem";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProductDisplay = ({ category }) => {
  const { product_list } = useContext(StoreContext);

  return (
    <div className="Product-display">
      <h2>Top Dishes Near You</h2>

      <motion.div
        className="Product-display-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {product_list.map((item, index) => {
          if (category === "All" || item.category === category) {
            return (
              <motion.div key={item._id} variants={itemVariants}>
                <ProductItem
                  id={item._id}
                  description={item.description}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />
              </motion.div>
            );
          }
        })}
      </motion.div>
    </div>
  );
};

export default ProductDisplay;
