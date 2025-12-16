import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <motion.div
        className="header-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        {/* <h2>Welcome to Our Store</h2>
        <p>Discover the best products tailored just for you.</p> */}
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#f0f0f0" }}
          whileTap={{ scale: 0.95 }}
        >
          Shop Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Header;
