import React from "react"
import './VideoStyles.css'
import {Link} from 'react-router-dom';

import coffeeVideo from '../assets/coffee_ad.mp4'


const Video = () => {
  return (
    <div className="hero">
      <video className="headvideo" autoPlay loop muted id='video/mp4' >
        <source src={coffeeVideo} type='video/mp4'/>
        </video>
    <div className="content">
        <h1>Stressed, blessed, and coffee obsessed.</h1>
        <p>best coffee products on one place.</p>

       <div className="navigation-buttons">
        <Link to='/products' className='btn'>Check our products</Link>
        <Link to='/signup' className='btn btn-light'>Order Now</Link>
       </div>

    </div>

    </div>
  )
}

export default Video
