import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import HeroBanner from '../Components/HeroBanner';

import Services from '../Components/Services';
import ServicesList from '../Components/ServicesList';
import LogosSlider from '../Components/LogosSlider';
import Social from '../Components/Social';
import Calculat from '../Components/Calculat';
import gsap from 'gsap'
import WeMakeIdeasPerform from '../Components/WeMakeIdeasPerform';
import { IoStarSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { SlArrowRightCircle } from "react-icons/sl";
import SVGCurveLine from '../Hooks/SVGCurveLine';
import HomeBlogs from "../Components/HomeBlogs";
import TextType from '../Components/TextType';

// new homepage Images
import pretBg from '../Assets/Images/pret-bg.jpg';
import glassImg from '../Assets/Images/Glass.png';
import arrowImg from '../Assets/Images/arrow.png';
import tata from '../Assets/Images/tata.jpg';
import adityaBirlaCapital from '../Assets/Images/aditya-birla-capital.jpg';
import relianceGeneral from '../Assets/Images/reliance-general-insurance.jpg';
import godrejImg from '../Assets/Images/godrej-laffair.jpg';
import zuma from '../Assets/Images/zuma.jpg';
import starIcon from '../Assets/Images/star-icon.png';
import accordionPlus from '../Assets/Images/icons/accordion-plus.svg';
import accordionMinus from '../Assets/Images/icons/accordion-minus.svg';
import aiLabsGif from '../Assets/Images/AI-labs.gif';
import logo09 from '../Assets/Images/09.png';
import logo09Model from '../Assets/Images/09.glb';
import starsIcon from '../Assets/Images/stars.png';
import yellowStar from '../Assets/Images/yellow-star.png';
import adityaBirla from '../Assets/Images/logos/brandlogo/aditya-birla.png';
import reliance from '../Assets/Images/logos/brandlogo/reliance-general-insurance.png';
import luxeCard from '../Assets/Images/logos/brandlogo/luxe-giftcard.png';
import natch from '../Assets/Images/logos/brandlogo/natch.png';
import rbl from '../Assets/Images/logos/brandlogo/rbl.png';

import relianceGeneralLogo from '../Assets/Images/logos/homelogo/01.jpg';
import trust from '../Assets/Images/logos/homelogo/02.jpg';
import bitsom from '../Assets/Images/logos/homelogo/03.jpg';
import bitspilani from '../Assets/Images/logos/homelogo/04.jpg';
import oberoi from '../Assets/Images/logos/homelogo/05.jpg';
import ryan from '../Assets/Images/logos/homelogo/06.jpg';
import thakurTrusts from '../Assets/Images/logos/homelogo/07.jpg';
import americanTourister from '../Assets/Images/logos/homelogo/08.jpg';
import tataMotorsCommercial from '../Assets/Images/logos/homelogo/09.jpg';
import wurthLogo from '../Assets/Images/logos/homelogo/10.jpg';
import adityaBirlaLogo from '../Assets/Images/logos/homelogo/11.jpg';
import edelweiss from '../Assets/Images/logos/homelogo/12.jpg';
import igcb from '../Assets/Images/logos/homelogo/13.jpg';
import iifl from '../Assets/Images/logos/homelogo/14.jpg';
import invesco from '../Assets/Images/logos/homelogo/15.jpg';
import noaura from '../Assets/Images/logos/homelogo/16.jpg';
import luxeLogo from '../Assets/Images/logos/homelogo/17.jpg';
import godrejLaffaireLogo from '../Assets/Images/logos/homelogo/18.jpg';
import natchLogo from '../Assets/Images/logos/homelogo/19.jpg';
import starwars from '../Assets/Images/logos/homelogo/20.jpg';
import mahindraSolarize from '../Assets/Images/logos/homelogo/21.jpg';
import tommyHilfigerLogo from '../Assets/Images/logos/homelogo/22.jpg';
import lokmat from '../Assets/Images/logos/homelogo/23.jpg';
import disney from '../Assets/Images/logos/homelogo/24.jpg';
import tips from '../Assets/Images/logos/homelogo/25.jpg';
import samsonite from '../Assets/Images/logos/homelogo/26.jpg';
import godrejLogo from '../Assets/Images/logos/homelogo/27.jpg';
import hp from '../Assets/Images/logos/homelogo/28.jpg';
import oxemberg from '../Assets/Images/logos/homelogo/29.jpg';
import barc from '../Assets/Images/logos/homelogo/30.jpg';






import AOS from 'aos';
import 'aos/dist/aos.css';



const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return <span ref={ref}>{count}</span>;
};



