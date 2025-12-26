import React from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import StartAProjectFormPopup from '../../Components/Forms/StartAProjectFormPopup';
import Testimonias from '../../Components/Testimonias';

import Accordion from 'react-bootstrap/Accordion';
import SVGCurveLine from '../../Hooks/SVGCurveLine'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import LogosSlider from '../../Components/LogosSlider';
import { useMediaQuery } from 'react-responsive';

import { PiStarFourFill } from "react-icons/pi";
import { GoNorthStar } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// Images
import ourServiesBtn from '../../Assets/Images/icons/ourServiesBtn.webp';
import pattern from '../../Assets/Images/icons/patternTech.webp';
import tataMotors2 from '../../Assets/Images/logos/work/tataMotors2.png';
import bitsPilani from '../../Assets/Images/logos/work/bitsPilani.png';
import starY from '../../Assets/Images/icons/star.webp';
import nahar from '../../Assets/Images/work/nahar.jpg';
import ryan from '../../Assets/Images/work/Ryan.webp';
import solarize from '../../Assets/Images/work/mahindrasolariz.jpg';
import ryanlogo from '../../Assets/Images/logos/work/education/ryan.png';
import ourwork1 from '../../Assets/Images/work/ourwork-4.webp';
import ourwork2 from '../../Assets/Images/work/ourwork-1.webp';
import ourwork3 from '../../Assets/Images/work/ourwork-3.webp';


import igcb from '../../Assets/Images/logos/work/BFSI/igcb.png';
import ryanGroup from '../../Assets/Images/logos/work/education/ryan.png';
import athenarenewable from '../../Assets/Images/logos/work/energy/athena-renewable.png';
import siyarams from '../../Assets/Images/logos/work/retail_fmcg/siyarams.png';


import Amazonas_4U from '../../Assets/Images/work/Amazonas_4U.jpg';
import groupsoft from '../../Assets/Images/work/Groupsoft.jpg';
import igcb2 from '../../Assets/Images/work/IGCB.jpg';
// Images end



// CaseStudySlider 
const CaseStudySlider = {
    dots: false,
    arrows: true,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
        breakpoint: 968,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        },
    },
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        },
    },
    ],
};
// CaseStudySlider End

 

