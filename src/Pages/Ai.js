import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Accordion from 'react-bootstrap/Accordion';

// Images
import ourpurpose from '../Assets/Images/our-purpose.webp';
import star  from '../Assets/Images/ai/star.png';
import bg  from '../Assets/Images/ai/bg.jpg';
import casestudies from "../Assets/Images/ai/casestudies.jpg";
// Images end

const AI = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Kill all ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        trigger.kill();
      });
    };
    // Kill all ScrollTriggers End
  }, []);

const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "11", label: "Years of Experience" },
    { number: "20+", label: "Technologies Supported" },
    { number: "20+", label: "Tech Professionals" },
  ];

  
  return (
  <>


    <Helmet>
      <title> AI | Top Creative & Digital Marketing Agency in Mumbai, India</title>
      <link rel="canonical" href="https://www.agency09.in/about"/>
      <meta name="robots" content="index, follow"/> 

      <meta name="description" content="AGENCY09 is a creative & digital marketing agency in Mumbai, India, for branding, tech, content, performance marketing, digital marketing, website solutions, and more."/>
      <meta property="og:title" content="About Us | Top Creative & Digital Marketing Agency in Mumbai, India"/> 
      <meta property="og:description" content="AGENCY09 is a creative & digital marketing agency in Mumbai, India, for branding, tech, content, performance marketing, digital marketing, website solutions, and more."/> 
      <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
      <meta property="og:type" content="website"/> 


      <meta name="twitter:card" content="summary"/> 
      <meta name="twitter:site" content="@AGENCY09"/> 
      <meta name="twitter:creator" content="@AGENCY09"/> 
      <meta name="twitter:url" content="https://www.agency09.in/about"/> 
      <meta name="twitter:description" content="AGENCY09 is a creative & digital marketing agency in Mumbai, India, for branding, tech, content, performance marketing, digital marketing, website solutions, and more."/> 
      <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 

    </Helmet>



    <Header />

    <div className="spacer"></div>

    <section className='center'><div className='container'>
      <h2 className='sizeH1 bold'>Intelligent Creativity,<br/> Accelerated by AI <img src={star} alt="star" /></h2>
      <p>AI at AGENCY09 is about amplifying human creativity. Our AI-powered solutions simplify complexity, enhance performance and unlock efficiency, enabling brands to move from reactive marketing to predictive, insight-driven growth. We merge creativity and AI to build dynamic brand ecosystems that think, respond and evolve. </p>
      <div className="btn-bg"><a href="#"><span>Get Started</span></a></div>
      <img src={bg} alt="background" /> 
    </div></section>


<section className='center accordian-ai'>
  <div className='container'>
    <h2 className='sizeH1 bold'>AI-Enabled Capabilities</h2>

    <Accordion>
      {/* Item 1 */}
      <Accordion.Item eventKey="8" key="8">
        <Accordion.Header>Content</Accordion.Header>
        <Accordion.Body>
            <div class="intro-content">
            <p class="intro-text">
                We integrate AI across digital ecosystems to make technology more intuitive, scalable and adaptive. 
                From automation to innovation, our solutions enhance performance and deliver measurable business efficiency.
            </p>
             <div className="btn-border"><a href="#"><span>View Projects</span></a></div>
        </div>

             <div class="services-grid">
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Voice AI Bots for Customer Communication</h3>
                </div>
                <p class="card-body">
                    AI-powered voice assistants streamline support, lead qualification and feedback collection through natural, human-like interaction. 
                    They enable brands to maintain 24/7 engagement while reducing operational load.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI-Powered Websites</h3>
                </div>
                <p class="card-body">
                    Our AI-enhanced websites learn from visitor behavior to personalize journeys, automate responses and optimize performance in real time. 
                    Every element, from content to UX, adapts to drive conversion and retention.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Conversational AI Interfaces</h3>
                </div>
                <p class="card-body">
                    We design intelligent chat and voice-based interfaces that enhance user experience across digital touchpoints. 
                    These systems handle queries, recommend solutions and deliver consistent communication across platforms.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Web3 Integrations</h3>
                </div>
                <p class="card-body">
                    AI meets blockchain to create smarter, secure and decentralized digital ecosystems. 
                    Our integrations unlock automation, transparency and traceability for the next generation of online engagement.
                </p>
            </div>

            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Low-code/No-code Platforms Setup</h3>
                </div>
                <p class="card-body">
                    We help businesses deploy AI-ready low-code and no-code environments that accelerate innovation cycles. 
                    These platforms empower teams to build and automate workflows without complex coding.
                </p>
            </div>

            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI-Powered QA & Testing</h3>
                </div>
                <p class="card-body">
                    Our AI-driven testing tools detect errors, predict failures and optimize code quality before deployment. 
                    This ensures reliability, speed and stability across applications and digital products.
                </p>
            </div>

        </div>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 2 */}
      <Accordion.Item eventKey="9" key="9">
        <Accordion.Header>Tech</Accordion.Header>
        <Accordion.Body>
          <p>Level up your skills with continuous training.</p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 3 */}
      <Accordion.Item eventKey="10" key="10">
        <Accordion.Header>Production</Accordion.Header>
        <Accordion.Body>
          <p>We've got your health covered with team insurance.</p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 4 */}
      <Accordion.Item eventKey="11" key="11">
        <Accordion.Header>Media</Accordion.Header>
        <Accordion.Body>
          <p>Shine bright and get rewarded for your awesome work.</p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 5 */}
      <Accordion.Item eventKey="12" key="12">
        <Accordion.Header>Design</Accordion.Header>
        <Accordion.Body>
          <p>Shine bright and get rewarded for your awesome work.</p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 6 */}
      <Accordion.Item eventKey="12" key="12">
        <Accordion.Header>Strategy</Accordion.Header>
        <Accordion.Body>
          <p>Shine bright and get rewarded for your awesome work.</p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 7 */}
      <Accordion.Item eventKey="12" key="12">
        <Accordion.Header>Keyword</Accordion.Header>
        <Accordion.Body>
          <p>Shine bright and get rewarded for your awesome work.</p>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 8 */}
      <Accordion.Item eventKey="12" key="12">
        <Accordion.Header>Logix</Accordion.Header>
        <Accordion.Body>
          <p>Shine bright and get rewarded for your awesome work.</p>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>

  </div>
