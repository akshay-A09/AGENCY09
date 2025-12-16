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
import logo from '../../../Assets/Images/logos/work/fashion_lifestyle/freyaa.jpg';
import ourwork1 from '../../../Assets/Images/work/lakme/lk-main.webp'
import ourwork2 from '../../../Assets/Images/work/lakme/lk-1.webp'
import ourwork3 from '../../../Assets/Images/work/lakme/lk-2.webp'

import freyaa1 from '../../../Assets/Images/work/freyaa1.webp'
import freyaa2 from '../../../Assets/Images/work/freyaa2.webp'


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

const FreyaaWovenWithLove = () => {


return (
<>
<Helmet>
<title>Freyaa - Woven With Love
</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/freyaa-woven-with-love"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Freyaa is an ethnic and contemporary Indian wear brand that celebrates beauty, tradition and femininity through its garments. It resonates with women who value culture, emotional connections, quality and rooted storytelling."/>
<meta property="og:title" content="Freyaa - Woven With Love
"/> 
<meta property="og:description" content="Freyaa is an ethnic and contemporary Indian wear brand that celebrates beauty, tradition and femininity through its garments. It resonates with women who value culture, emotional connections, quality and rooted storytelling."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 
<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/freyaa-woven-with-love"/> 
<meta name="twitter:description" content="Freyaa is an ethnic and contemporary Indian wear brand that celebrates beauty, tradition and femininity through its garments. It resonates with women who value culture, emotional connections, quality and rooted storytelling."/> 
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
<h1 className='sizeH4'>Freyaa - Woven With Love</h1>
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
<p>Freyaa is an ethnic and contemporary Indian wear brand that celebrates beauty, tradition and femininity through its garments. It resonates with women who value culture, emotional connections, quality and rooted storytelling.
For Women’s Day 2025, Freyaa wanted to go beyond cliched “empowerment” messages, and stand out with something real.</p>
</div>

<div className='cSsecMinBCol'>
<h4>Industry</h4>
<p>Garments</p>
</div>

<div className='cSsecMinBCol'>
<h4>Services</h4>
<ul>
<li>Production</li>
</ul>

</div>

<div className='cSsecMinBCol'>
<h4>Objective</h4>
<ul>
<li>To increase brand awareness & engagement</li>
<li>To create an ownable narrative around Women’s Day</li>
<li>To drive emotional affinity with the brand</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Challenges</h4>
<ul>
<li>To help our target audience understand that a garment doesn’t only hold material value but can become an heirloom piece - a fabric with a story. </li>
<li>To tap into their natural love for culture, identity and meaning.</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Approach</h4>
<ul>
<li>We realised that every woman has at least one piece of fabric that’s gifted by another woman - usually a scarf, saree or dress - that holds emotional value. For some women it’s a symbol of love, for others it’s strength and belief.</li>
<li>We decided to celebrate this bond between women with a short film called #WovenWithLove. It was an interview-style video featuring real women narrating their stories - stories about special garments gifted to them by a special woman in their life.</li>
<li>To boost the authenticity of the film, each woman was filmed at home, at work or in another such intimate setting. We avoided flashy backgrounds or background music - the women and their stories shone through. Branding and supers were kept minimal.</li>

</ul>

</div>

<div className='cSsecMinBCol'>
<h4>Results</h4>
<ul>
<li>356k+ views across Instagram, Facebook and YouTube</li>
<li>360k+ impressions / 320k unique reach across Meta platforms
</li>
<li>5.5x more engagement than past videos</li>

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
<span><img src={freyaa1} loading='lazy' /></span>
</div>


<div className='imgCol1 imgCol'>
<span><img src={freyaa2} loading='lazy' /></span>
</div>
</div>


{/* <div className='mainslider'>
<Slider {...mainSlider} className='clientelSlider slick-slider'>
<div className='imgCol1 imgCol'>
<span><img src={freyaa2} loading='lazy' /></span>
</div>
</Slider>
</div> */}


</div>
</section>






<Footer/>
</>
)
}

export default FreyaaWovenWithLove
