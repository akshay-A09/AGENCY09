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

import logo from "../../../../Assets/Images/logos/work/energy/mahindra-solarize.png"
import ourwork1 from '../../../../Assets/Images/work/ryan-group/ryangroup-main.webp';


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

const DrivingWebsiteTrafficandGeneratingHighQualityLeadsforMahindraSolarize = () => {


  return (
    <>
    <Helmet>
<title>Driving Website Traffic and Generating High-Quality Leads for Mahindra Solarize - AGENCY09 Case Study</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Mahindra Solarize, a leader in the solar energy space, partnered with AGENCY09 to amplify their online visibility and drive lead generation. "/>
<meta property="og:title" content="Driving Website Traffic and Generating High-Quality Leads for Mahindra Solarize - AGENCY09 Case Study"/> 
<meta property="og:description" content="Mahindra Solarize, a leader in the solar energy space, partnered with AGENCY09 to amplify their online visibility and drive lead generation."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/about"/> 
<meta name="twitter:description" content="Mahindra Solarize, a leader in the solar energy space, partnered with AGENCY09 to amplify their online visibility and drive lead generation. "/> 
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
                    <h1 className='sizeH4'>Driving Website Traffic and Generating High-Quality Leads for Mahindra Solarize
                    </h1>
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
                        <p>Mahindra Solarize, a leader in the solar energy space, partnered with AGENCY09 to amplify their online visibility and drive lead generation. With a focus on clean energy, the brand aimed to reach environmentally conscious businesses and individuals through strategic digital campaigns. </p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Power supply</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Search Engine Marketing, Social Media Marketing</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2021</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Drive maximum traffic to the website</li>
                            <li>Generate qualified leads via search engines, Facebook, and LinkedIn</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Identifying the right audience segment across platforms</li>
                            <li>Balancing quality lead generation with cost-effectiveness</li>
                            <li>Standing out in a competitive digital landscape</li>
                        </ul>
                    </div>



                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Selected the most effective platforms and created a tailored media plan</li>
                            <li>Defined budget, campaign duration, and audience targeting </li>
                            <li>Launched the campaign with continuous performance tracking</li>
                            <li>Conducted in-depth analysis and real-time optimizations</li>
                            <li>Implemented remarketing strategies to re-engage potential leads</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>₹116:</b>Average Cost Per Lead</li>
                            <li><b>1.1M:</b>Total Impressions</li>
                            <li><b>27K+:</b>Website Visits</li>
                            <li><b>1700+:</b>Total Leads</li>
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





    <Footer/>
    </>
  )
}

export default DrivingWebsiteTrafficandGeneratingHighQualityLeadsforMahindraSolarize
