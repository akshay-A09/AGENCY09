import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../../Components/Header';
import Footer from '../../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";

import logo from "../../../../Assets/Images/logos/work/Adleo.png"
import ourwork1 from '../../../../Assets/Images/case-study/AdLeo/AdLeo.jpg'
import ourwork2 from '../../../../Assets/Images/case-study/AdLeo/group1.jpg'
import ourwork3 from '../../../../Assets/Images/case-study/AdLeo/group2.jpg'
import ourwork4 from '../../../../Assets/Images/case-study/AdLeo/group3.jpg'
import ourwork5 from '../../../../Assets/Images/case-study/AdLeo/group4.jpg'
import CaseStudyNav from '../../../../Components/TechCaseStudyNav';
const externalLink = "https://www.adleo.co.in/";
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
                  To strengthen Adleo’s online presence and clearly communicate its wide range of branding and marketing services, we designed and developed a modern, interactive marketing website. The website was created to reflect Adleo’s creative capabilities, improve brand visibility, and provide a smooth experience for users exploring services or submitting enquiries.
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
                  <li>To create a strong digital identity that represents Adleo as a full-service branding and marketing agency.</li>
                  <li>To clearly showcase all services in a structured and easy-to-understand manner.</li>
                  <li>To engage visitors through modern design and smooth animations.</li>
                  <li>To enable efficient lead generation through integrated enquiry forms.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Challenges</h4>
                <ul>
                  <li>The existing website did not reflect Adleo’s current brand positioning and felt outdated for a modern branding agency.</li>
                  <li>Services were not clearly presented, making it difficult for visitors to quickly understand the full scope of offerings.</li>
                  <li>The website lacked engagement and did not encourage users to explore beyond the first page.</li>
                  <li>The website performance and loading speed needed improvement to meet modern user expectations.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Approach</h4>
                <ul>
                  <li>Redesigned the website with a mobile-first modern look and clear structure that aligns with brand and market positioning.</li>
                  <li>Organised services through a well-planned sitemap, making it easier for users to discover and understand each offering.</li>
                  <li>Introduced smooth, purposeful animations to increase engagement without affecting usability or speed.</li>
                  <li>Optimised performance and conducted thorough testing to ensure fast load times and a smooth experience across devices.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Results</h4>
                <ul>
                  <li>Users spent more time exploring Adleo’s services, with average session duration improving from a few seconds to over 3 minutes and engagement reaching 56%.</li>
                  <li>Improved Indexed pages increasing from 8 to 15.</li>
                  <li>Faster page performance, with page load time improving from 8.9 seconds to under 3 seconds, delivering a smoother browsing experience.</li>
                  <li>A stronger digital presence that supports lead generation and positions Adleo as a credible, modern branding and marketing agency.</li>
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


    <div className='btnSpaceEx center'><a href={externalLink} target="_blank" rel="noreferrer" className="btnDark fontM ripple-button"><span>Visit Site</span></a></div>
    <CaseStudyNav visitLink={externalLink} />

      <Footer/>
    </>
  )
}

export default HighPerformanceMarketingWebsiteForAdleo
