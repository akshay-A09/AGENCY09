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

// Tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// Tabs End

// Images
import ourServiesBtn from '../../Assets/Images/icons/ourServiesBtn.webp';
import pattern from '../../Assets/Images/icons/patternMedia.webp';
import mahindraAccelo from '../../Assets/Images/logos/work/mahindraAccelo.png';

import starY from '../../Assets/Images/icons/star.webp';
import ourwork1 from '../../Assets/Images/work/ourwork-4.webp';
import ourwork2 from '../../Assets/Images/work/ourwork-1.webp';
import ourwork3 from '../../Assets/Images/work/ourwork-3.webp';
import dhanvarsha from '../../Assets/Images/work/dhanvarsha.jpg';
import jp from '../../Assets/Images/work/jpinfra.jpg';
import MCHI from '../../Assets/Images/work/mchi.jpg';

// Partners
import GooglePremierPartner from '../../Assets/Images/logos/partners/GooglePremierPartner.png';
import MetaVerifiedPartner from '../../Assets/Images/logos/partners/MetaVerifiedPartner.png';
import LinkedInMarketingPartner from '../../Assets/Images/logos/partners/LinkedInMarketingPartner.png';
import TwitterAdPartner from '../../Assets/Images/logos/partners/TwitterAdPartner.png';
import SnapchatCertifiedPartner from '../../Assets/Images/logos/partners/SnapchatCertifiedPartner.png';
import AmazonAdvertisingPartner from '../../Assets/Images/logos/partners/AmazonAdvertisingPartner.png';
import HubSpotAgencyPartner from '../../Assets/Images/logos/partners/HubSpotAgencyPartner.png';
import MicrosoftAdvertisingPartner from '../../Assets/Images/logos/partners/MicrosoftAdvertisingPartner.png';
// Partners End


// Platforms
import Meta from '../../Assets/Images/logos/platforms/Meta.png';
import LinkedIn from '../../Assets/Images/logos/platforms/LinkedIn.png';
import YouTube from '../../Assets/Images/logos/platforms/YouTube.png';
import GoogleAds from '../../Assets/Images/logos/platforms/GoogleAds.png';
import Twitter from '../../Assets/Images/logos/platforms/Twitter.png';
import Snapchat from '../../Assets/Images/logos/platforms/Snapchat.png';
import Pinterest from '../../Assets/Images/logos/platforms/Pinterest.png';
import MicrosoftAdvertising from '../../Assets/Images/logos/platforms/MicrosoftAdvertising.png';
import AmazonAdvertising from '../../Assets/Images/logos/platforms/AmazonAdvertising.png';
import Taboola from '../../Assets/Images/logos/platforms/Taboola.png';
import Outbrain from '../../Assets/Images/logos/platforms/Outbrain.png';
import SpotifyAdStudio from '../../Assets/Images/logos/platforms/SpotifyAdStudio.png';
import QuoraAds from '../../Assets/Images/logos/platforms/QuoraAds.png';
import RedditAds from '../../Assets/Images/logos/platforms/RedditAds.png';
// Platforms End


import chinesewok from '../../Assets/Images/logos/work/others/chinese-wok.png';
import credaimchi from '../../Assets/Images/logos/work/real-estate/credai-mchi.png';
import stepsetgo from '../../Assets/Images/logos/work/health_wellness/stepsetgo.png';
import aldo from '../../Assets/Images/logos/work/fashion_lifestyle/aldo.png';

// Images end

// toolsSlider 
const toolsSlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 7000,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
 // toolsSlider End


