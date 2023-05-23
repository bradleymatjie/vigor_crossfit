import './SupportingText.scss';
import { memo } from 'react';

export const SuppportingText = memo(() => {
  return (
    <section className='supportingText'>
      <div className='supportingText-left'>
        <h2>The right way to<br/> get back your track</h2>
      </div>
      <div className='supportingText-right'>
        <p>At Vigor Crossfit, our primary focus is to get you fit<br/> for life in a safe environment</p>
        <p>We're committed to helping you move better and feel<br/> great doing it.</p>
      </div>
    </section>
  );
})
