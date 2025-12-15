import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";

const LoginPopup = ({ setIsLogin }) => {
  const [state, setState] = useState("login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2> {state}</h2>
          <img
            onClick={() => setIsLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {state === "SignUp" ? (
            <input type="text" placeholder=" Name" required />
          ) : (
            <></>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{state === "login" ? "Login" : "Create account"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the term of use & privacy policy</p>
        </div>
        {state === "login" ? (
          <p>
            Create an Account?
            <span onClick={() => setState("SignUp")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setState("login")}>Click Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
