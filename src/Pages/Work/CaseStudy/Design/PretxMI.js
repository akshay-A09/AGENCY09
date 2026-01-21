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


import pretMi1 from '../../../../Assets/Images/work/pret-mi1.jpg'
import pretMi2 from '../../../../Assets/Images/work/pret-mi2.jpg'
import pretMi3 from '../../../../Assets/Images/work/pret-mi3.jpg'
import pretMi4 from '../../../../Assets/Images/work/pret-mi4.jpg'


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

const PretxMI = () => {


return (
<>
<Helmet>
<title>Making Pret’s packaging the new MVP of match-day moments  - AGENCY09 Case Study</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/pret-x-mi"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Pret-A-Manger, the British cafe chain that prides itself on serving freshly prepared bites and organic coffee in 500+ stores worldwide, partnered up with Mumbai Indians for IPL 2025."/>
<meta property="og:title" content="Making Pret’s packaging the new MVP of match-day moments  - AGENCY09 Case Study"/> 
<meta property="og:description" content="Pret-A-Manger, the British cafe chain that prides itself on serving freshly prepared bites and organic coffee in 500+ stores worldwide, partnered up with Mumbai Indians for IPL 2025."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/pret-x-mi"/> 
<meta name="twitter:description" content="Pret-A-Manger, the British cafe chain that prides itself on serving freshly prepared bites and organic coffee in 500+ stores worldwide, partnered up with Mumbai Indians for IPL 2025."/> 
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
<h1 className='sizeH4'>Making Pret’s packaging the new MVP of match-day moments </h1>
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
<p>Pret-A-Manger, the British cafe chain that prides itself on serving freshly prepared bites and organic coffee in 500+ stores worldwide, partnered up with Mumbai Indians for IPL 2025.</p>
</div>


<div className='cSsecMinBCol'>
<h4>Industry</h4>
<p>F&B</p>
</div>

<div className='cSsecMinBCol'>
<h4>Services</h4>
<ul>
<li>Branding, Packaging, Content Creation</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Year</h4>
<p>2025</p>
</div>





<div className='cSsecMinBCol'>
<h4>Objective</h4>
<p>To announce Pret’s partnership with Mumbai Indians 
</p>
</div>

<div className='cSsecMinBCol'>
<h4>Challenges</h4>
<ul>
<li>Blend Pret seamlessly into IPL </li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Approach</h4>
<ul>
<li>We decided to make Pret's packaging the MVP of match-day moments</li>
<li>Doodles elements came from both the food and coffee spaces</li>
<li>Created doodle illustrations for Pret’s cups, sleeves and takeaway bags</li>
<li>Playfully differentiated between hot and cold beverages with white and blue stars</li>

</ul>
</div>


<div className='cSsecMinBCol'>
<h4>Results</h4>
<ul>
<li>Memorable brand discovery at 8 stores across Mumbai Metropolitan Region via coffee cups, bags, and in-store branding </li>
<li>Standee & stall presence at Wankhede (home ground) boosted brand association</li>
<li>First ever special edition cups & bags for Pret India</li>
<li>Customer sentiment and organic content amplified - customers posted the cup on IG stories tagging Pret</li>
<li>Brand visibility elevated during IPL season</li>
</ul>
</div>

</div>

</div>

<div className='cSsecMinC'>

<div className='imgCol1 imgCol'>
<span><img src={pretMi1} loading='lazy' /></span>
</div>

</div>


<div className='mainslider'>
<Slider {...mainSlider} className='clientelSlider slick-slider'>
<div className='imgCol1 imgCol'>
<span><img src={pretMi2} loading='lazy' /></span>
</div>

<div className='imgCol1 imgCol'>
<span><img src={pretMi3} loading='lazy' /></span>
</div>

<div className='imgCol1 imgCol'>
<span><img src={pretMi4} loading='lazy' /></span>
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

export default PretxMI
