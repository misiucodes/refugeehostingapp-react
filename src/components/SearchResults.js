import db from "../firebase";
import React from "react";
import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import "./SearchResults.css";

export default function SearchResults() {
  const [listings, setListings] = useState([]);

  useEffect(
    () => 
    onSnapshot(collection(db, "host-listings"), (snapshot) => 
      setListings(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      ),
      []
      );
      
      return (
        
      <div className="card-deck listing-container">
        {listings.map((listing) => (
        
        <div className="card" key={listing.id}>
          <img className="card-img-top" src="images/basement.jpg" alt="Basement apartment"/>
          <div className="card-body">
            <h5 className="card-title">{listing.ListingTitle}</h5>
            <p className="description">{listing.Description}</p>
            <div className="tags-container">
              <p className="tags">
                {listing.Tags.Preferences}
              </p>
              <p className="tags" id="tags">
                {listing.Tags.Supports}
              </p>
              <p className="tags" id="tags">
                {listing.Tags.Languages}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>  
  );
};
  