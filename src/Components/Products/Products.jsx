import './Products.scss';
import { memo } from 'react';

import firstImage from '../../VIGOR HOME/Images/Home/3@2x.png';
import secondImage from '../../VIGOR HOME/Images/Home/4@2x.png';

export const Products = memo(() => {
  return (
    <section className='products'>
      <div className='products-left'>
        <h2>Share the passion</h2>
        <p>Support the movement by wearing the toughest gear in the wild.<br/>
        Represent the chapter and yourself in our latest selected gear.</p>

        <a href="#">BROWSER OUR SHOP</a>
      </div>

      <div className='products-right'>
        <div style={ {backgroundImage: `url(${firstImage})`}}>
          <div>
            <p>Cross Shorts WMNS</p>
            <p>$25.95</p>
          </div>
          <button>BUY NOW</button>
        </div>
        <div style={ {backgroundImage: `url(${secondImage})`}}>
        <div>
            <p>Lift Heavy t-shirt</p>
            <p>$19.95</p>
          </div>
          <button>BUY NOW</button>
        </div>
      </div>
    </section>
  );
})