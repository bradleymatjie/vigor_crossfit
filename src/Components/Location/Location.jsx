import '../../Util/fonts.scss';
import './Location.scss';

import img1 from '../../VIGOR HOME/Images/Gallery/5.png';
import img2 from '../../VIGOR HOME/Images/Gallery/4.png';
import img3 from '../../VIGOR HOME/Images/Gallery/9.png';
import img4 from '../../VIGOR HOME/Images/Gallery/13.png';


export const Location = () => {

  return (
    <section className="location">
      <h1>Come and stop by</h1>
      <div className='location-times'>
        <p>MON - THUR <span>05:30-20:00</span></p>
        <p>FRI <span>05:30-18:00</span></p>
        <p>SAT <span>07:00-14:30</span></p>
        <p>SUN <span>10:00-13:00</span></p>
        <div className="location-times_images">
          <img src={img1} alt="gym" />
          <img src={img2} alt="gym" />
          <img src={img3} alt="gym" />
          <img src={img4} alt="gym" />
        </div>
      </div>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6154586113566!2d-122.50500602464992!3d37.775613912112405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587c6b7fd1de1%3A0x787e54af64045331!2sVigor%20XF%20in%20Outer%20Richmond!5e0!3m2!1sen!2sza!4v1684931948350!5m2!1sen!2sza" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          loading="lazy"
          title='unique'
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>    
    </section>
  );
}