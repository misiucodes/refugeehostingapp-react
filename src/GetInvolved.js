import React from "react";
import Navigation from "./Navigation";
import "./GetInvolved.css";

export default function GetInvolved() {
  return (
    <div>
      <Navigation />
      <div className="title">Offer to host your space to refugees in need</div>
      <form>
        <div className="subtitle">Create a Listing</div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="listing-title">Listing title</label>
              <input type="text" class="form-control" placeholder="Write something descriptive e.g. Safe Haven - 2 bedrooms"/>
            </div>
            <div class="form-group col-md-6">
              <label for="description">Description</label>
              <input type="text" class="form-control" placeholder="Provide details about your space"/>
            </div>
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <label for="badges">Badges</label>
            <input type="text" class="form-control" placeholder="Apartment, studio, or floor"/>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity"/>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip"/>
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck"/>
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>
  );
}