import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../../Components/Header';
import Footer from '../../../../Components/Footer';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../../Hooks/SVGCurveLine'; 
// import { GoNorthStar } from "react-icons/go";
// import { PiSlideshow, PiStarFourFill } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import logo from "../../../../Assets/Images/logos/work/real-estate/credai-mchi.png"
import ourwork1 from '../../../../Assets/Images/work/ryan-group/ryangroup-main.webp';
import CaseStudyNav from '../../../../Components/PerformanceMarketingCaseStudyNav';


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
    slidesToScroll:1,
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
  ];
//CaseStudy Data End

const DrivingRecordBreakingLeadGenerationfortheBiggestPropertyExpooftheYearbyCredaiMchi = () => {


  return (
    <>
    <Helmet>
<title>Driving Record-Breaking Lead Generation for the Biggest Property Expo of the Year by CREDAI MCHI</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="CREDAI MCHI, the apex body representing real estate developers in the Mumbai Metropolitan Region, partnered with AGENCY09 to fuel lead generation for their flagship property expo.  "/>
<meta property="og:title" content="Driving Record-Breaking Lead Generation for the Biggest Property Expo of the Year by CREDAI MCHI"/> 
<meta property="og:description" content="CREDAI MCHI, the apex body representing real estate developers in the Mumbai Metropolitan Region, partnered with AGENCY09 to fuel lead generation for their flagship property expo. "/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/about"/> 
<meta name="twitter:description" content="CREDAI MCHI, the apex body representing real estate developers in the Mumbai Metropolitan Region, partnered with AGENCY09 to fuel lead generation for their flagship property expo. "/> 
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
                    <h1 className='sizeH4'>Driving Record-Breaking Lead Generation for the Biggest Property Expo of the Year by CREDAI MCHI</h1>
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
                        <p>CREDAI MCHI, the apex body representing real estate developers in the Mumbai Metropolitan Region, partnered with AGENCY09 to fuel lead generation for their flagship property expo. The goal was to connect homebuyers with top real estate brands through highly targeted digital campaigns.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Real Estate</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Performance Marketing</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2023–2024</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Generate maximum leads via Meta and Google through dedicated lead generation ad campaigns.</li>
                            
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Reaching diverse buyer personas across digital platforms</li>
                            <li>Generating high-volume leads while maintaining a low cost per lead</li>
                            <li>Tracking and optimizing campaign performance in real time</li>
                        </ul>
                    </div>



                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Identified the most relevant platforms and crafted a focused media plan</li>
                            <li>Set clear budgets, campaign timelines, and defined audience segments</li>
                            <li>Launched and closely monitored the performance of each campaign</li>
                            <li>Implemented continuous analysis and optimization strategies</li>
                            <li>Leveraged remarketing to re-engage potential homebuyers</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <p>Facebook Campaign:</p>
                        <ul>
                            <li><b>918:</b> Leads</li>
                            <li><b>10,547:</b> Clicks</li>
                            <li><b>₹51:</b> CPM</li>
                            <li><b>₹326:</b> CPL</li>
                            <li><b>5.9M:</b> Impressions</li>
                            <li><b>₹28:</b> CPC</li>
                            <li><b>2.2%:</b> CTR</li>
                        </ul> 


                        <p>Google Campaign:</p>
                        <ul>
                            <li><b>918:</b> Leads</li>
                            <li><b>10,547:</b> Clicks</li>
                            <li><b>₹51:</b> CPM</li>
                            <li><b>₹326:</b> CPL</li>
                            <li><b>5.9M:</b> Impressions</li>
                            <li><b>₹28:</b> CPC</li>
                            <li><b>2.2%:</b> CTR</li>
                        </ul> 
                    </div>

                </div>

            </div>


            {/* <div className='cSsecMinC'>

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork1} /></span>
                </div>

            </div>


            <div className='mainslider'>
                <Slider {...mainSlider} className='clientelSlider slick-slider'>
                <div className='imgCol1 imgCol'>
                                <span><img src={ourwork2} /></span>
                            </div>

                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork3} /></span>
                            </div>


                </Slider>
            </div> */}




        </div>
    </section>



<CaseStudyNav/>


    <Footer/>
    </>
  )
}

export default DrivingRecordBreakingLeadGenerationfortheBiggestPropertyExpooftheYearbyCredaiMchi
