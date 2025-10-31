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
import pattern from '../../Assets/Images/icons/patternProduction.webp';
import mahindraAccelo from '../../Assets/Images/logos/work/mahindraAccelo.png';
import ryan from '../../Assets/Images/logos/work/ryan.png';
import tataMotors2 from '../../Assets/Images/logos/work/tataMotors2.png';
import bitsPilani from '../../Assets/Images/logos/work/bitsPilani.png';
import starY from '../../Assets/Images/icons/star.webp';
import americanTourister from '../../Assets/Images/work/AmericanTourister.webp';


import americantourister from '../../Assets/Images/logos/work/retail_fmcg/american-tourister.png';
import senvion from '../../Assets/Images/logos/work/energy/senvion.png';
import lokmat from '../../Assets/Images/logos/work/media_entertainment_gaming/lokmat.png';
import trust from '../../Assets/Images/logos/work/BFSI/trust.png';


import Podcast from '../../Assets/Images/work/Podcast.jpg';
import DigitalAds from '../../Assets/Images/work/DigitalAds.jpg';
import ProductShoot from '../../Assets/Images/work/ProductShoot.jpg';
import RealEstateVideos from '../../Assets/Images/work/RealEstateVideos.jpg';
import CorporateVideos from '../../Assets/Images/work/CorporateVideos.jpg';


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


 

