import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../../Components/Header';
import Footer from '../../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../../Hooks/SVGCurveLine'; 
import { GoNorthStar } from "react-icons/go";
import { PiSlideshow, PiStarFourFill } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";

import logo from "../../../../Assets/Images/logos/bodhi-tree.jpg"
import ourwork1 from '../../../../Assets/Images/work/bodhiTree/bodhiTree_thumbnail.webp';
import ourwork2 from '../../../../Assets/Images/work/bodhiTree/1.webp';
import ourwork3 from '../../../../Assets/Images/work/bodhiTree/2.webp';
import ourwork4 from '../../../../Assets/Images/work/bodhiTree/3.webp';
import ourwork5 from '../../../../Assets/Images/work/bodhiTree/4.webp';
import CaseStudyNav from '../../../../Components/TechCaseStudyNav';
const externalLink = "https://www.bodhitreesystems.com/";
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

// Slider

//CaseStudy Data
const CaseStudyData = [
    {
        link: '#',
        image: ourwork1,
        titale: 'Brand led site for a Banking Solutions Firm',
        tags: [{ name: 'BFSI' },],
    },  
    {
        link: '#',
        image: ourwork2,
        titale: 'A dynamic website for India’s biggest truck company',
        tags: [
            { name: 'Automobile' },
        ],
    },  
    {
        link: '#',
        image: ourwork3,
        titale: 'Revamped Website for one of the India’s biggest institution',
        tags: [{ name: 'Education' },],

    },
  ];
//CaseStudy Data End

const BodhiTreeSystemsFromStaticFramestoaLivingMotionLedExperience = () => {


  return (
    <>
    <Helmet>
<title>Bodhi Tree Systems: From Static Frames to a Living, Motion-Led Experience | Case Study</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content=""/>
<meta property="og:title" content="Bodhi Tree Systems: From Static Frames to a Living, Motion-Led Experience | Case Study"/> 
<meta property="og:description" content=""/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/about"/> 
<meta name="twitter:description" content=" "/> 
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
                    <h1 className='sizeH4'>Bodhi Tree Systems: From Static Frames to a Living, Motion-Led Experience</h1>
                </div>

                <div className='cSsecMinInfo m0'>
                    <img src={logo} loading='lazy'  />
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
                        <p>We engineered and brought to life the digital home for Bodhi Tree Systems. An investor-operator platform that backs a select few high-quality consumer businesses and builds them into category leaders. The mandate matched the firm's own standard: a web experience as considered and enduring as the companies it backs. Built mobile-first in NextJS and deployed on AWS, the site fuses deliberate, intentional motion with obsessive craft so that every scroll, transition, and micro-interaction reinforces the brand's guiding idea: poise before motion, clarity before action.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Investment | BFSI</p>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Services</h4>
                       <ul>
                        <li>Web Application Development (NextJS)</li>
                        <li>Motion & Interaction Engineering (GSAP)</li>
                        <li>Cloud Deployment & Hosting (AWS)</li>
                        <li>Quality Assurance & SEO Hygiene</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Objectives</h4>
                       <ul>
                        <li>Deliver a premium, brand-accurate web presence that signals institutional credibility.</li>
                        <li>Treat motion as a feature, not decoration every movement intentional and purposeful.</li>
                        <li>Build mobile-first for a global audience of investors, founders, and operators.</li>
                        <li>Achieve fast load times and a flawless, distraction-free reading experience.</li>
                        <li>Secure day-one discoverability with clean, hygiene SEO across search engines.</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Challenges</h4>
                       <ul>
                        <li>Rendering a considered, minimal design pixel-perfect across every breakpoint and device.</li>
                        <li>Keeping rich, GSAP-driven motion buttery-smooth on mobile without sacrificing load speed.</li>
                        <li>Balancing expressive animation against strict performance and Core Web Vitals discipline.</li>
                        <li>Holding an exacting QC bar down to widow words, spacing, logic, and micro-timing.</li>
                        <li>Preserving a light, fast footprint despite a motion-rich, animation-heavy experience.</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Approach</h4>
                       <ul>
                        <li>Built mobile-first, treating the smallest screen and smallest detail as first-class.</li>
                        <li>Made every movement intentional, motion tuned to guide the eye, never to distract.</li>
                        <li>Engineered in NextJS and deployed on AWS for a fast, reliable, scalable foundation.</li>
                        <li>Ran layered, end-to-end QC across UI, functionality, logic, copy, and interaction.</li>
                        <li>Put hygiene SEO and meta structure in place to secure search-engine presence.</li>
                        <li>Optimised assets and requests to keep the experience lean and quick to load.</li>
                       </ul>
                    </div>

                     <div className='cSsecMinBCol'>
                       <h4>Results</h4>
                       <ul>
                        <li>Perfect <strong>100</strong> scores for Best Practices and SEO across both mobile and desktop.</li>
                        <li>Accessibility of <strong>96</strong> on desktop and <strong>92</strong> on mobile: comfortably above the norm.</li>
                        <li>Elite Core Web Vitals: First Contentful Paint at <strong>0.3s</strong>, Largest Contentful Paint at <strong>0.7s</strong>.</li>
                        <li>Full-page load in <strong>1.57s</strong> at just <strong>551.4 KB</strong> over <strong>18</strong> requests, a Pingdom grade of <strong>90</strong>.</li>
                        <li>A mobile-first experience with smooth, intentional motion and zero visual compromise.</li>
                        <li>Clean SEO hygiene, ensuring the site is indexed and discoverable across search engines.</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Year</h4>
                       <p>2026</p>
                    </div>

                </div>

            </div>


            <div className='cSsecMinC'>
                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork1} loading='lazy' /></span>
                </div>
            </div>


<div className='mainslider'>
    <Slider {...mainSlider} className='clientelSlider slick-slider'>
                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork2} loading='lazy' /></span>
                </div>

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork3} loading='lazy' /></span>
                </div>

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork4} loading='lazy' /></span>
                </div>

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork5} loading='lazy' /></span>
                </div>

    </Slider>
</div>

<div className='btnSpaceEx center'>
 <a href={externalLink} target="_blank" rel="noreferrer" className="btnDark fontM ripple-button"><span>Visit Site</span></a>
</div>

        </div>
    </section>

{/* 
    <div className='container'>
    <div className='strokeB'>
              <SVGCurveLine />
    </div>
    </div>

    
    <section className='solutionsSecCaseStudy'>
            <div className='container'>

            <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                    Related Work
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                </h2>
            </div>


            <div className='solutionsSecCaseStudyList'>

                <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider'>
                    {CaseStudyData.map((CaseStudy, index) => (
                        <div key={index} className='item'>
                        <div className='CaseStudyCol'>
                            <Link to={CaseStudy.link}>
                                <div className='CaseStudyImg'><img src={CaseStudy.image}/></div>
                                <div className='CaseStudyTitale'>{CaseStudy.titale}</div>
                                <div className='textTag'><p>{CaseStudy.tag}
                                
                                {CaseStudy.tags.map((tag, index) => (
                                  <span key={index}>{tag.name}</span>
                                ))}
                                
                                </p></div>
                            </Link>
                        </div>
                        </div>
                    ))}
                </Slider>

            <div className='btnSpaceEx center'>     
                <Link to="/work/case-studies" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>   */}



    <CaseStudyNav visitLink={externalLink} />


    <Footer/>
     </> 
  )
}

export default BodhiTreeSystemsFromStaticFramestoaLivingMotionLedExperience
