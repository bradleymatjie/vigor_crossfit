import '../../Util/fonts.scss';
import './Carousel.scss';
import { useState } from 'react';

import bgImage from '../../ASSETS/vigor-gym-instructors-1.jpg';
import bgimage2 from '../../ASSETS/vigor-gym-instructors-2-bw.jpg';
import bgimage3 from '../../ASSETS/vigor-gym-instructors-3.jpg';
import rightArrow from '../../VIGOR HOME/Icons/icn_arrow_big_R_Hover@2x.png';
import leftArrow from '../../VIGOR HOME/Icons/icn_arrow_big_L_Default@2x.png';

export const Carousel = () => {
  let [count, setCount] = useState(0);
  const [team] = useState([
    {
      img: bgImage,
      name: "Ali Douhani",
      trophies: "2018 Olympic weightlifting champion 2016 Crossfit Games finalist, 2013 Croosfit Games - 2nd place"
    },
    {
      img: bgimage2,
      name: "Bradley Matjie",
      trophies: "2017 Olympic weightlifting champion, 2016 Crossfit Games finalist, 2015 Croosfit Games - 3nd place" 
    },
    {
      img: bgimage3,
      name: "Stanford Matjie",
      trophies: "2019 Olympic weightlifting champion, 2012 Crossfit Games finalist, 2019 Croosfit Games - 1nd place"
    }
  ])

  const handleIncrease = () => {
    setCount((prev) => {
      if (prev < 2) {
        return prev + 1;
      }
      return prev;
    });
  }
  
  const handleDecrease = () => {
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });    
  }
  
  return (
    <section className='carousel' style={{backgroundImage: `url(${team[count].img})`}}>
      <div className='carousel-left'>
        <img src={leftArrow} alt="left arrow" onClick={handleDecrease} />
      </div>
      <div className='carousel-center'>
        <div className='carousel-center_top'>
        <h1>We got you. Seriously.</h1>
        <p>Team of our first class rockstar trainers, got you covered.<br/>Health plans, strength training... you name it.</p>
        </div>

        <div className='carousel-center_bottom'>
          <h3>{team[count].name}</h3>
          <p>
            {team[count].trophies}
          </p>
          <h4>MEET ALL OUR COACHES</h4>
        </div>
      </div>
      <div className='carousel-right'>
        <img src={rightArrow} alt="right arrow" onClick={handleIncrease} />
      </div>
    </section>
  );
}