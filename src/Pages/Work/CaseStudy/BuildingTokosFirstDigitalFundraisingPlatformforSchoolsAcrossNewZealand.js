import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { GoNorthStar } from "react-icons/go";
import { PiSlideshow, PiStarFourFill } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import starY from '../../../Assets/Images/icons/star.webp';

import logo from "../../../Assets/Images/logos/work/Toko.png"
import ourwork1 from '../../../Assets/Images/case-study/Toko/toko.jpg';
import ourwork2 from '../../../Assets/Images/case-study/Toko/group1.jpg';
import ourwork3 from '../../../Assets/Images/case-study/Toko/group2.jpg';
import ourwork4 from '../../../Assets/Images/case-study/Toko/group3.jpg';
import ourwork5 from '../../../Assets/Images/case-study/Toko/group4.jpg';



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

const BuildingTokosFirstDigitalFundraisingPlatformforSchoolsAcrossNewZealand = () => {


  return (
    <>
    <Helmet>
<title>Building Toko’s First Digital Fundraising Platform for Schools Across New Zealand | Case Study</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content=""/>
<meta property="og:title" content="Building Toko’s First Digital Fundraising Platform for Schools Across New Zealand | Case Study"/> 
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
                    <h1 className='sizeH4'>Building Toko’s First Digital Fundraising Platform for Schools Across New Zealand</h1>
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
                        <p>Toko is a New Zealand–based digital platform built to help schools run online fundraising campaigns through auctions, raffles, and direct donations. Prior to this engagement, Toko did not have a website, making it challenging to communicate its value proposition, onboard schools, and establish trust with parents and communities.</p>
                        <p>The objective was to create Toko’s first-ever digital presence—a clear, scalable, and user-friendly platform that supports schools nationwide.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Education | School Fundraising | Non-Profit Platforms</p>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Services</h4>
                       <ul>
                        <li>Website Strategy & Information Architecture</li>
                        <li>UX/UI Design (Mobile-First)</li>
                        <li>Web Application</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Challenges</h4>
                       <ul>
                        <li>No existing website or digital footprint</li>
                        <li>Needed to clearly explain a new fundraising concept to schools</li>
                        <li>Required a platform that builds trust, transparency, and ease of use</li>
                        <li>Multiple user types (schools, parents, donors) with different information needs</li>
                        <li>Strong emphasis on accessibility and mobile usage</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Approach</h4>
                       <ul>
                        <li>Designed a mobile-first, intuitive website from the ground up</li>
                        <li>Defined a clear information hierarchy to explain how Toko works in simple steps</li>
                        <li>Created audience-specific content for schools, families, and supporters</li>
                        <li>Focused on clarity, trust signals, and ease of navigation</li>
                        <li>Built a scalable structure to support future growth and feature additions</li>
                        <li>Optimised for performance, SEO, and accessibility best practices</li>
                       </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                       <h4>Results</h4>
                       <ul>
                        <li>Strong engagement from first-time users, validating clarity of messaging and UX</li>
                        <li>Average session duration exceeding 3 minutes, indicating users are exploring and understanding the platform</li>
                        <li>More than 4 pages viewed per visit, reflecting intuitive navigation and well-structured content</li>
                        <li>Low bounce rate, showing relevance of content and effective audience targeting</li>
                        <li>Together, these outcomes confirm that the newly launched website successfully established Toko’s digital presence, improved trust, and enabled schools to confidently adopt online fundraising.</li>
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

export default BuildingTokosFirstDigitalFundraisingPlatformforSchoolsAcrossNewZealand
