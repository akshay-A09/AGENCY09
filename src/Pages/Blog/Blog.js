import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { PiArrowCircleRightThin } from "react-icons/pi";

import { Link, useLocation } from 'react-router-dom';
import useLenisScroll from '../../Hooks/useLenisScroll';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import blog1 from '../../Assets/Images/blog-1.jpg';
import blog2 from '../../Assets/Images/blog-2.jpg';

const Blog = () => {
    const location = useLocation();
    useLenisScroll();
    return (
        <>

        <Helmet>
            <title> Blog – AGENCY09</title>
            <meta name="description" content="Clients achieve better ROI with integrated digital & inbound marketing strategies. Peek at our lead based campaigns, website designs, SEO and ORM."/>
            {/* <link rel="canonical" href="https://www.agency09.in/work/case-studies"/>

            <meta property="og:title" content=" Case Study – AGENCY09 "/> 
            <meta property="og:description" content=" Clients achieve better ROI with integrated digital & inbound marketing strategies. Peek at our lead based campaigns, website designs, SEO and ORM."/> 
            <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
            <meta property="og:type" content="website"/> 

            <meta name="twitter:card" content="summary"/> 
            <meta name="twitter:site" content="@AGENCY09"/> 
            <meta name="twitter:creator" content="@AGENCY09"/> 
            <meta name="twitter:url" content="https://www.agency09.in/work/case-studies"/> 
            <meta name="twitter:description" content=" Clients achieve better ROI with integrated digital & inbound marketing strategies. Peek at our lead based campaigns, website designs, SEO and ORM. "/> 
            <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/>  */}
        </Helmet>

        <Header />
        <div className="spacer"></div>
        
        <section className='blogMain'>
            <div className='container'>

            <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>Blogs</h2>
            </div>

            <div className="blog-main-header">
                <ul className='navBarC'>
                    <li><Link to='/' className={location.pathname === '/work/case-studies' ? 'active' : ''}>All</Link></li>
                    <li><Link to='/' className={location.pathname === '/work/our-clients' ? 'active' : ''}>MARKETING</Link></li>
                </ul>
            </div>

            <div className="blog-min-box">


                <div className="blog-list">
                    <Link to="blog-detail">
                        <div className="blog-img">
                            <img src={blog1} alt="blog" />
                            <div className="hover-overlay">
                                <div className="hover-text">
                                    <h3>View Details</h3>
                                </div>
                            </div>
                        </div>
                        <div className="blog-list-heading">
                            <span><a href="#">MARKETING</a></span>
                            <h2><a href="#">Must Have Tools For Social Media Marketers</a></h2>
                            <ul>
                                <li><a href="#">FEBRUARY 27</a></li>
                                <li><a href="#">81 VIEWS</a></li>
                                <li><a href="#"><b>Author:</b> HARSH MEHTA</a></li>
                            </ul>
                            <div className='blogDecription'>
                              <p>Introduction: Hey there, social media enthusiasts! Ready to kick your online presence up a notch? Get ready to discover the essential tools that’ll revolutionize your social media strategy. Join us…</p>
                            </div>
                            <div className="list-btn"><span>View Post</span></div>
                        </div>
                    </Link>
                </div>

                <div className="blog-list">
                    <Link to="blog-detail">
                        <div className="blog-img">
                            <img src={blog1} alt="blog" />
                            <div className="hover-overlay">
                                <div className="hover-text">
                                    <h3>View Details</h3>
                                </div>
                            </div>
                        </div>
                        <div className="blog-list-heading">
                            <span><a href="#">MARKETING</a></span>
                            <h2><a href="#">Must Have Tools For Social Media Marketers</a></h2>
                            <ul>
                                <li><a href="#">FEBRUARY 27</a></li>
                                <li><a href="#">81 VIEWS</a></li>
                                <li><a href="#"><b>Author:</b> HARSH MEHTA</a></li>
                            </ul>
                            <div className='blogDecription'>
                              <p>Introduction: Hey there, social media enthusiasts! Ready to kick your online presence up a notch? Get ready to discover the essential tools that’ll revolutionize your social media strategy. Join us…</p>
                            </div>
                            <div className="list-btn"><span>View Post</span></div>
                        </div>
                    </Link>
                </div>

                <div className="blog-list">
                    <Link to="blog-detail">
                        <div className="blog-img">
                            <img src={blog1} alt="blog" />
                            <div className="hover-overlay">
                                <div className="hover-text">
                                    <h3>View Details</h3>
                                </div>
                            </div>
                        </div>
                        <div className="blog-list-heading">
                            <span><a href="#">MARKETING</a></span>
                            <h2><a href="#">Must Have Tools For Social Media Marketers</a></h2>
                            <ul>
                                <li><a href="#">FEBRUARY 27</a></li>
                                <li><a href="#">81 VIEWS</a></li>
                                <li><a href="#"><b>Author:</b> HARSH MEHTA</a></li>
                            </ul>
                            <div className='blogDecription'>
                              <p>Introduction: Hey there, social media enthusiasts! Ready to kick your online presence up a notch? Get ready to discover the essential tools that’ll revolutionize your social media strategy. Join us…</p>
                            </div>
                            <div className="list-btn"><span>View Post</span></div>
                        </div>
                    </Link>
                </div>


            </div>
            </div>
        </section>

        <Footer />
    </>
    )
}

export default Blog;
