import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { PiArrowCircleRightThin } from "react-icons/pi";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// Images
import ideasPerform from '../Assets/Images/standard-quality-control-concept.webp';
import ideasPerform1 from '../Assets/Images/luxebanner.jpg';
import sportday from '../Assets/Images/tvarana.jpg';
import ideasPerform2 from '../Assets/Images/growth/ideas-perform2.webp';
import rgiimage from '../Assets/Images/growth/rgi.webp';
import starY from '../Assets/Images/icons/star.webp';


// Images
const WhatsNew = () => {
  
// GSPA
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  const tlhUpdates = gsap.timeline({
    duration: 0.1,
    scrollTrigger: {
      trigger: ".hUpdates",
      toggleActions: "restart none none none",
      start: "top 70%",
      end: "+=30%",
      scrub: true,

    },
  });
  tlhUpdates.to(".hUpdates .item", { left: '0', opacity:1, stagger: 0.3});

  return () => {
    ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
    });
    };
}, []);


   // Update
   const UpdateSlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
      breakpoint: 968,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,


      }
    }
  ]};

  // Data 
  const UpdateData = [
    {
      link: 'https://www.agency09.in/simplifyingtheweb/tech/how-ai-is-changing-search-and-why-your-website-needs-to-be-ai-compliant/',
      image: ideasPerform,
      title: 'How AI is Changing Search and Why Your Website Needs to be AI-Compliant',
      description: "Unlocking Digital Potential Since 20XX",
    },
    {
      link: 'https://www.agency09.in/simplifyingtheweb/tech/revamping-luxe-gift-cards-website-for-speed-style-and-engagement/',
      image: ideasPerform1,
      title: 'Revamping Luxe Gift Card’s Website for Speed, Style and Engagement',
      description: "AGENCY09 Powers Tata Motors' Smart City Initiative Online",
    },
    {
      link: 'https://www.agency09.in/simplifyingtheweb/tech/how-webflow-transformed-tvaranas-website/',
      image: sportday,
      title: 'How We Transformed Tvarana’s Website with Webflow for Faster Performance, Higher Engagement, and Better SEO',
      description: "Sports Day at AGENCY09",
    },
    {
      link: 'https://www.agency09.in/simplifyingtheweb/design/the-journey-of-rhealthbeat-magazine-a-testament-to-innovative-design/',
      blank: '_blank',
      image: rgiimage,
      title: 'The Journey of RHealthBeat Magazine, a Testament to Innovative DesignThe Journey of RHealthBeat Magazine, a Testament to Innovative Design',
      description: "Designing Stories, Crafting Impact",
    },
  ];
  // Update end
  return (
    <>
    {/* Updates */}
    <section className='hUpdates'><div className='container'>

    <div className='Heading center HeadingIcon'>
      <h2 className='sizeH1 uppercase'>
        <span className='iconSVG'><i className="iconF"><img src={starY} alt="Star Icon" /></i></span>
        What's New
        <span className='iconSVG'><i className="iconF"><img src={starY} alt="Star Icon" /></i></span>
      </h2>
    </div>

    <Slider {...UpdateSlider} className="UpdateSlider-slick slick-slider">
    {UpdateData.map((item, index) => (
      <div className='item' key={index}>
        <Link to={item.link} target={item.blank}>
          <img src={item.image} alt={item.title} loading="lazy" />
          <h2>{item.title}</h2>
          {/* <p>{item.description}</p> */}
          {/* <hr/>
          <div className='btnItem'>Know More <PiArrowCircleRightThin /></div> */}
        </Link>
      </div>
    ))}
    </Slider>
    </div></section>                      
    {/* Updates */} 
</>
  )
}

export default WhatsNew
