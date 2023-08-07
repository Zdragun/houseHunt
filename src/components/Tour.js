import React from 'react';
import '../css/Tour.css';
import rectangle17 from '../assets/Rectangle17.png';
import rectangle18 from '../assets/Rectangle18.png';
import rectangle19 from '../assets/Rectangle19.png';
import rectangle20 from '../assets/Rectangle20.png';
import bad from '../assets/bed 1.svg';
import bath from '../assets/bath 1.svg';
import car from '../assets/car-garage 1.svg';
import stairs from '../assets/stairs-with-handrail 1.svg';
import diana from '../assets/Ellipse 6 (1).png';
import call from '../assets/fluent_call-20-filled.svg'
const Tour = () => {
  return (
    <main>
      <section className='sec'>
        <div className='tour-right-con'>
          <div className='second-line'>
            <div className='line'></div>
            <div className='little-title'>Ready to Sell!</div>
          </div>
          <aside>
            <div className='tour-info'>
              <h1>Let’s tour and see our house!</h1>
              <p>Houses recommended by our partners that have been<br /> curated to become the home of your dreams!</p>
            </div>
            <p>House Detail</p>
            <div className='tour-details'>
              <div className='tour-details-item'>
                <img src={bad} alt='' />
                <p>4 Bedrooms</p>
              </div>
              <div className='tour-details-item'>
                <img src={bath} alt='' />
                <p>2 Bathrooms</p>
              </div>
              <div className='tour-details-item'>
                <img src={car} alt='' />
                <p>1 Carport</p>
              </div>
              <div className='tour-details-item'>
                <img src={stairs} alt='' />
                <p>2 Floors</p>
              </div>
            </div>
            <div className='tour-contact'>
              <img src={diana} alt='' />
              <div>
              <p>Dianne Russell</p>
              <p>Manager Director</p>
              </div>
              <button><img src={call} alt='call' />Contact Now</button>
            </div>
          </aside>
        </div>
        <div className='tour-left-con'>
          <img src={rectangle17} alt='' width={488} height={416}/>
          <img src={rectangle18} alt='' width={296} height={168} className="bottom-right" />
          <img src={rectangle19} alt='' width={96} height={80} className="bottom-center" />
          <img src={rectangle20} alt='' width={96} height={80} className="bottom-left" />
        </div>
      </section>
    </main>
  )
}

export default Tour