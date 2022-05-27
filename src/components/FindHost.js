import React from "react";
import "./FindHost.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import SearchResults from "../SearchResults";

function FindHost() {

    return (
    <div className="hero-container">
      <h4>Find a place to stay</h4>
        <div className="search-engine">
          <form className="form-findhost">
            <input className="form-control form-control-lg search-field" type="search" placeholder="Search a city..." />
              <button className="btn-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
              </button>
          </form> 
        </div>

        {/* <SearchResults /> */}
      </div>
  );
}

export default FindHost;