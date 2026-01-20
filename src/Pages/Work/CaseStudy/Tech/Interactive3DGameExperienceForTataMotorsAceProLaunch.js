import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../../Components/Header';
import Footer from '../../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";

import logo from "../../../../Assets/Images/logos/work/tataMotors2.png"
import ourwork1 from '../../../../Assets/Images/work/tata-trucks/tata-main.webp';
import ourwork2 from '../../../../Assets/Images/work/tata-trucks/tata-slide1.webp';
import ourwork3 from '../../../../Assets/Images/work/tata-trucks/tata-slide2.webp';
import ourwork4 from '../../../../Assets/Images/work/tata-trucks/tata-slide3.webp';
import ourwork5 from '../../../../Assets/Images/work/tata-trucks/tata-slide4.webp';

import CaseStudyNav from '../../../../Components/TechCaseStudyNav';
const externalLink = "#";
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

const Interactive3DGameExperienceForTataMotorsAceProLaunch = () => {
  return (
    <>
      <Helmet>
        <title>Interactive 3D Game Experience for Tata Motors’ Ace Pro Launch</title>
        <link 
          rel="canonical" 
          href="https://www.agency09.in/work/case-studies/interactive-3d-game-experience-for-tata-motors-ace-pro-launch"
        />
        <meta name="robots" content="index, follow"/> 

        <meta 
          name="description" 
          content="An immersive Unity-based 3D game experience for Tata Motors Ace Pro launch, showcasing TCO benefits across multiple vehicle variants by AGENCY09." 
        />

        <meta 
          property="og:title" 
          content="Interactive 3D Game Experience for Tata Motors’ Ace Pro Launch"
        /> 
        <meta 
          property="og:description" 
          content="A high-performance 3D experiential marketing game built to communicate Ace Pro’s TCO benefits across Electric, Petrol, and Bi-Fuel variants." 
        /> 
        <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
        <meta property="og:type" content="website"/> 

        <meta name="twitter:card" content="summary"/> 
        <meta name="twitter:site" content="@AGENCY09"/> 
        <meta name="twitter:creator" content="@AGENCY09"/> 
        <meta 
          name="twitter:url" 
          content="https://www.agency09.in/work/case-studies/interactive-3d-game-experience-for-tata-motors-ace-pro-launch"
        /> 
        <meta 
          name="twitter:description" 
          content="Unity-powered 3D game experience for Tata Motors Ace Pro, designed for offline activations and immersive engagement." 
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
                Interactive 3D Game Experience for Tata Motors’ Ace Pro Launch
              </h1>
            </div>

            <div className='cSsecMinInfo m0'>
              <img src={logo} loading='lazy' alt='Tata Motors Ace Pro'/>
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
                  For the launch of the Ace Pro range, Tata Motors Small Commercial Vehicles (SCV) moved beyond 
                  static displays to create an engaging way to communicate Total Cost of Ownership (TCO) benefits 
                  across Electric, Petrol, and Bi-Fuel variants.
                </p>
                <p>
                  The objective was to simplify complex product advantages and present them through real-world 
                  application scenarios, enabling on-ground audiences to understand value through interaction.
                </p>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Industry</h4>
                <p>Automotive & Commercial Vehicles</p>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Services</h4>
                <ul>
                  <li>Experiential Marketing Technology</li>
                  <li>Unity 3D Game Development</li>
                  <li>3D Visualization</li>
                  <li>Simulation Design</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Objective</h4>
                <ul>
                  <li>Present TCO benefits in an interactive, easy-to-understand format.</li>
                  <li>Showcase vehicle performance across real-world applications.</li>
                  <li>Highlight Electric, Petrol, and Bi-Fuel variants in one experience.</li>
                  <li>Ensure smooth gameplay on tablets at events and dealerships.</li>
                  <li>Capture user data through in-game registration.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Challenges</h4>
                <ul>
                  <li>Simplifying complex TCO comparisons across multiple fuel variants.</li>
                  <li>Creating multiple environments without increasing app size.</li>
                  <li>Balancing realistic truck physics with simple controls.</li>
                  <li>Maintaining stable performance on mid-range devices.</li>
                  <li>Ensuring offline functionality with reliable data capture.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Approach</h4>
                <ul>
                  <li>Developed a Unity-based 3D game with farm, city, and industrial environments.</li>
                  <li>Built realistic vehicle models with smooth handling and controls.</li>
                  <li>Optimised assets, physics, and rendering for tablet performance.</li>
                  <li>Used modular environments to reduce app size.</li>
                  <li>Integrated Tata Motors branding throughout the game world.</li>
                  <li>Added offline registration and leaderboard functionality.</li>
                </ul>
              </div>

              <div className='cSsecMinBCol'>
                <h4>Results</h4>
                <ul>
                  <li>Highly engaging 3D experience communicating TCO benefits clearly.</li>
                  <li>Improved audience engagement at events and dealerships.</li>
                  <li>Consistent performance across offline tablet deployments.</li>
                  <li>Strong visibility of Tata Motors branding and variants.</li>
                  <li>Successful user data capture supporting follow-up marketing.</li>
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
                <img src={ourwork1} loading='lazy' alt='Tata Motors Ace Pro 3D Game'/>
              </span>
            </div>
          </div>

          <div className='mainslider'>
            <Slider {...mainSlider} className='clientelSlider slick-slider'>
              <div className='imgCol1 imgCol'><span><img src={ourwork2} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork3} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork4} loading='lazy' /></span></div>
              <div className='imgCol1 imgCol'><span><img src={ourwork5} loading='lazy' /></span></div>
            </Slider>
          </div>

        </div>
      </section>

    {/* <div className='btnSpaceEx center'><a href={externalLink} target="_blank" rel="noreferrer" className="btnDark fontM ripple-button"><span>Visit Site</span></a></div>
<CaseStudyNav visitLink={externalLink} /> */}


      <Footer/>
    </>
  )
}

export default Interactive3DGameExperienceForTataMotorsAceProLaunch
