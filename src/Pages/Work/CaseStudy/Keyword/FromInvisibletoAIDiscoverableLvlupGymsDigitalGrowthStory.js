import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../../Components/Header';
import Footer from '../../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";
import logo from "../../../../Assets/Images/logos/work/lvlup.jpeg"
import CaseStudyNav from '../../../../Components/KeywordCaseStudyNav';

import ourwork1 from '../../../../Assets/Images/work/lvlup_gym/thumbnail.webp';
import ourwork2 from '../../../../Assets/Images/work/lvlup_gym/1.webp';
import ourwork3 from '../../../../Assets/Images/work/lvlup_gym/2.webp';
import ourwork4 from '../../../../Assets/Images/work/lvlup_gym/3.webp';
import ourwork5 from '../../../../Assets/Images/work/lvlup_gym/4.webp';
import ourwork6 from '../../../../Assets/Images/work/lvlup_gym/5.webp';



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


const FromInvisibletoAIDiscoverableLvlupGymsDigitalGrowthStory = () => {
  return (
    <>
    <Helmet>
<title>From Invisible to AI-Discoverable: Lvlup Gyms Digital Growth Story</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/reaviva-holistic-health-seo-growth"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Lvlup Gyms provider, aimed to enhance its online presence across UAE. "/>
<meta property="og:title" content="From Invisible to AI-Discoverable: Lvlup Gyms Digital Growth Story"/> 
<meta property="og:description" content="Lvlup Gyms provider, aimed to enhance its online presence across UAE. "/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/reaviva-holistic-health-seo-growth"/> 
<meta name="twitter:description" content="Lvlup Gyms provider, aimed to enhance its online presence across UAE. "/> 
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
                    <h1 className='sizeH4'>Lvlup Gyms</h1>
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
                        <p>Lvlup Gyms provider, aimed to enhance its online presence across UAE.  The focus was on improving website speed, boosting domain authority, increasing organic traffic, and resolving technical issues and server performance to better engage its target audience.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Gyms</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p>Gymnastics, Martial arts, Padel tennis, Wellness yoga, Fitness</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>Jul 2025 - Jan 2026</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Highest Volume Keyword on 1st Page</li>
                            <li>Increase Organic traffic</li>
                            <li>Strengthen presence in India and the UAE</li>
                            <li>Increase keyword ranking with AI platforms</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Low Domain Authority</li>
                            <li>Low Organic Visibility</li>
                            <li>Optimize content and site structure </li>
                            <li>Slow site speed </li>
                            <li>Technical SEO Issues</li>
                            <li>The site lacked optimization for the competitive UAE</li>
                            <li>Incomplete Google Analytics tracking setup</li>
                            <li>Tough Competition in UAE</li>

                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Solution</h4>
                        <ul>
                            <li>We optimized the site for LLM discoverability (AI Search Optimization / AEO):</li>
                            <li>Rewrote core service pages with clear, factual, entity-based content</li>
                            <li>Added structured FAQs and location-based content</li>
                            <li>Published “About,” “Programs,” and “Pricing” pages with consistent facts</li>
                            <li>Built authoritative citations across business listings</li>
                            <li>Added schema (Organization, LocalBusiness, FAQ)</li>
                            <li>Created AI-readable summaries for key pages</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Brand pages became discoverable in AI answers</li>
                            <li>Improved visibility for gym-related queries in LLM responses</li>
                            <li>+34% organic impressions from search</li>
                            <li>Stronger brand recognition across AI tools</li>
                            <li>What We Did (1-liner):</li>
                            <li>Made the website easier for LLMs to understand, trust, and reference.</li>
                            <li><b>70% Decreased:</b> Page Load Time</li>
                            <li><b>200% Increased:</b> Keywords Indexed</li>
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
<CaseStudyNav/>

    <Footer/>
    </>
  )
}

export default FromInvisibletoAIDiscoverableLvlupGymsDigitalGrowthStory
