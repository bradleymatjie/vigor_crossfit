import './Carousel.scss';
import { memo } from 'react';

import bgImage from '../../ASSETS/vigor-gym-instructors-1.jpg';
import rightArrow from '../../VIGOR HOME/Icons/icn_arrow_big_R_Hover@2x.png';
import leftArrow from '../../VIGOR HOME/Icons/icn_arrow_big_L_Default@2x.png';

export const Carousel = memo(() => {

  return (
    <section className='carousel' style={{backgroundImage: `url(${bgImage})`}}>
      <div className='carousel-left'>
        <img src={leftArrow} alt="left arrow" />
      </div>
      <div className='carousel-center'>
        <div className='carousel-center_top'>
        <h1>We got you. Seriously.</h1>
        <p>Team of our first class rockstar trainers, got you covered.<br/>Health plans, strength training... you name it.</p>
        </div>

        <div className='carousel-center_bottom'>
          <h3>Ali Douhani</h3>
          <p>
            2018 Olympic weightlifting champion,<br/>
            2016 Crossfit Games finalist, 2013 Croosfit Games - 2nd place
          </p>
          <h4>MEET ALL OUR COACHES</h4>
        </div>
      </div>
      <div className='carousel-right'>
        <img src={rightArrow} alt="right arrow" />
      </div>
    </section>
  );
})