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
import animateGsap from '../Components/Animation/HomeGsap';
import { IoStarSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { SlArrowRightCircle } from "react-icons/sl";
import SVGCurveLine from '../Hooks/SVGCurveLine';
// Images
import barc from '../Assets/Images/work/BARC.webp';
import godrejlaffaire from '../Assets/Images/work/Laffaire.webp';
import TataMotors from '../Assets/Images/work/Tatamotors-new.jpg';
import Tribevibe from '../Assets/Images/work/LaffaireSelect.jpg';
import GroupSoft from '../Assets/Images/work/GroupSoft.webp';
import podcast from '../Assets/Images/work/podcast-new.jpg';
import rgi from '../Assets/Images/work/rgi.webp';
import HomeBlogs from "../Components/HomeBlogs";

// new homepage Images
import pretBg from '../Assets/Images/pret-bg.png';
import glassImg from '../Assets/Images/Glass.png';
import arrowImg from '../Assets/Images/arrow.png';
import tatamotors from '../Assets/Images/tata.png';
import starIcon from '../Assets/Images/star-icon.png';
import accordionPlus from '../Assets/Images/icons/accordion-plus.png';
import accordionMinus from '../Assets/Images/icons/accordion-minus.png';
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



const Counter = ({ end, duration = 2000 }) => {


  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end, duration]);

  return <span>{count}</span>;
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
    link: "/work"
  },
  {
    id: 2,
    title: "Creative & Content",
    subItems: [
      "Social media content", "Copywriting",
      "Visual design", "Creative campaigns"
    ],
    link: "/work"
  },
  {
    id: 3,
    title: "Tech & Platforms",
    subItems: [
      "Website development", "Mobile app development",
      "E-commerce platforms", "Custom software solutions"
    ],
    link: "/work"
  },
  {
    id: 4,
    title: "Media & Performance",
    subItems: [
      "Performance marketing", "Media planning & buying",
      "SEO & SEM", "Data analytics & reporting"
    ],
    link: "/work"
  },
  {
    id: 5,
    title: "Search & Discovery",
    subItems: [
      "Search engine optimization", "App store optimization",
      "Voice search strategy", "Local SEO"
    ],
    link: "/work"
  },
  {
    id: 6,
    title: "Films & Production",
    subItems: [
      "Corporate films", "Ad commercials",
      "2D/3D animation", "Product shoots"
    ],
    link: "/work"
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
                {openId === item.id && <span className="accArrow">↗</span>}
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
                {openId === item.id && <span className="accArrow"><img src={arrowImg} /></span>}
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
    desc: <>Growing Godrej L'Affair's creator<br />ecosystem through a culture-led IP</>,
    stats: [
      { value: "566k", label: "followers" },
      { value: "9.1x", label: "BFSI engagement" }
    ],
    brand: "Pret",
    tags: "Strategy | Outdoor | Social | Content"
  },

  {
    id: 2,
    bgImage: tatamotors,
    glassImage: glassImg,
    desc: <>Growing Godrej L'Affair's creator<br />ecosystem through a culture-led IP</>,
    stats: [
      { value: "566k", label: "followers" },
      { value: "9.1x", label: "BFSI engagement" }
    ],
    brand: "Tata Motors",
    tags: "Strategy | Outdoor | Social | Content"
  },
  {
    id: 3,
    bgImage: tatamotors,
    glassImage: glassImg,
    desc: <>Growing Godrej L'Affair's creator<br />ecosystem through a culture-led IP</>,
    stats: [
      { value: "566k", label: "followers" },
      { value: "9.1x", label: "BFSI engagement" }
    ],
    brand: "Aditya Birla Capital",
    tags: "Employer Branding | Social | Content"
  },
  {
    id: 4,
    bgImage: tatamotors,
    glassImage: glassImg,
    desc: <>Growing Godrej L'Affair's creator<br />ecosystem through a culture-led IP</>,
    stats: [
      { value: "566k", label: "followers" },
      { value: "9.1x", label: "BFSI engagement" }
    ],
    brand: "Reliance general Insurance",
    tags: "Influencer Management"
  },
  {
    id: 5,
    bgImage: tatamotors,
    glassImage: glassImg,
    desc: <>Growing Godrej L'Affair's creator<br />ecosystem through a culture-led IP</>,
    stats: [
      { value: "566k", label: "followers" },
      { value: "9.1x", label: "BFSI engagement" }
    ],
    brand: "Godrej L’Affair",
    tags: "Strategy | Influencer | Social | Content"
  },
  {
    id: 6,
    bgImage: tatamotors,
    glassImage: glassImg,
    desc: <>Growing Godrej L'Affair's creator<br />ecosystem through a culture-led IP</>,
    stats: [
      { value: "566k", label: "followers" },
      { value: "9.1x", label: "BFSI engagement" }
    ],
    brand: "Zuma",
    tags: "Performance Marketing"
  }
];

