import React from 'react';
import Header from '../Header/Header';
import './Hero.css';

import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';


const Hero = () => {
  return (
  <div className='hero'>


    <div className="left-h">

      {/* Header */}
        <Header/>

      {/* The best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The Best Fitness Club in the Town</span>
        </div>

      {/* Hero heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal body</span>
          </div>
          
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

      {/* Figures */}
        <div className="figures">
          <div> 
            <span>130+</span>
            <span>Expert coaches</span>
          </div>
          <div> 
            <span>1050+</span>
            <span>members joined</span>
          </div>
          <div> 
            <span>60+</span>
            <span>Fitness Programs</span>
          </div>
        </div>
      
      {/* HERO BUTTONS */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn More</buttons>
        </div>


    </div>
      <div className="right-h">
        {/* join now btn */}
        <button className='btn btn-j'> Join Now</button>
        {/* Heart rate box */}
        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>120 BPM</span>
        </div>

        {/* Hero Imgs */}
        <img src={hero_image} alt="" className='hero-image' />
        <img src={hero_image_back} alt="" className='hero-image-back' />

        {/* Calories Box */}

        <div className="calories">
          <img src={calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>500 kcal</span>
          </div>
        </div>

      </div>

  </div>



  )
}
 

export default Hero;