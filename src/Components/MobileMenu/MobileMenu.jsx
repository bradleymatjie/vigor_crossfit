import { memo } from 'react';
import './MobileMenu.scss';

import logo from '../../VIGOR HOME/Logo/White.png';

export const MobileMenu = memo(() => {
  return (
    <div className='mobileMenu'>
      <ul >
        <li>HOME</li>
        <li>ABOUT</li>
        <li>PROGRAMS</li>
        <li>CAREER</li>
        <li>CONTACT</li>
        <li>BLOCK</li>
        <li>STORE</li>
      </ul>
      <img src={logo} alt="logo" />
    </div>
  )
})