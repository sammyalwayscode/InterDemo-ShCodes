import React from "react";
import Logo from "../Image/logo.jpg";
import "./Header.css";
import { Button } from "antd";
import "antd/dist/antd.css";

function Header() {
  return (
    <div className="HeaderDiv">
      <img src={Logo} alt="Logo" className="LogoDiv" />
      <Button style={{ fontWeight: "bold" }}>Register</Button>
    </div>
  );
}

export default Header;
