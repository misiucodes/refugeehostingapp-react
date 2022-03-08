import React from "react";
import Navigation from "./Navigation";
import "./FindHost.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function FindHost() {
  return (
    <div className="hero-container">
      <Navigation />
      <div className="background-filter"></div>
      <h4>Find a place to stay</h4>
      <form>
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