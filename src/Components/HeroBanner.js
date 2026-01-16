import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

// Images
import rgiLogo from '../Assets/Images/hero/rgi-logo.webp'
import rgiBG from '../Assets/Images/hero/rgi-bg.webp';
import americanTourister from '../Assets/Video/AmericanTouristerOrbiterProduct.mp4';
import lakmeLogo from '../Assets/Images/logos/work/fashion_lifestyle/lakme.png';
import americantouristerLogo from '../Assets/Images/logos/work/retail_fmcg/american-tourister.png';

import freyaalogo from '../Assets/Images/logos/work/fashion_lifestyle/freyaa.jpg';
import freyaa1 from '../Assets/Images/work/freyaa1.webp'
import Sharmaji1 from '../Assets/Images/work/Sharmaji1.webp'
import pretLogo from '../Assets/Images/hero/mi_text.webp';
import pretMi1 from '../Assets/Images/work/pret-mi1.jpg'
import sharmajibanner from '../Assets/Images/hero/sharmajivermaji_text.webp'



// Images end

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);

  const homescreenSliderSettings = {
    dots: true,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 6000,
    speed: 1000,
    draggable: true,
    swipe: true,
    touchMove: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: index => setCurrentSlide(index),
  };

  const slideData = [
    // { 
    //   image: '',
    //   imageLogo: pretLogo,
    //   title: "Making Pret’s packaging the new <br/>MVP of match-day moments",
    //   description: '',
    //   btnLink: '/work/case-studies/pret-x-mi',
    //   className: 'pretSlider',
    // },

  { 
      image: '',
      imageLogo: sharmajibanner,
      title: "RGI: Making insurance agents<br/> understand products better",
      description: '',
      btnLink: '/work/case-studies/rgi-sharmaji-vermaji',
      className: 'rgiSlider_new',
    },
    { 
      image: rgiBG,
      imageLogo: rgiLogo,
      title: "Product Communication  <br>for Reliance General  <br>Insurance",
      description: '',
      btnLink: '/work/case-studies/product-communication-for-reliance-general-insurance',
      className: 'rgiSlider',
    },
    { 
      image: '',
      imageLogo: lakmeLogo,
      title: "Content Creation & Event<br> Coverage for 6 Seasons of <br> Lakme Fashion Week",
      description: '',
      btnLink: '/work/case-studies/lakme-fashionweek',
      className: 'lakmeSlider',
    },
    { 
      image: '',
      imageLogo: americantouristerLogo,
      title: "Series of Product<br> Films for <br> American Tourister",
      description: '',
      btnLink: '/work/case-studies/american-tourister',
      className: 'americanTouristerSlider',
      video: americanTourister,
    },
  ];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentSlide) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        videoRefs.current.forEach((video) => {
          if (video) {
            video.pause();
          }
        });
      } else {
        videoRefs.current.forEach((video, index) => {
          if (video && index === currentSlide) {
            video.play();
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSlide]);

  return (
    <>
      {/* Hero */}
        <section className='heroRow'>
        <div className='hero heroHome'>
          <div className='HeroSlider'>
            <Slider {...homescreenSliderSettings} className="homescreen-slick slick-slider">
              {slideData.map((slide, index) => (
                <div 
                  key={index} 
                  className={`item ${slide.className}`} 
                >
                  <div className='HeroImage'>
                    <div className='container'>
                      <div className='Herobg'><img loading='lazy' src={slide.image} alt={`Slide ${index} - ${slide.image}`}  /></div>
                      <div className='videoBg'>
                        {slide.video && (
                          <video ref={el => videoRefs.current[index] = el} loop playsInline muted >
                            <source src={slide.video} type="video/mp4" />
                          </video>
                        )}
                      </div>
                     
                      <div className='HeroText'>
                      <div className='HerobgLogo'><img loading='lazy' src={slide.imageLogo} alt={`Slide ${index} - ${slide.image}`} /></div>
                        {slide.title && <h1 dangerouslySetInnerHTML={{ __html: slide.title }} />}
                        {slide.description && <p>{slide.description}</p>}
                        <div className='HeroBtn'>
                          {slide.btnLink && <Link className="btnWhite ripple-button" to={slide.btnLink}><span>Know More</span></Link>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        </section>
      {/* Hero */}
    </>
  )
}

export default HeroBanner;