</section>


<section className='center'><div className='container'>
  <h2 className='sizeH1 bold'>Case studies</h2>

    <div className="case-card">
      <div className="case-content">
        <div className="case-tags">
          <span className="tag">AI Chatbot</span>
          <span className="tag">Automotive</span>
        </div>

        <h2 className="case-title">
          Driving Visibility and Engagement for Tata Motors' Commercial Vehicle Lineup
        </h2>

        <ul className="case-points">
          <li>Significant increase in online engagement.</li>
          <li>
            Users spent more time exploring the detailed features of Tata Motors'
            commercial vehicles.
          </li>
          <li>
            Enhanced Tata Motors' position as a leader in the commercial vehicle
            market.
          </li>
        </ul>
      </div>

      <div className="case-image">
        <img src={casestudies} alt="Tata Motors Commercial Vehicle" />
      </div>
    </div>

    <div className="case-card">
      <div className="case-content">
        <div className="case-tags">
          <span className="tag">AI Chatbot</span>
          <span className="tag">Automotive</span>
        </div>

        <h2 className="case-title">
          Driving Visibility and Engagement for Tata Motors' Commercial Vehicle Lineup
        </h2>

        <ul className="case-points">
          <li>Significant increase in online engagement.</li>
          <li>
            Users spent more time exploring the detailed features of Tata Motors'
            commercial vehicles.
          </li>
          <li>
            Enhanced Tata Motors' position as a leader in the commercial vehicle
            market.
          </li>
        </ul>
      </div>

      <div className="case-image">
        <img src={casestudies} alt="Tata Motors Commercial Vehicle" />
      </div>
    </div>

    <div className="case-card">
      <div className="case-content">
        <div className="case-tags">
          <span className="tag">AI Chatbot</span>
          <span className="tag">Automotive</span>
        </div>

        <h2 className="case-title">
          Driving Visibility and Engagement for Tata Motors' Commercial Vehicle Lineup
        </h2>

        <ul className="case-points">
          <li>Significant increase in online engagement.</li>
          <li>
            Users spent more time exploring the detailed features of Tata Motors'
            commercial vehicles.
          </li>
          <li>
            Enhanced Tata Motors' position as a leader in the commercial vehicle
            market.
          </li>
        </ul>
      </div>

      <div className="case-image">
        <img src={casestudies} alt="Tata Motors Commercial Vehicle" />
      </div>
    </div>

    <div className="btn-border"><a href="#"><span>View All</span></a></div>

</div></section>

<section className="stats-section">
      <div className="container stats-min">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h2 className="stat-number">{item.number}</h2>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>

<section className='center'><div className='container'>
  <h2 className='sizeH1 bold'>Let’s Build the Future of Brand<br/> Intelligence Together</h2>
    <div className="btn-border"><a href="#"><span>Connect Now</span></a></div>

</div></section>




    <Footer />
  </>
  )
}

export default AI
