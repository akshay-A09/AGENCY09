import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../../Components/Header';
import Footer from '../../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";
import logo from "../../../../Assets/Images/logos/work/PME.png"
import CaseStudyNav from '../../../../Components/KeywordCaseStudyNav';

import ourwork1 from '../../../../Assets/Images/work/pme_dubai/thumbnail.webp';




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


const PMEDubaiDigitalGrowthCaseStudySEOTrafficLeadGenerationSuccess = () => {
  return (
    <>
    <Helmet>
<title>PME Dubai Digital Growth Case Study: SEO, Traffic & Lead Generation Success</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/reaviva-holistic-health-seo-growth"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="PME Dubai, a leading machinery distributor, expanded its inventory in quality and scale while diversifying across sectors."/>
<meta property="og:title" content="PME Dubai Digital Growth Case Study: SEO, Traffic & Lead Generation Success"/> 
<meta property="og:description" content="PME Dubai, a leading machinery distributor, expanded its inventory in quality and scale while diversifying across sectors."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/reaviva-holistic-health-seo-growth"/> 
<meta name="twitter:description" content="PME Dubai, a leading machinery distributor, expanded its inventory in quality and scale while diversifying across sectors."/> 
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
                    <h1 className='sizeH4'>PME Dubai Digital Growth Case Study: SEO, Traffic & Lead Generation Success</h1>
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
                        <p>PME Dubai, a leading machinery distributor, expanded its inventory in quality and scale while diversifying across sectors. This strategic growth enabled a vast portfolio of new and reconditioned plant equipment, positioning it among Dubai’s top construction machinery suppliers.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Construction Machinery & Equipment</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p>Digital Marketing, SEO, Website Launch</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2022</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Increase organic visibility in the heavy machinery market</li>
                            <li>Reduce dependency on direct traffic</li>
                            <li>Improve overall website engagement</li>
                            <li>Strengthen returning user base</li>
                            <li>Build a scalable digital growth foundation</li>

                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Low organic visibility in a competitive industry</li>
                            <li>Heavy reliance on direct traffic</li>
                            <li>Low engagement from social channels</li>
                            <li>Limited returning visitors</li>
                            <li>Short average session duration</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>+440%</b> Growth in Organic Traffic</li>
                            <li><b>+ 225%</b> Growth in Mobile Traffic</li>
                            <li>Stronger Returning User Growth & Improved Brand Authority</li>
                            <li>Generated 25000+ qualified leads overall.</li>
                        </ul>
                    </div>

                </div>

            </div>

            <div className='cSsecMinC'>
            
                            <div className='imgCol1 imgCol'>
                                <span><img src={ourwork1} loading='lazy' /></span>
                            </div>
                        </div>

        </div>
    </section>
<CaseStudyNav/>

    <Footer/>
    </>
  )
}

export default PMEDubaiDigitalGrowthCaseStudySEOTrafficLeadGenerationSuccess
