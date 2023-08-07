import React from 'react'
import '../css/Footer.css';
import facebook from '../assets/brandico_facebook.svg';
import twitter from '../assets/ant-design_twitter-outlined.svg';
import instagram from '../assets/ant-design_instagram-filled.svg';
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <section className='footer-logo'>
          <div className='hount'>
            <img src={logo} alt='logo-hounter' />
            <p>Hounter</p>
          </div>
          <p>We provide information about properties such<br/> as houses, villas and apartments to help people<br/> find their dream home</p>
          <div className='footer-icons'>
              <img src={facebook} alt='facebook' />
              <img src={twitter} alt='twitter' />
              <img src={instagram} alt='instagram' />
          </div>
        </section>
        <section className='footer-navbar'>
          <div className='footer-item'>
            <h3>Property</h3>
            <p>House</p>
            <p>Apartment</p>
            <p>Villa</p>
          </div>
          <div className='footer-item'>
          <h3>Article</h3>
            <p>New Article</p>
            <p>Popular Article</p>
            <p>Most Read</p>
            <p>Tips & Tricks</p>
          </div>
          <div className='footer-item'>
          <h3>Contact</h3>
            <p>2464 Royal Ln. Mesa, New Jersey 45463</p>
            <p>(671) 555-0110</p>
            <p>info@hounter.com</p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer