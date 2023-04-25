import React from "react";
import './Footer.css';
import {FaFacebook, FaLinkedin, FaMailBulk, FaSearchLocation, FaTwitter} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaSearchLocation size={20} style={{color: '#ffffff', marginRight:'2rem'}} />
            <div>
                 <p>ul. Ilindenska 15A</p>
                 <h4>Skopje, Macedonia</h4>
            </div>     
        </div>
        <div className="email">
            <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight:'2rem'}} /> coffeelab@gmail.com</h4>
        </div>
      </div>
      <div className="right">
        <h4 id="aboutus">About Us</h4>
        <p>"We are a team of people who love coffee and understand the need of coffee
            in your everyday work wheater you are at work, with your friends or at home.
            Here you will find the best coffee brands, at proven best prices on the market. "</p>
        <div className="social">
        <a href="https://www.facebook.com" target='_blank'><FaFacebook size={30} style={{color: '#ffffff', marginRight:'1rem'}}/></a>
        <a href="https://twitter.com" target='_blank'><FaTwitter size={30} style={{color: '#ffffff', marginRight:'1rem'}}/></a>
        <a href="https://www.linkedin.com" target='_blank'><FaLinkedin size={30} style={{color: '#ffffff', marginRight:'1rem'}}/></a>
      </div>
      </div>
      
     </div>
    </div>
  )
}

export default Footer