const Production = () => {
  const [OpenModalStartAProjectFormPopup, setOpenModalStartAProjectFormPopup] = React.useState(false);




// Services Data
  const servicesData = [
    {
      key: "0",
      header: "Corporate Videos",
      description: "Capture the essence of your brand and communicate your message effectively with our corporate video production services. From company profiles to internal communications, we help you tell your story with clarity and impact.",
      tags: [],
    },
    {
      key: "1",
      header: "Reels",
      description: "Make a lasting impression on social media with engaging and visually stunning reels. Whether it's showcasing products, highlighting events, or sharing behind-the-scenes glimpses, we create reels that captivate and inspire.",
      tags: [],
    },
    {
      key: "2",
      header: "After Movie",
      description: "Relive the excitement and energy of your events with our after movie production services. From conferences to festivals, we capture the highlights and emotions of your event, creating compelling videos that resonate with your audience.",
      tags: [],
    },
    {
      key: "3",
      header: "Product Video",
      description: "Showcase your products in the best light with our product video production services. From explainer videos to demonstrations, we create visually appealing and informative videos that drive engagement and conversions.",
      tags: [],
    },
    {
      key: "4",
      header: "Employer Branding:",
      description: "Attract top talent and showcase your company culture with compelling employer branding videos. We highlight what makes your workplace unique and desirable, helping you stand out as an employer of choice.",
      tags: [],
    },
  ];
// Services Data




//CaseStudy Data
const CaseStudyData = [

 
    {
        id: 1,
        title: "Corporate Videos",
        tags: [
        ],
        image: CorporateVideos,
        link: '/work/case-studies/corporate-videos',
        brand: "",
        department: "Production"
    },
 
    {
        id: 1,
        title: "Podcast",
        tags: [
        ],
        image: Podcast,
        link: '/work/case-studies/podcast',
        brand: "",
        department: "Production"
    },
   
    {
        id: 1,
        title: "RealEstate Videos",
        tags: [
        ],
        image: RealEstateVideos,
        link: '/work/case-studies/real-estate-videos',
        brand: "",
        department: "Production"
    },







  ];
//CaseStudy Data End



// FAQS
const faqsData = [
  {
    key: "0",
    question: "1. What types of video production services does AGENCY09 offer?",
    answer: "AGENCY09 offers a wide range of video production services including corporate videos, reels, after movies, product videos, and employer branding videos. Each service is tailored to meet your specific needs and objectives."
  },
  {
    key: "1",
    question: "2. How do you ensure the quality of your video productions?",
    answer: "We ensure the highest quality by using state-of-the-art equipment, employing experienced professionals, and adhering to industry best practices. Our team is dedicated to delivering visually stunning and engaging videos that align with your brand's vision and goals."
  },
  {
    key: "2",
    question: "3. Can you help with scriptwriting and storyboarding?",
    answer: "Yes, we offer comprehensive pre-production services including scriptwriting, storyboarding, and concept development. Our creative team works closely with you to craft a compelling narrative that effectively communicates your message."
  },
  {
    key: "3",
    question: "4. How long does it typically take to produce a video?",
    answer: "The production timeline varies depending on the complexity and scope of the project. A simple corporate video might take a few weeks, while a more complex production like an after movie or product video could take longer. We work diligently to meet your deadlines while maintaining high-quality standards."
  },
  {
    key: "4",
    question: "5. What is an after movie, and why should I consider producing one?",
    answer: "An after movie is a highlight video that captures the essence and energy of an event. It’s a great way to relive the experience, share it with attendees, and promote future events. After movies are especially effective for conferences, festivals, and corporate events."
  },
  {
    key: "5",
    question: "6. How do reels differ from other types of video content?",
    answer: "Reels are short, engaging videos designed specifically for social media platforms. They are typically 15-60 seconds long and are meant to capture attention quickly. Reels are ideal for showcasing products, events, or behind-the-scenes moments in a visually appealing way."
  },
  {
    key: "6",
    question: "7. Can you create videos in different styles and formats?",
    answer: "Absolutely! We can produce videos in a variety of styles and formats, including animated videos, live-action videos, and mixed media. Whether you need a professional corporate video or a dynamic social media reel, we have the expertise to bring your vision to life."
  },
  {
    key: "7",
    question: "8. What is employer branding video production, and how can it benefit my company?",
    answer: "Employer branding videos showcase your company culture, values, and work environment. These videos help attract top talent by providing a glimpse into what makes your company a great place to work. They can be used in recruitment campaigns, on your careers page, and in onboarding materials."
  },
  {
    key: "8",
    question: "9. How much does video production cost?",
    answer: "The cost of video production varies depending on the project's scope, length, complexity, and other factors. Contact us for a personalized quote based on your specific needs and budget. We aim to deliver high-quality video content that fits within your financial parameters."
  },
  {
    key: "9",
    question: "10. How can I get started with AGENCY09's video production services?",
    answer: "Getting started is easy! Reach out to us through our contact page or request a quote. We'll schedule a consultation to discuss your vision, goals, and requirements, and then develop a tailored plan to bring your project to life."
  },
];
// FAQS End

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Top Video Production Company in Mumbai, India - AGENCY09",
  "alternateName": "corporate video production services",
  "url": "https://www.agency09.in/solutions/production",
  "image": "https://www.agency09.in/static/media/agency-light.cb89964a3a95c2a6e647.webp",
  "description":
    "AGENCY09 offers expert corporate video production services, from ad films and branding videos to after-movies and product shoots, bringing your vision to life.",
  "serviceType": [
    "Corporate Videos",
    "Reels",
    "After Movie",
    "Product Video",
    "Employer Branding"
  ],
  "provider": {
    "@type": "Organization",
    "name": "AGENCY09",
    "url": "https://www.agency09.in",
    "logo":
      "https://www.agency09.in/static/media/agency09.923830080930008a8a99.webp",
    "sameAs": [
      "https://www.linkedin.com/company/agency09/",
      "https://www.instagram.com/agency09/",
      "https://www.youtube.com/channel/UCT7wE543Vl0LSrpCmpMzZrg",
      "https://twitter.com/AGENCY09",
      "https://www.facebook.com/agency09/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "101, Meghdoot, Junction of Linking & Turner Rd., Above Bank of Baroda Bank, Opp HP Petrol Pump, Bandra West",
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
    "name": "AGENCY09 Production Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Videos",
          "description":
            "Capture the essence of your brand and communicate your message effectively with our corporate video production services. From company profiles to internal communications, we help you tell your story with clarity and impact."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Reels",
          "description":
            "Make a lasting impression on social media with engaging and visually stunning reels. Whether it's showcasing products, highlighting events, or sharing behind-the-scenes glimpses, we create reels that captivate and inspire."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "After Movie",
          "description":
            "Relive the excitement and energy of your events with our after movie production services. From conferences to festivals, we capture the highlights and emotions of your event, creating compelling videos that resonate with your audience."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Product Video",
          "description":
            "Showcase your products in the best light with our product video production services. From explainer videos to demonstrations, we create visually appealing and informative videos that drive engagement and conversions."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Employer Branding",
          "description":
            "Attract top talent and showcase your company culture with compelling employer branding videos. We highlight what makes your workplace unique and desirable, helping you stand out as an employer of choice."
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
        "name": "What types of video production services does AGENCY09 offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AGENCY09 offers a wide range of video production services including corporate videos, reels, after movies, product videos, and employer branding videos. Each service is tailored to meet your specific needs and objectives."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure the quality of your video productions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We ensure the highest quality by using state-of-the-art equipment, employing experienced professionals, and adhering to industry best practices. Our team is dedicated to delivering visually stunning and engaging videos that align with your brand's vision and goals."
        }
      },
      {
        "@type": "Question",
        "name": "Can you help with scriptwriting and storyboarding?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer comprehensive pre-production services including scriptwriting, storyboarding, and concept development. Our creative team works closely with you to craft a compelling narrative that effectively communicates your message."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it typically take to produce a video?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The production timeline varies depending on the complexity and scope of the project. A simple corporate video might take a few weeks, while a more complex production like an after movie or product video could take longer. We work diligently to meet your deadlines while maintaining high-quality standards."
        }
      },
      {
        "@type": "Question",
        "name": "What is an after movie, and why should I consider producing one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An after movie is a highlight video that captures the essence and energy of an event. It’s a great way to relive the experience, share it with attendees, and promote future events. After movies are especially effective for conferences, festivals, and corporate events."
        }
      },
      {
        "@type": "Question",
        "name": "How do reels differ from other types of video content?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reels are short, engaging videos designed specifically for social media platforms. They are typically 15-60 seconds long and are meant to capture attention quickly. Reels are ideal for showcasing products, events, or behind-the-scenes moments in a visually appealing way."
        }
      },
      {
        "@type": "Question",
        "name": "Can you create videos in different styles and formats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We can produce videos in a variety of styles and formats, including animated videos, live-action videos, and mixed media. Whether you need a professional corporate video or a dynamic social media reel, we have the expertise to bring your vision to life."
        }
      },
      {
        "@type": "Question",
        "name": "What is employer branding video production, and how can it benefit my company?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Employer branding videos showcase your company culture, values, and work environment. These videos help attract top talent by providing a glimpse into what makes your company a great place to work. They can be used in recruitment campaigns, on your careers page, and in onboarding materials."
        }
      },
      {
        "@type": "Question",
        "name": "How much does video production cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cost of video production varies depending on the project's scope, length, complexity, and other factors. Contact us for a personalized quote based on your specific needs and budget. We aim to deliver high-quality video content that fits within your financial parameters."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with AGENCY09's video production services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started is easy! Reach out to us through our contact page or request a quote. We'll schedule a consultation to discuss your vision, goals, and requirements, and then develop a tailored plan to bring your project to life."
        }
      }
    ]
  };




  return (
    <>

    <Helmet>
    <title>Top Video Production Company in Mumbai, India - AGENCY09</title>
    <meta name="robots" content="index, follow"/> 

    <meta name="description" content="AGENCY09 offers expert corporate video production services, from ad films and branding videos to after-movies and product shoots, bringing your vision to life."/>
    <link rel="canonical" href="https://www.agency09.in/solutions/production"/>

    <meta property="og:title" content="Top Video Production Company in Mumbai, India - AGENCY09"/> 
    <meta property="og:description" content="AGENCY09 offers expert corporate video production services, from ad films and branding videos to after-movies and product shoots, bringing your vision to life."/> 
    <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
    <meta property="og:type" content="website"/> 

    <meta name="twitter:card" content="summary"/> 
    <meta name="twitter:site" content="@AGENCY09"/> 
    <meta name="twitter:creator" content="@AGENCY09"/> 
    <meta name="twitter:url" content="https://www.agency09.in/solutions/production"/> 
    <meta name="twitter:description" content="AGENCY09 offers expert corporate video production services, from ad films and branding videos to after-movies and product shoots, bringing your vision to life."/> 
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
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Production</span></div>
                    <h1 className='sizeH1 uppercase'>Lights, Camera, Action: Unleash Your Story</h1>
                    <p>Creativity meets Execution. We specialize in bringing your vision to life through captivating and high-quality video production services. From corporate videos to product showcases, we're here to elevate your brand's storytelling and engage your audience like never before.</p>
                                
    

                    <div className='trustedBy'>
                        <h3 className='sizeH5'>Trusted By</h3>
                        <ul className='trustedByLogos'>
                            <li><img loading='lazy' src={americantourister} alt=""/></li>
                            <li><img loading='lazy' src={senvion} alt=""/></li>
                            <li><img loading='lazy' src={lokmat} alt=""/></li>
                            <li><img loading='lazy' src={trust} alt=""/></li>
                        </ul>
                    </div>
                </div>
                <div className='SolutionsCol SolutionsColImg'>
                    <div className='RoundIconA RoundIcon blueB'>
                        <span></span>
                    </div>
                    <div className='RoundIconB RoundIcon pinkB'></div>
                    <img loading='lazy' src={pattern} alt="pattern" className='pattern' />
                </div>


                <div className='SolutionsColOurServies'>
                    <Link to='#'>
                        <img loading='lazy' src={ourServiesBtn} alt="Our Servies" />
                    </Link>
                </div>
            </div>
        </div>
        </section>





    

      
        <section className=''>
          <div className='container'>

          <div className='Heading center HeadingIcon'>
              <h2 className='sizeH1 uppercase'>
                  <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
                  Showreel
                  <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
              </h2>
          </div>


          <div>
            <iframe loading='lazy' width="100%" height="700" src="https://www.youtube.com/embed/QU86yaAh68Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

      </div></section> 



        
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
                <Link to="../work/case-studies#production" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>  




        {/* TESTIMONIALS */}   
        <Testimonias/>
        {/* TESTIMONIALS End */} 
        
        
        {/* Clients */}
            <LogosSlider />
        {/* Clients End */} 


        <div className='container'> <hr className='hrTop'/> </div>

        

      {/* FAQ */}
      <section className='faqContent'>
        <div className='container'>

        <div className='Heading center HeadingIcon pb-20'><h2 className='sizeH1'>
    <span className='iconSVG'><i className='iconF'><img loading='lazy' src={starY} alt='Star Icon' /></i></span>
        FAQs
    <span className='iconSVG'><i className='iconF'><img loading='lazy' src={starY} alt='Star Icon' /></i></span>
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
                    <h2 className='sizeH3 uppercase'>Interested in optimizing your tech infrastructure? </h2>
                    <div className='pt-30 center'>     
                    <Link onClick={() => { setOpenModalStartAProjectFormPopup(true); }}  className="btnBlue fontM ripple-button"><span>Get Quote</span></Link>
                    </div>
                </div>
        </div></section> 
        {/* Business End */} 


      <Footer />
      {OpenModalStartAProjectFormPopup && <StartAProjectFormPopup closeModal={setOpenModalStartAProjectFormPopup}  />}

    </>
  );
};

export default Production
