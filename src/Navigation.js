import React from "react";
import logo from "./logo.svg";
import "./Navigation.css";

export default function Navigation() {
  return (
    <header>
      <img src={logo} alt="House of Refuge logo" width="80" className="img-fluid logo"/>
    </header>
  );
}