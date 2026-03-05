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

import logo from "../../../../Assets/Images/logos/work/Natch.png"
import ourwork1 from '../../../../Assets/Images/work/natch/natch-main.webp';
import ourwork2 from '../../../../Assets/Images/work/natch/1.webp';
import ourwork3 from '../../../../Assets/Images/work/natch/2.webp';
import ourwork4 from '../../../../Assets/Images/work/natch/3.webp';
import ourwork5 from '../../../../Assets/Images/work/natch/4.webp';
import ourwork6 from '../../../../Assets/Images/work/natch/5.webp';



import CaseStudyNav from '../../../../Components/TechCaseStudyNav';
const externalLink = "";

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
                  <title>Revamping Natch Snacks’ Website to Drive Conversions and Reduce Purchase Friction</title>
                  <link rel="canonical" href="https://www.agency09.in/about"/>
                  <meta name="robots" content="index, follow"/> 
            
                  <meta name="description" content="Discover how AGENCY09 crafted a visually captivating website for Siyaram's, elevating men's fashion with seamless design and innovation. Explore now!"/>
                  <meta property="og:title" content="Revamping Natch Snacks’ Website to Drive Conversions and Reduce Purchase Friction"/> 
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
                    <h1 className='sizeH4'>Revamping Natch Snacks’ Website to Drive Conversions and Reduce Purchase Friction</h1>
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
                        <p>Natch Snacks is a clean-label snack brand focused on real ingredients, gluten-free recipes, and plant-based offerings. As the brand scaled, its existing website needed stronger conversion architecture, clearer product storytelling, and a more intuitive shopping experience.</p>
                        <p>The objective was to revamp the website by reworking the user journey, identifying friction points in the buying process, and implementing a conversion-focused Shopify experience that aligns with modern D2C best practices.</p>
                    </div>
<div className="cSsecMinBCol">
    <h4>Industry</h4>
    <p> FMCG | D2C | E-Commerce</p>
</div>
                    <div className='cSsecMinBCol'>
                        <h4>Year</h4>
                        <p>2026</p>
                    </div>
                   
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Website Revamp Strategy</li>
                            <li>Conversion Rate Optimisation (CRO)</li>
                            <li>Competitor & Market Research</li>
                            <li>UX/UI Enhancement</li>
                            <li>Shopify Implementation & Optimisation</li>
                            <li>Ecommerce Website Design and Development</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                    <h4>Challenge</h4>
                    <ul>
                        <li>Existing user journey had friction points impacting conversion</li>
                        <li>Product pages were not fully optimised for clarity and decision-making</li>
                        <li>Pack variations were structured in a way that increased drop-offs</li>
                        <li>Limited differentiation from competitor D2C snack brands</li>
                        <li>Needed stronger trust signals and benefit-led communication</li>
                    </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Our Approach</h4>
                        <ul>
                            <li>Conducted in-depth competitor research across leading D2C snack brands to identify high-converting patterns</li>
                            <li>Analysed friction points in the existing buying journey, from landing to checkout</li>
                            <li>Re-architected product detail pages to simplify pack selection and reduce cognitive load</li>
                            <li>Consolidated product variations to streamline browsing and improve decision flow</li>
                            <li>Optimised call-to-action placements and hierarchy for stronger add-to-cart behaviour</li>
                            <li>Improved navigation and content structure to reduce bounce rate</li>
                            <li>Implemented all improvements within Shopify while maintaining performance and scalability</li>
                            <li>Ensured mobile-first responsiveness, given high D2C mobile traffic trends</li>

                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li>Improved clarity across product pages, leading to smoother buying journeys</li>
                            <li>Reduction in friction during pack selection and checkout process</li>
                            <li>Increased add-to-cart actions due to improved CTA visibility and structure</li>
                            <li>Stronger engagement metrics across product pages</li>
                            <li>Enhanced brand perception through clean, benefit-driven presentation</li>
                            <li>Scalable Shopify structure supporting future product launches and pack expansions</li>
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
