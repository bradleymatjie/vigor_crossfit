import '../../Util/fonts.scss';
import './Products.scss';

import firstImage from '../../VIGOR HOME/Images/Home/3@2x.png';
import secondImage from '../../VIGOR HOME/Images/Home/4@2x.png';

export const Products = () => {
  return (
    <section className='products'>
      <div className='products-left'>
        <h2>Share the passion</h2>
        <p>
          Support the movement by wearing the toughest gear in the wild.<br/>
        </p>
        <p>
          Represent the chapter and yourself in our latest selected gear.
        </p>

        <div>BROWSER OUR SHOP</div>
      </div>

      <div className='products-right'>
      <div style={ {backgroundImage: `url(${secondImage})`}}>
        <div>
            <div className='products_prices'>
              <p>Lift Heavy t-shirt</p>
              <p>$19.95</p>
            </div>
            <button>BUY NOW</button>
          </div>
        </div>
        
        <div style={ {backgroundImage: `url(${firstImage})`}}>
          <div>
            <div>
              <p>Cross Shorts WMNS</p>
              <p>$25.95</p>
            </div>
            <button>BUY NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}