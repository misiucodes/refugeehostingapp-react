import React from "react";
import {Button} from "./Button";
import "./BecomeHost.css";

function BecomeHost() {
  return (
    <div>
      <div className="title">Offer to host your space to refugees in need</div>
      <form className="form-becomehost">
        <div className="container-contact-info">
          <div className="subtitle">Contact Information</div>
              <div className="form-row">

                <div className="form-group col-md-6">
                  <label for="inputFirstName">First Name</label>
                  <input type="text" className="form-control" required />
                </div>
              <div className="form-group col-md-6">
                <label for="inputLastName">Last Name</label>
                <input type="text" className="form-control" required/>
              </div>
            
                <div className="form-group col-md-6">
                  <label for="inputPhone">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="e.g. #-###-###-####" required/>
                  <small><em>Note: include country code.</em></small>
                </div>
              <div className="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input type="email" className="form-control" required/>
              </div>

          </div>
        </div>

        <div className="subtitle">Create a Listing</div>
          <div className="form-row">
            <div className="form-group col-6">
              <label for="listing-title" className="field-title">Listing title</label>
              <input type="text" className="form-control" placeholder="Write something descriptive e.g. Safe Haven - 2 bedrooms" required/>
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
              <select className="form-control" required>
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
            <input type="text" className="form-control" required/>
          </div>
          <div className="form-group col-6">
            <label for="province" className="field-title">Province</label>
            <input type="text" className="form-control" required/>
          </div>
          </div>
          <div className="form-row">
            <div className="form-group col-12">
              <label for="desription" className="field-title">Description</label>
              <textarea className="form-control description-text" rows="3" required placeholder="Describe the space you are offering to provide potential guests a better idea of the accommodation details."></textarea>
          </div>
          <div className="form-group col-12">
            <label for="tags" className="field-title">Tags</label>
              <div className="pb-3">Add tags to help potential guests find a suitable accommodation based on their needs.</div>

                <div className="row justify-content-start row-tags">

                  <div className="col-2">
                    <div className="form-check">
                      <div className="tag-category">Preferences</div>
                        <input className="form-check-input" type="checkbox" value="kid-friendly" id="kid-friendly"/>
                        <label className="form-check-label">Kid-friendly</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="pet-friendly" id="pet-friendly"/>
                      <label className="form-check-label">Pet-friendly</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="smoke-free" id="smoke-free"/>
                      <label className="form-check-label">Smoke-free</label>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="form-check">
                      <div className="tag-category">Supports</div>
                        <input className="form-check-input" type="checkbox" value="child-care" id="child-care"/>
                        <label className="form-check-label">Child care</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="elderly-assist" id="elderly-assist"/>
                      <label className="form-check-label">Elderly assistance</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="transport" id="transport"/>
                      <label className="form-check-label">Transportation</label>
                    </div>
                  </div>

                 <div className="col-2">
                  <div className="form-check">
                    <div className="tag-category">Languages</div>
                       <input className="form-check-input" type="checkbox" value="arabic" id="arabic" />
                      <label className="form-check-label">Arabic Speaker</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="english" id="english" />
                    <label className="form-check-label">English Speaker</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="french" id="french" />
                    <label className="form-check-label">French Speaker</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="russian" id="russian" />
                    <label className="form-check-label">Russian Speaker</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="ukrainian" id="ukrainian" />
                    <label className="form-check-label">Ukrainian Speaker</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button buttonSize="btn--large">Create Listing</Button>
      </form>
    </div>
  );
}

export default BecomeHost;