import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
import '../assets/styles/notes.css'
const url = new URL(window.location.href, true);

const Component = (props) => {
  
  return (
    <>
    <div class="allcontainers">
      <div class="header">
        Notes
      </div>
      <div class="container container2020">
        <div class="heading">Year 2020</div>
        <div class="reaction">
          <label for="reaction">Reaction:</label>
          <input type="text" />
        </div>
        <div class="notes">
          <label for="notes">Notes</label>
          <input type="text" class="notearea" placeholder="This is where your notes will go" />
        </div>
      </div>

      <div class="container container2019">
        <div class="heading">Year 2019</div>
        <div class="reaction">
          <label for="reaction">Reaction:</label>
          <input type="text" />
        </div>
        <div class="notes">
          <label for="notes">Notes</label>
          <input type="text" class="notearea" value="Tarun came in wondering why hip was hurting" />
        </div>
      </div>


      <div class="container container2018">
        <div class="heading">Year 2018</div>
        <div class="reaction">
          <label for="reaction">Reaction:</label>
          <input type="text" />
        </div>
        <div class="notes">
          <label for="notes">Notes</label>
          <input type="text"class="notearea" value="Tarun came in to get antibiotics for the common flu" />
        </div>
      </div>
    </div>
    <div class="submitbtn">
      <button type="button" id="btn">Save</button>
    </div>
    </>
  );
}

export default Component;
