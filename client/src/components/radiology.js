import React, { useState, useContext, useEffect } from 'react';
import URL from 'url-parse';
import axios from 'axios'
import numeral from 'numeral'
import moment from 'moment'
import '../assets/styles/radiologyimages.css'
import img from '../assets/images/bcg-0.jpg'
import img1 from '../assets/images/bcg-1.jpg'
import img2 from '../assets/images/bcg-2.jpg'
import img3 from '../assets/images/bcg-3.jpg'
import img4 from '../assets/images/bcg-4.jpg'
import img5 from '../assets/images/bcg-5.jpg'
const url = new URL(window.location.href, true);

const Component = (props) => {

  const [ count, setCount ] = useState(0)
  const images = [img, img1, img2, img3, img4, img5]

  const nxt = () => {
    if (count + 1 === images.length){
      setCount(0)
    } else {
      setCount(prev => prev + 1)
    }
  }

  const prv = () => {
    if (count === 0){
      setCount(images.length - 1)
    } else {
      setCount(prev => prev - 1)
    }
  }

  return (
    <div class="images" style={{backgroundImage: `url(${images[count]})`, backgroundRepeat  : 'no-repeat', backgroundPosition: 'center'}}>
      <button type="button" class="btn-radiology prevBtn" onClick={() => prv()}>Prev</button>
      <button type="button" class="btn-radiology nextBtn" onClick={() => nxt()}>Next</button>

    </div>
  );
}

export default Component;
