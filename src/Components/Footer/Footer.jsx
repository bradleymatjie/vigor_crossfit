import './Footer.scss';
import { memo } from 'react';

import logoSpecial from '../../VIGOR HOME/Logo/Special@2x.png';

export const Footer = memo(() => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src={logoSpecial} alt="logo" />
      </div>
      
      <div>
        <h3>ABOUT</h3>
        <ul>
          <li>Vigor Health inc.</li>
          <li>1190 Mission st</li>
          <li>San Francisco</li>
          <li>CA 94103</li>
          <li>USA</li>
        </ul>
      </div>

      <div>
      <h3>SITEMAP</h3>
        <ul>
          <li>ABOUT</li>
          <li>PROGRAM</li>
          <li>CAREERS</li>
          <li>CONTACT</li>
          <li>STORE</li>
        </ul>
      </div>

      <div>
      <h3>SOCIAL</h3>
        <ul>
          <li>TWIITER</li>
          <li>INSTAGRAM</li>
          <li>FACEBOOK</li>
          <li>YOUTUBE</li>
        </ul>
      </div>
    </footer>
  );
})