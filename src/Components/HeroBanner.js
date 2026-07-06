import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

// Images
import rgiLogo from '../Assets/Images/hero/rgi-logo.webp';
import rgiBG from '../Assets/Images/hero/rgi-bg.webp';
import americanTourister from '../Assets/Video/AmericanTouristerOrbiterProduct.mp4';
import lakmeLogo from '../Assets/Images/logos/work/fashion_lifestyle/lakme.png';
import americantouristerLogo from '../Assets/Images/logos/work/retail_fmcg/american-tourister.png';
import pretLogo from '../Assets/Images/logos/pret.webp';
import sharmajibanner from '../Assets/Images/hero/sharmajivermaji_text.webp';

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
    afterChange: (index) => setCurrentSlide(index),
  };

const slideData = [
  {
    image: '',
    imageLogo: pretLogo,
    imageLogoAlt: 'Pret Logo - AGENCY09',
    title: "Making Pret’s packaging the new <br/>MVP of match-day moments",
    btnLink: '/work/case-studies/pret-x-mi',
    className: 'pretSlider',
  },
  {
    image: '',
    imageLogo: sharmajibanner,
    imageLogoAlt: 'How do you make insurance agents understand your products - Reliance General Insurance - AGENCY09',
    title: "RGI: Making insurance agents<br/> understand products better",
    btnLink: '/work/case-studies/rgi-sharmaji-vermaji',
    className: 'rgiSlider_new',
  },
  {
    image: rgiBG,
    imageLogo: rgiLogo,
    imageLogoAlt: 'Reliance General Insurance | Logo - AGENCY09',
    title: "Product Communication <br/>for Reliance General <br/>Insurance",
    btnLink: '/work/case-studies/product-communication-for-reliance-general-insurance',
    className: 'rgiSlider',
  },
  {
    image: '',
    imageLogo: lakmeLogo,
    imageLogoAlt: 'Content Creation & Event Coverage For 6 Seasons Of Lakme Fashion Week | Lakeme Fashion Week  - AGENCY09',
    title: "Content Creation & Event<br/>Coverage for 6 Seasons of <br/>Lakme Fashion Week",
    btnLink: '/work/case-studies/lakme-fashionweek',
    className: 'lakmeSlider',
  },
  {
    image: '',
    imageLogo: americantouristerLogo,
    imageLogoAlt: 'American Tourister logo',
    title: "Series of Product<br/>Films for <br/>American Tourister",
    btnLink: '/work/case-studies/american-tourister',
    className: 'americanTouristerSlider',
    video: americanTourister,
  },
];

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentSlide) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        videoRefs.current.forEach((video) => {
          if (video) video.pause();
        });
      } else {
        videoRefs.current.forEach((video, index) => {
          if (video && index === currentSlide) {
            video.play().catch(() => {});
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
    <section className="heroRow">
      <div className="hero heroHome">
        <div className="HeroSlider">
          <Slider
            {...homescreenSliderSettings}
            className="homescreen-slick slick-slider"
          >
            {slideData.map((slide, index) => {
              const HeadingTag = index === 0 ? 'h1' : 'h3';

              return (
                <div
                  key={index}
                  className={`item ${slide.className}`}
                >
                  <div className="HeroImage">
                    <div className="container">
                      <div className="Herobg">
                        {slide.image && (
                          <img
                            loading="lazy"
                            src={slide.image}
                            alt={slide.imageLogoAlt}
                          />
                        )}
                      </div>

                      <div className="videoBg">
                        {slide.video && (
                          <video
                            ref={(el) => (videoRefs.current[index] = el)}
                            loop
                            playsInline
                            muted
                          >
                            <source
                              src={slide.video}
                              type="video/mp4"
                            />
                          </video>
                        )}
                      </div>

                      <div className="HeroText">
                        <div className="HerobgLogo">
                          <img
                            loading="lazy"
                            src={slide.imageLogo}
                            alt={slide.imageLogoAlt}
                          />
                        </div>

                        {slide.title && (
                          <HeadingTag
                            dangerouslySetInnerHTML={{
                              __html: slide.title,
                            }}
                          />
                        )}

                        {slide.description && (
                          <p>{slide.description}</p>
                        )}

                        <div className="HeroBtn">
                          {slide.btnLink && (
                            <Link
                              className="btnWhite ripple-button"
                              to={slide.btnLink}
                            >
                              <span>Know More</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;