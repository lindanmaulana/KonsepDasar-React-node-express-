import React from "react";
import { Link } from "react-router-dom";
const LinkSwitchPage = () => {
  return (
    <div className="w-full flex justify-between">
      <div className="w-[140.28px] flex gap-x-[8px]">
        <img
          src="../public/login/loginForgot.svg"
          alt="remember"
          className="self-center w-3.5 h-3.5"
        />
        <p className="text-[14px] text-[#5867DD]">Forgot Password?</p>
      </div>
      <Link to={"/register"} className="self-center text-[14px] text-[#5867DD]">
        Register
      </Link>
    </div>
  );
};

export default LinkSwitchPage;
