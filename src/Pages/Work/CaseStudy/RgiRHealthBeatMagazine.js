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

const RgiRHealthBeatMagazine = () => {


return (
<>
<Helmet>
<title>RGI - R Health Beat Magazine
</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/rgi-r-health-beat-magazine"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Reliance General Insurance (RGI) (now IndusInd General Insurance) is one of India’s largest private general insurance companies, with 127+ offices and a network of 100,000+ agents."/>
<meta property="og:title" content="RGI - R Health Beat Magazine
"/> 
<meta property="og:description" content="Reliance General Insurance (RGI) (now IndusInd General Insurance) is one of India’s largest private general insurance companies, with 127+ offices and a network of 100,000+ agents."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 
<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/rgi-r-health-beat-magazine"/> 
<meta name="twitter:description" content="Reliance General Insurance (RGI) (now IndusInd General Insurance) is one of India’s largest private general insurance companies, with 127+ offices and a network of 100,000+ agents."/> 
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
<h1 className='sizeH4'>RGI - R Health Beat Magazine</h1>
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
<p>Reliance General Insurance (RGI) (now IndusInd General Insurance) is one of India’s largest private general insurance companies, with 127+ offices and a network of 100,000+ agents. 
The company issues a quarterly magazine called R Health Beat, which is physically handed out to top executives, vendors and large corporate clients. It’s also emailed to their entire customer base (1M+). Since 2019, AGENCY09 has designed every issue of R Health Beat.</p>
</div>

<div className='cSsecMinBCol'>
<h4>Industry</h4>
<p>Insurance</p>
</div>

<div className='cSsecMinBCol'>
<h4>Services</h4>
<ul>
<li>Thematic Magazine Design</li>
</ul>

</div>

<div className='cSsecMinBCol'>
<h4>Objective</h4>
<ul>
<li>To curate high level wellness content that educates, inspires and tells stories </li>
<li>To hook key decision makers like CXOs, high ranking executives who decide on the insurer for their organisation.</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Challenges</h4>
<ul>
<li>To cut out the ‘transactional’ nature of corporate communication</li>
<li>To ensure that the magazine aesthetic is appealing enough to serve as a coffee table companion for a whole quarter</li>
<li>To create a soft sell marketing asset that does not feel like an ad</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Approach</h4>
<ul>
<li>We made use of high quality visuals, modern editorial layouts and gave the magazine a premium feel that catches attention in office spaces.</li>
<li>Cover pages have bright, happy colours that make you want to pick up the magazine if you’re sitting idle in a corporate office or reception area.</li>
<li>The content is a mix of deep & light reads that keep the reader engaged, like a more serious version of a lifestyle magazine.</li>
<li>We’re visibly showcasing RGI in informal, high touch settings and amplifying brand presence.
</li>


</ul>

</div>

<div className='cSsecMinBCol'>
<h4>Results</h4>
<ul>
<li>R Health Beat continues its 500-strong print run per volume</li>
<li>It’s also emailed to 1,000,000+ customers from retail and GMC segments</li>
<li>It has been featured in wellness events, HR initiatives, and internal communication campaigns</li>
<li>AGENCY09 has designed 14 volumes and counting.</li>

</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Year</h4>
<p>2019-ongoing</p>
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

export default RgiRHealthBeatMagazine
