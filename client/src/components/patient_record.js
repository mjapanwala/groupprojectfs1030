import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
import '../assets/styles/html.css'
import avatar from '../assets/images/img_avatar_0.png'

const url = new URL(window.location.href, true);

const Component = (props) => {

  return (
    <>
      <div class="contactinfo">
        <ul class="key-value-pairs">
          <li class="key">First Name</li>
          <li class="value" >Tarun</li>

          <li class="key">Last Name</li>
          <li class="value" >Sharma</li>

          <li class="key">Gender</li>
          <li class="value" >Male</li>

          <li class="key">Email</li>
          <li class="value">osgood@whatsapp.com</li>

          <li class="key">DOB</li>
          <li class="value">08/14/1994</li>

          <li class="key">Phone #</li>
          <li class="value">905-443-2222</li>

          <li class="key">MPN</li>
          <li class="value">1246864565532</li>

          <li class="key">Age</li>
          <li class="value">44</li>

          <li class="key">Address</li>
          <li class="value">95 Crayola Cres</li>

          <li class="key">Id</li>
          <li class="value">55-0-422-66</li>
        </ul>
      </div>

      <img class="avatar" src={avatar} alt="avatar"/>

      <textarea >Additional Patient Info</textarea>
    </>
  );
}

export default Component;
