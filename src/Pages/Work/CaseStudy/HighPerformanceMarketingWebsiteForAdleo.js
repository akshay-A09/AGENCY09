import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";

import logo from "../../../Assets/Images/logos/work/Adleo.png"
import ourwork1 from '../../../Assets/Images/case-study/AdLeo/AdLeo.jpg'
import ourwork2 from '../../../Assets/Images/case-study/AdLeo/group1.jpg'
import ourwork3 from '../../../Assets/Images/case-study/AdLeo/group2.jpg'
import ourwork4 from '../../../Assets/Images/case-study/AdLeo/group3.jpg'
import ourwork5 from '../../../Assets/Images/case-study/AdLeo/group4.jpg'

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

const HighPerformanceMarketingWebsiteForAdleo = () => {
  return (
    <>
      <Helmet>
        <title>High-Performance Marketing Website for Adleo</title>
        <link 
          rel="canonical" 
          href="https://www.agency09.in/work/case-studies/high-performance-marketing-website-for-adleo"
        />
        <meta name="robots" content="index, follow"/> 

        <meta 
          name="description" 
          content="A high-performance marketing website for Adleo designed to enhance brand visibility, engagement, and lead generation by AGENCY09." 
        />

        <meta 
          property="og:title" 
          content="High-Performance Marketing Website for Adleo"
        /> 
        <meta 
          property="og:description" 
          content="Designing and developing a modern, interactive marketing website to position Adleo as a full-service branding agency." 
        /> 
        <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
        <meta property="og:type" content="website"/> 

        <meta name="twitter:card" content="summary"/> 
        <meta name="twitter:site" content="@AGENCY09"/> 
        <meta name="twitter:creator" content="@AGENCY09"/> 
        <meta 
          name="twitter:url" 
          content="https://www.agency09.in/work/case-studies/high-performance-marketing-website-for-adleo"
        /> 
        <meta 
          name="twitter:description" 
          content="A fast, modern marketing website for Adleo focused on engagement, clarity, and lead generation." 
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
                High-Performance Marketing Website for Adleo
              </h1>
            </div>

            <div className='cSsecMinInfo m0'>
              <img src={logo} loading='lazy' alt='Adleo'/>
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
                  To strengthen Adleo’s online presence and clearly communicate its wide range of branding and 
                  marketing services, we designed and developed a modern, interactive marketing website.
                </p>
                <p>
                  The website was crafted to reflect Adleo’s creative capabilities, improve brand visibility, 
                  and deliver a smooth experience for users exploring services or submitting enquiries.
                </p>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Industry</h4>
                <p>Branding & Marketing Services</p>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Services</h4>
                <ul>
                  <li>Digital Strategy</li>
                  <li>Web Development</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Objective</h4>
                <ul>
                  <li>Create a strong digital identity representing Adleo as a full-service agency.</li>
                  <li>Clearly showcase all services in a structured, easy-to-understand manner.</li>
                  <li>Engage visitors through modern design and smooth animations.</li>
                  <li>Enable efficient lead generation through integrated enquiry forms.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Challenges</h4>
                <ul>
                  <li>Outdated website that no longer reflected Adleo’s brand positioning.</li>
                  <li>Unclear service presentation making it hard to understand offerings.</li>
                  <li>Lack of engagement beyond the first page.</li>
                  <li>Performance and load speed issues affecting user experience.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Approach</h4>
                <ul>
                  <li>Redesigned the site with a mobile-first, modern visual language.</li>
                  <li>Structured services using a clear and intuitive sitemap.</li>
                  <li>Introduced smooth, purposeful animations for engagement.</li>
                  <li>Optimised performance and tested across devices for speed and stability.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Results</h4>
                <ul>
                  <li>Average session duration increased to over 3 minutes with 56% engagement.</li>
                  <li>Indexed pages improved from 8 to 15.</li>
                  <li>Page load time reduced from 8.9 seconds to under 3 seconds.</li>
                  <li>Stronger digital presence supporting lead generation and credibility.</li>
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
                <img src={ourwork1} loading='lazy' alt='Adleo Website'/>
              </span>
            </div>
          </div>

          <div className='mainslider'>
            <Slider {...mainSlider} className='clientelSlider slick-slider'>
              <div className='imgCol1 imgCol'><span><img src={ourwork2} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork4} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork5} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork3} loading='lazy' /></span></div>
            </Slider>
          </div>

        </div>
      </section>

      <Footer/>
    </>
  )
}

export default HighPerformanceMarketingWebsiteForAdleo
