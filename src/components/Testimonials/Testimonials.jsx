import React, {useState} from 'react';
import './Testimonial.css';
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';


const Testimonials = () => {

  const [Selected , setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testimonials">

        <div className="left-t">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            
            <span>
              {testimonialsData[Selected].review}
            </span>

            <span>
              <span style={{ color:'var(--orange)'}}>
                {testimonialsData[Selected].name}
              </span>{" "}
               - {testimonialsData[Selected].status}
            </span>
        </div>


        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[Selected].image} alt="" />

         <div className='arrows'>
          <img 
          onClick={()=> (
            Selected === 0 // if its at first testimonial
            ? setSelected(tLength - 1) // then go to back
            : setSelected( (prev)=> prev - 1) // or go to previous one
          )}
          src={leftArrow} alt="" />

          <img 
            onClick={()=> (
            Selected === tLength - 1 // if we at last testimonial
            ? setSelected(0) // them return first testimonial
            : setSelected( (prev)=> prev + 1) // or go to next of last state
          )}
          src={rightArrow} alt="" />
        </div>
      </div>


    </div>
  );
}

export default Testimonials