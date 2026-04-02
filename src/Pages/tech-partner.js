import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProjectForm from '../Components/Forms/ProjectForm';
import AuditForm from '../Components/Forms/AuditForm';
import AGENCY09logo from '../Assets/Images/agency09.webp';
import './tech-partner.css';
import RGI from '../Assets/Images/logos/rgi.jpg'
import Samsonite from '../Assets/Images/logos/samsonite.jpg'
import Lakme from '../Assets/Images/logos/lakme.jpg'
import Siyaram from '../Assets/Images/logos/work/fashion_lifestyle/siyaram.png'
import Godrej from '../Assets/Images/logos/godrej.jpg'
import Tata from '../Assets/Images/logos/tata-motors.jpg'
import Jupiter from '../Assets/Images/logos/work/health_wellness/jupiterhospital.png'
import Digital from '../Assets/Images/icons/digital-platform.png'
import ECommerce from '../Assets/Images/icons/e-commerce.png'
import Software from '../Assets/Images/icons/software-and-product.png'
import Mobile from '../Assets/Images/icons/mobile-apps.png'
import Automation from '../Assets/Images/icons/automation.png'
import Ai from '../Assets/Images/icons/ai-solutions.png'
import Conversational from '../Assets/Images/icons/conversational-ai.png'
import TataMotors from '../Assets/Images/work/tata-motors.png'
import Ryan from '../Assets/Images/work/ryan.png'
import Pride from '../Assets/Images/work/pride.png'
import DigitalJourney from '../Assets/Images/icons/digital-journey.png'
import Workflow from '../Assets/Images/icons/workflow.png'
import System from '../Assets/Images/icons/system.png'
import Growth from '../Assets/Images/icons/growth.png'
import Natch from '../Assets/Images/work/natch.jpeg'


