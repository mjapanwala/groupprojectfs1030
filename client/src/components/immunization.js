import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
import '../assets/styles/immunization.css'
const url = new URL(window.location.href, true);

const Component = (props) => {

  return (

    <div class="container">

      <h2>Immunization Form</h2>

      <form>
      <div class="row">
        <div class="col-25">
          <label for="fname">First Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="fname" name="firstname" value="Tarun" />
        </div>
      </div>



      <div class="row">
        <div class="col-25">
          <label for="lname">Last Name</label>
        </div>
        <div class="col-75">
          <input type="text" id="lname" name="lastname" value="Sharma" />
        </div>
      </div>


      <div class="row">
        <div class="col-25">
          <label for="lname">Hepatitis A</label>
        </div>
        <div class="col-75">
          <input type="checkbox" id="hepa" name="Hepatitis A" placeholder="Did you get your vaccine?" />
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="lname">Hepatitis B</label>
        </div>
        <div class="col-75">
          <input type="checkbox" id="hepb" name="Hepatitis B" />
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="influenza">Influenza Virus</label>
        </div>
        <div class="col-75">
          <input type="checkbox" id="influ" name="influenza" />
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="measles">Measles</label>
        </div>
        <div class="col-75">
          <input type="checkbox" id="measles" name="measles" />
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="tetanus">Tetanus </label>
        </div>
        <div class="col-75">
          <input type="checkbox" id="tetanus" name="tetanus" />
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="yellowfever">Yellow Fever</label>
        </div>
        <div class="col-75">
          <input type="checkbox" id="yellowfever" name="yellowfever" />
        </div>
      </div>

      <div class="row">
        <div class="col-25">
          <label for="typhoid">Typhoid</label>
        </div>
        <div class="col-75">
          <input type="checkbox" id="lname" name="typhoid" />
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="country">Last time out of the country</label>
        </div>
        <div class="col-75">
          <select id="country" name="country">
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015"> Before 2015</option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-25">
          <label for="subject">Additional Comments</label>
        </div>
        <div class="col-75">
          <textarea id="subject" name="subject" placeholder="Write something.." style={{"height":"200px"}}></textarea>
        </div>
      </div>
      <div class="row">
        <input type="submit" value="Submit" />
      </div>
      </form>
    </div>
  );
}

export default Component;
