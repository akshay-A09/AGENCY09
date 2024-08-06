import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import "lightgallery.js/dist/css/lightgallery.css";

const LifeAtA09 = () => {
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null);
  
  useEffect(() => {
    // Fetch data from API
    axios.get('https://agency09.in/cms/api/getGallery')
      .then(response => {
        console.log(response.data);
        setImages(response.data); // Adjust based on API response structure
      })
      .catch(error => {
        console.error('Error fetching gallery data:', error);
      });
  }, []);
  const LogosSliders = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    rows: 2,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="LifeAtA09Row">
      <LightgalleryProvider>
        <Slider {...LogosSliders} className="LogosSlider-slick slick-slider arrowLRC" ref={sliderRef}>
          {images.map((image, index) => (
            <div key={index} className="item">
              <div className="LifeAtA09Col">
                <LightgalleryItem group={image.group} src={image.src}>
                  <img src={image.src} alt={`lifeata09_${index + 1}`} />
                  <div className="LifeAt09Text">
                    <h3>{image.title}</h3>
                  </div>
                </LightgalleryItem>
                {image.additionalImages.map((additionalImage, addIndex) => (
                  <LightgalleryItem key={addIndex} group={image.group} src={additionalImage}></LightgalleryItem>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </LightgalleryProvider>
    </div>
  );
};

export default LifeAtA09;