function TechPartner() {
  const [openFaq, setOpenFaq] = useState(0);
  const [openCase, setOpenCase] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    const handleScroll = () => {
      const bg = document.querySelector('.tech-partner-hero-bg img');
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.15}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const toggleCase = (index) => {
    setOpenCase(openCase === index ? -1 : index);
  };

  return (
    <>

     <Helmet>
          <title>Build Digital Platforms That Scale Businesses | Top Creative & Digital Marketing Agency in Mumbai, India</title>
          <link rel="canonical" href="https://www.agency09.in/about"/>
          <meta name="robots" content="index, follow"/> 
    
          <meta name="description" content="From enterprise websites to AI-powered automation — we build technology systems designed for growth, operational efficiency, and long-term scale."/>
          <meta property="og:title" content="Build Digital Platforms That Scale Businesses | Top Creative & Digital Marketing Agency in Mumbai, India"/> 
          <meta property="og:description" content="From enterprise websites to AI-powered automation — we build technology systems designed for growth, operational efficiency, and long-term scale."/> 
          <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
          <meta property="og:type" content="website"/> 
    
    
          <meta name="twitter:card" content="summary"/> 
          <meta name="twitter:site" content="@AGENCY09"/> 
          <meta name="twitter:creator" content="@AGENCY09"/> 
          <meta name="twitter:url" content="https://www.agency09.in/about"/> 
          <meta name="twitter:description" content="From enterprise websites to AI-powered automation — we build technology systems designed for growth, operational efficiency, and long-term scale."/> 
          <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 
    
        </Helmet>
      <header className="tech-partner-header">
        <div className="tp-header-container">
          <div className="tp-logo">
            <Link to="/"><img src={AGENCY09logo} loading="lazy" alt="AGENCY09" /></Link>
          </div>
          <nav className={`tp-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>SERVICES</a></li>
              <li><a href="#work" onClick={() => setMobileMenuOpen(false)}>WORK</a></li>
              <li><a href="#process" onClick={() => setMobileMenuOpen(false)}>PROCESS</a></li>
              <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQS</a></li>
            </ul>
          </nav>
          <div className="tp-header-right">
            <a href="#bannerform" className="btn-primary tp-header-btn">BOOK A CALL</a>
            <button className={`tp-mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
              <span className="tp-bar"></span>
              <span className="tp-bar"></span>
              <span className="tp-bar"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="spacer tp-spacer"></div>
      <div className="app-wrapper">
        <section className="tech-partner-hero" style={{ paddingTop: '60px' }}>
          <div className="tech-partner-hero-bg">
            <img src="https://www.figma.com/api/mcp/asset/3178ce01-a5a9-47e7-a9ea-68e9e420e81b" alt="" />
          </div>
          <div className="tech-partner-hero-content">
            <div className="label-pill fade-up">
              <img src="https://www.figma.com/api/mcp/asset/eda3cf04-4f88-4046-9c1d-93e0503b9f8e" alt="" /> Technology Partner
            </div>
            <h1 className="fade-up" style={{ transitionDelay: '0.1s' }}>
              Build Digital<br />Platforms That<br /><span className="blue">Scale Businesses.</span>
            </h1>
            <p className="desc fade-up" style={{ transitionDelay: '0.2s' }}>
              From enterprise websites to AI-powered automation — we build technology systems designed for growth, operational efficiency, and long-term scale.
            </p>
            <div className="tech-partner-hero-stats fade-up" style={{ transitionDelay: '0.3s' }}>
              <div className="stat-pill"><span className="dot"></span><strong>12+</strong>&nbsp;Years</div>
              <div className="stat-pill"><span className="dot"></span><strong>90+</strong>&nbsp;Specialists</div>
              <div className="stat-pill"><span className="dot"></span><strong>600+</strong>&nbsp;Projects</div>
            </div>
            <a href="#contact" className="btn-primary fade-up" style={{ transitionDelay: '0.4s' }}>Request Free Audit</a>
          </div>
          <div className="tech-partner-hero-form-card fade-up" style={{ transitionDelay: '0.2s' }} id="bannerform">
            <ProjectForm />
          </div>
        </section>

        <div className="trust-bar fade-up">
          <p>Trusted by 200+ ambitious brands and enterprise teams</p>
          <div className="logos-row">
            <img src={RGI} alt="RGI" />
            <img src={Samsonite} alt="samsonite" />
            <img src={Lakme} alt="Lakme fashion week" />
            <img src={Siyaram} alt="Siyaram" />
            <img src={Godrej} alt="Godrej" />
            <img src={Tata} alt="Tata Motors" />
            <img src={Jupiter} alt="Jupiter Hospital" />
          </div>
        </div>

        <section id="recognition">
          <div className="section-header fade-up">
            <div className="label-pill"><img src="https://www.figma.com/api/mcp/asset/eda3cf04-4f88-4046-9c1d-93e0503b9f8e" alt="" /> Recognition</div>
            <h2 className="section-title">Is This Where Your<br />Business Is Today?</h2>
          </div>
          <div className="pain-grid fade-up">
            <div className="pain-item">
              <div className="pain-num">01</div>
              <h3>Your website looks the part but it's not generating enough business</h3>
              <p>Traffic exists. Conversions don't follow. The digital presence is there but the pipeline doesn't reflect it.</p>
            </div>
            <div className="pain-item">
              <div className="pain-num">02</div>
              <h3>Internal processes still run on spreadsheets and manual follow-ups</h3>
              <p>Your team spends more time managing data than making decisions. Operations don't scale without the right systems.</p>
            </div>
            <div className="pain-item">
              <div className="pain-num">03</div>
              <h3>Your tools, platforms, and teams aren't connected properly</h3>
              <p>Every department uses different software. Nothing talks to anything. Data lives in silos and insights stay invisible.</p>
            </div>
            <div className="pain-item">
              <div className="pain-num">04</div>
              <h3>You need a stronger digital foundation to scale confidently</h3>
              <p>The ambition is there. The technology infrastructure to support the next phase of growth isn't yet built.</p>
            </div>
          </div>
          <div className="pain-footer fade-up">
            <p>If this sounds familiar, the problem usually isn't effort — it's the system.</p>
            <a href="#bannerform" className="btn-primary">Book a Call</a>
          </div>
        </section>

        <section id="services" style={{ background: '#fafafa' }}>
          <div className="section-header fade-up">
            <div className="label-pill"><img src="https://www.figma.com/api/mcp/asset/eda3cf04-4f88-4046-9c1d-93e0503b9f8e" alt="" /> What We Build</div>
            <h2 className="section-title">Technology Solutions<br />Built Around Business Needs</h2>
          </div>
          <div className="tech-partner-services-grid fade-up">
            <div className="service-card">
              <div className="service-icon">
                <img src={Digital} />
              </div>
              <h3>Digital Platforms</h3>
              <ul><li>Corporate Websites</li><li>CMS Platforms</li><li>Web Applications</li><li>Landing Pages</li></ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src={ECommerce} />
              </div>
              <h3>E-commerce</h3>
              <ul><li>Shopify Stores</li><li>Custom E-commerce</li><li>WooCommerce</li><li>D2C Storefronts</li></ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src={Software} />
              </div>
              <h3>Software &amp; Product</h3>
              <ul><li>Custom Software</li><li>SaaS Platforms</li><li>Enterprise Dashboards</li><li>Internal Tools</li></ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src={Mobile} />
              </div>
              <h3>Mobile Apps</h3>
              <ul><li>Customer Apps</li><li>Internal Apps</li><li>Field &amp; Delivery Apps</li><li>Cross-platform</li></ul>
            </div>
          </div>
          <div className="tech-partner-services-grid fade-up">
            <div className="service-card">
              <div className="service-icon">
                <img src={Automation} />
              </div>
              <h3>Automation</h3>
              <ul><li>Workflow Automation</li><li>CRM / ERP Integration</li><li>Data Systems</li><li>Process Engineering</li></ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src={Ai} />
              </div>
              <h3>AI Solutions</h3>
              <ul><li>AI Copilots</li><li>AI Dashboards</li><li>Insight Engines</li><li>Predictive Systems</li></ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src={Conversational} />
              </div>
              <h3>Conversational AI</h3>
              <ul><li>Custom Chatbots</li><li>WhatsApp Automation</li><li>Lead Qualification</li><li>AI Support Agents</li></ul>
            </div>
            <div className="service-card highlight">
              <h3>Not sure which solution fits?</h3>
              <p className="service-cta-text">Let's figure out the right tech stack and approach for your business together.</p>
              <a href="#bannerform" className="btn-outline-white">Book a Call</a>
            </div>
          </div>
        </section>

        <section id="capabilities">
          <div className="section-header fade-up">
            <div className="label-pill"><img src="https://www.figma.com/api/mcp/asset/eda3cf04-4f88-4046-9c1d-93e0503b9f8e" alt="" /> Capabilities</div>
            <h2 className="section-title">Built Across Modern<br />Technology Stacks</h2>
          </div>
          <div className="stacks-grid fade-up">
            <div className="stack-card">
              <h3>Frontend</h3>
              <div className="tags"><span className="tag">React</span><span className="tag">Next.js</span><span className="tag">JavaScript</span><span className="tag">TypeScript</span><span className="tag">HTML / CSS</span><span className="tag">Webflow</span><span className="tag">PHP</span></div>
            </div>
            <div className="stack-card">
              <h3>Backend</h3>
              <div className="tags"><span className="tag">Node.js</span><span className="tag">Rest APIs</span><span className="tag">GraphQL</span><span className="tag">Python</span><span className="tag">PHP</span></div>
            </div>
            <div className="stack-card">
              <h3>CMS &amp; E-commerce</h3>
              <div className="tags"><span class="tag">WordPress</span><span className="tag">WooCommerce</span><span className="tag">Shopify</span><span className="tag">Strapi</span></div>
            </div>
            <div className="stack-card">
              <h3>Mobile</h3>
              <div className="tags"><span className="tag">Flutter</span><span className="tag">React Native</span><span className="tag">Android</span><span className="tag">iOS</span></div>
            </div>
            <div className="stack-card">
              <h3>Cloud &amp; Infra</h3>
              <div className="tags"><span className="tag">AWS</span><span className="tag">Vercel</span><span className="tag">Docker</span><span className="tag">Google Cloud</span><span className="tag">Firebase</span></div>
            </div>
            <div className="stack-card">
              <h3>AI &amp; Integrations</h3>
              <div className="tags"><span className="tag">OpenAI</span><span className="tag">LangChain</span><span className="tag">WhatsApp API</span><span className="tag">ERP Systems</span><span className="tag">CRM APIs</span></div>
            </div>
          </div>
        </section>

        <section id="work" style={{ background: '#fafafa' }}>
          <div className="section-header fade-up">
            <div className="label-pill"><img src={TataMotors} alt="" /> Outcomes</div>
            <h2 className="section-title">Technology Solutions<br />Built Around Business Needs</h2>
          </div>
          <div className="tech-partner-case-studies">
            <div>
              <div className="case-card fade-up">
                <img src="https://www.figma.com/api/mcp/asset/b55cccf6-677b-47c5-a677-14599a53c54f" alt="Tata Motors" className="case-img" />
                <div className="case-card-body">
                  <span className="category-pill">Enterprise</span>
                  <h3>Tata Motors</h3>
                  <p>Unified a fragmented commercial vehicle digital ecosystem into a scalable, high-performance platform with measurable business impact across the full digital estate.</p>
                  <div className="metrics-row">
                    <span className="metric-pill">&#8593; 59% time on site</span>
                    <span className="metric-pill">&#8593; 136% engagement</span>
                  </div>
                  <div className="metrics-row">
                    <span className="metric-pill">&#8593; 21% organic users</span>
                    <span className="metric-pill">4.33L monthly traffic</span>
                  </div>
                  <hr className="case-divider" />
                  <div className="case-tags">
                    <span className="tag" style={{ fontSize: '13px' }}>Digital Ecosystem</span>
                    <span className="tag" style={{ fontSize: '13px' }}>CMS</span>
                    <span className="tag" style={{ fontSize: '13px' }}>UX</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Web Platform</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="case-col-right">
              <div className="case-card fade-up" style={{ transitionDelay: '0.1s' }}>
                <img src={Ryan} alt="Ryan Group" className="case-img" />
                <div className="case-card-body">
                  <span className="category-pill">Education</span>
                  <h3>Ryan Group</h3>
                  <p>Consolidated 100+ school websites under a single CMS — streamlining content management, brand consistency, and operations at scale.</p>
                  <hr className="case-divider" />
                  <div className="case-tags">
                    <span className="tag" style={{ fontSize: '13px' }}>CMS Platform</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Multi-site</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Operational Efficiency Across Schools</span>
                  </div>
                </div>
              </div>
              <div className="case-card fade-up" style={{ transitionDelay: '0.2s' }}>
                <img src={Natch} alt="Pride of Cows" className="case-img" />
                <div className="case-card-body">
                  <span className="category-pill">FMCG</span>
                  <h3>Natch Snacks</h3>
                  <p>Reimagined the brand’s D2C website with a cleaner Shopify experience focused on clearer product journeys, lower buying friction, and stronger conversion intent.</p>
                  <div className="metrics-row">
                    <span className="metric-pill">Smoother buying journey</span>
                    <span className="metric-pill">Better product discovery</span>
                  </div>
                  <div className="metrics-row">
                    <span className="metric-pill">Optimised CTAs</span>
                    <span className="metric-pill">Lower decision friction</span>
                  </div>
                  <hr className="case-divider" />
                  <div className="case-tags">
                    <span className="tag" style={{ fontSize: '13px' }}>Website Revamp</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Shopify</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Conversion Optimisation</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Ux Enhancement</span>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="case-accordion">
            <div className={`case-accordion-item ${openCase === 0 ? 'open' : ''}`}>
              <button className="case-accordion-header" onClick={() => toggleCase(0)}>
                <div className="case-acc-title">
                  <span className="acc-cat">Enterprise</span>
                  <span className="acc-name">Tata Motors</span>
                </div>
                <span className="case-acc-toggle">+</span>
              </button>
              <div className="case-accordion-body">
                <img src="https://www.figma.com/api/mcp/asset/b55cccf6-677b-47c5-a677-14599a53c54f" alt="Tata Motors" className="case-img" />
                <div className="case-card-body">
                  <p>Unified a fragmented commercial vehicle digital ecosystem into a scalable, high-performance platform with measurable business impact across the full digital estate.</p>
                  <div className="metrics-row">
                    <span className="metric-pill">&#8593; 59% time on site</span>
                    <span className="metric-pill">&#8593; 136% engagement</span>
                  </div>
                  <div className="metrics-row">
                    <span className="metric-pill">&#8593; 21% organic users</span>
                    <span className="metric-pill">4.33L monthly traffic</span>
                  </div>
                  <hr className="case-divider" />
                  <div className="case-tags">
                    <span className="tag" style={{ fontSize: '13px' }}>Digital Ecosystem</span>
                    <span className="tag" style={{ fontSize: '13px' }}>CMS</span>
                    <span className="tag" style={{ fontSize: '13px' }}>UX</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Web Platform</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`case-accordion-item ${openCase === 1 ? 'open' : ''}`}>
              <button className="case-accordion-header" onClick={() => toggleCase(1)}>
                <div className="case-acc-title">
                  <span className="acc-cat">Education</span>
                  <span className="acc-name">Ryan Group</span>
                </div>
                <span className="case-acc-toggle">+</span>
              </button>
              <div className="case-accordion-body">
                <img src="https://www.figma.com/api/mcp/asset/8c34112a-aeb0-4844-bb6f-d981606eac56" alt="Ryan Group" className="case-img" />
                <div className="case-card-body">
                  <p>Consolidated 100+ school websites under a single CMS — streamlining content management, brand consistency, and operations at scale.</p>
                  <hr className="case-divider" />
                  <div className="case-tags">
                    <span className="tag" style={{ fontSize: '13px' }}>CMS Platform</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Multi-site</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Operational Efficiency Across Schools</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`case-accordion-item ${openCase === 2 ? 'open' : ''}`}>
              <button className="case-accordion-header" onClick={() => toggleCase(2)}>
                <div className="case-acc-title">
                  <span className="acc-cat">FMCG</span>
                  <span className="acc-name">Natch Snacks</span>
                </div>
                <span className="case-acc-toggle">+</span>
              </button>
              <div className="case-accordion-body">
                <img src={Natch} alt="Natch Snacks" className="case-img" />
                <div className="case-card-body">
                  <p>Reimagined the brand’s D2C website with a cleaner Shopify experience focused on clearer product journeys, lower buying friction, and stronger conversion intent.</p>
                   <div className="metrics-row">
                    <span className="metric-pill">Smoother buying journey</span>
                    <span className="metric-pill">Better product discovery</span>
                  </div>
                  <div className="metrics-row">
                    <span className="metric-pill">Optimised CTAs</span>
                    <span className="metric-pill">Lower decision friction</span>
                  </div>
                  <hr className="case-divider" />
                  <div className="case-tags">
                    <span className="tag" style={{ fontSize: '13px' }}>Website Revamp</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Shopify</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Conversion Optimisation</span>
                    <span className="tag" style={{ fontSize: '13px' }}>Ux Enhancement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="process">
          <div className="section-header fade-up">
            <div className="label-pill"><img src="https://www.figma.com/api/mcp/asset/eda3cf04-4f88-4046-9c1d-93e0503b9f8e" alt="" /> How We Work</div>
            <h2 className="section-title">How We Build</h2>
          </div>
          <div className="how-section">
            <div>
              <div className="how-steps fade-up">
                <div className="step"><div className="step-num">01</div><h3>Discovery</h3><p>Business goals, user needs, technical landscape</p></div>
                <div className="step"><div class="step-num">02</div><h3>Architecture</h3><p>Product structure, stack decisions, system design</p></div>
                <div className="step"><div className="step-num">03</div><h3>UX &amp; UI</h3><p>Wireframes, design systems, prototype validation</p></div>
                <div className="step"><div className="step-num">04</div><h3>Development</h3><p>Engineering, integrations, iterative delivery</p></div>
                <div className="step"><div className="step-num">05</div><h3>QA &amp; Launch</h3><p>Testing, performance tuning, deployment</p></div>
                <div className="step"><div className="step-num">06</div><h3>Scale &amp; Support</h3><p>Maintenance, roadmap, continuous improvement</p></div>
              </div>
            </div>
            <div className="audit-form-card fade-up" id="audit">
              <AuditForm />
            </div>
          </div>
        </section>

        <section id="cost">
          <div className="section-header fade-up">
            <div className="label-pill"><img src="https://www.figma.com/api/mcp/asset/eda3cf04-4f88-4046-9c1d-93e0503b9f8e" alt="" /> The Real Cost</div>
            <h2 className="section-title">The Cost of Waiting<br />Is Higher Than It Looks</h2>
          </div>
          <div className="cost-grid fade-up">
            <div className="cost-card"><div className="cost-icon"><img src={DigitalJourney} /></div><h3>Lost leads from weak digital journeys</h3><p>Traffic exists. Conversions don't follow. The digital presence is there but the pipeline doesn't reflect it.</p></div>
            <div className="cost-card"><div className="cost-icon"><img src={Workflow} /></div><h3>Operational delays from manual workflows</h3><p>Manual processes don't scale. They create bottlenecks, errors, and team burnout that compound as you grow.</p></div>
            <div className="cost-card"><div className="cost-icon"><img src={System} /></div><h3>Fragmented systems slowing teams down</h3><p>Disconnected platforms mean duplicated effort, delayed reporting, and decisions made on incomplete information.</p></div>
            <div className="cost-card"><div className="cost-icon"><img src={Growth} /></div><h3>Missed growth from disconnected data</h3><p>Without unified data and automation, your growth opportunities stay invisible and your competitors move faster.</p></div>
          </div>
          <div className="cost-footer fade-up">
            <p>The businesses that move fastest are the ones that build first.</p>
            <a href="#bannerform" className="btn-primary">Book a Call</a>
          </div>
        </section>

        <section id="faq" style={{ background: '#fafafa' }}>
          <div className="section-header fade-up" style={{ textAlign: 'center' }}>
            <div className="label-pill" style={{ margin: '0 auto 24px' }}><img src="https://www.figma.com/api/mcp/asset/eda3cf04-4f88-4046-9c1d-93e0503b9f8e" alt="" /> Questions</div>
            <h2 className="section-title" style={{ maxWidth: '700px', margin: '0 auto' }}>Frequently Asked</h2>
          </div>
          <div className="faq-grid fade-up">
            <div className="faq-col">
              {[
                { q: "What technologies do you use for developing corporate websites?", a: "We specialize in PHP, WordPress, Drupal, Angular, Node.js, Laravel, and React to build professional, responsive, and high-performance corporate websites tailored to your business needs." },
                { q: "What eCommerce platforms do you work with?", a: "We work with Shopify, WooCommerce, custom React-based storefronts, and headless commerce architectures — choosing the right platform based on your catalog, growth plans, and UX requirements." },
                { q: "What programming languages and frameworks do you use for software development?", a: "We primarily use Node.js, Python, PHP, and JavaScript/TypeScript with frameworks like React, Next.js, and Express — selected based on project requirements, scalability needs, and your existing tech ecosystem." },
                { q: "What technologies do you use for web applications?", a: "For web applications we use React or Next.js on the frontend, paired with Node.js or Python backends, REST or GraphQL APIs, and cloud infrastructure on AWS, Google Cloud, or Vercel." },
                { q: "Which frameworks and languages do you use for mobile app development?", a: "We build mobile apps using Flutter and React Native for cross-platform projects, and native Swift/Kotlin for performance-critical iOS and Android applications." },
                { q: "How do you ensure the security of eCommerce platforms?", a: "Security is built into every layer: SSL/TLS encryption, secure payment gateway integration, role-based access, regular audits, OWASP best practices, and PCI-DSS compliance for payment flows." }
              ].map((faq, idx) => (
                <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFaq(idx)}>
                    {faq.q}<span className="faq-toggle">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="faq-col">
              {[
                { q: "Can you integrate existing systems with new ERP solutions?", a: "Yes — we specialize in integration architecture. Whether connecting your existing CRM, ERP, or third-party tools via APIs, we design systems that communicate in real-time and reduce data silos." },
                { q: "Do you provide maintenance and support for software you develop?", a: "Absolutely. We offer ongoing maintenance packages including monitoring, bug fixes, performance optimization, security patches, and feature roadmap execution after launch." },
                { q: "Can you customize HR portals to fit our specific needs?", a: "Yes. We build and customize HR portals — from employee self-service modules and onboarding flows to payroll integrations and attendance management — designed around your exact workflows." },
                { q: "How do you approach a new tech project?", a: "We follow a structured 6-step process: Discovery → Architecture → UX/UI → Development → QA & Launch → Scale & Support. Every project starts with a deep-dive discovery session." },
                { q: "Do you offer free audits for our existing tech infrastructure?", a: "Yes — we offer complimentary technology audits with no commitment required. Our senior team reviews your current stack and delivers a tailored report within 48 hours." },
                { q: "How do you handle project timelines and delivery?", a: "We use agile delivery in 2-week sprints with clear milestones, regular demos, and transparent reporting. Timelines are set collaboratively and we flag risks early — no surprises at the end." }
              ].map((faq, idx) => {
                const globalIdx = idx + 6;
                return (
                  <div key={globalIdx} className={`faq-item ${openFaq === globalIdx ? 'open' : ''}`}>
                    <button className="faq-question" onClick={() => toggleFaq(globalIdx)}>
                      {faq.q}<span className="faq-toggle">+</span>
                    </button>
                    <div className="faq-answer">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-bottom" id="contact">
          <div className="label-pill" style={{ margin: '0 auto 24px', justifyContent: 'center' }}><img src="https://www.figma.com/api/mcp/asset/eda3cf04-4f88-4046-9c1d-93e0503b9f8e" alt="" /> Let's Build</div>
          <h2 className="fade-up">Technology That Moves<br />Your Business Forward</h2>
          <p className="fade-up">Whether you need a high-performance website, custom software, automation infrastructure, or AI-powered systems — let's build what your business needs next.</p>
          <div className="cta-btn-row fade-up">
            <a href="#bannerform" className="btn-primary">Book a Call</a>
            <a href="#audit" className="btn-outline-blue">Request a Free Audit</a>
          </div>
          <p className="sub fade-up">No sales pressure. Just a focused conversation about what you're building.</p>
        </section>


        <div className="mobile-sticky-cta">
          <a href="#bannerform" className="book">Book a Call</a>
          <a href="#audit" className="audit">Request Free Audit</a>
        </div>
      </div>

      <footer className="tp-footer">
        <div className="tp-footer-container">
          <div className="tp-footer-logo">
            <Link to="/"><img src={AGENCY09logo} alt="AGENCY09" /></Link>
          </div>
          <div className="tp-footer-copy">
            © 2026 Agency09. All rights reserved.
          </div>
          <div className="tp-footer-links">
            <Link to="/privacy-policy">Privacy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default TechPartner;
