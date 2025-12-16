import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setIsLogin }) => {
  const [state, setState] = useState("login");

  return (
    <AnimatePresence>
      <motion.div
        className="login-popup"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.form
          className="login-popup-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="login-popup-title">
            <h2>{state === "login" ? "Login" : "Sign Up"}</h2>
            <img
              onClick={() => setIsLogin(false)}
              src={assets.cross_icon}
              alt="close"
            />
          </div>

          <div className="login-popup-inputs">
            {state === "SignUp" && (
              <input type="text" placeholder="Name" required />
            )}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {state === "login" ? "Login" : "Create Account"}
          </motion.button>

          <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>

          {state === "login" ? (
            <p>
              Create an Account?
              <span onClick={() => setState("SignUp")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setState("login")}>Click here</span>
            </p>
          )}
        </motion.form>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginPopup;
