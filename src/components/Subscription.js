import React from 'react'
import '../css/Subscription.css';
/* import chair from '../assets/Rectangle 27.png' */
const Subscription = () => {
  return (
    <section className='section-subscr'>
      
      <div className='main-subscr'>
        <h1>
          Subscribe For More Info<br/>
          and update from Hounter
        </h1>
        <div className='input-co'>
        <input placeholder='Your email here'  type='text'/>
        <button>Subsribe Now</button>
         
        </div>
      </div>
    </section>
  )
}

export default Subscription

{/* <div>
<img src={chair} alt='' />
  <img src={chair} alt='' />
  <img src={chair} alt='' />
  <img src={chair} alt='' />
</div>

<div>
<img src={chair} alt='' />
  <img src={chair} alt='' />
  <img src={chair} alt='' />
  <img src={chair} alt='' />
</div> */}