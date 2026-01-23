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

import logo from "../../../../Assets/Images/logos/work/BFSI/aditya-birla.png"
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

const StrengtheningAbflsSocialMediaPresencewithaHighImpactFollowerGrowthCampaign = () => {


  return (
    <>
    <Helmet>
<title>Strengthening ABFL’s Social Media Presence with a High-Impact Follower Growth Campaign</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Aditya Birla Finance Limited (ABFL), a leading NBFC in India, partnered with AGENCY09 to amplify its presence across Instagram, LinkedIn, and Facebook. "/>
<meta property="og:title" content="Strengthening ABFL’s Social Media Presence with a High-Impact Follower Growth Campaign"/> 
<meta property="og:description" content="Aditya Birla Finance Limited (ABFL), a leading NBFC in India, partnered with AGENCY09 to amplify its presence across Instagram, LinkedIn, and Facebook. "/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/about"/> 
<meta name="twitter:description" content="Aditya Birla Finance Limited (ABFL), a leading NBFC in India, partnered with AGENCY09 to amplify its presence across Instagram, LinkedIn, and Facebook. "/> 
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
                    <h1 className='sizeH4'>Strengthening ABFL’s Social Media Presence with a High-Impact Follower Growth Campaign</h1>
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
                        <p>Aditya Birla Finance Limited (ABFL), a leading NBFC in India, partnered with AGENCY09 to amplify its presence across Instagram, LinkedIn, and Facebook. The goal was to build an engaged digital community and position ABFL as a trusted name in finance.
                        </p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Finance </p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Followers Campaign on Instagram</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2024</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Achieve 1,000 followers on Instagram</li>
                            <li>Reach 1,500 followers on LinkedIn</li>
                            <li>Garner 3,000 page likes on Facebook</li>
                            <li>Boost overall brand awareness and audience engagement </li>
                           
                           
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Reaching and converting the right audience segments across platforms</li>
                            <li>Balancing cost-efficiency while scaling follower count</li>
                            <li>Ensuring brand relevance across different content formats</li>
                        </ul>
                    </div>



                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                   <li>Conducted in-depth audience analysis and segmentation for each platform</li>
                   <li>Developed a content plan centered on financial literacy and brand storytelling</li>
                  <li>Created platform-specific campaigns optimized for follower acquisition</li>
                  <li>Ran A/B tests to identify top-performing creatives and formats</li>
                   <li>Monitored campaign performance and refined targeting through retargeting and lookalikes</li>
                 </ul>

                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>2.2K:</b> LinkedIn Followers</li>
                            <li><b>₹15 Avg.:</b>  CPF on Instagram & LinkedIn</li>
                            <li><b>₹3 Avg. :</b> CPL on Facebook </li>
                            <li><b>1.5K:</b>  Instagram Followers</li>
                            <li><b>7.3K:</b> Facebook Page Likes</li>

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

export default StrengtheningAbflsSocialMediaPresencewithaHighImpactFollowerGrowthCampaign
