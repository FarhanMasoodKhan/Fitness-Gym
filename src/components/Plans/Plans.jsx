import React from 'react';
import './Plans.css';
import {plansData} from '../../data/plansData';
import whitetick from '../../assets/whiteTick.png'


const Plans = () => {
  return (
    <div className="Plans-container">
        <div className="blur blur-plans1"></div>
        <div className="blur blur-plans2"></div>

        <div className="programs-header">
            <span className='stroke-text'>Ready to Start</span>
            <span> Your journey</span>
            <span className='stroke-text'>now with us</span>
        </div>

        {/* Packages Cards */}
        <div className="plans">
          {plansData.map((plan, index) => (
            <div className="plan" key={index}>

                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>
        

            <div className="features">
                {plan.features.map((feature , index) => (
                    <div className="feature">
                        <img src={whitetick} alt="" />
                        <span key={index}>{feature}</span>
                    </div>
                ))}
            </div>
            
            <div>
                <span>See more benefits </span>
            </div>
            <button className='btn'>Join now</button>
            </div>
         ))}
        </div>

    </div>
  )
}

export default Plans