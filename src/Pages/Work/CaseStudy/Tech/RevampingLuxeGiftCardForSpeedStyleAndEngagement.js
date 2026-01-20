import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../../Components/Header';
import Footer from '../../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";

import logo from "../../../../Assets/Images/logos/work/Luxe.png"

import ourwork1 from '../../../../Assets/Images/case-study/Luxe/Luxe.jpg'
import ourwork2 from '../../../../Assets/Images/case-study/Luxe/group1.jpg'
import ourwork3 from '../../../../Assets/Images/case-study/Luxe/group2.jpg'
import ourwork4 from '../../../../Assets/Images/case-study/Luxe/group3.jpg'
import ourwork5 from '../../../../Assets/Images/case-study/Luxe/group4.jpg'
import ourwork6 from '../../../../Assets/Images/case-study/Luxe/group5.jpg'

import CaseStudyNav from '../../../../Components/TechCaseStudyNav';
const externalLink = "https://www.luxegiftcard.com/";

// Slider
const mainSlider ={
    dot: false,
    arrows:true,
    infinite:true,
    autoplay:true,
    autoplaySpeed: 7000,
    speed:700,
    slideToShow:3,
    SlideshowToScroll:1,
    responsive: [
        {
            breakpoint:768,
            settings:{
                arrow:false,
            }
        }
    ]
}

const RevampingLuxeGiftCardForSpeedStyleAndEngagement = () => {
  return (
    <>
      <Helmet>
        <title>Revamping Luxe Gift Card for Speed, Style, and Engagement</title>
        <link 
          rel="canonical" 
          href="https://www.agency09.in/work/case-studies/revamping-luxe-gift-card-for-speed-style-and-engagement"
        />
        <meta name="robots" content="index, follow"/> 

        <meta 
          name="description" 
          content="A premium Webflow redesign for Luxe Gift Card focused on speed, storytelling, and luxury gifting experiences by AGENCY09." 
        />

        <meta 
          property="og:title" 
          content="Revamping Luxe Gift Card for Speed, Style, and Engagement"
        /> 
        <meta 
          property="og:description" 
          content="Luxury UX and performance-driven website redesign for Luxe Gift Card, enhancing speed, engagement, and storytelling." 
        /> 
        <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
        <meta property="og:type" content="website"/> 

        <meta name="twitter:card" content="summary"/> 
        <meta name="twitter:site" content="@AGENCY09"/> 
        <meta name="twitter:creator" content="@AGENCY09"/> 
        <meta 
          name="twitter:url" 
          content="https://www.agency09.in/work/case-studies/revamping-luxe-gift-card-for-speed-style-and-engagement"
        /> 
        <meta 
          name="twitter:description" 
          content="Luxury UX redesign and performance optimisation for Luxe Gift Card, delivering faster loads and refined gifting journeys." 
        /> 
        <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 
      </Helmet>

      <Header/>
      <div className="spacer"></div>

      <section className='cSsecMin'>
        <div className='container'>
          
          <div className='cSsecMinA flexBio'>

            <div className='cSsecMinBtn m0'>
              <Link to='/work/case-studies' className='backBtn'>
                <span><IoArrowBackCircleOutline /> Case Study</span>
              </Link>
            </div>

            <div className='cSsecMinHead m0'>
              <h1 className='sizeH4'>
                Revamping Luxe Gift Card for Speed, Style, and Engagement
              </h1>
            </div>

            <div className='cSsecMinInfo m0'>
              <img src={logo} loading='lazy' alt='Luxe Gift Card'/>
            </div>

          </div>

          <div className='strokeB'>
            <SVGCurveLine/>
          </div>  

          <div className='cSsecMinB'>
            <div className='cSsecMinBRow'>

              <div className='cSsecMinBCol'>
                <h4>Overview</h4>
                <p>
                  Luxe Gift Card aims to offer a refined gifting experience that transcends traditional gift vouchers. 
                  With one digital card, recipients can choose from a wide range of premium fashion, lifestyle, jewellery, 
                  and home brands  making gifting flexible and memorable.
                </p>
                <p>
                  However, the existing website lacked modern performance, clear storytelling, and engagement  
                  impacting user experience and discoverability.
                </p>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Industry</h4>
                <p>Retail and Lifestyle</p>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Services</h4>
                <ul>
                  <li>UX/UI Strategy & Redesign</li>
                  <li>Performance & Speed Optimisation</li>
                  <li>Content Structuring & Storytelling</li>
                  <li>Mobile-First Design</li>
                  <li>Website Design and Development</li>
                  <li>Webflow Development</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Challenges</h4>
                <ul>
                  <li>Slow load times and performance issues affecting engagement and search visibility.</li>
                  <li>Brand positioning not clearly reflected in content structure.</li>
                  <li>Lack of refined luxury storytelling and visual polish.</li>
                  <li>Poor category hierarchy and navigation.</li>
                  <li>Inconsistent mobile browsing experience.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Approach</h4>
                <ul>
                  <li>Rebuilt the website with a premium, intuitive luxury-first experience.</li>
                  <li>Crafted storytelling around “one card, endless luxury.”</li>
                  <li>Simplified navigation across major product categories.</li>
                  <li>Highlighted Corporate Gifting and How to Redeem journeys.</li>
                  <li>Optimised performance to enhance SEO and engagement.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Results</h4>
                <ul>
                  <li>GTmetrix performance improved to Grade B.</li>
                  <li>Google performance scores crossed 90+.</li>
                  <li>Faster load times and smoother user interactions.</li>
                  <li>Clearer brand storytelling aligned with premium positioning.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Year</h4>
                <p>2025</p>
              </div>

            </div>
          </div>

          <div className='cSsecMinC'>
            <div className='imgCol1 imgCol'>
              <span>
                <img src={ourwork1} loading='lazy' alt='Luxe Gift Card Website'/>
              </span>
            </div>
          </div>

          <div className='mainslider'>
            <Slider {...mainSlider} className='clientelSlider slick-slider'>
              <div className='imgCol1 imgCol'><span><img src={ourwork2} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork5} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork6} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork4} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork3} loading='lazy' /></span></div>
            </Slider>
          </div>

        </div>
      </section>

    <div className='btnSpaceEx center'><a href={externalLink} target="_blank" rel="noreferrer" className="btnDark fontM ripple-button"><span>Visit Site</span></a></div>
<CaseStudyNav visitLink={externalLink} />

      <Footer/>
    </>
  )
}

export default RevampingLuxeGiftCardForSpeedStyleAndEngagement
