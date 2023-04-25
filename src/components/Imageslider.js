import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Imageslider.css'

const slideImages = [
  {
    url: 'https://images2.alphacoders.com/941/thumb-1920-941947.jpg',

  },

  {
    url: 'https://img5.goodfon.com/original/1920x1080/7/89/kofemolka-kofeinye-zerna-kofe-chashka-bulochka-turka.jpg',
    
  },

  {
    url: 'https://wallup.net/wp-content/uploads/2017/11/17/264118-coffee.jpg',
    
  },
  
  {
    url:'https://media.gq-magazine.co.uk/photos/5d5673da36fbf10009a3e6b5/master/pass/20190816-Coffee-08.jpg'
    
  },
];

const Imageslider = () => {
    return (
      <div className="slide-container">
        <Slide autoplay={true} slidesToShow={2}>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className="images" style={{'backgroundImage': `url(${slideImage.url})`, 'height': '700px',}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Imageslider;