const Keyword = () => {
  const [OpenModalStartAProjectFormPopup, setOpenModalStartAProjectFormPopup] = React.useState(false);




// Services Data
  const servicesData = [
    {
      key: "0",
      header: "SEO",
      description: "Optimize your website for search engines. We conduct thorough keyword research, on-page and off-page optimization, and technical SEO to ensure your site ranks higher and attracts relevant traffic.",
      tags: [],
    },
    {
      key: "1",
      header: "ORM (Online Reputation Management)",
      description: "Protect and enhance your brand's online reputation with our ORM services. We monitor, manage, and respond to online reviews and mentions, ensuring a positive and trustworthy image for your business.",
      tags: [],
    },
    {
      key: "2",
      header: "GMB (Google My Business)",
      description: "Enhance your local search presence with our Google My Business optimization services. We manage your GMB profile to ensure accurate information, engaging content, and positive reviews, helping you attract local customers.",
      tags: [],
    },
    {
      key: "3",
      header: "GA4 Integrations",
      description: "Leverage the power of Google Analytics 4 with our seamless integration services. We set up and configure GA4 to provide you with actionable insights into your website's performance and user behavior, enabling data-driven decision-making.",
      tags: [],
    },
    {
      key: "4",
      header: "Local Listings",
      description: "Ensure your business appears in local search results with our local listings management services. We optimize your business information across various online directories to improve your visibility and attract local customers.",
      tags: [],
    },
    {
      key: "5",
      header: "Digital PR",
      description: "Build authority and drive traffic with our digital PR services. We create and distribute high-quality content to relevant online publications and influencers, enhancing your brand's visibility and reputation.",
      tags: [],
    },

    {
      key: "6",
      header: "LLM Optimisation (AI Search Visibility)",
      description: "Optimize your brand’s presence across Large Language Models like ChatGPT, Gemini, Perplexity and Google AI Overviews. We structure and optimise your content to improve discoverability, accuracy and brand mentions within AI-generated responses.",
      tags: [],
    },
    {
      key: "7",
      header: "AEO (Answer Engine Optimisation)",
      description: "Rank where users get direct answers. Our AEO services focus on optimising content for featured snippets, FAQs and AI-driven answer engines ensuring your brand appears in zero-click searches and voice results.",
      tags: [],
    },
    {
      key: "8",
      header: "GEO (Generative Engine Optimisation)",
      description: "Prepare your content for generative search experiences. We optimise your website and content to be easily understood, cited and surfaced by generative AI platforms to improve brand visibility beyond traditional search results.",
      tags: [],
    },
    {
      key: "9",
      header: "Voice Search Optimisation",
      description: "Capture voice-based queries from smart assistants like Google Assistant and Alexa. We optimise conversational keywords, local intent and structured data to help your brand appear in voice search results.",
      tags: [],
    },
    

    
  ];
// Services Data




//CaseStudy Data
const CaseStudyData = [


  {
        id: 1,
        title: 'Fixing Speed, Authority & Visibility: A Dual-Country SEO Success for iGCB',
        tags: [
            { name: 'Banking Software', link: '' },
            { name: 'Website & SEO', link: '' }
        ],
        image: igcb2,
        link: '/work/case-studies/igcb-dual-country-seo-success',
        brand: "iGCB",
        department: 'Keyword'
    },

    {
        id: 1,
        title: 'From Technical Errors to Organic Wins: How Groupsoft US Reclaimed Its Digital Presence',
        tags: [
            { name: 'SAP Software Solutions', link: '' },
            { name: 'Website & SEO', link: '' }
        ],
        image: groupsoft,
        link: '/work/case-studies/groupsoft-us-organic-seo-recovery',
        brand: "Groupsoft US",
        department: 'Keyword'
    },

    {
        id: 1,
        title: 'Boosting Organic Growth for the Organic Brand: Amazonas 4U’s Digital Climb',
        tags: [
            { name: 'Food products supplier', link: '' },
            { name: 'Website & SEO', link: '' }
        ],
        image: Amazonas_4U,
        link: '/work/case-studies/amazonas-4u-organic-growth',
        brand: "Amazonas 4U",
        department: 'Keyword'
    },



    {
      id:14,
      title:'Massive Organic Growth for Nahar Group’s Search Presence',
      tags:[
        {name:'Digital Marketing'},
        {name:'SEO'}
      ],
      image:nahar,
      link:'/work/case-studies/massive-organic-growth-for-nahar-groups-search-presence',
      brand:'Nahar Group',
      department:'keyword'
    },
    {
      id:15,
      title:'Consolidation of 91+ Websites and Tremendous SEO Growth for Ryan Group',
      tags:[
        {name:'Digital Marketing'},
        {name:'SEO'},
        {name:'Website Consolidation'}
      ],
      image:ryanGroup,
      link:'/work/case-studies/consolidation-of-91-plus-websites-and-tremendous-seo-growth-for-ryan-group',
      brand:'Ryan Group',
      department:'keyword'
    },
    {
      id:16,
      title:'Industry Leading Organic Search Results from Scratch for Mahindra Solarize',
      tags:[
        {name:'Digital Marketing'},
        {name:'SEO'},
        {name:'Website Launch'}
      ],
      image:solarize,
      link:'/work/case-studies/industry-leading-organic-search-results-from-scratch-for-mahindra-solarize',
      brand:'Mahindra Solarize',
      department:'keyword'
    }
  ];
//CaseStudy Data End
 
// FAQS
const faqsData = [
  {
    key: "0",
    question: "1. What is SEO, and why is it important for my business?",
    answer: "SEO, or search engine optimization, is the process of improving your website's visibility on search engines like Google. It's essential for driving organic traffic, increasing online visibility, and attracting potential customers who are actively searching for your products or services."
  },
  {
    key: "1",
    question: "2. What does AGENCY09's SEO service include?",
    answer: "Our SEO services include keyword research, on-page and off-page optimization, technical SEO, content creation, link building, and performance tracking. We tailor our approach to meet your specific business needs and goals."
  },
  {
    key: "2",
    question: "3. How long does it take to see results from SEO?",
    answer: "SEO is a long-term strategy, and results can vary based on factors like industry competitiveness and current website performance. Typically, you can expect to see significant improvements within 3 to 6 months of implementing our SEO strategies."
  },
  {
    key: "3",
    question: "4. What is ORM, and how can it benefit my business?",
    answer: "ORM, or Online Reputation Management, involves monitoring and managing your brand's online presence to ensure a positive image. It helps build trust with customers, mitigate negative feedback, and enhance your overall reputation."
  },
  {
    key: "4",
    question: "5. How does Google My Business optimization help my local business?",
    answer: "Optimizing your Google My Business profile improves your visibility in local search results, making it easier for potential customers to find and engage with your business. It includes managing your business information, responding to reviews, and posting updates."
  },
  {
    key: "5",
    question: "6. What are GA4 Integrations, and why should I use them?",
    answer: "GA4 (Google Analytics 4) is the latest version of Google's analytics platform, providing advanced insights into user behavior and website performance. Integrating GA4 helps you make data-driven decisions to improve your digital marketing strategies."
  },
  {
    key: "6",
    question: "7. Why are local listings important for my business?",
    answer: "Local listings ensure your business information is accurate and consistent across various online directories. This improves your local search visibility, helps customers find you easily, and enhances your credibility."
  },
  {
    key: "7",
    question: "8. How can digital PR improve my SEO efforts?",
    answer: "Digital PR involves creating and distributing content to high-authority websites and influencers, generating backlinks and increasing your website's authority. This not only enhances your SEO but also drives referral traffic and builds brand recognition."
  },
  {
    key: "8",
    question: "9. Do you provide customized SEO strategies for different industries?",
    answer: "Yes, we tailor our SEO strategies to meet the unique needs and challenges of various industries. Our approach is customized based on your business goals, target audience, and competitive landscape."
  },
  {
    key: "9",
    question: "10. How can I get started with AGENCY09's SEO services?",
    answer: "To get started, simply contact us to schedule a consultation. We'll discuss your business goals, assess your current SEO performance, and develop a customized strategy to help you achieve your objectives."
  },

];
// FAQS End

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Keyword | Best SEO Agency in Mumbai, India - AGENCY09",
  "alternateName": "SEO agency in Mumbai,",
  "url": "https://www.agency09.in/solutions/keyword",
  "image": "https://www.agency09.in/static/media/agency-light.cb89964a3a95c2a6e647.webp",
  "description": "Grow your digital presence with AGENCY09, your trusted SEO agency in Mumbai, India. We offer YouTube SEO, eCommerce SEO, B2B SEO, App Store optimization services, ORM, and more.",
  "serviceType": [
    "SEO",
    "ORM (Online Reputation Management)",
    "GMB (Google My Business)",
    "GA4 Integrations",
    "Local Listings",
    "Digital PR"
  ],
  "provider": {
    "@type": "Organization",
    "name": "AGENCY09",
    "url": "https://www.agency09.in",
    "logo": "https://www.agency09.in/static/media/agency09.923830080930008a8a99.webp",
    "sameAs": [
      "https://www.linkedin.com/company/agency09/",
      "https://www.instagram.com/agency09/",
      "https://www.youtube.com/channel/UCT7wE543Vl0LSrpCmpMzZrg",
      "https://twitter.com/AGENCY09",
      "https://www.facebook.com/agency09/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "101, Meghdoot, Junction of Linking & Turner Rd., Above Bank of Baroda Bank, Opp HP Petrol Pump, Bandra West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400050",
      "addressCountry": "IN"
    }
  },
  "areaServed": [
    { "@type": "Place", "name": "India" },
    { "@type": "Place", "name": "Dubai" },
    { "@type": "Place", "name": "Australia" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "AGENCY09 SEO Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO",
          "description": "Optimize your website for search engines. We conduct thorough keyword research, on-page and off-page optimization, and technical SEO to ensure your site ranks higher and attracts relevant traffic."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "ORM (Online Reputation Management)",
          "description": "Protect and enhance your brand's online reputation with our ORM services. We monitor, manage, and respond to online reviews and mentions, ensuring a positive and trustworthy image for your business."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "GMB (Google My Business)",
          "description": "Enhance your local search presence with our Google My Business optimization services. We manage your GMB profile to ensure accurate information, engaging content, and positive reviews, helping you attract local customers."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "GA4 Integrations",
          "description": "Leverage the power of Google Analytics 4 with our seamless integration services. We set up and configure GA4 to provide you with actionable insights into your website's performance and user behavior, enabling data-driven decision-making."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local Listings",
          "description": "Ensure your business appears in local search results with our local listings management services. We optimize your business information across various online directories to improve your visibility and attract local customers."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital PR",
          "description": "Build authority and drive traffic with our digital PR services. We create and distribute high-quality content to relevant online publications and influencers, enhancing your brand's visibility and reputation."
        }
      }
    ]
  },
  "brand": {
    "@type": "Brand",
    "name": "AGENCY09"
  }
};

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SEO, and why is it important for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO, or search engine optimization, is the process of improving your website's visibility on search engines like Google. It's essential for driving organic traffic, increasing online visibility, and attracting potential customers who are actively searching for your products or services."
        }
      },
      {
        "@type": "Question",
        "name": "What does AGENCY09's SEO service include?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our SEO services include keyword research, on-page and off-page optimization, technical SEO, content creation, link building, and performance tracking. We tailor our approach to meet your specific business needs and goals."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO is a long-term strategy, and results can vary based on factors like industry competitiveness and current website performance. Typically, you can expect to see significant improvements within 3 to 6 months of implementing our SEO strategies."
        }
      },
      {
        "@type": "Question",
        "name": "What is ORM, and how can it benefit my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ORM, or Online Reputation Management, involves monitoring and managing your brand's online presence to ensure a positive image. It helps build trust with customers, mitigate negative feedback, and enhance your overall reputation."
        }
      },
      {
        "@type": "Question",
        "name": "How does Google My Business optimization help my local business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Optimizing your Google My Business profile improves your visibility in local search results, making it easier for potential customers to find and engage with your business. It includes managing your business information, responding to reviews, and posting updates."
        }
      },
      {
        "@type": "Question",
        "name": "What are GA4 Integrations, and why should I use them?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GA4 (Google Analytics 4) is the latest version of Google's analytics platform, providing advanced insights into user behavior and website performance. Integrating GA4 helps you make data-driven decisions to improve your digital marketing strategies."
        }
      },
      {
        "@type": "Question",
        "name": "Why are local listings important for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local listings ensure your business information is accurate and consistent across various online directories. This improves your local search visibility, helps customers find you easily, and enhances your credibility."
        }
      },
      {
        "@type": "Question",
        "name": "How can digital PR improve my SEO efforts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digital PR involves creating and distributing content to high-authority websites and influencers, generating backlinks and increasing your website's authority. This not only enhances your SEO but also drives referral traffic and builds brand recognition."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide customized SEO strategies for different industries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we tailor our SEO strategies to meet the unique needs and challenges of various industries. Our approach is customized based on your business goals, target audience, and competitive landscape."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with AGENCY09's SEO services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To get started, simply contact us to schedule a consultation. We'll discuss your business goals, assess your current SEO performance, and develop a customized strategy to help you achieve your objectives."
        }
      }
    ]
  };


  return (
    <>
    <Helmet>
      <title>Keyword | Best SEO Agency in Mumbai, India - AGENCY09</title>
      <meta name="robots" content="index, follow"/> 

      <meta name="description" content="Grow your digital presence with AGENCY09, your trusted SEO agency in Mumbai, India. We offer YouTube SEO, eCommerce SEO, B2B SEO, App Store optimization services, ORM, and more."/>
      <link rel="canonical" href="https://www.agency09.in/services/keyword.php"/>

      <meta property="og:title" content="Keyword | Best SEO Agency in Mumbai, India - AGENCY09"/> 
      <meta property="og:description" content="Grow your digital presence with AGENCY09, your trusted SEO agency in Mumbai, India. We offer YouTube SEO, eCommerce SEO, B2B SEO, App Store optimization services, ORM, and more."/> 
      <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
      <meta property="og:type" content="website"/> 
      <meta name="twitter:card" content="summary"/> 
      <meta name="twitter:site" content="@AGENCY09"/> 
      <meta name="twitter:creator" content="@AGENCY09"/> 
      <meta name="twitter:url" content="https://www.agency09.in/services/keyword.php"/> 
      <meta name="twitter:description" content="Grow your digital presence with AGENCY09, your trusted SEO agency in Mumbai, India. We offer YouTube SEO, eCommerce SEO, B2B SEO, App Store optimization services, ORM, and more."/> 
      <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/>
      <script type="application/ld+json" innerHTML={JSON.stringify(schemaData)} />
      <script type="application/ld+json" innerHTML={JSON.stringify(faqSchema)} />
    
    </Helmet>


      <Header />
      <div className="spacer"></div>

        <section className='SolutionsSecAbout'>
        <div className="container">
            <div className='SolutionsRow'>
                <div className='SolutionsCol'>
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Keyword</span></div>
                    <h1 className='sizeH1 uppercase'>Boost Your Online Visibility</h1>
                    <p>Empower your online presence with comprehensive search engine optimization strategies. Leverage cutting-edge techniques and data-driven insights to enhance your visibility, drive organic traffic, and achieve sustainable growth in the digital world.</p>

                    <div className='trustedBy'>
                        <h3 className='sizeH5'>Trusted By</h3>
                        <ul className='trustedByLogos'>
                            <li><img src={igcb} loading='lazy' alt=""/></li>
                            <li><img src={ryanlogo} loading='lazy' alt=""/></li>
                            <li><img src={athenarenewable} loading='lazy' alt=""/></li>
                            <li><img src={siyarams} loading='lazy' alt=""/></li>
                        </ul>
                    </div>

                </div>
                <div className='SolutionsCol SolutionsColImg'>
                    <div className='RoundIconA RoundIcon blueB'>
                        <span></span>
                    </div>
                    <div className='RoundIconB RoundIcon pinkB'></div>
                    <img src={pattern} loading='lazy' alt="pattern" className='pattern' />
                </div>


                <div className='SolutionsColOurServies'>
                    <Link to='#'>
                        <img src={ourServiesBtn} loading='lazy' alt="Our Servies" />
                    </Link>
                </div>
            </div>
        </div>
        </section>

        
        <section className='solutionsSecServices' id='services'>
            <div className='container'>
                

              <div className='solutionsSecServicesFaq'>
              <div className='Heading center HeadingIcon pb-20'>
                  <h2 className='sizeH1 uppercase'>
                      <span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy' alt='Star Icon' /></i></span>
                      Services
                      <span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy' alt='Star Icon' /></i></span>
                  </h2>
                </div>                
                <div className='solutionsSecServicesFaqList'>
                  <Accordion>
                    {servicesData.map(service => (
                      <Accordion.Item eventKey={service.key} key={service.key}>
                        <Accordion.Header>{service.header}</Accordion.Header>
                        <Accordion.Body>
                          <div className='solutionsWrap'>
                            <div className='solutionsCol'>
                              <p>{service.description}</p>
                              <div className='solutionsWrapTag'>
                                <ul>
                                  {service.tags.map((tag, index) => (
                                    <li key={index}><Link>{tag}</Link></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    ))}
                  </Accordion>
                </div>
              </div>

            </div>
        </section>

        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>


        <section className='solutionsSecCaseStudy'>
            <div className='container'>

            <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy' alt='Star Icon' /></i></span>
                    Case studies
                    <span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy' alt='Star Icon' /></i></span>
                </h2>
            </div>


            <div className='solutionsSecCaseStudyList'>

                <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider arrowLRC mainslider'>
                    {CaseStudyData.map((CaseStudy, index) => (
                        <div key={index} className='item'>
                        <div className='CaseStudyCol'>
                            <Link to={CaseStudy.link}>
                                <div className='CaseStudyImg'><img src={CaseStudy.image} loading='lazy' />
                                <div className='workGridItemHover'>
                                    <div className='workGridItemHoverIn'>
                                        <h3>{CaseStudy.title}</h3>
                                        <h4>{CaseStudy.brand}</h4>
                                        <p>{CaseStudy.department}</p>
                                    </div>
                                </div></div>
                                <div className='CaseStudyTitale'>{CaseStudy.title}</div>
                                <div className='textTag'><p>{CaseStudy.tag}
                                  {CaseStudy.tags.map((tag, index) => (
                                    <span key={index}>{tag.name}</span>
                                  ))}
                                </p></div>
                            </Link>
                        </div>
                        </div>
                    ))}
                </Slider>

            <div className='btnSpaceEx center'>     
                <Link to="../work/case-studies#keyword" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>  

{/* 
        <section className='solutionsSecCaseStudy'>
            <div className='container'>

            <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                    Case studies
                    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                </h2>
            </div>


            <div className='solutionsSecCaseStudyList'>

                <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider'>
                    {CaseStudyData.map((CaseStudy, index) => (
                        <div key={index} className='item'>
                        <div className='CaseStudyCol'>
                            <Link to={CaseStudy.link}>
                                <div className='CaseStudyImg'><img src={CaseStudy.image}/>
                                <div className='workGridItemHover'>
                                    <div className='workGridItemHoverIn'>
                                        <h3>{CaseStudy.title}</h3>
                                        <h4>{CaseStudy.brand}</h4>
                                        <p>{CaseStudy.department}</p>
                                    </div>
                                </div></div>
                                <div className='CaseStudyTitale'>{CaseStudy.titale}</div>
                                <div className='textTag'><p>{CaseStudy.tag}
                                  {CaseStudy.tags.map((tag, index) => (
                                    <span key={index}>{tag.name}</span>
                                  ))}
                                </p></div>
                            </Link>
                        </div>
                        </div>
                    ))}
                </Slider>

            <div className='btnSpaceEx center'>     
                <Link to="../work/case-studies" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>   */}

    
        {/* TESTIMONIALS */}   
        <Testimonias/>
        {/* TESTIMONIALS End */} 
        

        {/* Work Logos */}
            <LogosSlider />
        {/* Work Logos End */} 

        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>



      {/* FAQ */}
      <section className='faqContent'>
        <div className='container'>

        <div className='Heading center HeadingIcon pb-20'><h2 className='sizeH1'>
    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
        FAQs
    <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
  </h2></div>          <Accordion>
            {faqsData.map(faq => (
              <Accordion.Item eventKey={faq.key} key={faq.key}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
      {/* FAQ */}


       {/* Business  */}   
       <section className='yellowB center getSolutions'><div className='container'>
                <div className='Heading  HeadingIcon'>
                    <h2 className='sizeH3 uppercase'>Ready to elevate your digital presence? <br/> Contact us today for a personalized quote </h2>

                        
                    <div className='pt-30 center'>     
                    <Link onClick={() => { setOpenModalStartAProjectFormPopup(true); }}  className="btnBlue fontM ripple-button"><span>Get Quote</span></Link>
                    </div>
                </div>
        </div></section> 
        {/* Business End */} 

      <Footer />
      {OpenModalStartAProjectFormPopup && <StartAProjectFormPopup closeModal={setOpenModalStartAProjectFormPopup} defaultService="Keyword" />}

    </>
  );
};

export default Keyword
