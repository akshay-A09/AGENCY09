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
import ourwork1 from '../../../../Assets/Images/work/lakme/lk-main.webp'
import ourwork2 from '../../../../Assets/Images/work/lakme/lk-1.webp'
import ourwork3 from '../../../../Assets/Images/work/lakme/lk-2.webp'
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

const PretAManger149Campaign = () => {


return (
<>
<Helmet>
<title>Raising store walk-ins for Pret-A-Manger
</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/pret-a-manger-149-campaign"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Pret wanted people to try their food - the Chicken Super Club and Cheddar & Pret Pickle sandwiches, which are famous around the world."/>
<meta property="og:title" content="Raising store walk-ins for Pret-A-Manger
"/> 
<meta property="og:description" content="Pret wanted people to try their food - the Chicken Super Club and Cheddar & Pret Pickle sandwiches, which are famous around the world."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 
<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/pret-a-manger-149-campaign"/> 
<meta name="twitter:description" content="Pret wanted people to try their food - the Chicken Super Club and Cheddar & Pret Pickle sandwiches, which are famous around the world."/> 
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
<h1 className='sizeH4'>Raising store walk-ins for Pret-A-Manger</h1>
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
<p>Pret wanted people to try their food - the Chicken Super Club and Cheddar & Pret Pickle sandwiches, which are famous around the world. The need was for an introductory price point. They decided on re-introducing their classic sandwiches to the Indian market at just Rs. 149!</p>
</div>

<div className='cSsecMinBCol'>
<h4>Industry</h4>
<p>F&B</p>
</div>

<div className='cSsecMinBCol'>
<h4>Services</h4>
<ul>
<li>Content Creation, Digital & OOH</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Year</h4>
<p>2025</p>
</div>



<div className='cSsecMinBCol'>
<h4>Objective</h4>
<ul>
<li>To raise the number of store walk-ins and online orders for Pret.</li>
<li>To make an offer you can’t refuse.</li>
<li>To raise awareness about Pret as a brand - being only 2 years old in India, it isn’t known as well as Starbucks, Third Wave, Blue Tokai etc.</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Challenges</h4>
<ul>
<li>To grab attention in one second - even if someone drove past a Pret 149 billboard, it had to register in their mind. This meant using the simplest, catchiest phrase possible.</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Approach</h4>
<ul>
<li>Although we tried a million permutations and combinations for the campaign line, we finally settled on the rather simple ‘Really?’</li>
<li>Why? Well, because we tested the idea of a 149 Rupee sandwich around the office and many people just went “Really?” and it caught on best.</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Results</h4>
<ul>
<li>Walk-ins rose by 6%</li>
<li>Online orders up by 32%</li>
<li>Sandwich sales went up 532%</li>
<li>5 OOH at prominent locations got an estimated 100,000 views per OOH per day</li>
<li>11,202 engagements across social media</li>
<li>3,447,912 accounts reached</li>
<li>9,871,051 views in total</li>
</ul>
<p>*Numbers as of 5th December, 2025. The campaign is ongoing.</p>
</div>

</div>

</div>
{/* 
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
</div> */}


</div>
</section>



<CaseStudyNav/>



<Footer/>
</>
)
}

export default PretAManger149Campaign
