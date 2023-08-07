import React from 'react';
import '../css/AboutUs.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rec21 from '../assets/Rectangle 21.png'
import rec22 from '../assets/Rectangle 22.png'
import rec23 from '../assets/Rectangle 23.png'
import Slider from "react-slick";
import elispe from '../assets/girlbrunete.svg'
const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
    <section className='section-extra1'>
      <div className='third-line'>
        <div className='line-extra'></div>
        <div className='little-title-extra'>
          See Our Review
        </div>
        <div className='extra-head'>
          <h1>What Our User Say About Us</h1>
          <button>More Artikel</button>
        </div>
      </div>
      <div className='container-featureone'>
        <Slider {...settings}>
          <div className='slider-item-about'>
            <img src={rec23} alt='roselands' className='img-bg' />
            <div className='about-body'>
              <h2>My house sold out fast!</h2>
              <p>I was finally able to sell my house quickly through Hounter by immediately setting me up with people who wanted my house. I also do not get a discount from the sale of my house. Awesome!</p>
              <div className='about-body-desc'>
                <div>
                  <img src={elispe} alt='girl-icon' />
                </div>
                <div className='about-body-desc-paragraph'>
                  <p>Courtney Henry</p>
                  <p>CEO Andarafish</p>
                </div>
                <p className='price'>4.3</p>
              </div>
            </div>
          </div>
          <div className='slider-item-about'>
            <img src={rec22} alt='woodland' className='img-bg' />
            <div className='about-body'>
              <h2>Through the Hounter, I can get a house for my self</h2>
              <p>By looking for information about what kind of house we want, we managed to get the house we wanted very quickly, and directly connected with the seller to be able to ask about the details, very helpful!</p>
              <div className='about-body-desc'>
                <div>
                  <img src={elispe} alt='girl-icon' />
                </div>
                <div className='about-body-desc-paragraph'>
                  <p>Esther Howard</p>
                  <p>Head of Marketing</p>
                </div>
                <p className='price'>4.6</p>
              </div>
            </div>
          </div>
          <div className='slider-item-about'>
            <img src={rec21} alt='lighthouse' className='img-bg' />
            <div className='about-body'>
              <h2>Best! I got the house I wanted through Hounter</h2>
              <p>Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.</p>
              <div className='about-body-desc'>
                <div>
                  <img src={elispe} alt='girl-icon' />
                </div>
                <div className='about-body-desc-paragraph'>
                  <p>Dianne Russell</p>
                  <p>Manager Director</p>
                </div>
                <p className='price'>4.6</p>
              </div>
            </div>
          </div>

        </Slider>
      </div>
    </section>
  )
}

export default AboutUs