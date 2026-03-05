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

import logo from "../../../../Assets/Images/logos/work/agency09.png"
import ourwork1 from '../../../../Assets/Images/work/orm-portal/orm-portal-main-thumbnail.webp';
import ourwork2 from '../../../../Assets/Images/work/orm-portal/orm-portal-main.webp';
import ourwork3 from '../../../../Assets/Images/work/orm-portal/1.webp';
import ourwork4 from '../../../../Assets/Images/work/orm-portal/2.webp';
import ourwork5 from '../../../../Assets/Images/work/orm-portal/3.webp';
import ourwork6 from '../../../../Assets/Images/work/orm-portal/4.webp';
import ourwork7 from '../../../../Assets/Images/work/orm-portal/5.webp';

import CaseStudyNav from '../../../../Components/TechCaseStudyNav';
const externalLink = "https://a09.in/orm/public/login";

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
                  <title>Centralized ORM Portal: From Manual Tracking to Real-Time Intelligence</title>
                  <link rel="canonical" href="https://www.agency09.in/about"/>
                  <meta name="robots" content="index, follow"/> 
            
                  <meta name="description" content="Discover how AGENCY09 crafted a visually captivating website for Siyaram's, elevating men's fashion with seamless design and innovation. Explore now!"/>
                  <meta property="og:title" content="Siyaram’s Website Revamp | Men’s Fashion Case Study"/> 
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
                    <h1 className='sizeH4'> Centralized ORM Portal: From Manual Tracking to Real-Time Intelligence</h1>
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
                        <p>To streamline and centralize online reputation management operations, we designed and developed a comprehensive ORM Portal capable of managing, tracking, and resolving large volumes of customer queries across multiple platforms. The system was built to improve response efficiency, ensure SLA adherence, and provide real-time visibility through structured dashboards and automated TAT calculations.</p>
                    </div>
<div className="cSsecMinBCol">
    <h4>Industry</h4>
    <p>Customer Experience & Support Operations</p>
</div>
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Online Reputation Management (ORM)</li>
                            <li>Web Application Development</li>
                            <li>Dashboard & Analytics Implementation</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                    <h4>Objective</h4>
                    <ul>
                        <li>Centralize multi-platform customer queries into a single system.</li>
                        <li>Automate TAT calculations for acknowledgement and resolution.</li>
                        <li>Improve SLA compliance and escalation tracking.</li>
                        <li>Provide real-time KPI visibility for Admin, Managers, Employees and Clients.</li>
                        <li>Ensure ease of use for daily operational teams.</li>
                    </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Managing excessive data fields without compromising usability.</li>
                            <li>Handling complex TAT calculations across L1, L2, and L3 escalation levels.</li>
                            <li>Dealing with incomplete or inconsistent customer-provided data.</li>
                            <li>Designing dashboards to present large datasets clearly and logically.</li>
                            <li>Maintaining system performance while scaling query volume.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Optimized and structured input forms with smart field prioritization.</li>
                            <li>Implemented automated TAT engines for accurate time tracking.</li>
                            <li>Added validation logic and structured tagging to reduce data inconsistencies.</li>
                            <li>Built role-based access with Dashboard, filters and KPI views.</li>
                            <li>Focused on intuitive UI/UX to minimize training dependency.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Successfully managed and resolved 2000+ customer queries.</li>
                            <li>Reduced manual reporting efforts by 70% through automated dashboards.</li>
                            <li>Improved SLA compliance to 90%+ with automated TAT tracking.</li>
                            <li>Achieved 40% faster acknowledgement times and improved resolution efficiency.</li>
                            <li>Eliminated spreadsheet-based tracking with a fully centralized ORM system.</li>
                            <li>Improved SLA adherence through automated tracking.</li>
                            <li>Reduced manual reporting efforts with real-time dashboards.</li>
                            <li>Increased visibility into escalation trends and employee productivity.</li>
                            <li>Established a scalable and performance-driven ORM management system.</li>
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

                <div className ='imgCol1 imgCol'>
                    <span><img src={ourwork6} loading='lazy' /></span>
                </div>
                <div className ='imgCol1 imgCol'>
                    <span><img src={ourwork7} loading='lazy' /></span>
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
