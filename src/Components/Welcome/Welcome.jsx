import './Welcome.scss';
import { memo } from 'react';

import bg from '../../VIGOR HOME/Images/Home/battle-ropes-1.jpg';

export const Welcome = memo(() => {
  return (
    <section className="welcome" style={ {backgroundImage: `url(${bg})`}}>
      <div className="welcome-container">
        <h1>JOIN THE MOVEMENT</h1>
        <p>Strength, vigor and discipline. All in one spot.<br/>Become part of the movement.</p>
        <div className='welcome-container_buttons'>
        <button>BOOK A FREE CLASS</button>
        <button>SEE OUR PROMOTION</button>
        </div>
      </div>
    </section>
  );
})