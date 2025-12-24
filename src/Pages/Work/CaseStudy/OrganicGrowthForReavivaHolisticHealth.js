import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";
import logo from "../../../Assets/Images/logos/work/Reaviva.png"
const OrganicGrowthForReavivaHolisticHealth = () => {
  return (
    <>
    <Helmet>
<title>Reaviva Holistic Health - AGENCY09 Case Study</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/reaviva-holistic-health-seo-growth"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Nahar Group, a prominent real estate brand based in Mumbai, faced challenges in attracting the right kind of organic users to engage with their website."/>
<meta property="og:title" content="Reaviva Holistic Health - AGENCY09 Case Study"/> 
<meta property="og:description" content="Nahar Group, a prominent real estate brand based in Mumbai, faced challenges in attracting the right kind of organic users to engage with their website."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/reaviva-holistic-health-seo-growth"/> 
<meta name="twitter:description" content="Nahar Group, a prominent real estate brand based in Mumbai, faced challenges in attracting the right kind of organic users to engage with their website."/> 
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
                    <h1 className='sizeH4'>Reaviva Holistic Health</h1>
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
                        <p>Reaviva, a holistic wellness studio, enhanced its online presence through improved site performance and SEO, resulting in stronger visibility, higher organic engagement, and a more seamless digital experience.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Wellness center in Mumbai</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p>Website & SEO</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>July - 25 to Oct - 25 (Current)</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Increase organic traffic and qualified website visitors</li>
                            <li>Improve keyword indexing for better search visibility</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Website server issue - delayed in updating On-page</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol cSsecMinBColS2'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>-19.95% Decreased:</b> Page Load Time</li>
                            <li><b>-15.66% Decreased:</b> Overall Session</li>
                            <li><b>61.24% Increased:</b> Organic New Users</li>
                            <li><b>58.82% Increased:</b> Organic Session</li>
                            <li><b>7.69% Increased:</b> Indexed Pages</li>
                            <li><b>36.36% Increased:</b> Page Authority</li>
                        </ul>
                    </div>

                </div>

            </div>


        </div>
    </section>

    <Footer/>
    </>
  )
}

export default OrganicGrowthForReavivaHolisticHealth
