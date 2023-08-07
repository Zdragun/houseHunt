import React from 'react'
import '../css/Extra.css';
import diana from '../assets/9f71caedbf8452d7c74782af2f06e925.jpg';
import layer7 from '../assets/0dec5695cd46cfa87b49b53be7db200d.jpg';
import layer8 from '../assets/ce8e581c4255dd4249817f7c2496efc4.jpg';
import sofaroom from '../assets/454fa7819a75bfd3f5e332513d709bf7.jpg'
import minihome from '../assets/719cd8f2e3aec70e3ce776253cc7f272.jpg'
import cotage from '../assets/1d7a1f36e1b169c9c94dc1d7c57bc5b2.jpg'
import bigimghome from '../assets/95033d41701710e6964189dc4344908c.jpg';
import clock from '../assets/ic_round-access-time.svg';
import muhmed from '../assets/2dd3efaa42cb64b61220b8b963a49616.jpg'
const Extra = () => {
  return (
    <section className='section-extra'>
      <div className='third-line'>
        <div className='line-extra'></div>
        <div className='little-title-extra'>
          See tips and trick from our partnership
        </div>
        <div className='extra-head'>
          <h1>Find out more about<br />
            selling and buying homes</h1>
          <button>More Artikel</button>
        </div>
      </div>
      {/**Container */}
      <div className='extra-body'>
        <div className='extra-left-side'>
          <div className='extra-details-item'>
            <div className='extra-details-img'>
              <img src={sofaroom} alt='' />
            </div>
            <div className='extra-details-text'>
              <div className='extra-details-logo'>
                <img src={diana} alt='' />
                <p>Dianne Russell</p>
              </div>
              <div className='extra-details-desc'>
              <h3>The things we need to check when we want to buy a house</h3>
              <p><img src={clock} alt='clock'/>4 min read | 25 Apr 2021</p>
              </div>
            </div>
          </div>
          <div className='extra-details-item'>
            <div className='extra-details-img'>
              <img src={minihome} alt='' />
            </div>
            <div className='extra-details-text'>
              <div className='extra-details-logo'>
                <img src={layer7}  alt='' />
                <p>Courtney Henry</p>
              </div>
              <div className='extra-details-desc'>
              <h3>The things we need to check when we want to buy a house</h3>
              <p><img src={clock} alt='clock'/>4 min read | 25 Apr 2021</p>
              </div>
            </div>
          </div>
          <div className='extra-details-item'>
            <div className='extra-details-img'>
              <img src={cotage} alt='' />
            </div>
            <div className='extra-details-text'>
              <div className='extra-details-logo'>
                <img src={layer8} alt='' />
                <p>Darlene Robertson</p>
              </div>
              <div className='extra-details-desc'>
              <h3>The things we need to check when we want to buy a house</h3>
              <p><img src={clock} alt='clock'/>4 min read | 25 Apr 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className='extra-right-side'>
          <img src={bigimghome} alt='' width={560} height={280} style={{borderRadius:16}} />
          <div className='extra-details-logo'>
            <img src={muhmed} alt='' width={32} height={32} style={{borderRadius:32}} />
            <p>Cameron Williamson</p>
          </div>
          <h1>12 Things to know before buying a house</h1>
          <p>Want to buy a house but are unsure about what we should know, here I will try to<br />
            explain what we should know and check when we want to buy a house</p>
          <p><img src={clock} alt='clock'/>8 min read | 25 Apr 2021</p>
        </div>

      </div>

    </section>
  )
}

export default Extra



