import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";
import { motion } from "framer-motion";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Explore our Products
      </motion.h1>
      <motion.p
        className="explore-menu-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quae.
        Lorem ipsum dolor sit, amet
      </motion.p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <motion.div
            key={index}
            className="explore-menu-list-item"
            onClick={() =>
              setCategory(category === item.menu_name ? "All" : item.menu_name)
            }
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </motion.div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
