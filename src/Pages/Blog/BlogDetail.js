import React, { useEffect, useRef } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

import useLenisScroll from '../../Hooks/useLenisScroll';

import blog1 from '../../Assets/Images/blog-1.jpg';
import blog2 from '../../Assets/Images/blog-2.jpg';

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
// Images end

const BlogDetail = () => {
  useLenisScroll();
  

  return (
  <>
    <Header />

    <div classNameName="spacer"></div>

    <section className='blogDetail'>
<div className="container">
<div className="blog-detail">
            <div className="blog-header">
            <span className="blog-category">MARKETING</span>
                <h1 className='sizeH3'>Must Have Tools For Social Media Marketers</h1>
                <div className="blog-meta blog-list-heading">
                    <ul>
                        <li>FEBRUARY 27</li>
                        <li>81 VIEWS</li>
                        <li>HARSH MEHTA</li>
                    </ul>
                </div>
                <div className="blog-image">
                    <img src={blog1} alt="Must Have Tools For Social Media Marketers"/>
                </div>
            </div>
            <div className="blog-content">
            <div className="blog-social-sticky">
                    <ul>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaXTwitter /></a></li>
                        <li><a href="#"><IoLogoWhatsapp/></a></li>
                        <li><a href="#"><IoLogoLinkedin/></a></li>
                    </ul>
                </div>
                <div className="blog-body">
                    <p><strong>Introduction:</strong></p>
                   <p>Hey there, social media enthusiasts! Ready to kick your online presence up a notch? Get ready to discover the essential tools that’ll revolutionize your social media strategy. Join us at <a href="">Agency09</a> as we uncover the secrets to taking your social media game from good to great!</p>
                  
                    <h4>Auditing Tools:</h4>

                    <div className="blog-image">
                    <img src={blog2} alt="Must Have Tools For Social Media Marketers"/>
                </div>

                <p>First things first, let’s talk about auditing tools. Ever wondered how well your social media efforts are paying off? These tools are like your personal social media detectives. They analyze your posts, help you plan content, and even track what people are saying about your brand. It’s like having a backstage pass to your social media success!</p>

                <h4>Tools we recommend:</h4>
                    <ul>
                        <li>hootsuite: <a href="#">https://www.hootsuite.com</a></li>
                        <li>sproutsocial: <a href="#">https://sproutsocial.com/</a></li>
                        <li>brandmentions: <a href="#"> https://brandmentions.com/</a></li>
                    </ul>

                    <p><strong>Competitor Analysis Tools:</strong></p>
                    <div className="blog-image">
                 
                </div>

                  
                    <p>Next up, let’s dive into competitor analysis tools. Curious to see what your competitors are up to? These tools give you the inside scoop on their strategies. From their latest posts to their top-performing content, it’s like peeking behind the curtain of their social media playbook!</p>
                   
                    <h4>Tools we recommend:</h4>
                    <ul>
                        <li>Tool 1: <a href="#">www.toolone.com</a></li>
                        <li>Tool 2: <a href="#">www.tooltwo.com</a></li>
                        <li>Tool 3: <a href="#">www.toolthree.com</a></li>
                    </ul>
                </div>
            </div>
            <div className="blog-share">
                <a href="#" className="share-btn">Share</a>
                       <a href="#"><FaFacebook /></a>
                       <a href="#"><FaXTwitter /></a>
                       <a href="#"><IoLogoWhatsapp/></a>
                       <a href="#"><IoLogoLinkedin/></a>
            </div>
            <div className="author-info">
               
                <p>harsh mehta</p>
            </div>
            <div className="related-topics">
                <h3>Related Topics</h3>
                <div className="topics">
                    <a href="#">#AI TOOLS FOR MARKETERS</a>
                    <a href="#">#AUDIENCE ENGAGEMENT</a>
                    <a href="#">#AUDIENCE INSIGHTS</a>
                    <a href="#">#BRAND MANAGEMENT TOOLS</a>
                    <a href="#">#BRAND MONITORING</a>
                    <a href="#">#CAMPAIGN OPTIMIZATION</a>
                    <a href="#">#COMPETITOR ANALYSIS TOOLS</a>
                    <a href="#">#CONTENT CREATION</a>
                    <a href="#">#CONTENT MARKETING TOOLS</a>
                    <a href="#">#CONTENT PLANNING TOOLS</a>
                    <a href="#">#CUSTOMER RELATIONSHIP MANAGEMENT (CRM) TOOLS</a>
                    <a href="#">#CUSTOMER RETENTION STRATEGIES</a>
                    <a href="#">#DATA ANALYTICS</a>
                    <a href="#">#DIGITAL MARKETING TOOLS</a>
                    <a href="#">#EMAIL MARKETING SOFTWARE</a>
                    <a href="#">#GRAMMAR TOOLS</a>
                    <a href="#">#INFLUENCER MARKETING TOOLS</a>
                    <a href="#">#LEAD GENERATION TOOLS</a>
                    <a href="#">#MARKETING AUTOMATION</a>
                    <a href="#">#MARKETING AUTOMATION SOFTWARE</a>
                    <a href="#">#MARKETING INSIGHTS</a>
                    <a href="#">#MARKETING INTELLIGENCE</a>
                    <a href="#">#MARKETING STRATEGIES</a>
                    <a href="#">#MARKETING TECHNOLOGY</a>
                    <a href="#">#MUST-HAVE SOCIAL MEDIA TOOLS</a>
                    <a href="#">#ONLINE MARKETING SOLUTIONS</a>
                    <a href="#">#ONLINE PRESENCE</a>
                    <a href="#">#ONLINE VISIBILITY</a>
                    <a href="#">#SCHEDULING AND POSTING TOOLS</a>
                    <a href="#">#SEO TOOLS</a>
                    <a href="#">#SOCIAL MEDIA ANALYTICS</a>
                    <a href="#">#SOCIAL MEDIA ENGAGEMENT</a>
                    <a href="#">#SOCIAL MEDIA MANAGEMENT</a>
                    <a href="#">#SOCIAL MEDIA MONITORING</a>
                    <a href="#">#SOCIAL MEDIA OPTIMIZATION</a>
                    <a href="#">#SOCIAL MEDIA REPORTING</a>
                    <a href="#">#SOCIAL MEDIA SCHEDULING</a>
                    <a href="#">#SOCIAL MEDIA STRATEGY</a>
                    <a href="#">#SOCIAL MEDIA TOOLS</a>
                    <a href="#">#SOCIAL MEDIA TRENDS</a>
                </div>
                </div>
            
   
   
   </div>
   </div>
   </section>

    <Footer />
  </>
  )
}

export default BlogDetail
