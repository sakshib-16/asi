import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo.svg";
export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
};
