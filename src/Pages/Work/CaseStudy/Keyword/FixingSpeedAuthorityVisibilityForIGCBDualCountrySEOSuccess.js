import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../../Components/Header';
import Footer from '../../../../Components/Footer';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";
import logo from "../../../../Assets/Images/logos/work/BFSI/igcb.png"

import CaseStudyNav from '../../../../Components/KeywordCaseStudyNav';

const FixingSpeedAuthorityVisibilityForIGCBDualCountrySEOSuccess = () => {
  return (
    <>
    <Helmet>
<title>FDual-Country SEO Win: Speed, Authority & Visibility for iGCB</title>
<link rel="canonical" href="https://www.agency09.in/work/case-studies/igcb-dual-country-seo-success"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Discover how iGCB improved site speed, domain authority, and organic traffic across India and the UK with a dual-country SEO strategy."/>
<meta property="og:title" content="FDual-Country SEO Win: Speed, Authority & Visibility for iGCB"/> 
<meta property="og:description" content="Discover how iGCB improved site speed, domain authority, and organic traffic across India and the UK with a dual-country SEO strategy."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/work/case-studies/igcb-dual-country-seo-success"/> 
<meta name="twitter:description" content="Discover how iGCB improved site speed, domain authority, and organic traffic across India and the UK with a dual-country SEO strategy."/> 
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
                    <h1 className='sizeH4'>Fixing Speed, Authority & Visibility: A Dual-Country SEO Success for iGCB</h1>
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
                        <p>iGCB, a global banking technology provider, aimed to enhance its online presence across India and the UK. The focus was on improving website speed, boosting domain authority, increasing organic traffic, and resolving technical issues like GA4 migration and server performance to better engage its target audience.</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Industry</h4>
                        <p> Banking Software</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                       <p> Website & SEO</p>
                    </div>
                    
                    <div className='cSsecMinBCol'>
                    <h4>Year </h4>
                    <p>Jan 2023 - Dec 2024</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Objective</h4>
                        <ul>
                            <li>Increase Organic traffic </li>
                            <li>Generate Quality Leads</li>
                            <li>Strengthen presence in India and the UK</li>
                            <li>Increase keyword ranking</li>
                        </ul>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <ul>
                            <li>Non-SEO friendly website</li>
                            <li>Low domain authority</li>
                            <li>Universal Analytics Migration to GA4</li>
                            <li>Slow site speed & server issues</li>
                            <li>UK traffic decline</li>
                            <li>Dual-country targeting (India & UK)</li>

                        </ul>
                    </div>

                    <div className='cSsecMinBCol cSsecMinBColS2'>
                        <h4>Results</h4>
                        <ul>
                            <li><b>89.72% Decreased:</b> Page Load Time</li>
                            <li><b>69.23% Increased:</b> Domain Authority</li>
                            <li><b>49.33% Increased:</b> Indexed Pages</li>
                            <li><b>165.97% Increased:</b> Organic Sessions</li>
                            <li><b>155.19% Increased:</b> Organic Desktop Hits</li>
                            <li><b>4,500% Increased:</b> Keywords Indexed</li>

                        </ul>
                    </div>

                </div>

            </div>


        </div>
    </section>
<CaseStudyNav/>

    <Footer/>
    </>
  )
}

export default FixingSpeedAuthorityVisibilityForIGCBDualCountrySEOSuccess
