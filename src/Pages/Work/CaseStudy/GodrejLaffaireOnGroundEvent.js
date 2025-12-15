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

const GodrejLaffaireOnGroundEvent = () => {


return (
<>
<Helmet>
<title>Godrej L’affaire On-Ground Event: All Things Goodness</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/godrej-laffaire-on-ground-event"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Godrej L'Affaire is the Godrej Group's brand-agnostic lifestyle platform, celebrating the goodness of lifestyle with over 85k followers across social media. Their annual event, All Things Goodness, returned in 2024 after a four year hiatus, and saw 1500+ attendees including Malaika Arora, Ranveer Allahbadia, Chef Harpal Singh Sokhi and others."/>
<meta property="og:title" content="Godrej L’affaire On-Ground Event: All Things Goodness"/> 
<meta property="og:description" content="Godrej L'Affaire is the Godrej Group's brand-agnostic lifestyle platform, celebrating the goodness of lifestyle with over 85k followers across social media. Their annual event, All Things Goodness, returned in 2024 after a four year hiatus, and saw 1500+ attendees including Malaika Arora, Ranveer Allahbadia, Chef Harpal Singh Sokhi and others."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/godrej-laffaire-on-ground-event"/> 
<meta name="twitter:description" content="Godrej L'Affaire is the Godrej Group's brand-agnostic lifestyle platform, celebrating the goodness of lifestyle with over 85k followers across social media. Their annual event, All Things Goodness, returned in 2024 after a four year hiatus, and saw 1500+ attendees including Malaika Arora, Ranveer Allahbadia, Chef Harpal Singh Sokhi and others."/> 
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
<h1 className='sizeH4'>Godrej L’affaire On-Ground Event: All Things Goodness</h1>
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
<p>Godrej L'Affaire is the Godrej Group's brand-agnostic lifestyle platform, celebrating the goodness of lifestyle with over 85k followers across social media. Their annual event, All Things Goodness, returned in 2024 after a four year hiatus, and saw 1500+ attendees including Malaika Arora, Ranveer Allahbadia, Chef Harpal Singh Sokhi and others.</p>
</div>

<div className='cSsecMinBCol'>
<h4>Industry</h4>
<p>Lifestyle</p>
</div>

<div className='cSsecMinBCol'>
<h4>Services</h4>
<ul>
<li>Event Coverage, Community Engagement, IP Development</li>
</ul>


</div>

<div className='cSsecMinBCol'>
<h4>Objective</h4>
<p>To build a community of lifestyle aficionados 
</p>
</div>

<div className='cSsecMinBCol'>
<h4>Challenges</h4>
<ul>
<li>Transforming brand perception by enhancing aspirational appeal among Gen-Z and millennials </li>
<li>Centralizing communication for unified messaging and resonance</li>
<li>Building a creator community to boost engagement, advocacy and loyalty</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Approach</h4>
<ul>
<li>We established L’Affaire as a brand-agnostic platform celebrating lifestyle trends under the theme "Goodness." We hosted an annual soiree event bringing together celebrities, influencers, and brands to solidify Godrej Laffaire’s position as a lifestyle leader.</li>
<li>We strategically partnered with ‘The Label Life’ and showcased Malaika Arora's brand debut runway, adding glamour and targeting fashion enthusiasts.</li>
<li>We launched the Godrej Food Trends Report with insights from 300+ chefs and food experts, in presence of 1,000 creators.</li>
<li>We launched the Godrej L'Affaire Select Squad consisting of 25 top regional creators that we identified from 1,000+ participants across 40+ pin-codes. We engaged content creators to generate and share compelling content, amplifying brand visibility.</li>
<li>We partnered with the iconic band The Bartender to elevate the event with lively music.</li>
<li>We certified the event as 100% sustainable via an external audit, reflecting Godrej’s "Good and Green" philosophy.</li>
</ul>

</div>

<div className='cSsecMinBCol'>
<h4>Results</h4>
<ul>
<li>We attracted 1500+ attendees including 70+ Indian TV celebrities, renowned chefs, and top content creators, with a combined following of 87 million+</li>
<li>We secured 616+ PR mentions and engaged 61 media outlets, partnering with 16 hybrid-media outlets for extensive coverage</li>
<li>We partnered with 57+ leading entertainment and lifestyle brands to amplify visibility - including Carlsberg, Bright Outdoor Media, Jura Single Malt, U’Luvka Vodka, Bombay Island Coffee Roasters, AutoHangar and others</li>
<li>We generated 3500 Instagram stories and posts, which included 591 reels. Instagram stories hit 500k+ impressions</li>
<li>Cumulative reach crossed 10 million</li>
<li>We diverted 1840 kg+ of waste from landfills, achieving a 94.8% diversion rate</li>
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
</Slider>
</div>


</div>
</section>






<Footer/>
</>
)
}

export default GodrejLaffaireOnGroundEvent
