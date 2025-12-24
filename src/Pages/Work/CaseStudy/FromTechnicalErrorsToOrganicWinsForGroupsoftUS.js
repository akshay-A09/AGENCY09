import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";
import logo from "../../../Assets/Images/logos/work/groupsoftus.gif"
const FromTechnicalErrorsToOrganicWinsForGroupsoftUS = () => {
  return (
    <>
    <Helmet>
<title>From Technical Errors to Organic Wins: How Groupsoft US Reclaimed Its Digital Presence - AGENCY09 Case Study</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/groupsoft-us-organic-seo-recovery"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Nahar Group, a prominent real estate brand based in Mumbai, faced challenges in attracting the right kind of organic users to engage with their website."/>
<meta property="og:title" content="From Technical Errors to Organic Wins: How Groupsoft US Reclaimed Its Digital Presence - AGENCY09 Case Study"/> 
<meta property="og:description" content="Nahar Group, a prominent real estate brand based in Mumbai, faced challenges in attracting the right kind of organic users to engage with their website."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/groupsoft-us-organic-seo-recovery"/> 
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
                    <h1 className='sizeH4'>From Technical Errors to Organic Wins: How Groupsoft US Reclaimed Its Digital Presence</h1>
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
                        <p>Groupsoft US, a leading SAP solutions provider based in New Jersey, sought to strengthen its digital presence and drive more meaningful user engagement. The goal was to improve website performance, boost search visibility, and increase both organic traffic through targeted SEO keywords and technical enhancements.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> SAP Software Solutions</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p>Website & SEO</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>May-22 to Jan-23</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Increase Organic traffic by 41.32%</li>
                            <li>Increase Keyword Indexing by 29.51%</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Mobile usability issues impacting mobile search performance</li>
                            <li>High Technical Errors</li>
                            <li>Increase brand Search Presence in US Market</li>
                            <li>Improve keyword ranking</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol cSsecMinBColS2'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>36.76% Decreased:</b> Page Load Time</li>
                            <li><b>8.33% Increased:</b> Domain Authority</li>
                            <li><b>65.57% Increased:</b> Indexed Pages</li>
                            <li><b>25.00% Increased:</b> Organic Sessions</li>
                            <li><b>75.84% Increased:</b> Overall Sessions</li>
                            <li><b>260% Increased:</b> Keywords Indexed</li>
                            <li><b>32.11% Increased:</b> Organic Time Spent</li>
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

export default FromTechnicalErrorsToOrganicWinsForGroupsoftUS
