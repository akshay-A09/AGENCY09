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
import logo from '../../../Assets/Images/logos/work/fashion_lifestyle/lakme.png';
import ourwork1 from '../../../Assets/Images/work/lakme/lk-main.webp'
import ourwork2 from '../../../Assets/Images/work/lakme/lk-1.webp'
import ourwork3 from '../../../Assets/Images/work/lakme/lk-2.webp'


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

const AdityaBirlaCapital = () => {


  return (
    <>
    <Helmet>
<title>Make it Employer of Choice in the BFSI space</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/aditya-birla-capital"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Aditya Birla Capital Ltd (ABCL) ) is an NBFC and functions as the holding company for the $66 billion Aditya Birla Group’s financial services businesses. The client approached us to grow their LinkedIn following, engage their own employees better and standardise their content according to their ‘Five Pillars’ strategy."/>
<meta property="og:title" content="Make it Employer of Choice in the BFSI space"/> 
<meta property="og:description" content="Aditya Birla Capital Ltd (ABCL) ) is an NBFC and functions as the holding company for the $66 billion Aditya Birla Group’s financial services businesses. The client approached us to grow their LinkedIn following, engage their own employees better and standardise their content according to their ‘Five Pillars’ strategy."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/aditya-birla-capital"/> 
<meta name="twitter:description" content="Aditya Birla Capital Ltd (ABCL) ) is an NBFC and functions as the holding company for the $66 billion Aditya Birla Group’s financial services businesses. The client approached us to grow their LinkedIn following, engage their own employees better and standardise their content according to their ‘Five Pillars’ strategy."/> 
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
                    <h1 className='sizeH4'>Make it Employer of Choice in the BFSI space</h1>
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
                        <p>Aditya Birla Capital Ltd (ABCL) ) is an NBFC and functions as the holding company for the $66 billion Aditya Birla Group’s financial services businesses. The client approached us to grow their LinkedIn following, engage their own employees better and standardise their content according to their ‘Five Pillars’ strategy.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>BFSI</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Multi Channel Communication, Production, SEO</li>
                        </ul>

                        
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <p>Position ABC as Employer of Choice in the BFSI space in India for both current & prospective talent 
</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Increasing Glassdoor and AmbitionBox ratings, and the CEO’s approval rating </li>
                            <li>Getting more employees to visit the ABC Store and purchase merch</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Build the ABC Employer Brand social communities to drive brand pride, advocacy, and engagement</li>
                            <li>Standardise the employer brand’s content following their Five Pillars strategy and delegate subsidiaries-related content to their respective handles</li>
                        </ul>

                         <h4>Results: LinkedIn</h4>
                        <ul>
                            <li>7.6x Linkedin follower growth; from 48k to 363k</li>
                            <li>6 million impressions, 1 million page visits (FY’24 and FY’25)</li>
                            <li>54 campaigns executed (FY’24 & FY’25)</li>
                            <li>18% engagement rate (FY’25) (5.6x the industry average)</li>
                            <li>16% of new hires engaged</li>
                             <li>Ran 20 properties, designed 9</li>

                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results: Website</h4>
                        <ul>
                            <li>320k+ organic website sessions </li>
                            <li>Achieved Glassdoor rating of 3.9/5 and 84% CEO’s Approval </li>
                            <li>Achieved AmbitionBox rating of 3.9/5</li>
                            <li>Doubled sales in at the ABC Store</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Year</h4>
                        <p>2024-25</p>
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
</Slider>
</div>

          
        </div>
    </section>






    <Footer/>
    </>
  )
}

export default AdityaBirlaCapital
