import React from "react";
import "./footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="footer"
    >
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Inventore,Lorem ipsum dolor sit amet consectetur adipisicing Lorem
            ipsum dolor sit amet. Lorem ipsum dolor sit amet. Cumque, saepe!
            odio!
          </p>
          <div className="footer-social-icon">
            {[
              assets.facebook_icon,
              assets.twitter_icon,
              assets.linkedin_icon,
            ].map((icon, index) => (
              <motion.img
                key={index}
                src={icon}
                alt="social"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 111-111-111</li>
            <li>ashanjameel518@gmail.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        copyright 2025 @ Tomato.com - All Right Reserved
      </p>
    </motion.div>
  );
};

export default Footer;
