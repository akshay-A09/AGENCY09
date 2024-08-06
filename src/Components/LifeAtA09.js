import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; // Optional: for default theme
import { LightgalleryItem, LightgalleryProvider } from 'react-lightgallery';
import "lightgallery.js/dist/css/lightgallery.css";

const LifeAtA09 = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from API
    axios.get('https://agency09.in/cms/api/getGallery')
      .then(response => {
        setImages(response.data); // Adjust based on API response structure
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching gallery data');
        setLoading(false);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="LifeAtA09Row">
      <LightgalleryProvider>
        <Slider {...LogosSliders} className="LogosSlider-slick slick-slider">
          {images.map((image, index) => (
            <div key={index} className="item">
              <div className="LifeAtA09Col">
                <LightgalleryItem group={image.group} src={image.src}>
                  <img src={image.src} alt={`lifeata09_${index + 1}`} />
                  <div className="LifeAt09Text">
                    <h3>{image.title}</h3>
                  </div>
                </LightgalleryItem>
                {image.additionalImages && image.additionalImages.map((additionalImage, addIndex) => (
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