// Array of work items
export const workItems = [
  {
    id: 1,
    title: "Driving Visibility and Engagement for Tata Motors' Commercial Vehicle Lineup",
    tags: [
      { name: 'Digital Strategy', },
      { name: 'UI/UX', },
      { name: 'Web Development', }
    ],
    image: TataMotors,
    link: '/work/case-studies/tata-trucks',
    brand: 'TATA Trucks',
    department: 'Tech'
  },
  {
    id: 2,
    title: 'Visualizing Insights: Award-Winning Yearbook for BARC India',
    tags: [
      { name: 'Annual Report', },
      { name: 'Book Design', },
      { name: 'Infographics', }
    ],
    image: barc,
    link: '/work/case-studies/barc-india-yearbook',
    brand: "BARC India Yearbook",
    department: 'Design'
  },
  {
    id: 6,
    title: 'Unearthing India’s Next Big Content Creator with Godrej L’Affaire Select',
    tags: [
      { name: 'Brand Strategy', },
      { name: 'Community Management', },
      { name: 'IP Creation', }
    ],
    image: godrejlaffaire,
    link: '/work/case-studies/godrej-laffaire',
    brand: "Godrej Laffaire",
    department: 'Content'
  },
  {
    id: 5,
    title: 'Modernizing Digital Identity: Revamped Website for Global SaaS Company Groupsoft',
    tags: [
    ],
    image: GroupSoft,
    link: '/work/case-studies/groupsoft',
    brand: "Groupsoft",
    department: 'Tech'
  },
  {
    id: 1,
    title: "Podcast - Tata Steel",
    tags: [
    ],
    image: podcast,
    link: '/work/case-studies/podcast',
    brand: "",
    department: "Production"
  },

  {
    id: 1,
    title: 'Innovative Product Communication for Enhanced Brand Visibility',
    tags: [
    ],
    image: rgi,
    link: '/work/case-studies/product-communication-for-reliance-general-insurance',
    brand: "",
    department: 'Content'
  },
];

const HomeNew = () => {

  useEffect(() => {
    const cleanup = animateGsap();
    return cleanup;
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
            <h1>We Deliver<span>Growth</span></h1>
            <div className='bannerbtn text-center'>
              <Link className='btn09' href='/'>Let’s Talk</Link>
            </div>
          </div>
        </div>
      </section>
      {/* Hero */}


      {/* Our Ideas */}

      <section className='homeAbout'>
        <div className='container'>
          <div className='homeAboutHd text-center'>
            <h2>We Scale Brands with Ideas for<br />Content, Tech, Design & Data</h2>
          </div>
          <div className='homeAboutContent'>
            <div className='statsRow'>
              {statsData.map((stat, index) => (
                <React.Fragment key={stat.id}>
                  <div className='statItem'>
                    <h3><Counter end={stat.end} duration={2000} />+</h3>
                    <p>{stat.desc}</p>
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
            <h2>Select Work</h2>
          </div>
          <div className='selectWorkGrid'>
            {selectWorkData.map((item) => (
              <div className='selectWorkItem' key={item.id}>
                <div className="workItemImage">
                  <img src={item.bgImage} alt={item.brand || "Work Image"} className="workItemImg" />
                  <div className="glassOverlay" style={{ backgroundImage: `url(${item.glassImage})` }}>
                    <div className="glassContent">
                      <div className="arrowIcon">
                        <img src={arrowImg} alt="arrow" />
                      </div>
                      <div className="glassTextWrap">
                        <p className="glassDesc">{item.desc}</p>
                        <div className="glassStats">
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
              </div>
            ))}
          </div>
          <div className='selectworkBtn text-center'>
            <Link className='btn09' to="/work">View All Work</Link>
          </div>
        </div>
      </section>

      {/* Select Work */}

      {/*Idea*/}
      <section className='homeIdea'>
        <div className='container'>
          <div className='ideaWrap'>
            <div className='ideaLeft'>
              <h2>WE MAKE<br />IDEAS PERFORM <img src={starIcon} alt="Star" className="ideaStar" /></h2>
            </div>
            <div className='ideaRight'>
              <p>We are an independent agency combining content & tech to implement growth strategies with results.</p>
              <div className='ideaBtnWrap'>
                <Link to="/about" className="btn09">Know More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Idea*/}

      {/*What We Do*/}

      <section className='homeWhatwedo'>
        <div className='container'>
          <div className='homeWhatwedoHd text-center'>
            <h2>What We Do</h2>
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
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="aiLabsMiddle">
              <div className="aiLabsGifWrap" style={{ backgroundImage: `url(${aiLabsGif})` }}>
                <div className="aiLabsGlassBox">
                  <model-viewer
                    src={logo09Model}
                    poster={logo09}
                    alt="09 Logo"
                    className="logo09-img logo09-model"
                    auto-rotate
                    camera-controls
                    ar
                    disable-zoom
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
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*What We Do*/}

      {/*marquee*/}

      <section className="homeMarquee">
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
            <h2>Brands Grown</h2>
          </div>

          <div className="homeBrandsSliderWrap">
            <div className="homeBrandsRow">
              <div className="homeBrandsSlider">
                <div className="brandItem"><img src={adityaBirla} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={reliance} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={luxeCard} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={natch} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={rbl} alt="Brand Logo" /></div>

                {/* duplicate for seamless loop */}
                <div className="brandItem"><img src={adityaBirla} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={reliance} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={luxeCard} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={natch} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={rbl} alt="Brand Logo" /></div>
              </div>
            </div>

            <div className="homeBrandsRow reverse">
              <div className="homeBrandsSlider">
                <div className="brandItem"><img src={adityaBirla} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={reliance} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={luxeCard} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={natch} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={rbl} alt="Brand Logo" /></div>

                {/* duplicate for seamless loop */}
                <div className="brandItem"><img src={adityaBirla} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={reliance} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={luxeCard} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={natch} alt="Brand Logo" /></div>
                <div className="brandItem"><img src={rbl} alt="Brand Logo" /></div>
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
            <p>We’re building a culture of progressive thinking open minded folks who are well equipped to tackle the nuances of communicating with the thumb generation.</p>
            <div className="homeCultureBtn text-center">
              <Link to="/culture" className="btn09">Our Culture</Link>
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
      
      <section className='Homebanner'>
        <div className='container'>
          <div className='bannerHeading'>
            <h1>Let’s Talk<span>Growth</span></h1>
            <div className='bannerbtn text-center'>
              <Link className='btn09' href='/'>Let’s Talk</Link>
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