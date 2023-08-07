import React from 'react';
import '../css/Navbar.css';
import traveloka_logo2 from '../assets/traveloka_logo2.png';
import traveloka_logo3 from '../assets/traveloka_logo3.png';
import traveloka_logo4 from '../assets/traveloka_logo4.png';
import traveloka_logo5 from '../assets/traveloka_logo5.png';
import {IoIosArrowForward} from 'react-icons/io'
import logo from '../assets/logo.svg';
const Navbar = () => {
  return (
    <nav>
      <div className='nav-cont'>
        <div className='text-container'>
          <div className='logo'>
            <img src={logo} alt='logo-img' />
            <p>Hounter</p>
          </div>
          <div className='content'>
            <h1>find the place to<br />
              live <span>your dreams</span><br />
              easily here</h1>
            <p>Everything you need about finding your place to live will be here,<br /> where it will be easier for you</p>
            <div className='input-cont'>
              <input type='text' className='input-nav' placeholder='Search for the location you want!' />
              <button>Search<IoIosArrowForward/></button>
            </div>
            <div className='head-content'>
              <p>Our Partnership</p>
            </div>
            <div className='img-advert'>
              <img src={traveloka_logo2} alt='traveloka' />
              <img src={traveloka_logo3} alt='tiketcom' />
              <img src={traveloka_logo4} alt='airbnb' />
              <img src={traveloka_logo5} alt='tripadvisor' />
            </div>
          </div>
        </div>
        <div className='some-cont'>
          <div className="background-image"></div>
          <div className="navbar">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <button>Sign Up!</button>
            </ul>
          
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar