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

import logo from "../../../../Assets/Images/logos/work/Detour-oz.png"
import ourwork1 from '../../../../Assets/Images/case-study/Detour/Detours.jpg';
import ourwork2 from '../../../../Assets/Images/case-study/Detour/group1.jpg';
import ourwork3 from '../../../../Assets/Images/case-study/Detour/group2.jpg';
import ourwork4 from '../../../../Assets/Images/case-study/Detour/group3.jpg';
import ourwork5 from '../../../../Assets/Images/case-study/Detour/group4.jpg';



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

const TransformingDetourozintoaConversionDrivenCampervanBookingPlatform = () => {


  return (
    <>
    <Helmet>
<title>Transforming Detouroz into a Conversion-Driven Campervan Booking Platform | Case Study</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content=""/>
<meta property="og:title" content="Transforming Detouroz into a Conversion-Driven Campervan Booking Platform | Case Study"/> 
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
                    <h1 className='sizeH4'>Transforming Detouroz into a Conversion-Driven Campervan Booking Platform</h1>
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
                        <p>Detouroz is a travel specialist offering campervan and motorhome travel solutions across New Zealand and Australia. The previous website was a basic static setup with limited pages and minimal engagement, which did not reflect the brand’s expertise or the complexity of its services.</p>
                        <p>The goal was to transform a static website into an informative, conversion-focused booking system that supports travellers through discovery, comparison, planning, and booking.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Education | School Fundraising | Non-Profit Platforms</p>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Services</h4>
                       <ul>
                        <li>Web Application Development</li>
                        <li>Booking System & Workflow Design</li>
                        <li>UX/UI Strategy & Design</li>
                        <li>Payment Gateway Integration</li>
                        <li>Mobile-First & Responsive Design</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Challenges</h4>
                       <ul>
                        <li>Transforming a static travel website into a scalable, conversion-driven booking platform</li>
                        <li>Designing a seamless end-to-end booking experience for a high-consideration travel product</li>
                        <li>Aggregating inventories from multiple campervan brands into a single platform</li>
                        <li>Integrating multiple third-party APIs (vehicle inventory, availability, pricing, payment gateway)</li>
                        <li>Normalising and standardising vehicle data and SKUs across varied external data sources</li>
                        <li>Enabling real-time availability and pricing while maintaining performance and reliability</li>
                        <li>Presenting vehicles from multiple providers within a unified, intuitive comparison and booking interface</li>
                        <li>Balancing rich travel content with mobile-first performance and usability</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Approach</h4>
                       <ul>
                        <li>Redesigned the website with a user-centric and mobile-first mindset</li>
                        <li>Integrated and orchestrated multiple external APIs to aggregate campervan inventories from different brands</li>
                        <li>Normalised vehicle data to create a consistent SKU structure across the platform</li>
                        <li>Built a scalable system to display availability, pricing, and specifications in real time</li>
                        <li>Restructured content to clearly communicate services, travel options, and value</li>
                        <li>Introduced logical navigation to guide users through planning and inquiry stages</li>
                        <li>Improved visual hierarchy and readability for long-form travel content</li>
                        <li>Implemented vehicle comparison features to aid informed decision-making</li>
                        <li>Integrated end-to-end email notifications across booking stages</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Results</h4>
                       <ul>
                        <li>Average session duration increased beyond 3 minutes, showing improved engagement with travel content</li>
                        <li>More than 4 pages viewed per session, indicating effective content flow and navigation</li>
                        <li>Bounce rate reduced to ~36%, reflecting stronger relevance and user intent alignment</li>
                        <li>Enhanced mobile engagement due to a responsive and simplified design</li>
                        <li>These metrics demonstrate that the redesigned experience successfully moved Detouroz from a basic online presence to a content-rich, high-engagement platform, helping users explore services confidently and spend more time planning their journeys.</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Year</h4>
                       <p>2024</p>
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
        </section>   */}




    <Footer/>
    </>
  )
}

export default TransformingDetourozintoaConversionDrivenCampervanBookingPlatform
