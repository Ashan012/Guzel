import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/storecontext";

const NavBar = ({ setIsLogin }) => {
  const { getTotalAmount } = useContext(StoreContext);
  const [menu, setmenu] = useState("");

  const menuItems = [
    { name: "home", link: "/" },
    { name: "menu", link: "#explore-menu" },
    { name: "mobile-app", link: "#footer" },
    { name: "contact-us", link: "#appDownload" },
  ];

  return (
    <motion.div
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        {menuItems.map((item) => (
          <motion.li
            key={item.name}
            whileHover={{ scale: 1.1, color: "#ff6347" }}
            onClick={() => setmenu(item.name)}
            className={menu === item.name ? "active" : ""}
          >
            {item.name === "home" ? (
              <Link to={item.link}>{item.name}</Link>
            ) : (
              <a href={item.link}>{item.name}</a>
            )}
          </motion.li>
        ))}
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />

        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          {getTotalAmount() > 0 && (
            <motion.div
              className="dot"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            ></motion.div>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: "#fff4f2" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsLogin(true)}
        >
          signin
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NavBar;
