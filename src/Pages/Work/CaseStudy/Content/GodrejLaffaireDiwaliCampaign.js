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
import logo from '../../../../Assets/Images/logos/work/fashion_lifestyle/godrej-laffaire.png';


import CaseStudyNav from '../../../../Components/ContentCaseStudyNav';

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

export const GodrejLaffaireDiwaliCampaign = () => {
  return (
    <>
     <Helmet>
<title>Building the Everyday Ally: Kanta Didi for Godrej L’Affaire</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="For the third chapter of Godrej L'Affaire's #CelebratingAcceptance journey, we took the conversation beyond immediate family and into the relationships that shape everyday life."/>
<meta property="og:title" content="Building the Everyday Ally: Kanta Didi for Godrej L’Affaire"/> 
<meta property="og:description" content="For the third chapter of Godrej L'Affaire's #CelebratingAcceptance journey, we took the conversation beyond immediate family and into the relationships that shape everyday life. "/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/about"/> 
<meta name="twitter:description" content="For the third chapter of Godrej L'Affaire's #CelebratingAcceptance journey, we took the conversation beyond immediate family and into the relationships that shape everyday life."/> 
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
                    <h1 className='sizeH4'>Building the Everyday Ally: Kanta Didi for Godrej L’Affaire</h1>
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
                        <p>For the third chapter of Godrej L'Affaire's #CelebratingAcceptance journey, we took the conversation beyond immediate family and into the relationships that shape everyday life. Through Kanta Didi, a domestic worker, the campaign showed how acceptance can begin with something as simple as empathy.</p>
                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p>Lifestyle & Media</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <ul>
                            <li>Campaign Strategy</li>
                            <li>Creative & Content</li>
                            <li>Social Media</li>
                            <li>Influencer Marketing</li>
                            <li>Digital PR</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <p>To build on #CelebratingAcceptance by taking its message beyond familial acceptance and into everyday social spaces, using relatable storytelling to open up wider conversations around inclusion and allyship.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Taking an established campaign platform into its third year while giving the conversation a fresh perspective.</li>
                            <li>Addressing LGBTQIA+ inclusion in a way that felt rooted in lived experience, not just relatable on paper.</li>
                            <li>Moving past familiar narratives of acceptance within immediate families to show allyship in everyday relationships instead.</li>
                            <li>Extending the campaign beyond a film to build real community participation.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Approach</h4>
                        <ul>
                            <li>Built the campaign around "The Power of the Everyday Ally," using Kanta Didi's journey from curiosity to acceptance to make allyship feel familiar and human.</li>
                            <li>Set the story against Diwali, using a shared cultural moment to position inclusion as part of everyday celebration rather than conflict.</li>
                            <li>Shaped the narrative with LGBTQIA+ voices within the team to keep the storytelling grounded.</li>
                            <li>Extended the film through creators, community platforms, UGC, PR, industry voices and DEI forums, turning a single story into a wider conversation.</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <ul>
                            <li><strong>11.9M+</strong> reach across the campaign.</li>
                            <li><strong>8,000+</strong> organic shares, carrying the film across personal networks.</li>
                            <li><strong>350+</strong> UGC comments and stories about empathy and everyday kindness.</li>
                            <li><strong>110+</strong> media clips across publications including The Times of India, ET Brand Equity, Adgully and afaqs!.</li>
                            <li>Support from creators nationwide, including <strong>30+</strong> LGBTQIA+ influencers, alongside community and industry voices.</li>
                            <li>Screenings and sessions at DEI and industry forums pushed the campaign past social media, adding <strong>8.9M+</strong> through event reach</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Year</h4>
                       <p>2025</p>
                    </div>

                </div>

            </div>

 
 

        </div>
    </section>
<section className='cSsecMin'>
    <div className='container'>
        <div className="ytfm">
    <iframe width="1260" height="560" src="https://www.youtube.com/embed/3_dC7bhXh3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
        </section>  
 */}


<CaseStudyNav/>

    <Footer/>
    </>
  )
}

export default GodrejLaffaireDiwaliCampaign


