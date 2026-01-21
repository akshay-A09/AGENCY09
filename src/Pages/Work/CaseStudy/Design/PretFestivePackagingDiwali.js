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
import logo from '../../../../Assets/Images/logos/pret.webp';
import ourwork1 from '../../../../Assets/Images/work/pret_festive1.jpg'
import ourwork2 from '../../../../Assets/Images/work/pret_festive2.webp'
import ourwork3 from '../../../../Assets/Images/work/pret_festive3.webp'
import ourwork4 from '../../../../Assets/Images/work/pret_festive4.webp'

import CaseStudyNav from '../../../../Components/DesignCaseStudyNav';

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

const PretFestivePackagingDiwali = () => {


return (
<>
<Helmet>
<title>Pret - Festive Packaging (Diwali)
</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/pret-festive-packaging-diwali"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Pret asked us to design their festive packaging - bowls, sandwich boxes and carry bags - to create a festive atmosphere that extended all the way from Diwali to Christmas."/>
<meta property="og:title" content="Pret - Festive Packaging (Diwali)"/> 
<meta property="og:description" content="Pret asked us to design their festive packaging - bowls, sandwich boxes and carry bags - to create a festive atmosphere that extended all the way from Diwali to Christmas."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 
<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/pret-festive-packaging-diwali"/> 
<meta name="twitter:description" content="Pret asked us to design their festive packaging - bowls, sandwich boxes and carry bags - to create a festive atmosphere that extended all the way from Diwali to Christmas."/> 
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
<h1 className='sizeH4'>Pret - Festive Packaging (Diwali)</h1>
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
<p>Pret asked us to design their festive packaging - bowls, sandwich boxes and carry bags - to create a festive atmosphere that extended all the way from Diwali to Christmas. With the 149 offer already in swing, a packaging refresh would draw in even more customers.</p>
</div>

<div className='cSsecMinBCol'>
<h4>Industry</h4>
<p>F&B</p>
</div>

<div className='cSsecMinBCol'>
<h4>Services</h4>
<ul>
<li>Packaging, Social Media</li>
</ul>
</div>


<div className='cSsecMinBCol'>
<h4>Year</h4>
<p>2025</p>
</div>


<div className='cSsecMinBCol'>
<h4>Objective</h4>
<ul>
<li>To add positive value to India’s year end festive atmosphere </li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Challenges</h4>
<ul>
<li>To keep packaging relevant & relatable to all of the year-end festivals.</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Approach</h4>
<ul>
<li>We curated a set of elements that work for multiple festivals, based on common themes like lights and fireworks.</li>
<li>Using similar logic; we named the campaign ‘Light Up’ - a short, sweet name that works perfectly from October to December.</li>
</ul>
</div>

{/* 
<div className='cSsecMinBCol'>
<h4>Results</h4>
<ul>
<li>-</li>
</ul>
</div> */}

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


</Slider>
</div>


</div>
</section>




<CaseStudyNav/>

<Footer/>
</>
)
}

export default PretFestivePackagingDiwali
