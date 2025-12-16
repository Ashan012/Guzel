import React from "react";
import { motion } from "framer-motion";
import "./AppDownload.css";
import { assets } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <motion.div
      className="app-download"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="appDownload"
    >
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-platform">
        {[
          { src: assets.play_store, alt: "Play Store" },
          { src: assets.app_store, alt: "App Store" },
        ].map((item, index) => (
          <motion.img
            key={index}
            src={item.src}
            alt={item.alt}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AppDownload;