// CaseStudySlider 
const CaseStudySlider = {
    dots: false,
    arrows: false,
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


 

const Media = () => {
  const [OpenModalStartAProjectFormPopup, setOpenModalStartAProjectFormPopup] = React.useState(false);



// Calculat Data
const calculatData = [
  {
    key: "A",
    number: "500+",
    description: "Projects<br/> Delivered",
  },
  {
    key: "B",
    number: "11",
    description: "Years <br/>Of Experience",
  },
  {
    key: "C",
    number: "20+",
    description: "Technologies <br/>Supported",
  },
  {
    key: "D",
    number: "20+",
    description: "Tech <br/>Professionals",
  }
];
// Calculat Data End

// Services Data
  const servicesData = [
    {
      key: "0",
      header: "Performance Marketing",
      description: "Our data-driven approach ensures that every campaign is optimized for maximum ROI, driving measurable results and tangible business growth. From precise audience targeting to continuous optimization, we empower you to achieve your marketing objectives efficiently and effectively.",
      tags: [],
    },
    {
      key: "1",
      header: "Lead Generation",
      description: "Generate high-quality leads that are primed for conversion. Leveraging advanced targeting techniques and compelling messaging, we capture the interest of your target audience and guide them seamlessly through the conversion funnel. With our performance-driven approach, you can expect a steady flow of leads that fuel your sales pipeline and drive business growth.",
      tags: [],
    },
    {
      key: "2",
      header: "Conversion Campaigns",
      description: "Turn prospects into customers and drive meaningful actions. Whether it's making a purchase, signing up for a newsletter, or downloading an app, we craft campaigns that inspire action and deliver tangible results. Through strategic messaging, creative assets, and continuous optimization, we help you achieve your conversion goals and maximize ROI.",
      tags: [],
    },
    {
      key: "3",
      header: "App Downloads",
      description: "Boost visibility and drive installations for your mobile app. Using targeted advertising and app promotion strategies, we reach your ideal audience and encourage them to download and engage with your app. From driving app installs to increasing user retention, we help you unlock the full potential of your mobile application and achieve success in the competitive app marketplace.",
      tags: [],
    },
    {
      key: "4",
      header: "Influencer Marketing",
      description: "Amplify your brand message and reach a wider audience authentically. By partnering with relevant influencers in your industry, we create genuine connections with your target audience and drive engagement and conversions. From product endorsements to sponsored content, we leverage the influence of trusted voices to elevate your brand's presence and impact.",
      tags: [],
    },
    {
      key: "5",
      header: "Humane Reviews",
      description: "Build trust and credibility with your audience. We facilitate genuine customer feedback and reviews that highlight the positive aspects of your products or services. By showcasing real experiences and testimonials, we create a compelling narrative that resonates with potential customers and drives conversions.",
      tags: [],
    },
    {
      key: "6",
      header: "Store Walk-ins",
      description: "Increase foot traffic to your physical locations. Through targeted digital campaigns and location-based targeting, we drive local customers to your stores and encourage them to make purchases. Whether it's promoting exclusive offers or highlighting store events, we help you create engaging experiences that drive real-world visits and sales.",
      tags: [],
    },
    {
      key: "7",
      header: "Video Views",
      description: "Capture audience attention and drive engagement. Whether it's on social media platforms or video advertising networks, we create compelling video content that resonates with your audience and drives views and interactions. From brand storytelling to product demonstrations, we help you leverage the power of video to increase brand awareness and drive conversions.",
      tags: [],
    }
  ];
// Services Data


//CaseStudy Data
const CaseStudyData = [
   {
    id:11,
    title:"Successful Mobile App Download Campaign for Dhanvarsha",
    tags: [
      {name:'Microsite'},
      {name:'Content'},
      {name:'Paid media'}
    ],
    image: dhanvarsha,
    link:'/work/case-studies/successful-mobile-app-download-campaign-for-dhanvarsha',
    brand:'Dhan Varsha',
    department:'Performance Marketing'
   },
   {
    id:12,
    title:'Multichannel Lead Gen Campaign for JP Infra',
    tags:[
      {name:'Microsite'},
      {name:'Paid Media'},
      {name:'Content'}
    ],
    image:jp,
    link:'/work/case-studies/multi-channel-lead-gen-campaign-for-jpinfa',
    brand:'JP Infra',
    department:'Performance Marketing'
   },
   {
    id:13,
    title:"Promoting India’s Biggest Award Function for Real Estate",
    tags:[
      {name:'Design & Content,'},
      {name:'Paid Media'},
      {name:'Microsite'}
    ],
    image:MCHI,
    link:'/work/case-studies/promoting-indias-biggest-award-function-for-real-estate-credai-mchi-golden-pillar-awards',
    brand:'CRED MCHI',
    department:'Performance Marketing'
   }
  ];
//CaseStudy Data End
 

// FAQS
const faqsData = [
  {
    key: "0",
    question: "1. What types of results can I expect from performance marketing campaigns?",
    answer: "The results of performance marketing campaigns vary depending on your goals and objectives. Common outcomes include increased website traffic, lead generation, conversions, app downloads, and sales. Our team works closely with you to define clear KPIs and optimize campaigns for maximum performance."
  },
  {
    key: "1",
    question: "2. How do you measure the success of performance marketing campaigns?",
    answer: "We measure the success of performance marketing campaigns using a variety of key performance indicators (KPIs) tailored to your objectives. These may include metrics such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), return on ad spend (ROAS), and more. Our robust analytics and reporting tools provide transparent insights into campaign performance."
  },
  {
    key: "2",
    question: "3. What targeting options do you offer for performance marketing campaigns?",
    answer: "We offer a range of targeting options to ensure your performance marketing campaigns reach the right audience. This includes demographic targeting, geographic targeting, interest targeting, behavior targeting, retargeting (remarketing), and lookalike audience targeting. By segmenting your audience effectively, we maximize campaign effectiveness and ROI."
  },
  {
    key: "3",
    question: "4. How do you optimize performance marketing campaigns for maximum results?",
    answer: "We employ a continuous optimization approach to performance marketing campaigns, leveraging data-driven insights and A/B testing to refine targeting, messaging, and creative elements. Our team monitors campaign performance in real-time, making adjustments to maximize performance and achieve your goals efficiently."
  },
  {
    key: "4",
    question: "5. Can you work with my existing marketing technology stack?",
    answer: "Yes, we can integrate with your existing marketing technology stack to streamline campaign management, tracking, and reporting. Whether you use CRM systems, marketing automation platforms, or analytics tools, we ensure seamless integration to optimize campaign performance and ROI."
  },
  {
    key: "5",
    question: "6. What sets your performance marketing services apart from competitors?",
    answer: "Our performance marketing services are distinguished by our strategic approach, data-driven methodologies, and relentless focus on delivering measurable results. We prioritize transparency, collaboration, and innovation to drive success for our clients, ensuring maximum ROI and business impact."
  },
  {
    key: "6",
    question: "7. How do you stay updated with the latest trends and best practices in performance marketing?",
    answer: "Our team is dedicated to staying at the forefront of industry trends and best practices in performance marketing. We regularly attend industry conferences, participate in training programs, and engage with industry experts to ensure we're leveraging the latest strategies and technologies to drive success for our clients."
  },
  {
    key: "7",
    question: "8. What industries have you worked with in your performance marketing campaigns? ",
    answer: "We have experience working with clients across a wide range of industries, including e-commerce, technology, healthcare, finance, travel, and more. Our adaptable approach allows us to tailor performance marketing strategies to meet the unique needs and objectives of each industry vertical."
  },
  {
    key: "8",
    question: "9. How can I get started with performance marketing services for my business?",
    answer: "Getting started with performance marketing services is simple. Contact us today to schedule a consultation with one of our experts. We'll discuss your goals, objectives, and budget, and develop a customized strategy to drive success for your business through performance marketing."
  },
];
// FAQS End

const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Top Performance Marketing Agency in Mumbai, India - AGENCY09",
    "alternateName": "top performance marketing & Google Ads agency in India",
    "url": "https://www.agency09.in/solutions/performance-marketing",
    "image": "https://www.agency09.in/static/media/agency-light.cb89964a3a95c2a6e647.webp",
    "description": "AGENCY09 is a top performance marketing & Google Ads agency in India with expertise in PPC marketing. Drive results with digital pros!",
    "serviceType": [
      "Performance Marketing",
      "Lead Generation",
      "Conversion Campaigns",
      "App Downloads",
      "Influencer Marketing",
      "Humane Reviews",
      "Store Walk-ins",
      "Video Views"
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
      "name": "AGENCY09 Performance Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Marketing",
            "description": "Our data-driven approach ensures that every campaign is optimized for maximum ROI, driving measurable results and tangible business growth. From precise audience targeting to continuous optimization, we empower you to achieve your marketing objectives efficiently and effectively."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lead Generation",
            "description": "Generate high-quality leads that are primed for conversion. Leveraging advanced targeting techniques and compelling messaging, we capture the interest of your target audience and guide them seamlessly through the conversion funnel. With our performance-driven approach, you can expect a steady flow of leads that fuel your sales pipeline and drive business growth."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Conversion Campaign",
            "description": "Turn prospects into customers and drive meaningful actions. Whether it's making a purchase, signing up for a newsletter, or downloading an app, we craft campaigns that inspire action and deliver tangible results."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Downloads",
            "description": "Boost visibility and drive installations for your mobile app. Using targeted advertising and app promotion strategies, we reach your ideal audience and encourage them to download and engage with your app."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Influencer Marketing",
            "description": "Amplify your brand message and reach a wider audience authentically. By partnering with relevant influencers in your industry, we create genuine connections with your target audience and drive engagement and conversions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Humane Reviews",
            "description": "Build trust and credibility with your audience. We facilitate genuine customer feedback and reviews that highlight the positive aspects of your products or services."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Store Walk-ins",
            "description": "Increase foot traffic to your physical locations. Through targeted digital campaigns and location-based targeting, we drive local customers to your stores and encourage them to make purchases."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Video Views",
            "description": "Capture audience attention and drive engagement. Whether it's on social media platforms or video advertising networks, we create compelling video content that resonates with your audience."
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
        "name": "What types of results can I expect from performance marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The results of performance marketing campaigns vary depending on your goals and objectives. Common outcomes include increased website traffic, lead generation, conversions, app downloads, and sales. Our team works closely with you to define clear KPIs and optimize campaigns for maximum performance."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure the success of performance marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We measure the success of performance marketing campaigns using a variety of key performance indicators (KPIs) tailored to your objectives. These may include metrics such as click-through rate (CTR), conversion rate, cost per acquisition (CPA), return on ad spend (ROAS), and more. Our robust analytics and reporting tools provide transparent insights into campaign performance."
        }
      },
      {
        "@type": "Question",
        "name": "What targeting options do you offer for performance marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a range of targeting options to ensure your performance marketing campaigns reach the right audience. This includes demographic targeting, geographic targeting, interest targeting, behavior targeting, retargeting (remarketing), and lookalike audience targeting. By segmenting your audience effectively, we maximize campaign effectiveness and ROI."
        }
      },
      {
        "@type": "Question",
        "name": "How do you optimize performance marketing campaigns for maximum results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We employ a continuous optimization approach to performance marketing campaigns, leveraging data-driven insights and A/B testing to refine targeting, messaging, and creative elements. Our team monitors campaign performance in real-time, making adjustments to maximize performance and achieve your goals efficiently."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work with my existing marketing technology stack?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can integrate with your existing marketing technology stack to streamline campaign management, tracking, and reporting. Whether you use CRM systems, marketing automation platforms, or analytics tools, we ensure seamless integration to optimize campaign performance and ROI."
        }
      },
      {
        "@type": "Question",
        "name": "What sets your performance marketing services apart from competitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our performance marketing services are distinguished by our strategic approach, data-driven methodologies, and relentless focus on delivering measurable results. We prioritize transparency, collaboration, and innovation to drive success for our clients, ensuring maximum ROI and business impact."
        }
      },
      {
        "@type": "Question",
        "name": "How do you stay updated with the latest trends and best practices in performance marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team is dedicated to staying at the forefront of industry trends and best practices in performance marketing. We regularly attend industry conferences, participate in training programs, and engage with industry experts to ensure we're leveraging the latest strategies and technologies to drive success for our clients."
        }
      },
      {
        "@type": "Question",
        "name": "What industries have you worked with in your performance marketing campaigns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We have experience working with clients across a wide range of industries, including e-commerce, technology, healthcare, finance, travel, and more. Our adaptable approach allows us to tailor performance marketing strategies to meet the unique needs and objectives of each industry vertical."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with performance marketing services for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started with performance marketing services is simple. Contact us today to schedule a consultation with one of our experts. We'll discuss your goals, objectives, and budget, and develop a customized strategy to drive success for your business through performance marketing."
        }
      }
    ]
  };



  return (
    <>

    <Helmet>
      <title>Top Performance Marketing Agency in Mumbai, India - AGENCY09</title>
      <meta name="robots" content="index, follow"/> 

      <meta name="description" content="AGENCY09 is a top performance marketing & Google Ads agency in India with expertise in PPC marketing. Drive results with digital pros!"/>
      <link rel="canonical" href="https://www.agency09.in/solutions/performance-marketing"/>

      <meta property="og:title" content="Top Performance Marketing Agency in Mumbai, India - AGENCY09"/> 
      <meta property="og:description" content="AGENCY09 is a top performance marketing & Google Ads agency in India with expertise in PPC marketing. Drive results with digital pros!"/> 
      <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
      <meta property="og:type" content="website"/> 

      <meta name="twitter:card" content="summary"/> 
      <meta name="twitter:site" content="@AGENCY09"/> 
      <meta name="twitter:creator" content="@AGENCY09"/> 
      <meta name="twitter:url" content="https://www.agency09.in/solutions/performance-marketing"/> 
      <meta name="twitter:description" content="AGENCY09 is a top performance marketing & Google Ads agency in India with expertise in PPC marketing. Drive results with digital pros!"/> 
      <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 
      <script type="application/ld+json">
      {JSON.stringify(schemaData)}
      {JSON.stringify(faqSchema)}
    </script>
    </Helmet>




      <Header />
      <div className="spacer"></div>

        <section className='SolutionsSecAbout'>
        <div className="container">
            <div className='SolutionsRow'>
                <div className='SolutionsCol'>
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Performance Marketing</span></div>
                    <h1 className='sizeH1 uppercase'>Harness the potential of digital platforms to propel your brand to new heights</h1>
                    <p>Performance marketing strategies are meticulously crafted to deliver unparalleled results for your brand. With a data-driven approach and a relentless pursuit of ROI, we empower businesses to thrive in the competitive digital landscape. From maximizing conversions to optimizing ad spend, we're here to elevate your brand's performance and propel your success to new heights</p>
                                
                    
                    <div className='trustedBy'>
                        <h3 className='sizeH5'>Trusted By</h3>
                        <ul className='trustedByLogos'>
                            <li><img loading='lazy' src={chinesewok} alt=""/></li>
                            <li><img loading='lazy' src={aldo} alt=""/></li>
                            <li><img loading='lazy' src={stepsetgo} alt=""/></li>
                            <li><img loading='lazy' src={credaimchi} alt=""/></li>
                        </ul>
                    </div>
                </div>
                <div className='SolutionsCol SolutionsColImg'>
                    <div className='RoundIconA RoundIcon blueB'>
                        <span></span>
                    </div>
                    <div className='RoundIconB RoundIcon pinkB'></div>
                    <img loading='lazy'  src={pattern} alt="pattern" className='pattern' />
                </div>


                <div className='SolutionsColOurServies'>
                    <Link to='#'>
                        <img loading='lazy'  src={ourServiesBtn} alt="Our Servies" />
                    </Link>
                </div>
            </div>
        </div>
        </section>

      
        {/* Quick Facts  */}
        <section className='Calculat'>
          <div className='container'>
            <div className='CalculatRow'>
              {calculatData.map(item => (
                <div key={item.key} className={`CalculatCol CalculatCol${item.key}`}>
                  <div className='CalculatColIn'>
                    <h4>{item.number}</h4>
                    <p><span  dangerouslySetInnerHTML={{ __html: item.description }}></span> <PiStarFourFill /></p>
                  </div>
                </div>
              ))}
            </div>
            <div className='strokeB'>
              <SVGCurveLine />
            </div>
          </div>
        </section>
        {/* Quick Facts  End */}
        
        <section className='solutionsSecServices' id='services'>
            <div className='container'>

              <div className='solutionsSecServicesFaq'>

              <div className='Heading center HeadingIcon pb-20'>
                  <h2 className='sizeH1 uppercase'>
                      <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                      Services
                      <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                  </h2>
                </div>

                <div className='solutionsSecServicesFaqList'>
                  <Accordion defaultActiveKey="0">
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
                    <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                    Case studies
                    <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                </h2>
            </div>


            <div className='solutionsSecCaseStudyList'>

                <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider'>
                    {CaseStudyData.map((CaseStudy, index) => (
                        <div key={index} className='item'>
                        <div className='CaseStudyCol'>
                            <Link to={CaseStudy.link}>
                                <div className='CaseStudyImg'><img loading='lazy'  src={CaseStudy.image}/>
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
                <Link to="../work/case-studies#performance-marketing" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>  

{/* 

        <div className='container'>
                <div className='strokeB'><SVGCurveLine/></div>      
        </div>

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
     

    
 

        
        <section className='mdlogoSec'>
            <div className='container'>
                    
            <Tabs>
                <TabList >
                  <Tab><span>Partners</span></Tab>
                  <Tab><span>Platforms</span></Tab>
                </TabList>

                <TabPanel>
                  <div className='mdlogoList'>
                    <ul>
                      <li><img loading='lazy'  src={GooglePremierPartner}/></li>
                      <li><img loading='lazy'  src={MetaVerifiedPartner}/></li>
                      <li><img loading='lazy'  src={LinkedInMarketingPartner}/></li>
                      <li><img loading='lazy'  src={TwitterAdPartner}/></li>
                      <li><img loading='lazy'  src={SnapchatCertifiedPartner}/></li>
                      <li><img loading='lazy'  src={AmazonAdvertisingPartner}/></li>
                      <li><img loading='lazy'  src={HubSpotAgencyPartner}/></li>
                      <li><img loading='lazy'  src={MicrosoftAdvertisingPartner}/></li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className='mdlogoList'>
                    <ul>
                      <li><img loading='lazy'  src={Meta}/></li>
                      <li><img loading='lazy'  src={LinkedIn}/></li>
                      <li><img loading='lazy'  src={YouTube}/></li>
                      <li><img loading='lazy'  src={GoogleAds}/></li>
                      <li><img loading='lazy'  src={Twitter}/></li>
                      <li><img loading='lazy'  src={Snapchat}/></li>
                      <li><img loading='lazy'  src={MicrosoftAdvertising}/></li>
                      <li><img loading='lazy'  src={Pinterest}/></li>
                      <li><img loading='lazy'  src={AmazonAdvertising}/></li>
                      <li><img loading='lazy'  src={Taboola}/></li>
                      <li><img loading='lazy'  src={Outbrain}/></li>
                      <li><img loading='lazy'  src={SpotifyAdStudio}/></li>
                      <li><img loading='lazy'  src={QuoraAds}/></li>
                      <li><img loading='lazy'  src={RedditAds}/></li>
                    </ul>
                  </div>
                </TabPanel>
            
            </Tabs>
              
            </div>            
        </section>

        
        <Testimonias/>


     

        {/* Work Logos */}
            <LogosSlider />
        {/* Work Logos End */} 



        {/* Free Audit */}   
        <section className='pinkB freeAuditSec'><div className='container'>
          <div className='freeAuditSecRow'>
                <div className='freeAuditSecCol'>
                <div className='Heading HeadingIcon'>
              <h2 className='sizeH1 uppercase white center'>
                  <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
                  One Dashboard 
                  <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
              </h2>
            </div>
                    <p className='white'>Simplify your media management with our integrated dashboard, providing comprehensive insights and analytics across all your campaigns and channels. </p>
                </div>

            </div>
        </div></section> 
        {/* Free Audit End */} 



      {/* FAQ */}
      <section className='faqContent'>
        <div className='container'>

        <div className='Heading center HeadingIcon pb-20'><h2 className='sizeH1'>
          <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
              FAQs
          <span className='iconSVG'><i className='iconF'><img loading='lazy'  src={starY} alt='Star Icon' /></i></span>
        </h2></div>
          <Accordion>
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
                    <h2 className='sizeH3 uppercase'>Ready to take your media strategy to the next level?<br/> Contact us today for a personalized quote.</h2>

                        
                    <div className='pt-30 center'>     
                    <Link onClick={() => { setOpenModalStartAProjectFormPopup(true); }}  className="btnBlue fontM ripple-button"><span>Get Quote</span></Link>
                    </div>
                </div>
        </div></section> 
        {/* Business End */} 


      <Footer />
      {OpenModalStartAProjectFormPopup && <StartAProjectFormPopup closeModal={setOpenModalStartAProjectFormPopup} defaultService="Media"/>}

    </>
  );
};

export default Media
