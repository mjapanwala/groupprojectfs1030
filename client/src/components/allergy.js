import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
import '../assets/styles/allergy.css'
import Navbar from './navbar'
const url = new URL(window.location.href, true);


const Component = (props) => {


  return (
    <>
    <Navbar />
    <div class="container">
      <h1 class="titleheading"> Part A</h1>
      <form>
        <div class="row">
          <div class="col-25">
            <label for="fname">Your first name</label>
          </div>
          <div class="col-75">
            <input type="text" id="fname" name="firstname" value="Tarun" />
          </div>
        </div>



        <div class="row">
          <div class="col-25">
            <label for="lname">Your last name</label>
          </div>
          <div class="col-75">
            <input type="text" id="lname" name="lastname" value="Sharma" />
          </div>
        </div>


        <div class="row">
          <div class="col-25">
            <label for="age">Age</label>
          </div>
          <div class="col-75">
            <input type="text" id="age" name="Age" value="44" />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label for="employer">Employer</label>
          </div>
          <div class="col-75">
            <input type="text" id="employer" name="employer" value="IT Consultant/BlockChain" />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label for="disabilities">Any disabilities?</label>
          </div>
          <div class="col-75">
            <input type="text" id="disabilities" name="disabilities" value="NA" />
          </div>
        </div>



        <div class="row">
          <div class="col-25">
            <label for="tetanus">Special Nutritional Needs </label>
          </div>
          <div class="col-75">
            <input type="checkbox" id="feedingneeds" name="feedingneeds" />
            <span>Yes</span>
            <input type="checkbox" id="feedingneeds" name="feedingneeds" />
            <span>No</span>
          </div>
        </div>
        <h1 class="titleheading"> Part B</h1>

        <div class="row">
          <div class="col-25">
            <label for="dietaryrestrictions">Dietary Restrictions</label>
          </div>
          <div class="col-75">
            <input type="text" id="dietaryrestrictions" name="dietaryrestrictions" value="Vegan only" />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label for="allergies">Allergies</label>
          </div>
          <div class="col-75">
            <input type="text" id="allergies" name="allergies" />
          </div>
        </div>

        <div class="row">
          <div class="col-25">
            <label for="substitution">Food Substitution</label>
          </div>
          <div class="col-75">
            <input type="text" id="substitution" name="substitution" />
          </div>
        </div>


        <div class="row">
          <div class="col-25">
            <label for="equipment">Food Equipment</label>
          </div>
          <div class="col-75">
            <input type="text" id="equipment" name="equipment" />
          </div>
        </div>



        <div class="row">
          <div class="col-25">
            <label for="signature">Signature</label>
          </div>
          <div class="col-75">
            <input type="text" id="signature" name="signature" value="T.S" />
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
    </>
  );
}

export default Component;
