import React from "react";
import Navigation from "./Navigation";
import "./GetInvolved.css";

export default function GetInvolved() {
  return (
    <div>
      <Navigation />
      <div className="title">Offer to host your space to refugees in need</div>
      <form>
        <div className="container-contact-info">
          <div className="subtitle">Contact Information</div>
              <div className="form-row">

                <div className="form-group col-md-6">
                  <label for="inputFirstName">First Name</label>
                  <input type="text" className="form-control" />
                </div>
              <div className="form-group col-md-6">
                <label for="inputLastName">Last Name</label>
                <input type="text" className="form-control" />
              </div>
            
                <div className="form-group col-md-6">
                  <label for="inputEmail">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="e.g. #-###-###-####"/>
                  <small><em>Note: include country code.</em></small>
                </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Email</label>
                <input type="email" className="form-control" />
              </div>

         
          </div>
        </div>

        <div className="subtitle">Create a Listing</div>
          <div className="form-row">
            <div className="form-group col-6">
              <label for="listing-title" className="field-title">Listing title</label>
              <input type="text" className="form-control" placeholder="Write something descriptive e.g. Safe Haven - 2 bedrooms"/>
            </div>
            <div className="form-group col-3">
              <label for="accommodation-type-select" className="field-title">Accommodation Type</label>
              <select className="form-control">
                <option>Entire place</option>
                <option>Private room</option>
                <option>Basement</option>
              </select>
            </div>
          <div className="form-group col-3">
              <label for="guest-select" className="field-title">Guests</label>
              <select className="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
          </div>
          </div>
          <div className="form-row">
          <div className="form-group col-6">
            <label for="city" className="field-title">City</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group col-6">
            <label for="province" className="field-title">Province</label>
            <input type="text" className="form-control" />
          </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label for="desription-textbox" className="field-title">Description</label>
              <textarea className="form-control description-textarea" rows="3" placeholder="Describe the space you are offering to provide potential guests a better idea of the accommodation details."></textarea>
          </div>
          <div className="form-group col-12">
            <label for="inputCity" className="field-title">Tags</label>
              <div className="pb-3">Add tags to help potential guests find a suitable accommodation based on their needs.</div>

                <div className="row justify-content-start row-tags">

                  <div className="col-2">
                    <div className="form-check">
                      <div className="tag-category">Preferences</div>
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" for="defaultCheck1">Kid-friendly</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label className="form-check-label" for="defaultCheck1">Pet-friendly</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label className="form-check-label" for="defaultCheck1">Smoke-free</label>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="form-check">
                      <div className="tag-category">Supports</div>
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <label className="form-check-label" for="defaultCheck1">Child care</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label className="form-check-label" for="defaultCheck1">Elderly assistance</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label className="form-check-label" for="defaultCheck1">Transportation</label>
                    </div>
                  </div>

                 <div className="col-2">
                  <div className="form-check">
                    <div className="tag-category">Languages</div>
                       <input className="form-check-input" type="checkbox" name="language" value="arabic" />
                      <label className="form-check-label" for="defaultCheck1">Arabic Speaker</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="language" value="english" />
                    <label className="form-check-label" for="defaultCheck1">English Speaker</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="language" value="french" />
                    <label className="form-check-label" for="defaultCheck1">French Speaker</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="language" value="russian" />
                    <label className="form-check-label" for="defaultCheck1">Russian Speaker</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="language" value="ukrainian" />
                    <label className="form-check-label" for="defaultCheck1">Ukrainian Speaker</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-info btn-createlisting">Create Listing</button>
      </form>
    </div>
  );
}