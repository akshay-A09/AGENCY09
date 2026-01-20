import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../../Components/Header';
import Footer from '../../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";

import logo from "../../../../Assets/Images/logos/work/Tvarana.png"


import ourwork1 from '../../../../Assets/Images/case-study/Tvarana/Tvarana.jpg'
import ourwork2 from '../../../../Assets/Images/case-study/Tvarana/group1.jpg'
import ourwork3 from '../../../../Assets/Images/case-study/Tvarana/group2.jpg'
import ourwork4 from '../../../../Assets/Images/case-study/Tvarana/group3.jpg'
import ourwork5 from '../../../../Assets/Images/case-study/Tvarana/group4.jpg'
import CaseStudyNav from '../../../../Components/TechCaseStudyNav';
const externalLink = "https://www.tvarana.com/";


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

const WhereBrandMeetsPerformanceInWebflowArchitectureTvarana = () => {
  return (
    <>
      <Helmet>
        <title>Where Brand Meets Performance in Webflow Architecture: Tvarana</title>
        <link 
          rel="canonical" 
          href="https://www.agency09.in/work/case-studies/where-brand-meets-performance-in-webflow-architecture-tvarana"
        />
        <meta name="robots" content="index, follow"/> 

        <meta 
          name="description" 
          content="A performance-driven Webflow redesign for Tvarana, aligning enterprise branding, scalability, and speed by AGENCY09." 
        />

        <meta 
          property="og:title" 
          content="Where Brand Meets Performance in Webflow Architecture: Tvarana"
        /> 
        <meta 
          property="og:description" 
          content="Redesigning Tvarana’s digital presence with a brand-forward, scalable, and high-performance Webflow architecture." 
        /> 
        <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
        <meta property="og:type" content="website"/> 

        <meta name="twitter:card" content="summary"/> 
        <meta name="twitter:site" content="@AGENCY09"/> 
        <meta name="twitter:creator" content="@AGENCY09"/> 
        <meta 
          name="twitter:url" 
          content="https://www.agency09.in/work/case-studies/where-brand-meets-performance-in-webflow-architecture-tvarana"
        /> 
        <meta 
          name="twitter:description" 
          content="Enterprise-grade Webflow architecture for Tvarana, balancing performance, clarity, and brand trust." 
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
                Where Brand Meets Performance in Webflow Architecture: Tvarana
              </h1>
            </div>

            <div className='cSsecMinInfo m0'>
              <img src={logo} loading='lazy' alt='Tvarana'/>
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
                  Tvarana, a leading provider of cloud-based NetSuite solutions, approached us to redesign and rebuild its 
                  digital presence with a strong focus on performance, clarity, brand positioning, and scalability.
                </p>
                <p>
                  The existing website did not fully reflect the sophistication of Tvarana’s services or support its 
                  expanding portfoliofrom product engineering to enterprise technology solutions. The objective was 
                  to create a Webflow-powered, brand-forward platform that builds trust, communicates expertise, and 
                  delivers a fast, intuitive experience across devices.
                </p>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Industry</h4>
                <ul>
                <li>Technology</li>
                <li>Digital Transformation Services</li>
                </ul>
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
             
              </div>

              <div className='cSsecMinBCol'>
                <h4>Approach</h4>
             
              </div>

              <div className='cSsecMinBCol'>
                <h4>Results</h4>
                
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
                <img src={ourwork1} loading='lazy' alt='Tvarana Website'/>
              </span>
            </div>
          </div>

          <div className='mainslider'>
            <Slider {...mainSlider} className='clientelSlider slick-slider'>
              <div className='imgCol1 imgCol'><span><img src={ourwork4} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork5} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork2} loading='lazy' /></span></div>
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

export default WhereBrandMeetsPerformanceInWebflowArchitectureTvarana