// Images end

export const statsData = [
  {
    id: 1,
    end: 13,
    desc: <>years of solving for<br /> tomorrow, everyday</>
  },
  {
    id: 2,
    end: 85,
    desc: <>Specialists - Cross functional,<br />Cross Disciplinary, Always Connected</>
  },
  {
    id: 6,
    end: 600,
    desc: <>Project delivered<br /> across 4 continents</>
  }
];

export const whatWeDoData = [
  {
    id: 1,
    title: "Strategy & Growth",
    subItems: [
      "Brand strategy & positioning", "Brand launch & relaunch",
      "Audience insight & segmentation", "Marketing consulting (CMO)",
      "Go-to-market & growth playbooks", "IP creation",
      "eCommerce growth"
    ],
    link: "/work/case-studies#all"
  },
  {
    id: 2,
    title: "Creative & Content",
    subItems: [
      "Social media content", "Copywriting",
      "Visual design", "Creative campaigns"
    ],
    link: "/work/case-studies#content"
  },
  {
    id: 3,
    title: "Tech & Platforms",
    subItems: [
      "Website development", "Mobile app development",
      "E-commerce platforms", "Custom software solutions"
    ],
    link: "/work/case-studies#tech"
  },
  {
    id: 4,
    title: "Media & Performance",
    subItems: [
      "Performance marketing", "Media planning & buying",
      "SEO & SEM", "Data analytics & reporting"
    ],
    link: "/work/case-studies#performance-marketing"
  },
  {
    id: 5,
    title: "Search & Discovery",
    subItems: [
      "Search engine optimization", "App store optimization",
      "Voice search strategy", "Local SEO"
    ],
    link: "/work/case-studies#keyword"
  },
  {
    id: 6,
    title: "Films & Production",
    subItems: [
      "Corporate films", "Ad commercials",
      "2D/3D animation", "Product shoots"
    ],
    link: "/work/case-studies#production"
  }
];

export const aiLabsLeftData = [
  {
    id: 1,
    title: "AI Video",
    description: <>Predictive insights and market intelligence</>
  },
  {
    id: 2,
    title: "AI Music & Voiceovers",
    description: <>Scalable content creation, personalisation and optimisation.</>
  },
  {
    id: 3,
    title: "Automation",
    description: <>Smarter workflows that improve speed and efficiency.</>
  }
];

export const aiLabsRightData = [
  {
    id: 1,
    title: "AI Characters & Mascots",
    description: <>Predictive insights and market intelligence</>
  },
  {
    id: 2,
    title: "AI 3D",
    description: <>Scalable content creation, personalisation and optimisation.</>
  },
  {
    id: 3,
    title: "Deep Research",
    description: <>Smarter workflows that improve speed and efficiency.</>
  }
];

