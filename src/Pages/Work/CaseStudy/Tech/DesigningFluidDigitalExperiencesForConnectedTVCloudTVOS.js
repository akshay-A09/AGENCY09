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

import logo from "../../../../Assets/Images/logos/work/cloudtv.jpg"
import ourwork1 from '../../../../Assets/Images/case-study/CloudTV/CloudTV.jpg'
import ourwork2 from '../../../../Assets/Images/case-study/CloudTV/group1.jpg'
import ourwork3 from '../../../../Assets/Images/case-study/CloudTV/group2.jpg'
import ourwork4 from '../../../../Assets/Images/case-study/CloudTV/group3.jpg'
import ourwork5 from '../../../../Assets/Images/case-study/CloudTV/group4.jpg'

import CaseStudyNav from '../../../../Components/TechCaseStudyNav';
const externalLink = "https://www.cloudtvos.com/";


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

const DesigningFluidDigitalExperiencesForConnectedTVCloudTVOS = () => {


      return (
      <>
    
    
        <Helmet>
          <title>Designing Fluid Digital Experiences for Connected TV: CloudTVOS | Top Creative & Digital Marketing Agency in Mumbai, India</title>
          <link rel="canonical" href="https://www.agency09.in/work/case-studies/designing-fluid-digital-experiences-for-connected-tv-cloudtvos"/>
          <meta name="robots" content="index, follow"/> 
    
          <meta name="description" content=""/>
          <meta property="og:title" content="Designing Fluid Digital Experiences for Connected TV: CloudTVOS"/> 
          <meta property="og:description" content=""/> 
          <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
          <meta property="og:type" content="website"/> 
    
    
          <meta name="twitter:card" content="summary"/> 
          <meta name="twitter:site" content="@AGENCY09"/> 
          <meta name="twitter:creator" content="@AGENCY09"/> 
          <meta name="twitter:url" content="https://www.agency09.in/work/case-studies/designing-fluid-digital-experiences-for-connected-tv-cloudtvos"/> 
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
                    <h1 className='sizeH4'>Designing Fluid Digital Experiences for Connected TV: CloudTVOS</h1>
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
                        <p>CloudTVOS is a cutting-edge platform that powers the next generation of connected TV experiences. With a diverse set of audiences  from OEM partners and platform integrators to advertisers and content owners  CloudTVOS required a website that clearly communicates its product capabilities while catering to the unique needs of each audience segment.</p>


                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <ul>
                            <li>Connected TV</li>
                            <li>AdTech</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                           <li>UI/UX</li>
                            <li>Digital Strategy</li>
                            <li>Web Design and Development</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <p>CloudTVOS faced several challenges in redesigning its website:</p>
                        <ul>
                        <li><b>Orthodox and basic</b> in layout and visual language</li>
                        <li><b>Difficult for diverse audiences</b> to navigate meaningfully</li>
                        <li><b>Not optimized for mobile users</b>, despite high mobile traffic</li>
                        <li><b>Limited in storytelling and product positioning</b></li>
                        </ul>

                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Approached the redesign holistically  aligning strategy, creativity, UX, and technical execution to deliver a digital experience that reflects CloudTVOS’s bold vision</li>
                            <li>We structured the site to serve CloudTVOS’s core audiences: OEMs, advertisers, content owners, and platform integrators</li>
                            <li>Clear pathways to product capabilities, integrations, and technical resources</li>
                            <li>Dedicated sections showcasing advertising solutions, monetization potential</li>
                            <li>Optimized navigation and flow for touch interactions</li>
                            <li>Strategic use of whitespace to improve scannability</li>
                            </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>Average session duration exceeding 3 minutes</b> indicates deeper engagement with content across the website.</li>
                            <li><b>Over 4 pages viewed per visit</b> highlights effective information architecture and intuitive navigation.</li>
                            <li><b>Low bounce rate (36.79%)</b> reflects relevant traffic and clear audience targeting.</li>
                            <li>Together, these metrics validate that the <b>redesigned, mobile-first experience is driving meaningful engagement,</b> with users exploring multiple pages and spending more time across <b>audience-specific sections for OEMs and Advertisers.</b></li>
                        </ul>

                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Year</h4>
                        <p>2023</p>
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
        </section>  

 */}


    <div className='btnSpaceEx center'><a href={externalLink} target="_blank" rel="noreferrer" className="btnDark fontM ripple-button"><span>Visit Site</span></a></div>
    <CaseStudyNav visitLink={externalLink} />


    <Footer/>
    </>
  )
}

export default DesigningFluidDigitalExperiencesForConnectedTVCloudTVOS
