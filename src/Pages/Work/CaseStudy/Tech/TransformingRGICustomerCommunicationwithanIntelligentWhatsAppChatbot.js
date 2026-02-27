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
import starY from '../../../../Assets/Images/icons/star.webp';

import logo from "../../../../Assets/Images/logos/work/RGI.png"
import ourwork1 from '../../../../Assets/Images/work/RGI-chatbot/rgi-chatbot-main.webp';
import ourwork2 from '../../../../Assets/Images/work/RGI-chatbot/1.webp';
import ourwork3 from '../../../../Assets/Images/work/RGI-chatbot/2.webp';


import CaseStudyNav from '../../../../Components/TechCaseStudyNav';
const externalLink = "";

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

const TataTrucks = () => {


  return (
    <>
                <Helmet>
                  <title>Transforming RGI Customer Communication with an Intelligent WhatsApp Chatbot</title>
                  <link rel="canonical" href="https://www.agency09.in/about"/>
                  <meta name="robots" content="index, follow"/> 
            
                  <meta name="description" content="Discover how AGENCY09 crafted a visually captivating website for Siyaram's, elevating men's fashion with seamless design and innovation. Explore now!"/>
                  <meta property="og:title" content="Transforming RGI Customer Communication with an Intelligent WhatsApp Chatbot"/> 
                  <meta property="og:description" content="Discover how AGENCY09 crafted a visually captivating website for Siyaram's, elevating men's fashion with seamless design and innovation. Explore now!"/> 
                  <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
                  <meta property="og:type" content="website"/> 
            
            
                  <meta name="twitter:card" content="summary"/> 
                  <meta name="twitter:site" content="@AGENCY09"/> 
                  <meta name="twitter:creator" content="@AGENCY09"/> 
                  <meta name="twitter:url" content="https://www.agency09.in/about"/> 
                  <meta name="twitter:description" content=" Discover how AGENCY09 crafted a visually captivating website for Siyaram's, elevating men's fashion with seamless design and innovation. Explore now!"/> 
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
                    <h1 className='sizeH4'>Transforming RGI Customer Communication with an Intelligent WhatsApp Chatbot</h1>
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
                        <p>RGI wanted to modernise customer communication by introducing a scalable, real-time support channel on WhatsApp (+91 89769 78877). Traditional communication channels required manual effort and resulted in slower response times, fragmented customer journeys, and limited engagement tracking.</p>
                        <p>The objective was to deploy an intelligent WhatsApp chatbot capable of handling high-volume conversations, enabling automated responses, supporting marketing broadcasts, and improving the overall customer support experience while maintaining compliance and brand consistency.</p>
                    </div>
<div className="cSsecMinBCol">
    <h4>Industry</h4>
    <p> Insurance | Customer Experience & Conversational Automation</p>
</div>
                    <div className='cSsecMinBCol'>
                        <h4>Year</h4>
                        <p>2024</p>
                    </div>
                   
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>WhatsApp Chatbot Strategy & Architecture</li>
                            <li>Conversational UX & Flow Design</li>
                            <li>WhatsApp Business API Integration</li>
                            <li>Automation & Backend Connectivity</li>
                            <li>Broadcast Enablement & Template Optimisation</li>
                            <li>Analytics, Reporting & Performance Tracking</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                    <h4>Challenge</h4>
                    <ul>
                        <li>Designing a conversational system that handles multiple customer intents without creating friction</li>
                        <li>Reducing dependency on manual responses while maintaining accuracy and structured communication</li>
                        <li>Integrating WhatsApp workflows with internal backend systems and approval processes</li>
                        <li>Managing large broadcast campaigns with clear delivery, read, and interaction tracking</li>
                        <li>Ensuring secure authentication, verified messaging, and consistent brand tone</li>
                        <li>Scaling the system to support increasing user engagement without performance issues</li>
                    </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Our Approach</h4>
                        <ul>
                            <li>Designed a structured conversational architecture with clear user pathways to reduce drop-offs</li>
                            <li>Built automated flows for common queries, guided navigation, and service-related assistance</li>
                            <li>Integrated WhatsApp Business APIs for verified messaging, automation, and broadcast campaigns</li>
                            <li>Connected chatbot workflows with backend systems to enable real-time data retrieval</li>
                            <li>Optimised message templates for higher readability and engagement within WhatsApp UI</li>
                            <li>Configured analytics tracking to measure delivery rates, read rates, and user interactions</li>
                            <li>Implemented fallback logic with smooth human handover to maintain customer satisfaction</li>
                            <li>Performed multi-scenario testing to ensure reliability, compliance, and scalability</li>

                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>70%+ reduction in first-level manual response dependency through automation</li>
                            <li>2.3x increase in customer engagement via WhatsApp compared to traditional channels</li>
                            <li>90%+ message delivery rate achieved across broadcast campaigns</li>
                            <li>65%+ average read rate indicating strong user interaction with automated messages</li>
                            <li>Response time reduced to under 10 seconds for most automated queries</li>
                            <li>Clear visibility into user behaviour with structured analytics on delivery, seen status, and responses</li>
                            <li>Established a scalable conversational infrastructure ready for future marketing campaigns and service automation</li>
                        </ul>
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

    </Slider>
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


<div className='btnSpaceEx center'><a href={externalLink} target="_blank" rel="noreferrer" className="btnDark fontM ripple-button"><span>Visit Site</span></a></div>
<CaseStudyNav visitLink={externalLink} />


    <Footer/>
    </>
  )
}

export default TataTrucks
