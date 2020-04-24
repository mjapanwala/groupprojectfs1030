import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
import '../assets/styles/billing.css'
const url = new URL(window.location.href, true);

const Component = (props) => {


  return (
    <div class="row">
      <div class="col-75">
        <div class="container1">
          <form action="submit">

            <div class="row">
              <div class="col-50">
                <h3>Billing Address</h3>
                <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="John M. Doe" value="Tarun Sharma" />
                <label for="email"><i class="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="john@example.com" value="osgood@whatsapp.com" />
                <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" value="95 Crayola Cres" />
                <label for="city"><i class="fa fa-institution"></i> City</label >
                <input type="text" id="city" name="city" placeholder="New York" value="Ontario" />

                <div class="row">
                  <div class="col-50">
                    <label for="state">State</label>
                    <input type="text" id="state" name="state" placeholder="NY" />
                  </div>
                  <div class="col-50">
                    <label for="zip">Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="10001" />
                  </div>
                </div>
              </div>

              <div class="col-50">
                <h3>Payment</h3>

                <div class="icon-container">
                  <i class="fa fa-cc-visa" ></i>
                  <i class="fa fa-cc-amex"></i>
                  <i class="fa fa-cc-mastercard"></i>
                  <i class="fa fa-cc-discover"></i>
                </div>
                <label for="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="Tarun Sharma" />
                <label for="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                <label for="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="September" />

                <div class="row">
                  <div class="col-50">
                    <label for="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="2018" />
                  </div>
                  <div class="col-50">
                    <label for="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="352" />
                  </div>
                </div>
              </div>

            </div>
            <label>Shipping address same as billing</label>
            <input type="checkbox" checked="checked" name="sameadr" />
            <br />
            <input type="submit" value="Save" class="btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Component;