const WhatWeDoAccordion = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    if (openId === id) setOpenId(null);
    else setOpenId(id);
  }

  return (
    <div className="accordionGrid">
      <div className="accordionCol">
        {whatWeDoData.filter((_, i) => i % 2 === 0).map((item) => (
          <div className={`accItem ${openId === item.id ? 'open' : ''}`} key={item.id}>
            <div className="accHeader" onClick={() => toggle(item.id)}>
              <div className="accTitleWrap">
                <h3>{item.title}</h3>
                <span className="accArrow"><img src={arrowImg} alt="" /></span>
              </div>
              <div className="accIcon">
                <img src={openId === item.id ? accordionMinus : accordionPlus} alt="Toggle" />
              </div>
            </div>
            <div className={`accBodyWrap ${openId === item.id ? 'open' : ''}`}>
              <div className="accBodyInner">
                {item.subItems && item.subItems.length > 0 && (
                  <div className="accBody">
                    <div className="accSubItemsGrid">
                      {item.subItems.map((sub, index) => (
                        <div className="accSubItem" key={index}>
                          <span className="accLine"></span>
                          <p>{sub}</p>
                        </div>
                      ))}
                    </div>
                    <div className="accBtnWrap">
                      <Link to={item.link} className="btn09 btn-outline">View Work</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="accordionCol">
        {whatWeDoData.filter((_, i) => i % 2 !== 0).map((item) => (
          <div className={`accItem ${openId === item.id ? 'open' : ''}`} key={item.id}>
            <div className="accHeader" onClick={() => toggle(item.id)}>
              <div className="accTitleWrap">
                <h3>{item.title}</h3>
                <span className="accArrow"><img src={arrowImg} alt="" /></span>
              </div>
              <div className="accIcon">
                <img src={openId === item.id ? accordionMinus : accordionPlus} alt="Toggle" />
              </div>
            </div>
            <div className={`accBodyWrap ${openId === item.id ? 'open' : ''}`}>
              <div className="accBodyInner">
                {item.subItems && item.subItems.length > 0 && (
                  <div className="accBody">
                    <div className="accSubItemsGrid">
                      {item.subItems.map((sub, index) => (
                        <div className="accSubItem" key={index}>
                          <span className="accLine"></span>
                          <p>{sub}</p>
                        </div>
                      ))}
                    </div>
                    <div className="accBtnWrap">
                      <Link to={item.link} className="btn09 btn-outline">View Work</Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Array of select work items
export const selectWorkData = [
  {
    id: 1,
    bgImage: pretBg,
    glassImage: glassImg,
    desc: <>Growing Pret's discovery with one value hook</>,
    stats: [
      { value: "523%", label: "Rise in sandwich sales" },
    ],
    brand: "Pret",
    tags: "Strategy | Outdoor | Social | Content",
    link: "/work/case-studies/pret-x-mi"
  },

  {
    id: 2,
    bgImage: tata,
    glassImage: glassImg,
    desc: <>Growing Tata Motors' digital ecosystem through consolidation</>,
    stats: [
      { value: "4.33L", label: "Monthly traffic across 7 sites" },
    ],
    brand: "Tata Motors",
    tags: "UI UX | Web Design | Development",
    link: "/work/case-studies/tata-trucks"
  },
  {
    id: 3,
    bgImage: adityaBirlaCapital,
    glassImage: glassImg,
    desc: <>Growing Aditya Birla Capital's LinkedIn into a category leader</>,
    stats: [
      { value: "566K", label: "Followers" },
      { value: "9.1x", label: "BFSI engagement" }
    ],
    brand: "Aditya Birla Capital",
    tags: "Employer Branding | Social | Content",
    link: "/work/case-studies/strengthening-abfls-social-media-presence-with-a-high-impact-follower-growth-campaign"
  },
  {
    id: 4,
    bgImage: relianceGeneral,
    glassImage: glassImg,
    desc: <>Growing Reliance General Insurance's relevance with #Womentum</>,
    stats: [
      { value: "73L+", label: "Reach, nationwide" },
    ],
    brand: "Reliance General Insurance",
    tags: "Influencer Management",
    link: "/work/case-studies/boosting-agent-recruitment-with-a-targeted-meta-lead-generation-campaign-for-reliance-general-insurance"
  },
  {
    id: 5,
    bgImage: godrejImg,
    glassImage: glassImg,
    desc: <>Growing Godrej L’Affair’s creator ecosystem through a culture-led IP</>,
    stats: [
      { value: "100M+", label: "Views" },
      { value: "12,000+", label: "Creators" }
    ],
    brand: "Godrej L’Affair",
    tags: "Strategy | Influencer | Social | Content",
    link: "/work/case-studies/godrej-laffaire"
  },
  {
    id: 6,
    bgImage: zuma,
    glassImage: glassImg,
    desc: <>Growing Zuma's luxury sales by converting high-intent demand</>,
    stats: [
      { value: "2Cr+", label: "In online sales" },
    ],
    brand: "Zuma",
    tags: "Performance Marketing",
    link: "/work/case-studies/luxury-meets-performance-driving-sales-and-awareness-for-zuma-across-digital-platforms"
  }
];

// Array of work items


const HomeNew = () => {
  const sectionRef = useRef(null);
  const modelViewerRef = useRef(null);
  const marqueeRef = useRef(null);
  const [firstCompleted, setFirstCompleted] = useState(false);
  const [secondCompleted, setSecondCompleted] = useState(false);

  const BASE_THETA = 90;   // straight-on default
  const BASE_PHI = 90;     // fixed vertical angle, no up/down tilt
  const MAX_SWING = 15;    // max left/right degrees (tune 10-25 to taste)
  const EASE = 0.06;       // lower = smoother/slower follow, higher = snappier

  // Start marquee animation when section comes into view
  useEffect(() => {
    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) return;

    let observer;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              if (observer) {
                observer.unobserve(entry.target);
              }
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(marqueeEl);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,  // Animation duration
      once: true,     // Whether animation should happen only once
      offset: 100,      // Offset (in px) from the original trigger point
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const modelViewer = modelViewerRef.current;
    if (!section || !modelViewer) return;

    let targetTheta = BASE_THETA;
    let currentTheta = BASE_THETA;
    let rafId;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const clampedX = Math.min(Math.max(x, 0), 1);
      targetTheta = BASE_THETA + (clampedX - 0.5) * 2 * MAX_SWING;
    };

    const handleMouseLeave = () => {
      targetTheta = BASE_THETA;
    };

    const animate = () => {
      currentTheta += (targetTheta - currentTheta) * EASE;
      modelViewer.cameraOrbit = `${currentTheta.toFixed(2)}deg ${BASE_PHI}deg 105%`;
      rafId = requestAnimationFrame(animate);
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>

      <Helmet>
        <title>Advertising Agency | Brand Agency in Mumbai - AGENCY09 </title>
        <meta name="robots" content="index, follow" />
        <meta name="title" content="AGENCY09" />

        <meta name="description" content="AGENCY09 is a leading advertising agency in Mumbai. We grow brands with ideas for content, technology, design & data to implement growth strategies with results." />
        <link rel="canonical" href="https://www.agency09.in/" />

        <meta property="og:title" content="Advertising Agency | Brand Agency in Mumbai - AGENCY09 " />
        <meta property="og:description" content="AGENCY09 is a leading advertising agency in Mumbai. We grow brands with ideas for content, technology, design & data to implement growth strategies with results." />
        <meta property="og:image" content="https://www.agency09.in/agency09.png" />
        <meta property="og:type" content="website" />


        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AGENCY09" />
        <meta name="twitter:creator" content="@AGENCY09" />
        <meta name="twitter:url" content="https://www.agency09.in/" />
        <meta name="twitter:description" content=" AGENCY09 is a leading advertising agency in Mumbai. We grow brands with ideas for content, technology, design & data to implement growth strategies with results." />
        <meta name="twitter:image" content="https://www.agency09.in/agency09.png" />
      </Helmet>



      <Header />

      {/* Hero */}
      <section className='Homebanner'>
        <div className='container'>
          <div className='bannerHeading'>
            <h1 data-aos="fade-up">
              <TextType
                as="span"
                className="banner-first-line"
                text="We Deliver"
                loop={false}
                typingSpeed={75}
                showCursor={!firstCompleted}
                cursorCharacter="_"
                onSentenceComplete={() => setFirstCompleted(true)}
              />
              {firstCompleted && (
                <TextType
                  as="span"
                  text="Growth"
                  loop={false}
                  typingSpeed={75}
                  showCursor={!secondCompleted}
                  cursorCharacter="_"
                  onSentenceComplete={() => setSecondCompleted(true)}
                />
              )}
            </h1>
            <div className='bannerbtn text-center' data-aos="fade-up" data-aos-delay="600">
              <Link className='btn09' to="/connect">Let’s Talk</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Hero */}


      {/* Our Ideas */}

      <section className='homeAbout'>
        <div className='container'>
          <div className='homeAboutHd text-center'>
            <h2 data-aos="fade-up">We Scale Brands with Ideas for<br /> Content, Tech, Design & Data</h2>
          </div>
          <div className='homeAboutContent'>
            <div className='statsRow'>
              {statsData.map((stat, index) => (
                <React.Fragment key={stat.id}>
                  <div className='statItem'>
                    <h3><Counter end={stat.end} duration={2000} />+</h3>
                    <p data-aos="fade-up">{stat.desc}</p>
                  </div>
                  {index < statsData.length - 1 && (
                    <div className='statItem'>
                      <img src={starIcon} alt="Star Icon" className="starIcon" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

          </div>
        </div>
      </section>
      {/* Our Ideas */}

      {/* Select Work */}

      <section className='selectWork'>
        <div className='container'>
          <div className='selectWorkHd text-center'>
            <h2 data-aos="fade-up">Selected Work</h2>
          </div>
          <div className='selectWorkGrid'>
            {selectWorkData.map((item) => (
              <Link to={item.link || '/work'} className='selectWorkItem' key={item.id}>
                <div className="workItemImage">
                  <img src={item.bgImage} alt={item.brand || "Work Image"} className="workItemImg" />
                  <div className="glassOverlay" style={{ backgroundImage: `url(${item.glassImage})` }}>
                    <div className="glassContent">
                      <div className="arrowIcon">
                        <img src={arrowImg} alt="arrow" />
                      </div>
                      <div className="glassTextWrap">
                        <p className="glassDesc" data-aos="fade-up">{item.desc}</p>
                        <div className="glassStats" data-aos="fade-up" data-aos-delay="200">
                          {item.stats.map((stat, index) => (
                            <div className="gStat" key={index}>
                              <h4>{stat.value}</h4><span>{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="workItemFooter">
                  <div className="workBrand">{item.brand}</div>
                  <div className="workTags">{item.tags}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className='selectworkBtn text-center' data-aos="fade-up">
            <Link className='btn09' to="/work/case-studies">View All Work</Link>
          </div>
        </div>
      </section>

      {/* Select Work */}

      {/*Idea*/}
      <section className='homeIdea'>
        <div className='container'>
          <div className='ideaWrap'>
            <div className='ideaLeft'>
              <h2 data-aos="fade-up">WE MAKE<br /> IDEAS PERFORM <img src={starIcon} alt="Star" className="ideaStar" /></h2>
            </div>
            <div className='ideaRight'>
              <p data-aos="fade-up">We are an independent agency combining content & tech to implement growth strategies with results.</p>
              <div className='ideaBtnWrap' data-aos="fade-up">
                <Link to="/about" className="btn09">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Idea*/}

      {/*What We Do*/}

      <section className='homeWhatwedo' ref={sectionRef}>
        <div className='container'>
          <div className='homeWhatwedoHd text-center'>
            <h2 data-aos="fade-up">What We Do</h2>
          </div>
          <div className='homewhatwedoAccordian'>
            <WhatWeDoAccordion />
          </div>
          <div className='ai-labs-list'>
            <div className="aiLabsLeft">
              {aiLabsLeftData.map((item) => (
                <div className="aiLabItem" key={item.id}>
                  <div className="aiLabItemHeader">
                    <img src={starsIcon} alt="stars" className="aiLabStar" />
                    <h4>{item.title}</h4>
                  </div>
                  <p data-aos="fade-up">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="aiLabsMiddle">
              <div className="aiLabsGifWrap" style={{ backgroundImage: `url(${aiLabsGif})` }}>
                <div className="aiLabsGlassBox" ref={sectionRef}>
                  <model-viewer
                    ref={modelViewerRef}
                    src={logo09Model}
                    poster={logo09}
                    alt="09 Logo"
                    className="logo09-img logo09-model"
                    camera-orbit="90deg 90deg 105%"
                    interaction-prompt="none"
                    disable-zoom
                    disable-pan
                    disable-tap
                    camera-controls={false}
                  ></model-viewer>
                  <h3>AI Labs</h3>
                </div>
              </div>
            </div>

            <div className="aiLabsRight">
              {aiLabsRightData.map((item) => (
                <div className="aiLabItem" key={item.id}>
                  <div className="aiLabItemHeader">
                    <img src={starsIcon} alt="stars" className="aiLabStar" />
                    <h4>{item.title}</h4>
                  </div>
                  <p data-aos="fade-up">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*What We Do*/}

      {/*marquee*/}

      <section className="homeMarquee" ref={marqueeRef}>
        <div className="marqueetextWrap">
          <div className="marqueeTrack">
            <div className="textWithStar">
              <p>
                Driving growth, with a focus on positivity, creativity, and doing what's right.
              </p>
              <img src={yellowStar} alt="" className="marqueeStarImg" />
            </div>
            <div className="textWithStar" aria-hidden="true">
              <p>
                Driving growth, with a focus on positivity, creativity, and doing what's right.
              </p>
              <img src={yellowStar} alt="" className="marqueeStarImg" />
            </div>
          </div>
        </div>
      </section>

      {/*marquee*/}


      {/*Brands*/}

      <section className="homeBrands">
        <div className="">
          <div className="homeBrandsHd text-center">
            <h2 data-aos="fade-up">Brands Grown</h2>
          </div>

          <div className="homeBrandsSliderWrap">
            <div className="homeBrandsRow reverse">
              <div className="homeBrandsSlider">
                <div className="brandItem"><img src={relianceGeneralLogo} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={trust} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={bitsom} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={bitspilani} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={oberoi} alt="Brand Logo" /></div>

                {/* duplicate for seamless loop */}
                <div className="brandItem"><img src={ryan} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={thakurTrusts} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={americanTourister} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={tataMotorsCommercial} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={wurthLogo} alt="Brand Logo" /></div>

                {/* duplicate for seamless loop */}
                <div className="brandItem"><img src={adityaBirlaLogo} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={edelweiss} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={igcb} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={iifl} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={invesco} alt="Brand Logo" /></div>
              </div>
            </div>

            <div className="homeBrandsRow">
              <div className="homeBrandsSlider">
                <div className="brandItem"><img src={noaura} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={luxeLogo} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={godrejLaffaireLogo} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={natchLogo} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={starwars} alt="Brand Logo" /></div>

                {/* duplicate for seamless loop */}
                <div className="brandItem"><img src={mahindraSolarize} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={tommyHilfigerLogo} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={lokmat} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={disney} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={tips} alt="Brand Logo" /></div>

                {/* duplicate for seamless loop */}
                <div className="brandItem"><img src={samsonite} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={godrejLogo} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={hp} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={oxemberg} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={barc} alt="Brand Logo" /></div>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/*Brands*/}

      {/*Our Culture*/}

      <section className="homeCulture">
        <div className="container">
          <div className="homeCultureContent">
            <p data-aos="fade-up">We’re building a culture of progressive thinking open minded folks who are well equipped to tackle the nuances of communicating with the thumb generation.</p>
            <div className="homeCultureBtn text-center" data-aos="fade-up" data-aos-delay="200">
              <Link to="/careers" className="btn09">Our Culture</Link>
            </div>
          </div>
        </div>
      </section>
      {/*Our Culture*/}


      {/* Star IconWhat's NewStar Icon */}
      <section className="homeBlogsSection">
        <HomeBlogs />
      </section>
      {/* Star IconWhat's NewStar Icon End */}

      {/*CTA Home*/}

      <section className='Homebanner homeCta'>
        <div className='container'>
          <div className='bannerHeading'>
            <h3 data-aos="fade-up">Let’s Talk<span>Growth</span></h3>
            <div className='bannerbtn text-center' data-aos="fade-up">
              <Link className='btn09' to="/connect">Connect Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/*CTA Home*/}
      <Footer />
    </>
  )
}

export default HomeNew