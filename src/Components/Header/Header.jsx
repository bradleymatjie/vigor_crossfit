import { memo } from 'react';
import './Header.scss';

import cartImg from '../../VIGOR HOME/Icons/icn_basket.svg';
import logo from '../../VIGOR HOME/Logo/White.png';

export const Header = memo(({ menuTogglerFunction, menuTogglerValue, cart }) => {
 return (
  <header className='header'>
    <div className='header-logo'>
      <img src={logo} alt="logo" />
    </div>
    <nav>
      <ul className='header-navItems'>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROGRAMS</li>
        <li>CAREER</li>
        <li>CONTACT</li>
        <li>BLOCK</li>
        <li>STORE</li>
        <li><img src={cartImg} alt="shopping cart" /> {cart > 0 ? <span className="cart">{cart}</span> : ""}</li>
      </ul>
    </nav>
    <div 
      className={`toggle ${menuTogglerValue ? "active" : ""}`}
      onClick={() => {
        menuTogglerFunction((state) => (!state))
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
 ) 
})