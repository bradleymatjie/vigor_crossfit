import './Ourplan.scss';
import { memo } from 'react';

import checkYellow from '../../VIGOR HOME/Icons/Checkmark/Yellow@2x.png';
import checkOrange from '../../VIGOR HOME/Icons/Checkmark/Ember@2x.png';
import checkRed from '../../VIGOR HOME/Icons/Checkmark/Red@2x.png';

export const Ourplan = memo(() => {
  return (
    <section className="ourplan">
      <h1>Find the right plan</h1>
      <div>
        <div>
          <h2>BEGINNER</h2>
          <ul>
            <li>2 times per week <img src={checkYellow} alt="checkmark" /></li>
            <li>Stretching <img src={checkYellow} alt="checkmark" /></li>
            <li>Light training <img src={checkYellow} alt="checkmark" /></li>
          </ul>
          <button>$200 / Month</button>
        </div>

        <div>
        <h2>INTERMEDIATE</h2>
          <ul>
            <li>3 times per week <img src={checkYellow} alt="checkmark" /></li>
            <li>Moderate Stretching <img src={checkYellow} alt="checkmark" /></li>
            <li>Moderate Cadio training <img src={checkYellow} alt="checkmark" /></li>
            <li>Food plan <img src={checkOrange} alt="checkmark" /></li>
            <li>Personal training plan <img src={checkOrange} alt="checkmark" /></li>
          </ul>
          <button>$300 / Month</button>
        </div>
        
        <div>
        <h2>COMPETITIVE</h2>
          <ul>
            <li>6 times per week <img src={checkYellow} alt="checkmark" /></li>
            <li>Core exercises <img src={checkYellow} alt="checkmark" /></li>
            <li>Hard Cadio training <img src={checkYellow} alt="checkmark" /></li>
            <li>Strict food plan <img src={checkOrange} alt="checkmark" /></li>
            <li>Personal training plan <img src={checkOrange} alt="checkmark" /></li>
            <li>Personal trainer <img src={checkOrange} alt="checkmark" /></li>
            <li>Competitive courses <img src={checkRed} alt="checkmark" /></li>
          </ul>
          <button>CONTACT US</button>
        </div>
      </div>
    </section>
  );
})