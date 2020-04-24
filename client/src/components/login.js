import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
import '../assets/styles/form.css'
import avatar from '../assets/images/img_avatar_0.png'
const url = new URL(window.location.href, true);

const Component = (props) => {

  return (
    <form >
      <div class="container-login">
        <h2 > Login Form</h2>

        <img src={avatar} class="avatar-login" alt="img" />

        <div class="forms-login">
        <label for="loginform">Username</label>
        <input type="text" name="login" id="usernames" placeholder="Username" />
        <label for="passwordform">Password</label>
        <input type="text" name="password" id="passwords" placeholder="Password" />
        </div>

        <div class="submitbtn-login">
          <button type="button" id="btn">Login</button>
        </div>
      </div>
    </form>
  );
}

export default Component;
