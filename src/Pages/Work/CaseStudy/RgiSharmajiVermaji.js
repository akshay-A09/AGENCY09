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
import logo from '../../../Assets/Images/logos/work/BFSI/rgi.png';
import ourwork1 from '../../../Assets/Images/work/lakme/lk-main.webp'
import ourwork2 from '../../../Assets/Images/work/lakme/lk-1.webp'
import ourwork3 from '../../../Assets/Images/work/lakme/lk-2.webp'

import Sharmaji1 from '../../../Assets/Images/work/Sharmaji1.webp'
import Sharmaji2 from '../../../Assets/Images/work/Sharmaji2.webp'


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

const RgiSharmajiVermaji = () => {


return (
<>
<Helmet>
<title>How do you make insurance agents understand your products?</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/rgi-sharmaji-vermaji"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Reliance General Insurance (RGI) (now a part of the IndusInd group, as IndusInd General Insurance) is one of India’s leading general insurance companies, with 127+ offices and 100,000+ intermediaries. We created a series of light-hearted, character driven videos called ‘Sharmaji, Vermaji’ to train RGI’s channel partners on their vast range of insurance products."/>
<meta property="og:title" content="How do you make insurance agents understand your products?"/> 
<meta property="og:description" content="Reliance General Insurance (RGI) (now a part of the IndusInd group, as IndusInd General Insurance) is one of India’s leading general insurance companies, with 127+ offices and 100,000+ intermediaries. We created a series of light-hearted, character driven videos called ‘Sharmaji, Vermaji’ to train RGI’s channel partners on their vast range of insurance products."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/rgi-sharmaji-vermaji"/> 
<meta name="twitter:description" content="Reliance General Insurance (RGI) (now a part of the IndusInd group, as IndusInd General Insurance) is one of India’s leading general insurance companies, with 127+ offices and 100,000+ intermediaries. We created a series of light-hearted, character driven videos called ‘Sharmaji, Vermaji’ to train RGI’s channel partners on their vast range of insurance products."/> 
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
<h1 className='sizeH4'>How do you make insurance agents understand your products?</h1>
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
<p>Reliance General Insurance (RGI) (now a part of the IndusInd group, as IndusInd General Insurance) is one of India’s leading general insurance companies, with 127+ offices and 100,000+ intermediaries. We created a series of light-hearted, character driven videos called ‘Sharmaji, Vermaji’ to train RGI’s channel partners on their vast range of insurance products.</p>
</div>

<div className='cSsecMinBCol'>
<h4>Industry</h4>
<p>Insurance</p>
</div>

<div className='cSsecMinBCol'>
<h4>Services</h4>
<ul>
<li>Animated Videos</li>
</ul>


</div>

<div className='cSsecMinBCol'>
<h4>Objective</h4>
<ul>
<li>To create insurance training content that is digestible and desirable</li>
<li>To simplify policy communication</li>
<li>To support digital adoption</li>
<li>To improve agent retention through ongoing value</li>
<li>To increase awareness about their services - Selfi App & Bluey WhatsApp chatbot</li>
</ul>

</div>

<div className='cSsecMinBCol'>
<h4>Challenges</h4>
<ul>
<li>The idea of ‘insurance training’ is rather boring to agents - they feel trapped by technicalities and jargon </li>
<li>Typical training manuals are long form and harder for them to engage with</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Approach</h4>
<ul>
<li>We realised that while agents are juggling client demands and company objectives, insurance as a product is evolving fast - and so are the tools used to deliver it</li>
<li>Traditional training tools treat the agent as a robot. Agents are humans, they want relatable human content.</li>
<li>We decided to develop a training tool that talks to agents on a human level. Thus was born Sharmaji, Vermaji - a recurring video series starring Sharmaji - the agent who runs into problems, and Vermaji - the agent with all the solutions.</li>
<li>Each episode highlights a common concern that agents face, with Vermaji showing how Selfi or policy features solve it - always with a twist of humour and relatability.</li>
<li>The videos were primarily circulated to agents over WhatsApp channels. They were also amplified via YouTube and emailers.</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Results</h4>
<ul>
<li>10+ videos published </li>
<li>Reached 100,000+ agents in RGI’s network directly over WhatsApp</li>
<li>The brand collected feedback from agents confirming that they loved the videos, and felt it was much easier to learn from them than via endless documents</li>
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
<span><img src={Sharmaji1} loading='lazy' /></span>
</div>


<div className='imgCol1 imgCol'>
<span><img src={Sharmaji2} loading='lazy' /></span>
</div>




</div>

{/* 
<div className='mainslider'>
<Slider {...mainSlider} className='clientelSlider slick-slider'>
<div className='imgCol1 imgCol'>
<span><img src={ourwork2} loading='lazy' /></span>
</div>

<div className='imgCol1 imgCol'>
<span><img src={ourwork3} loading='lazy' /></span>
</div>
</Slider>
</div> */}


</div>
</section>






<Footer/>
</>
)
}

export default RgiSharmajiVermaji
