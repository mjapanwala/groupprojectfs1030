import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
const url = new URL(window.location.href, true);

const Component = (props) => {


  return (
    <div class="containerlove">
      <ul class="nav">
        <li><a href="/record">Home</a></li>
        <li><a href="/allergy" >Allergies</a></li>
        <li><a href="/immunization">Immunization Status</a></li>
        <li><a href="/radiology" >Radiology Images</a></li>
        <li><a href="/billing" >Billing Information</a></li>
        <li><a href="/notes" >Patient Notes</a></li>
        <li><a href="/revisions" >Revisions</a></li>
        <li><a href="/search" >Search</a></li>
      </ul>
    </div>
  );
}

export default Component;
