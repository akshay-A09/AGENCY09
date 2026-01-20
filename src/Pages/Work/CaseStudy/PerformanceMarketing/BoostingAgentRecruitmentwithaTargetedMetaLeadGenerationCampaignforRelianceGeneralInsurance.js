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

import logo from "../../../../Assets/Images/logos/work/BFSI/rgi.png"
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

const BoostingAgentRecruitmentwithaTargetedMetaLeadGenerationCampaignforRelianceGeneralInsurance = () => {


  return (
    <>
    <Helmet>
<title>Boosting Agent Recruitment with a Targeted Meta Lead Generation Campaign for Reliance General Insurance</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Mahindra Solarize, a leader in the solar energy space, partnered with AGENCY09 to amplify their online visibility and drive lead generation. "/>
<meta property="og:title" content="Boosting Agent Recruitment with a Targeted Meta Lead Generation Campaign for Reliance General Insurance"/> 
<meta property="og:description" content="RGI, one of India’s leading general insurance providers, collaborated with AGENCY09 to attract and recruit new insurance agents through a focused lead generation campaign on Meta. "/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/about"/> 
<meta name="twitter:description" content="RGI, one of India’s leading general insurance providers, collaborated with AGENCY09 to attract and recruit new insurance agents through a focused lead generation campaign on Meta.  "/> 
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
                    <h1 className='sizeH4'>Boosting Agent Recruitment with a Targeted Meta Lead Generation Campaign for Reliance General Insurance
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
                        <p>RGI, one of India’s leading general insurance providers, collaborated with AGENCY09 to attract and recruit new insurance agents through a focused lead generation campaign on Meta. The campaign aimed to deliver quality leads while optimizing costs and reach.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Insurance</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Performance Marketing</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2024</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Run a Meta Instant Form campaign to generate leads for agent recruitment.</li>
                           
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Building awareness and interest among potential agent recruits</li>
                            <li>Designing user-friendly and effective ad forms</li>
                            <li>Managing and organizing a high volume of lead data</li>
                        </ul>
                    </div>



                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                    <li>Developed a comprehensive media plan tailored for Meta's platforms</li>
                   <li>Crafted targeted ad copy and strategically selected high-performing audience segments</li>
                   <li>Designed and launched structured lead generation campaigns with custom lead forms</li>
                   <li>Maintained a well-organized lead database to support timely and effective follow-ups</li>
                  <li>Monitored performance metrics, continuously optimized campaigns, and implemented remarketing strategies to boost conversions</li>
                  </ul>

                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>1,921 :</b>Leads</li>
                            <li><b>6.2K:</b> Clicks</li>
                            <li><b>698K :</b> Impressions</li>
                            <li><b>0.89%:</b> CTR</li>
                            <li><b>₹25:</b> CPC</li>
                            <li><b>₹80:</b> CPL</li>
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

export default BoostingAgentRecruitmentwithaTargetedMetaLeadGenerationCampaignforRelianceGeneralInsurance
