import React from 'react'
import '../css/Featured.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Slider from "react-slick";
import { AiFillHome } from 'react-icons/ai';
import apartment from '../assets/ic_round-apartment.svg';
import villa from '../assets/ic_round-villa.svg';
import roselands from '../assets/Rectangle15.png';
import woodland from '../assets/woodland.png';
import lighthouse from '../assets/lighthouse.png';
import cosmos from '../assets/cosmos.png';
import firefilled from '../assets/ant-design_fire-filled.svg';
import hommie from '../assets/ph_house-fill (1).png';
import wallet from '../assets/entypo_wallet.svg';
const Featured = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };



  return (
    <section className='feature'>
      <div className='first-line'>
        <div className='line'></div>
        <div className='little-title'>Our Recommendation</div>
      </div>
      <div className='featured-head'>
        <div className='featured-head-title'>
          <h1>Featured House</h1>
        </div>
        <div className='featured-head-body'>
          <button><AiFillHome size={24} /><p>House</p></button>
          <button><img src={villa} /><p>Villa</p></button>
          <button><img src={apartment} /><p>Apartment</p></button>
        </div>
        <div className='arrow-btns'>
          <button><MdKeyboardArrowLeft  size={28} /></button>
          <button><MdKeyboardArrowRight size={28} /></button>
        </div>
      </div>
      <div className='container-feature'>
        <Slider {...settings}>
          <div className='slider-item'>
            <img src={roselands} alt='roselands' />
            <div className='card-body'>
            <button><img src={firefilled} style={{marginRight:10,padding:0}} alt='fire'/>Popular</button>
              <h3>Roselands House</h3>
              <p>$ 35.000.000</p>
              <div className='person-icon'>
                <img src='' alt='' />
                <p className='name-person'>Dianne Russell</p>
                <p className='origin-person'>Manchester, Kentucky</p>
              </div>
            </div>
          </div>
          <div className='slider-item'>
            <img src={woodland} alt='woodland' />
            <div className='card-body'>
            <button style={{backgroundColor:'#DBEAFE',color:'#1D4ED8'}} ><img src={hommie} className='hommie' style={{marginRight:10,padding:0}} width={16} height={16} alt='fire'/>New house</button>
              <h3>Woodlandside</h3>
              <p>$ 20.000.000</p>
              <div className='person-icon'>
                <img src='' alt='' />
                <p className='name-person'>Dianne Russell</p>
                <p className='origin-person'>Manchester, Kentucky</p>
              </div>
            </div>
          </div>
          <div className='slider-item'>
            <img src={lighthouse} alt='lighthouse' />
            <div className='card-body'>
              <button style={{backgroundColor:'#D1FAE5',color:'#047857'}} ><img src={wallet} className='walleti' style={{marginRight:10,padding:0}} width={16} height={16} alt='fire'/>Best Deals</button>
              <h3>The Old Lighthouse</h3>
              <p>$ 44.000.000</p>
              <div className='person-icon'>
                <img src='' alt='' />
                <p className='name-person'>Dianne Russell</p>
                <p className='origin-person'>Manchester, Kentucky</p>
              </div>
            </div>
          </div>
          <div className='slider-item'>
            <img src={cosmos} alt='cosmos' />
            <div className='card-body'>
              <button><img src={firefilled} style={{marginRight:10,padding:0}} alt='fire'/>Popular</button>
              <h3>Cosmo's House</h3>
              <p>$ 22.000.000</p>
              <div className='person-icon'>
                <img src='' alt='' />
                <p className='name-person'>Dianne Russell</p>
                <p className='origin-person'>Manchester, Kentucky</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  )
}

export default Featured