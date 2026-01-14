import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";

import logo from "../../../Assets/Images/logos/work/Eduedge.png"
import ourwork1 from '../../../Assets/Images/case-study/EduEdge/EduEdge.jpg'
import ourwork2 from '../../../Assets/Images/case-study/EduEdge/group1.jpg'
import ourwork3 from '../../../Assets/Images/case-study/EduEdge/group2.jpg'
import ourwork4 from '../../../Assets/Images/case-study/EduEdge/group3.jpg'
import ourwork5 from '../../../Assets/Images/case-study/EduEdge/group4.jpg'
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

const DesigningAScalableContentDrivenEducationWebsiteForEduEdgeGlobal = () => {
  return (
    <>
      <Helmet>
        <title>Designing a Scalable, Content-Driven Education Website for EduEdge Global</title>
        <link 
          rel="canonical" 
          href="https://www.agency09.in/work/case-studies/designing-a-scalable-content-driven-education-website-for-eduedge-global"
        />
        <meta name="robots" content="index, follow"/> 

        <meta 
          name="description" 
          content="A scalable, content-driven education website for EduEdge Global designed to manage 100+ pages with clarity, performance, and usability by AGENCY09." 
        />

        <meta 
          property="og:title" 
          content="Designing a Scalable, Content-Driven Education Website for EduEdge Global"
        /> 
        <meta 
          property="og:description" 
          content="Redesigning EduEdge Global’s website to handle complex academic content with improved usability, consistency, and performance." 
        /> 
        <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
        <meta property="og:type" content="website"/> 

        <meta name="twitter:card" content="summary"/> 
        <meta name="twitter:site" content="@AGENCY09"/> 
        <meta name="twitter:creator" content="@AGENCY09"/> 
        <meta 
          name="twitter:url" 
          content="https://www.agency09.in/work/case-studies/designing-a-scalable-content-driven-education-website-for-eduedge-global"
        /> 
        <meta 
          name="twitter:description" 
          content="A content-rich, scalable education website for EduEdge Global built for clarity, performance, and future growth." 
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
                Designing a Scalable, Content-Driven Education Website for EduEdge Global
              </h1>
            </div>

            <div className='cSsecMinInfo m0'>
              <img src={logo} loading='lazy' alt='EduEdge Global'/>
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
                  EduEdge Global is an education consultancy offering multiple study-abroad programs, courses, 
                  and enterprise-level offerings. The objective of this project was to design and develop a 
                  content-rich website that presents a large volume of academic information clearly and effectively.
                </p>
                <p>
                  The platform needed to support 100+ pages, multiple course types, and varied program structures 
                  while remaining easy to navigate, visually consistent, and user-friendly across devices.
                </p>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Industry</h4>
                <p>Education & Study Abroad Consulting</p>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Services</h4>
                <ul>
                  <li>Website Design</li>
                  <li>Web Development</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Objective</h4>
                <ul>
                  <li>Redesign the website to handle large volumes of content with a clean structure.</li>
                  <li>Improve readability of copy-heavy and syllabus-focused pages.</li>
                  <li>Ensure consistent navigation and design across courses and programs.</li>
                  <li>Enhance website performance and usability across devices and browsers.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Challenges</h4>
                <ul>
                  <li>Large volumes of text-heavy academic content reduced scannability.</li>
                  <li>Long syllabus pages felt overwhelming for users.</li>
                  <li>Inconsistent branding across different courses and plans.</li>
                  <li>Managing and tracking content across 100+ pages was complex.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Approach</h4>
                <ul>
                  <li>Designed structured user journeys ensuring content discoverability within 3 clicks.</li>
                  <li>Re-structured long-form content using tabs, dropdowns, and modular layouts.</li>
                  <li>Created clear hierarchy and spacing for syllabus-heavy pages.</li>
                  <li>Maintained consistency while introducing subtle visual variations.</li>
                  <li>Handled complex frontend interactions such as sliders within tabs.</li>
                  <li>Resolved browser compatibility issues and unified navigation.</li>
                  <li>Optimised performance through testing and refinement.</li>
                  <li>Managed structured content across 100+ pages with consistency.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Results</h4>
                <ul>
                  <li>Improved readability and usability across academic pages.</li>
                  <li>Easier exploration of courses and syllabi without user overwhelm.</li>
                  <li>Consistent design and navigation across 100+ pages.</li>
                  <li>Scalable website structure supporting future course additions.</li>
                  <li>Indexed pages increased from 12 to 48.</li>
                  <li>Page load time improved from 2.19s to 1.96s.</li>
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
                <img src={ourwork1} loading='lazy' alt='EduEdge Global Website'/>
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

export default DesigningAScalableContentDrivenEducationWebsiteForEduEdgeGlobal
