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

const RgiBlueyChatbot = () => {


return (
<>
<Helmet>
<title>RGI - Bluey Chatbot
</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/rgi-bluey-chatbot"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Reliance General Insurance (RGI) (now IndusInd General Insurance) is one of India’s largest private general insurance companies, with 127+ offices and a network of 100,000+ agents."/>
<meta property="og:title" content="RGI - Bluey Chatbot
"/> 
<meta property="og:description" content="Reliance General Insurance (RGI) (now IndusInd General Insurance) is one of India’s largest private general insurance companies, with 127+ offices and a network of 100,000+ agents."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 
<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/rgi-bluey-chatbot"/> 
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
<h1 className='sizeH4'>RGI - Bluey Chatbot</h1>
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
<p>Reliance General Insurance (RGI) (now IndusInd General Insurance) is one of India’s largest private general insurance companies, with 127+ offices and a network of 100,000+ agents. The company realised that its agents were facing a tough challenge: they lacked fast access to sales collateral, client-ready material, and policy-related information. When you’re an insurance agent, you’re juggling multiple tasks - and it can be challenging to dig out documents from hundreds of folders and subfolders. This makes agents inefficient and in turn affects how customers are served.</p>
</div>

<div className='cSsecMinBCol'>
<h4>Year</h4>
<p>2024</p>
</div>

<div className='cSsecMinBCol'>
<h4>Industry</h4>
<p>Insurance</p>
</div>

<div className='cSsecMinBCol'>
<h4>Services</h4>
<ul>
<li>WhatsApp Chatbot, Mascot</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Challenges</h4>
<ul>
<li>To provide instant access to all required materials, seamless navigation and on-the-go convenience. </li>
<li>To eliminate points of friction - logins, app downloads, constant updates, device compatibility, etc.</li>
<li>To communicate the existence of whatever method we create, to a massive network of 100,000+ agents spread out across India.</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Approach</h4>
<ul>
<li>We realised that agents use WhatsApp 24/7 to communicate with clients. It’s the interface they are most familiar and comfortable with.</li>
<li>We created a WhatsApp chatbot called Bluey - agents just had to text “Hi Bluey” to +91 8976978877. They would be greeted by our mascot, a cute, friendly tech savvy dog called Bluey.</li>
<li>They could just ask for whatever document they wanted and Bluey would find it for them, and share it right there in the chat.</li>
<li>This eliminated the need to download a new app or login to a portal, which is quite a hassle especially while travelling.
</li>
<li>Bluey could deliver brochures, policy wordings, FAQs, proposal forms, links to YouTube videos and much more in chat.
</li>
<li>Bluey was launched via B2B channels like mailers and standees, B2E channels including internal emails and WhatsApp forwards, and finally via LinkedIn.</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Objective</h4>
<ul>
<li>To reduce turnaround time between agents receiving a query and providing resolution </li>
<li>To improve customer satisfaction and increase the renewal rate.
</li>
</ul>
</div>

<div className='cSsecMinBCol'>
<h4>Results</h4>
<ul>
<li>700+ agents started using Bluey in its first week. They shared positive feedback with RGI, which was echoed in testimonials from company leadership. </li>
<li>There was a notable improvement in turnaround time on queries. Partners and clients had a more enhanced experience, and dependency on the backend was reduced.</li>

</ul>
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

export default RgiBlueyChatbot
