import React from "react";
import logo from "./logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <img src={logo} className="logo" />
      <div className="copyright">© 2022 House of Refuge. All rights reserved.</div>
    </footer>
  );
}