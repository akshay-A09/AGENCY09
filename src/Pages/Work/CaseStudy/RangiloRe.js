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

const RangiloRe = () => {


return (
<>
<Helmet>
<title>Rangilo Re
</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/rangilo-re"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Rangilo Re is the flagship Navratri IP of NESCO events, hosted at NESCO Centre in Goregaon East, Mumbai."/>
<meta property="og:title" content="Rangilo Re"/> 
<meta property="og:description" content="Rangilo Re is the flagship Navratri IP of NESCO events, hosted at NESCO Centre in Goregaon East, Mumbai."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 
<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/rangilo-re"/> 
<meta name="twitter:description" content="Rangilo Re is the flagship Navratri IP of NESCO events, hosted at NESCO Centre in Goregaon East, Mumbai."/> 
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
<h1 className='sizeH4'>Rangilo Re</h1>
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
<p>Rangilo Re is the flagship Navratri IP of NESCO events, hosted at NESCO Centre in Goregaon East, Mumbai. It is  positioned as a premium, fully air-conditioned, rain-proof Garba experience with parking, hygiene, and security.</p>
<p>Rangilo Re is headlined each year by the charismatic singer Parthiv Gohil. The 2024 edition pulled in 175,000 attendees over 9 nights. The 2025 edition, running from 22nd September to 1st October, broke records with 180,000 attendees across 10 nights - making it Mumbai’s biggest indoor garba.</p>
</div>

<div className='cSsecMinBCol'>
<h4>Industry</h4>
<p>Entertainment</p>
</div>

<div className='cSsecMinBCol'>
<h4>Services</h4>
<ul>
<li>Event Coverage, Social Media</li>
</ul>

</div>

<div className='cSsecMinBCol'>
<h4>Objective</h4>
<ul>
<li>To attract new audiences to Rangilo Re - not just the attendees of previous editions </li>
<li>To get conversations flowing far outside the halls of NESCO
</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Challenges</h4>
<ul>
<li>Diving into an ocean of 20,000 people in an indoor setup
</li>
<li>Starting early enough to build momentum on our page</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Approach</h4>
<ul>
<li>Started posting ~3 months before the event</li>
<li>Diverse mix of reels, statics and carousels to keep up public interest</li>
<li>Placed high impact digital OOH around the city at key junctions</li>
<li>Created a large volume of content: 180+ posts and 300+ stories</li>
<li>Collabs with popular artists like Mame Khan, Jaya Kishori and Rajvee.</li>
</ul>

</div>

<div className='cSsecMinBCol'>
<h4>Results</h4>
<ul>
<li>20,000 daily attendance at Rangilo Re (full capacity)</li>
<li>69% of our audience discovered us for the first time</li>
<li>+885% positive sentiment</li>
<li>Reached 7,000,000+ people</li>
<li>14,000,000+ views</li>
<li>500,000+ interactions</li>
<li>400,000 organic views on a single reel (Jaya Kishori)</li>
<li>30% follower growth</li>
</ul>

</div>

<div className='cSsecMinBCol'>
<h4>Year</h4>
<p>2025</p>
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

export default RangiloRe
