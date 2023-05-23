import { memo } from 'react';
import './Header.scss';

import cart from '../../VIGOR HOME/Icons/icn_basket.svg';

export const Header = memo(() => {
 return (
  <header className='header'>
    <div className='header-logo'><span>VIGOR</span> CROSSFIT</div>
    <nav>
      <ul className='header-navItems'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROGRAMS</li>
        <li>CAREER</li>
        <li>CONTACT</li>
        <li>BLOCK</li>
        <li>STORE</li>
        <li><img src={cart} alt="shopping cart" /> </li>
      </ul>
    </nav>
  </header>
 ) 
})