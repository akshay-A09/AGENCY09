import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";
import logo from "../../../Assets/Images/logos/work/real-estate/nahar-group.png"
const MassiveOrganicGrowthforNaharGroupsSearchPresence = () => {
  return (
    <>
    <Helmet>
<title>Massive Organic Search Growth for Nahar Group | Case Study</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Nahar Group, a prominent real estate brand based in Mumbai, faced challenges in attracting the right kind of organic users to engage with their website."/>
<meta property="og:title" content="Massive Organic Search Growth for Nahar Group | Case Study"/> 
<meta property="og:description" content="Nahar Group, a prominent real estate brand based in Mumbai, faced challenges in attracting the right kind of organic users to engage with their website."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/about"/> 
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
                    <h1 className='sizeH4'>Massive Organic Growth for Nahar Group’s Search Presence</h1>
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
                        <p>Nahar Group, a prominent real estate brand based in Mumbai, faced challenges in attracting the right kind of organic users to engage with their website. The objective was to increase organic traffic, reduce bounce rate and page load time, enhance visibility on search engine results pages (SERP), and ensure users actively engage with the website.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Real Estate</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Digital Marketing, SEO</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>2023</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Increase Organic Traffic</li>
                            <li>Reduce Bounce Rate & Page Load Time</li>
                            <li>Increase Visibility on SERP</li>
                            <li>Ensure users engage with the website</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Attracting the right kind of organic users</li>
                            <li>Improving user engagement on the website</li>
                            <li>Reducing high bounce rates</li>
                            <li>Enhancing page load times for better user experience</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol cSsecMinBColS2'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>41.32% Increase:</b> Organic Time Spent on the website</li>
                            <li><b>18.79% Increase:</b> Organic Traffic</li>
                            <li><b>29.51% Decrease:</b> Overall Bounce Rate</li>
                            <li><b>68.66% Enhancement:</b> Page Load Time</li>
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

export default MassiveOrganicGrowthforNaharGroupsSearchPresence
