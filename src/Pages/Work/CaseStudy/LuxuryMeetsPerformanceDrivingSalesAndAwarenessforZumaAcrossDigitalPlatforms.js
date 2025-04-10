import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
// import { GoNorthStar } from "react-icons/go";
// import { PiSlideshow, PiStarFourFill } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import logo from "../../../Assets/Images/logos/work/others/zuma.png"
import ourwork1 from '../../../Assets/Images/work/ryan-group/ryangroup-main.webp';


// CaseStudySlider 
const CaseStudySlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 968,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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
// CaseStudySlider End

// Slider

const mainSlider ={
    dot: false,
    arrows:true,
    infinite:true,
    autoplay:true,
    autoplaySpeed: 7000,
    speed:700,
    slideToShow:3,
    slidesToScroll:1,
    responsive: [
        {
            breakpoint:768,
            settings:{
                arrow:false,
            }
        }
    ]
}

// Slider

//CaseStudy Data
const CaseStudyData = [
    {
        link: '#',
        image: ourwork1,
        titale: 'Brand led site for a Banking Solutions Firm',
        tags: [{ name: 'BFSI' },],
    },  
  ];
//CaseStudy Data End

const LuxuryMeetsPerformanceDrivingSalesAndAwarenessforZumaAcrossDigitalPlatforms = () => {


  return (
    <>
    <Helmet>
<title>Luxury Meets Performance: Driving Sales & Awareness for Zuma Across Digital Platforms</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Zuma, a luxury carpet brand based in the UAE, joined forces with AGENCY09 to increase online sales and elevate brand awareness. "/>
<meta property="og:title" content="Luxury Meets Performance: Driving Sales & Awareness for Zuma Across Digital Platforms"/> 
<meta property="og:description" content="Zuma, a luxury carpet brand based in the UAE, joined forces with AGENCY09 to increase online sales and elevate brand awareness. "/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/about"/> 
<meta name="twitter:description" content="Zuma, a luxury carpet brand based in the UAE, joined forces with AGENCY09 to increase online sales and elevate brand awareness.  "/> 
<meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 

</Helmet>
    <Header/>
    <div className="spacer"></div>


    <section className='cSsecMin'>
        <div className='container'>
            
            <div className='cSsecMinA flexBio'>

                <div className='cSsecMinBtn m0'>
                <Link to='/work/case-studies' className='backBtn'><span><IoArrowBackCircleOutline /> Case Study</span></Link>
                </div>

                <div className='cSsecMinHead m0'>
                    <h1 className='sizeH4'>Luxury Meets Performance: Driving Sales & Awareness for Zuma Across Digital Platforms </h1>
                </div>

                <div className='cSsecMinInfo m0'>
                    <img src={logo} loading='lazy' />
                    {/* <Link>Info <GoPlus /></Link> */}
                </div>

            </div>

            <div className='strokeB'>
                <SVGCurveLine/>
            </div>  


            <div className='cSsecMinB'>
                <div className='cSsecMinBRow'>
                    <div className='cSsecMinBCol'>
                        <h4>Overview</h4>
                        <p>Zuma, a luxury carpet brand based in the UAE, joined forces with AGENCY09 to increase online sales and elevate brand awareness. Through a combination of strategic campaigns on Google and YouTube, the brand reached high-intent audiences with exceptional results.
                        </p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Luxury Carpet </p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Performance Marketing</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2023–2024</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Drive online sales for Zuma’s premium carpet collection</li>
                            <li>Expand brand visibility among luxury home décor audiences</li>
                           
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Capturing attention in a competitive luxury market</li>
                            <li>Communicating brand elegance while driving measurable ROI</li>
                            <li>Balancing awareness and conversion goals</li>
                        </ul>
                    </div>



                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                   <li>Identified and targeted high-intent audiences with personalized messaging</li>
                   <li>Designed visually striking ads showcasing Zuma's premium offerings</li>
                  <li>Deployed Google Ads and YouTube campaigns to maximize reach and drive sales</li>
                  <li>Monitored performance metrics to fine-tune campaign strategies</li>
                   <li>Implemented retargeting and optimization techniques for sustainable growth</li>
                 </ul>

                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>AED 192K :</b>in Revenue</li>
                            <li><b>20M:</b>  Impressions</li>
                            <li><b>2% :</b> CTR </li>
                            <li><b>354K:</b> Clicks</li>
                            <li><b>501K:</b> Views</li>
                            <li><b>1.03:</b> ROAS</li>
                            <li><b>AED 0.53 Avg.:</b> CPC</li>
                        </ul>
                    </div>

                </div>

            </div>


            {/* <div className='cSsecMinC'>

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork1} /></span>
                </div>

            </div>


            <div className='mainslider'>
                <Slider {...mainSlider} className='clientelSlider slick-slider'>
                <div className='imgCol1 imgCol'>
                                <span><img src={ourwork2} /></span>
                            </div>

                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork3} /></span>
                            </div>


                </Slider>
            </div> */}




        </div>
    </section>





    <Footer/>
    </>
  )
}

export default LuxuryMeetsPerformanceDrivingSalesAndAwarenessforZumaAcrossDigitalPlatforms
