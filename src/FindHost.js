import React from "react";
import Navbar from "./Navbar";
import "./FindHost.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function FindHost() {
  return (
    <div className="hero-container">
      <Navbar />
      <div className="background-filter"></div>
      <h4>Find a place to stay</h4>
      <form className="form-findhost">
        <div className="row search-engine">
          <div className="col-12 search-bar">
            <input className="form-control form-control-lg search-field" type="search" placeholder="Search a city..." />
            <button className="btn-search">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
            </button>
          </div>
        </div>
      </form>

    </div>
  );
}