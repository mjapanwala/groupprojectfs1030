import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
import '../assets/styles/searchbar.css'
const url = new URL(window.location.href, true);

const Component = (props) => {


  return (
    <div class="container2">
      <div class="searchpatient">
        <p>Search Patient</p>
      </div>
      <div class="searchdiv">
        <label for="options">Search By Medical ID</label>
        <input type="text" placeholder="search" />
        <button type="button" id="btn">Search</button>
      </div>
    </div>
  );
}

export default Component;
