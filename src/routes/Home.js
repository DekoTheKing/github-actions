import React from 'react'
import Video from '../components/Video'
import Footer from '../components/Footer'
import Imageslider from '../components/Imageslider';
import { SliderData } from '../components/SliderData';




const Home = () => {
  return (
    <div>
      <Video/>
      <h3>OUR GALLERY</h3>
      <Imageslider slides={SliderData}/>
      <Footer/>

    </div>
  )
}

export default Home
