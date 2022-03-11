import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./Navbar.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
      window.addEventListener("resize", showButton);
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <IconContext.Provider value={{color: "#fff"}}>
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>          
          <img src={logo} alt="House of Refuge logo" width="130" className="img-fluid logo"/>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars /> }
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/findahost" className="nav-link" onClick={closeMobileMenu}>Find a Host</Link>
          </li>
          <li className="nav-btn">
            {button ? (
              <Link to="/becomeahost" className="btn--link">
                <Button buttonStyle="btn--outline" onClick={closeMobileMenu}>Become a Host</Button>
              </Link>
              ): (
                <Link to="/becomeahost" className="btn--link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={closeMobileMenu}>
                      Become a Host
                  </Button>
                </Link>
              )}
            </li>
        </ul>
      </div>
    </div>
    </IconContext.Provider>
  );
}

export default Navbar;