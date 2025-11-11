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

    <section className='center Ai_row'><div className='container'>
      <h2 className='sizeH1 bold'>Intelligent Creativity,<br/> Accelerated by AI <img src={star} alt="star" /></h2>
      <p>AI at AGENCY09 is about amplifying human creativity. Our AI-powered solutions simplify complexity, enhance performance and unlock efficiency, enabling brands to move from reactive marketing to predictive, insight-driven growth. We merge creativity and AI to build dynamic brand ecosystems that think, respond and evolve. </p>
      <div className="btn-bg"><a href="#" ><span>Get Started</span></a></div>
      <img className="banner-bg" src={bg} alt="background" /> 
    </div></section>


<section className='center accordian-ai'>

<div className='overlapBg bgPink overlapBgRightTop overlapRotateY'></div>
<div className='overlapBg bgBlue overlapBgRightCenter overlapRotateY'></div>


  <div className='container'>
    <h2 className='sizeH1 bold'>AI-Enabled Capabilities</h2>

    <Accordion>
      {/* Item 1 */}
      <Accordion.Item eventKey="8" key="8">
        <Accordion.Header data-icon="content"> Content</Accordion.Header>
        <Accordion.Body>
            <div class="intro-content">
            <p class="intro-text">
               AI is transforming how stories are created, adapted and delivered. We use advanced AI tools to generate, personalize and scale content that performs across platforms and audiences.
            </p>
             <div className="btn-border"><a href="../Work/case-studies#content"><span>View Projects</span></a></div>
        </div>

             <div class="services-grid">
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI-Generated Content</h3>
                </div>
                <p class="card-body">
                    From long-form articles to short-form videos and AI voiceovers, we create multilingual, platform-ready content in record time. Our AI-driven workflow ensures consistency, quality and tone that align seamlessly with brand voice.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Personalized Content Engines</h3>
                </div>
                <p class="card-body">
                    Our AI models analyze audience behavior to craft adaptive messaging that resonates with each segment. This enables brands to deliver the right message, in the right format, at the right time across channels.
                </p>
            </div>

        </div>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 2 */}
      <Accordion.Item eventKey="9" key="9">
        <Accordion.Header data-icon="tech">Tech</Accordion.Header>
       <Accordion.Body>
            <div class="intro-content">
            <p class="intro-text">
                We integrate AI across digital ecosystems to make technology more intuitive, scalable and adaptive. From automation to innovation, our solutions enhance performance and deliver measurable business efficiency.
            </p>
             <div className="btn-border"><a href="#"><span>View Projects</span></a></div>
        </div>

             <div class="services-grid">
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Voice AI Bots for Customer Communication</h3>
                </div>
                <p class="card-body">
                    AI-powered voice assistants streamline support, lead qualification and feedback collection through natural, human-like interaction. They enable brands to maintain 24/7 engagement while reducing operational load.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI-Powered Websites</h3>
                </div>
                <p class="card-body">
                    Our AI-enhanced websites learn from visitor behavior to personalize journeys, automate responses and optimize performance in real time. Every element, from content to UX, adapts to drive conversion and retention.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Conversational AI Interfaces</h3>
                </div>
                <p class="card-body">
                    We design intelligent chat and voice-based interfaces that enhance user experience across digital touchpoints. These systems handle queries, recommend solutions and deliver consistent communication across platforms.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Web3 Integrations</h3>
                </div>
                <p class="card-body">
                    AI meets blockchain to create smarter, secure and decentralized digital ecosystems. Our integrations unlock automation, transparency and traceability for the next generation of online engagement.
                </p>
            </div>

            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Low-code/No-code Platforms Setup</h3>
                </div>
                <p class="card-body">
                    We help businesses deploy AI-ready low-code and no-code environments that accelerate innovation cycles. These platforms empower teams to build and automate workflows without complex coding.
                </p>
            </div>

            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI-Powered QA & Testing</h3>
                </div>
                <p class="card-body">
                    Our AI-driven testing tools detect errors, predict failures and optimize code quality before deployment. This ensures reliability, speed and stability across applications and digital products.
                </p>
            </div>

        </div>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 3 */}
      <Accordion.Item eventKey="10" key="10">
        <Accordion.Header data-icon="production">Production</Accordion.Header>
        <Accordion.Body>
                      <div class="intro-content">
            <p class="intro-text">
               We combine AI and creativity to produce content faster, smarter and at scale. From automated storytelling to digital human creation, our production solutions redefine how brands engage audiences across mediums.
            </p>
             <div className="btn-border"><a href="../Work/case-studies#production"><span>View Projects</span></a></div>
        </div>

             <div class="services-grid">
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI Video Generation</h3>
                </div>
                <p class="card-body">
                   AI enables us to generate videos instantly from scripts, storyboards or data inputs. This approach reduces turnaround time and allows agile content production tailored to campaign needs.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Hyper-personalized Video Ads</h3>
                </div>
                <p class="card-body">
                   Using AI, we create dynamic video ads that adapt visuals, voice and messaging for each viewer. Every video becomes a unique experience, improving engagement and conversion.
                </p>
            </div>

              <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Hyper-personalized Video Ads</h3>
                </div>
                <p class="card-body">
                   Using AI, we create dynamic video ads that adapt visuals, voice and messaging for each viewer. Every video becomes a unique experience, improving engagement and conversion.
                </p>
            </div>

            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">3D/CGI Production</h3>
                </div>
                <p class="card-body">
                   AI-powered 3D and CGI workflows enhance realism and reduce rendering time. Our production team uses these tools to create immersive visuals that elevate brand storytelling.
                </p>
            </div>

            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Interactive Video (Clickable Journeys, Data Capture)</h3>
                </div>
                <p class="card-body">
                   We design AI-enhanced videos with embedded actions and data capture capabilities. Viewers interact directly within the content, enabling real-time engagement analytics and deeper personalization.
                </p>
            </div>

              <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI Voiceovers & Dubbing (Multilingual Content Creation)</h3>
                </div>
                <p class="card-body">
                   AI voice synthesis allows seamless creation of natural-sounding narrations in multiple languages. It ensures tone precision, scalability and consistency across regions and audiences.
                </p>
            </div>

            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Synthetic Actors & Digital Twins</h3>
                </div>
                <p class="card-body">
                   We develop AI-generated digital humans for campaigns, training and brand storytelling. These virtual avatars replicate real human expressions and motion, creating scalable, lifelike communication experiences.

                </p>
            </div>

        </div>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 4 */}
      <Accordion.Item eventKey="11" key="11">
        <Accordion.Header data-icon="media">Media</Accordion.Header>
         <Accordion.Body>
                      <div class="intro-content">
            <p class="intro-text">
              AI enhances every stage of the media lifecycle, from planning and placement to optimization and attribution. Our AI-powered systems help brands invest smarter, personalize experiences and achieve measurable growth across channels.
            </p>
             <div className="btn-border"><a href="../Work/case-studies#media"><span>View Projects</span></a></div>
        </div>

             <div class="services-grid">
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI-Driven Media Buying</h3>
                </div>
                <p class="card-body">
                   Our AI algorithms analyze audience patterns, bidding data and channel performance in real time. This enables precise ad placement, higher ROI and reduced manual intervention in campaign execution.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Dynamic Creative Optimization (DCO)</h3>
                </div>
                <p class="card-body">
                   We use AI to automatically test, learn and serve the best-performing ad variations. Each viewer sees a personalized combination of visuals, copy and CTAs based on behavior and context.
                </p>
            </div>

              <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI Attribution & MMM (Marketing Mix Modeling)</h3>
                </div>
                <p class="card-body">
                  AI-driven attribution models identify which channels and campaigns truly drive impact. Through advanced Marketing Mix Modeling, we forecast outcomes, reallocate budgets and maximize efficiency across media spends.
                </p>
            </div>

        </div>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 5 */}
      <Accordion.Item eventKey="12" key="12">
        <Accordion.Header data-icon="design">Design</Accordion.Header>
       <Accordion.Body>
                      <div class="intro-content">
            <p class="intro-text">
               AI transforms the design process from intuition-based to data-informed creativity. Our tools assist designers in generating, refining and scaling visual concepts that align with brand identity and audience intent.
            </p>
             <div className="btn-border"><a href="../Work/case-studies#design"><span>View Projects</span></a></div>
        </div>

             <div class="services-grid">
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI-Generated Design Concepts</h3>
                </div>
                <p class="card-body">
                   We use AI to generate original design variations based on brand guidelines, market trends and audience insights. This accelerates the ideation phase, ensuring creative diversity without compromising visual consistency.
                </p>
            </div>

        </div>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 6 */}
      <Accordion.Item eventKey="13" key="13">
        <Accordion.Header data-icon="strategy">Strategy</Accordion.Header>
        <Accordion.Body>
                      <div class="intro-content">
            <p class="intro-text">
               AI empowers strategic decision-making through real-time insights and predictive intelligence. Our models help brands anticipate change, identify opportunities and plan with clarity and precision.
            </p>
             <div className="btn-border"><a href="../Work/case-studies#strategy"><span>View Projects</span></a></div>
        </div>

             <div class="services-grid">
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">Predictive Consumer Behavior Models</h3>
                </div>
                <p class="card-body">
                   We leverage AI to analyze historical and real-time data to forecast consumer trends, intent and purchase behavior. These insights guide campaign planning, product positioning and audience engagement strategies.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI Competitor Analysis & Monitoring</h3>
                </div>
                <p class="card-body">
                   Our AI tools track competitor activity, performance benchmarks and communication patterns across digital ecosystems. This enables brands to react faster, refine positioning and uncover untapped market opportunities.
                </p>
            </div>

              <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI-Driven Go-to-Market Models</h3>
                </div>
                <p class="card-body">
                   We design AI-powered frameworks that align market entry, audience segmentation and messaging strategy. This data-backed approach ensures faster adaptation and sustained growth across regions.
                </p>
            </div>

        </div>
        </Accordion.Body>
      </Accordion.Item>

      {/* Item 7 */}
      <Accordion.Item eventKey="14" key="14">
        <Accordion.Header data-icon="keyword">Keyword</Accordion.Header>
        <Accordion.Body>
    <div class="intro-content">
      <p class="intro-text">
        AI is redefining how search ecosystems function, from discovery to optimization. Our AI-powered keyword and content strategies ensure visibility, precision and scale across languages, formats and platforms.
      </p>
      <div className="btn-border"><a href="../Work/case-studies#keyword"><span>View Projects</span></a></div>
    </div>

    <div class="services-grid">

      <div class="service-card">
        <div class="service-header">
          <h3 class="card-title">AI Search Optimization</h3>
        </div>
        <p class="card-body">
          We use AI models to analyze evolving search behaviors and algorithm shifts. This helps us build adaptive SEO frameworks that continuously improve visibility and ranking accuracy.
        </p>
      </div>

      <div class="service-card">
        <div class="service-header">
          <h3 class="card-title">Content Optimization for Multimodal Search</h3>
        </div>
        <p class="card-body">
          Our AI tools optimize content for text, image and voice-based searches. This ensures discoverability across emerging search formats and aligns performance with user intent.
        </p>
      </div>

      <div class="service-card">
        <div class="service-header">
          <h3 class="card-title">AI-Driven Keyword Clustering</h3>
        </div>
        <p class="card-body">
          Through semantic analysis, AI clusters related keywords by topic and relevance. This enables smarter content mapping, improved internal linking and stronger topical authority.
        </p>
      </div>

      <div class="service-card">
        <div class="service-header">
          <h3 class="card-title">Generative SEO Pages (Long-Tail Coverage at Scale)</h3>
        </div>
        <p class="card-body">
          We deploy AI to create and optimize long-tail SEO pages dynamically. This approach expands organic reach, enhances contextual coverage and drives traffic through precision content generation.
        </p>
      </div>

      <div class="service-card">
        <div class="service-header">
          <h3 class="card-title">Multilingual SEO with AI Translation + Localisation</h3>
        </div>
        <p class="card-body">
          AI translation paired with cultural localization ensures accuracy and relevance across global markets. Our systems maintain tone, nuance and search intent for each target language.
        </p>
      </div>

      <div class="service-card">
        <div class="service-header">
          <h3 class="card-title">Predictive ASO</h3>
        </div>
        <p class="card-body">
          AI-powered App Store Optimization models forecast keyword trends and ranking shifts. This helps apps maintain visibility, improve downloads and stay competitive in fast-changing marketplaces.
        </p>
      </div>

    </div>
  </Accordion.Body>
      </Accordion.Item>

      {/* Item 8 */}
      <Accordion.Item eventKey="15" key="15">
        <Accordion.Header data-icon="logix">Logix</Accordion.Header>
         <Accordion.Body>
                      <div class="intro-content">
            <p class="intro-text">
               We integrate intelligence into the backbone of business operations. From automated workflows to adaptive dashboards, our solutions simplify complexity and drive efficiency across digital ecosystems.
            </p>
             <div className="btn-border"><a href="../Work/case-studies#logix"><span>View Projects</span></a></div>
        </div>

             <div class="services-grid">
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI Commerce Tools</h3>
                </div>
                <p class="card-body">
                   We deploy AI engines that optimize pricing, product recommendations and inventory management in real time. These tools enhance conversion, reduce friction and enable smarter, data-led commerce experiences.
                </p>
            </div>
            
            <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI Dashboards</h3>
                </div>
                <p class="card-body">
                   Our AI dashboards consolidate cross-channel data into intuitive visual reports. They help teams identify patterns, forecast outcomes and make informed business decisions instantly.
                </p>
            </div>

              <div class="service-card">
                <div class="service-header">
                    
                    <h3 class="card-title">AI Workflow Automations</h3>
                </div>
                <p class="card-body">
                   We build automation systems that learn, predict and act on operational data. These AI-driven workflows streamline repetitive tasks, minimize errors and improve overall productivity.
                </p>
            </div>
        </div>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
<div className='overlapBg bgPink overlapBgLeftBottom'></div>
<div className='overlapBg bgBlue overlapBgLeftBottom'></div>

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

<section className='center bg-design'><div className='container'>
  
  <h2 className='sizeH1 bold'>Let’s Build the Future of Brand<br/> Intelligence Together</h2>

    <div className="btn-border"><a href="#"><span>Connect Now</span></a></div>

</div></section>




    <Footer />
  </>
  )
}

export default AI
