import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
import '../assets/styles/revision.css'
const url = new URL(window.location.href, true);

const Component = (props) => {


  return (
    <div class="container">
      <div class=" container1">
        Revisions
      </div>
      <div class="container2">
        <ul class="revision" id="revisions">
          <li>Revision</li>
          <li>Last Edited</li>
          <li id="change">Changes</li>
        </ul>
      </div>
      <div class=" container3">
        <ul class="revision">
          <input type="checkbox" />
          <li class="revisionvalue">Revision</li>
          <li class="lastedited">2 months ago</li>
          <li class="textadded">no text added</li>
        </ul>
      </div>
      <div class="container4">
        <ul class="revision">
          <input type="checkbox" />
          <li class="revisionvalue">Revision</li>
          <li class="lastedited">5 months ago</li>
          <li class="textadded">no text added</li>
        </ul>
      </div>
      <div class="container5">
        <ul class="revision">
          <input type="checkbox" />
          <li class="revisionvalue">Revision</li>
          <li class="lastedited">6 months ago</li>
          <li class="textadded">no text added</li>
        </ul>
      </div>
      <div class="container6">
        <ul class="revision">
          <input type="checkbox" />
          <li class="revisionvalue">Revision</li>
          <li class="lastedited">9 months ago</li>
          <li class="textadded">Waiting Specialists Appointment</li>
        </ul>
      </div>
    </div>
  );
}

export default Component;
