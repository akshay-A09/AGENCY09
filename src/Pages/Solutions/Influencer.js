import React from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Accordion from 'react-bootstrap/Accordion';
import StartAProjectFormPopup from '../../Components/Forms/StartAProjectFormPopup';
import Testimonias from '../../Components/Testimonias';

import SVGCurveLine from '../../Hooks/SVGCurveLine';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { useMediaQuery } from 'react-responsive';

import { PiStarFourFill } from "react-icons/pi";
import { GoNorthStar } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";

// Images
import ourServiesBtn from '../../Assets/Images/icons/ourServiesBtn.webp';
import influencerBanner from '../../Assets/Images/influencer-banner.webp';
import mahindraAccelo from '../../Assets/Images/logos/work/mahindraAccelo.png';
import starY from '../../Assets/Images/icons/star.webp';
import corporateWebsite from '../../Assets/Images/corporateWebsite.webp';

import chatbot from '../../Assets/Images/tools/chatbot.webp';
import one_dashboard from '../../Assets/Images/tools/one_dashboard.webp';
import ticketing_system from '../../Assets/Images/tools/ticketing_system.webp';
import url_builder from '../../Assets/Images/tools/url_builder.webp';
import website_audit from '../../Assets/Images/tools/website_audit.webp';

import Ryan from '../../Assets/Images/work/Ryan.webp';
import GroupSoft from '../../Assets/Images/work/GroupSoft.webp';
import Siyarams from '../../Assets/Images/work/siyarams.webp';
import Bitspilani from '../../Assets/Images/work/Bitspilani.webp';
import Tribevibe from '../../Assets/Images/work/TribeVibe.webp';

import jupiterHospital from '../../Assets/Images/logos/work/jupiter-hospital.png';
import kisna from '../../Assets/Images/logos/work/kisna.png';
import godrej from '../../Assets/Images/logos/work/godrej-laffaire.png';
import adityaCapital from '../../Assets/Images/logos/work/abcf.png';

import caseStudy1 from '../../Assets/Images/work/case-study-1.webp';
import caseStudy2 from '../../Assets/Images/work/case-study-2.webp';
import caseStudy3 from '../../Assets/Images/work/case-study-3.webp';


import campaignIcon from '../../Assets/Images/icons/campaign.png';
import launchIcon from '../../Assets/Images/icons/launch.png';
import programmeIcon from '../../Assets/Images/icons/programme.png';
import ambassadorIcon from '../../Assets/Images/icons/ambassador.png';
import performanceIcon from '../../Assets/Images/icons/performance.png';
import influencerPrIcon from '../../Assets/Images/icons/influencer-pr.png';
import creatorCommunityIcon from '../../Assets/Images/icons/creator-community.png';

// Logos Images
import tatamotors from '../../Assets/Images/logos/work/automative/tatamotors.png';
import wurthCarHaus from '../../Assets/Images/logos/work/automative/wurth-car-haus.png';

import adityabirla from '../../Assets/Images/logos/work/BFSI/aditya-birla.png';
import edelweiss from '../../Assets/Images/logos/work/BFSI/edelweiss.png';
import igcb from '../../Assets/Images/logos/work/BFSI/igcb.png';
import iifl from '../../Assets/Images/logos/work/BFSI/iifl.png';
import invesco from '../../Assets/Images/logos/work/BFSI/invesco.png';
import nomura from '../../Assets/Images/logos/work/BFSI/nomura.png';
import rgi from '../../Assets/Images/logos/work/BFSI/rgi.png';
import trust from '../../Assets/Images/logos/work/BFSI/trust.png';

import bitsom from '../../Assets/Images/logos/work/education/bitsom.png';
import bitspilani from '../../Assets/Images/logos/work/education/bitspilani.png';
import oberoi from '../../Assets/Images/logos/work/education/oberoi.png';
import ryan from '../../Assets/Images/logos/work/education/ryan.png';
import thakurTrusts from '../../Assets/Images/logos/work/education/thakur-trusts.png';

import americantourister from '../../Assets/Images/logos/work/retail_fmcg/american-tourister.png';
import g2 from '../../Assets/Images/logos/work/retail_fmcg/g2.png';
import gocheese from '../../Assets/Images/logos/work/retail_fmcg/gocheese.png';
import gowardhan from '../../Assets/Images/logos/work/retail_fmcg/gowardhan.png';
import prideofcows from '../../Assets/Images/logos/work/retail_fmcg/prideofcows.png';
import samsonite from '../../Assets/Images/logos/work/retail_fmcg/samsonite.png';
import siyarams from '../../Assets/Images/logos/work/retail_fmcg/siyarams.png';

import aldo from '../../Assets/Images/logos/work/fashion_lifestyle/aldo.png';
import godrejlaffaire from '../../Assets/Images/logos/work/fashion_lifestyle/godrej-laffaire.png';
import hudobosshugo from '../../Assets/Images/logos/work/fashion_lifestyle/hudo-boss-hugo.png';
import lavie from '../../Assets/Images/logos/work/fashion_lifestyle/lavie.png';
import missdiva from '../../Assets/Images/logos/work/fashion_lifestyle/miss-diva.png';
import movado from '../../Assets/Images/logos/work/fashion_lifestyle/movado.png';
import tommyhilfiger from '../../Assets/Images/logos/work/fashion_lifestyle/tommy-hilfiger.png';

import jupiterhospital from '../../Assets/Images/logos/work/health_wellness/jupiterhospital.png';
import stepsetgo from '../../Assets/Images/logos/work/health_wellness/stepsetgo.png';
import avvatarindia from '../../Assets/Images/logos/work/health_wellness/avvatarindia.png';

import codashop from '../../Assets/Images/logos/work/media_entertainment_gaming/codashop.png';
import disney from '../../Assets/Images/logos/work/media_entertainment_gaming/disney.png';
import chinesewok from '../../Assets/Images/logos/work/others/chinese-wok.png';
import tribevibe from '../../Assets/Images/logos/work/others/tribe-vibe.png';

// Images end

// Logos Data
const Logos09 = [
  { src: tatamotors },
  { src: wurthCarHaus },
  { src: adityabirla },
  { src: edelweiss },
  { src: igcb },
  { src: iifl },
  { src: invesco },
  { src: nomura },
  { src: rgi },
  { src: trust },
  { src: bitsom },
  { src: bitspilani },
  { src: oberoi },
  { src: ryan },
  { src: thakurTrusts },
  { src: americantourister },
  { src: aldo },
  { src: godrejlaffaire },
  { src: lavie },
  { src: tommyhilfiger },
  { src: jupiterhospital },
  { src: stepsetgo },
  { src: codashop },
  { src: disney },
  { src: chinesewok },
  { src: tribevibe },
];

// Logos Slider Config
const LogosSliders = {
  speed: 1500,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 7,
  slidesToScroll: 1,
  variableWidth: true,
  rtl: false,
  mobileFirst: true,
  rows: 1,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        rows: 2,
      },
    },
  ],
};

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




const Influencer = () => {
  const [OpenModalStartAProjectFormPopup, setOpenModalStartAProjectFormPopup] = React.useState(false);

  // Engagement Models Data
  const engagementModelsData = [
    {
      icon: campaignIcon,
      title: "One-time campaign",
    },
    {
      icon: launchIcon,
      title: "Product or festive launch",
    },
    {
      icon: programmeIcon,
      title: "Always-on creator programme",
    },
    {
      icon: ambassadorIcon,
      title: "Ambassador programme",
    },
    {
      icon: performanceIcon,
      title: "Affiliate and performance programme",
    },
    {
      icon: influencerPrIcon,
      title: "Influencer PR and seeding",
    },
    {
      icon: creatorCommunityIcon,
      title: "Creator community or branded IP",
    }
  ];



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
      header: "UGC videos for social & ads",
      description: "Professional, responsive websites that reflect your brand's identity and engage your audience effectively. Our websites are designed for optimal performance and user experience.",
      tags: ["PHP", "WordPress", "Drupal", "AngularJs", "NodeJs", "Laravel", "ReactJs"],
    },
    {
      key: "1",
      header: "Expert Explainers & Reviews",
      description: "eCommerce solutions tailored to create seamless shopping experiences. We develop secure, scalable online stores that boost sales and enhance customer satisfaction.",
      tags: ["Magento", "Shopify", "WooCommerce", "OpenCart", "PrestaShop", "BigCommerce", "osCommerce"],
    },
    {
      key: "2",
      header: "Product demos & Unboxing reels",
      description: "Streamline your business operations with our custom ERP systems. We design and implement integrated solutions that improve efficiency and provide real-time insights.",
      tags: ["Custom ERP", "Oracle", "Microsoft Dynamics", "Odoo", "Infor", "NetSuite", "Sage"],
    },
    {
      key: "3",
      header: "Integration in Microdramas",
      description: "Deliver bespoke software solutions that address your unique business challenges. As a trusted partner for businesses seeking a web software development company, we create scalable, reliable, and high-performing digital solutions designed to drive growth and operational efficiency.",
      tags: [],
    },
    {
      key: "4",
      header: "Store Visit Reels",
      description: "Enhance your human resources management with our advanced HR portals. We create user-friendly platforms that simplify HR processes and improve employee engagement.",
      tags: [],
    },
    {
      key: "5",
      header: "Creator Coverage for Launches & Events",
      description: "Automate your marketing efforts with our innovative solutions. We help you streamline campaigns, track performance, and increase ROI with minimal effort.",
      tags: [],
    },
    {
      key: "6",
      header: "Styling & How-to Videos",
      description: "Web applications designed to provide dynamic and interactive user experiences. We develop robust applications that meet your business requirements and exceed user expectations.",
      tags: ["ReactJs", "AngularJs", "VueJs", "NodeJs", "Django", "Ruby on Rails", "ASP.NET", "ASP.Flask"],
    },
    {
      key: "7",
      header: "Creator Led Contests & Challenges",
      description: "Intuitive and powerful mobile applications for iOS and Android. Built to provide seamless user experiences and drive engagement on the go.",
      tags: ["Swift (iOS)", "Kotlin (Android)", "React Native", "Flutter", "Xamarin", "Ionic", "Java", "Sage"],
    },
    {
      key: "8",
      header: "Affiliate links, promo codes and ongoing creator partnerships",
      description: "Intuitive and powerful mobile applications for iOS and Android. Built to provide seamless user experiences and drive engagement on the go.",
      tags: ["Swift (iOS)", "Kotlin (Android)", "React Native", "Flutter", "Xamarin", "Ionic", "Java", "Sage"],
    }
  ];
  // Services Data


  //Tools Data
  const toolsData = [
    {
      link: '#',
      image: chatbot,
      titale: 'Chatbot',
      decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },
    {
      link: '#',
      image: website_audit,
      titale: 'website audit',
      decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },
    {
      link: '../url-builder',
      image: url_builder,
      titale: 'url builder',
      decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },
    {
      link: '#',
      image: ticketing_system,
      titale: 'ticketing system',
      decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },
    {
      link: '#',
      image: one_dashboard,
      titale: 'ONE Dashboard',
      decoration: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    }
  ];
  //Tools Data End

  // Approach Data
  const ApproachData = [
    {
      number: '01',
      tag: 'Preparation',
      title: 'User Study',
      text: 'Device Based & Psychological Insights'
    },
    {
      number: '02',
      tag: 'Start',
      title: 'User Study',
      text: 'User Journey & WireFrame'
    },
    {
      number: '03',
      title: 'The User Interface',
      text: 'Design & Proto Type'
    },
    {
      number: '04',
      title: 'Development',
      text: 'Coding'
    },
    {
      number: '05',
      title: 'Quality Check',
      text: 'VAPT - Browsers'
    },
    {
      number: '06',
      title: 'Pre Launch Check Points',
      text: 'Search Related & Auto Responses'
    },
    {
      number: '07',
      tag: 'Finish',
      title: 'Live',
      text: 'Device Based and Psychological Insights '
    },
    {
      number: '08',
      title: 'Maintenance',
      text: 'Device Based and Psychological Insights '
    },
  ];
  // Approach Data End


  //CaseStudy Data
  const CaseStudyData = [
    {
      id: 1,
      title: "Branded Documentary & Platform Partnership",
      tags: [
        { name: 'Lorem Ipsum', },
        { name: 'Lorem Ipsum', },
      ],
      image: caseStudy1,
      link: '/',
      brand: 'Jupiter Hospital',
      department: 'Tech'
    },
    {
      id: 2,
      title: 'Reach and credibility, inside the same festive window',
      tags: [
        { name: 'Lorem Ipsum' },
        { name: 'Lorem Ipsum' },
      ],
      image: caseStudy2,
      link: '/',
      brand: '',
      department: ''
    },
    {
      id: 3,
      title: 'A creator development programme, beyond a regular campaign',
      tags: [
        { name: 'Lorem Ipsum' },
        { name: 'Lorem Ipsum' },
      ],
      image: caseStudy3,
      link: '/',
      brand: ' ',
    },

  ];
  //CaseStudy Data End


  // FAQS
  const faqsData = [
    {
      key: "0",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
      key: "1",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
      key: "2",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"
    },
    {
      key: "3",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"

    },
    {
      key: "4",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"

    },
  ];
  // FAQS End



  // Approach Section 
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const groupSize = isMobile ? 2 : 4;

  const groupedItems = ApproachData.reduce((acc, item, index) => {
    if (index % groupSize === 0) {
      acc.push(<ul key={`ul-${index}`} className="solutionsSecApproachListRow">{[]}</ul>);
    }
    const ulIndex = Math.floor(index / groupSize);
    acc[ulIndex].props.children.push(
      <li key={index}>
        <div className='solutionsSecApproachListCol'>
          <div className='solutionsSecApproachListColNum'>
            <span>{item.number}</span>
            <span className='solutionsSecApproachListColNumTag'>{item.tag}</span>
          </div>
          <div className='solutionsSecApproachListColText'>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </div>
      </li>
    );
    return acc;
  }, []);
  // Approach Section End

  // Creator ecosystem animation
  const creatorSectionRef = React.useRef(null);
  const ecoRef = React.useRef(null);
  const [ecoInView, setEcoInView] = React.useState(false);

  React.useEffect(() => {
    const el = creatorSectionRef.current || ecoRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEcoInView(true);
          io.disconnect(); // plays only the first time
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  // Creator ecosystem animation End


  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solutions | Top Tech Company in Mumbai, India - AGENCY09",
    "alternateName": "top tech companies in Mumbai",
    "url": "https://www.agency09.in/solutions/tech",
    "image": "https://www.agency09.in/static/media/agency-light.cb89964a3a95c2a6e647.webp",
    "description":
      "Discover AGENCY09, one of the top tech companies in Mumbai, India, providing services like website development, UI/UX, software development services, e-commerce website developers, corporate websites and AI-driven marketing.",
    "serviceType": [
      "Corporate Website",
      "Web Application",
      "Mobile Applications",
      "ERP Systems",
      "Software Development",
      "HR Portal",
      "ECOMMERCE",
      "Marketing Automations"
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
      "name": "AGENCY09 Tech Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Website",
            "description":
              "Professional, responsive websites that reflect your brand's identity and engage your audience effectively. Our websites are designed for optimal performance and user experience."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ERP Systems",
            "description":
              "Streamline your business operations with our custom ERP systems. We design and implement integrated solutions that improve efficiency and provide real-time insights."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Development",
            "description":
              "Bespoke software solutions that address your specific business challenges. Our software development services ensure functionality, scalability, and reliability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HR Portal Development",
            "description":
              "Enhance your human resources management with our advanced HR portals. We create user-friendly platforms that simplify HR processes and improve employee engagement."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ECOMMERCE",
            "description":
              "eCommerce solutions tailored to create seamless shopping experiences. We develop secure, scalable online stores that boost sales and enhance customer satisfaction."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web & Mobile Applications",
            "description":
              "Cross-platform web and mobile applications designed for performance and user engagement."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Automation",
            "description":
              "Automate your marketing efforts with our innovative solutions. We help you streamline campaigns, track performance, and increase ROI with minimal effort."
          }
        }
      ]
    },
    "brand": { "@type": "Brand", "name": "AGENCY09" }
  };


  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What technologies do you use for developing corporate websites?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialize in PHP, WordPress, Drupal, AngularJs, NodeJs, Laravel, and ReactJs to build professional, responsive, and high-performance corporate websites."
        }
      },
      {
        "@type": "Question",
        "name": "What eCommerce platforms do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with a variety of eCommerce platforms including Magento, Shopify, WooCommerce, OpenCart, PrestaShop, BigCommerce, and osCommerce to create secure and scalable online stores."
        }
      },
      {
        "@type": "Question",
        "name": "What programming languages and frameworks do you use for software development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop custom software solutions using Java, Python, C#, Ruby on Rails, .NET, Golang, and Swift, ensuring functionality, scalability, and reliability."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for web applications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our web applications are built using modern technologies such as ReactJs, AngularJs, VueJs, NodeJs, Django, Ruby on Rails, ASP.NET, and Flask to deliver dynamic and interactive user experiences."
        }
      },
      {
        "@type": "Question",
        "name": "Which frameworks and languages do you use for mobile app development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For mobile applications, we use Swift for iOS, Kotlin for Android, and cross-platform frameworks like React Native, Flutter, Xamarin, Ionic, and Java to create intuitive and powerful mobile apps."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure the security of eCommerce platforms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We prioritize security by implementing best practices in data encryption, secure payment gateways, SSL certificates, and regular security audits to protect your eCommerce platform from threats."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate existing systems with new ERP solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in integrating existing systems with new ERP solutions to ensure seamless operation and data flow across your business processes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide maintenance and support for the software and applications you develop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer comprehensive maintenance and support services to ensure your software and applications run smoothly and remain up-to-date with the latest technologies and security measures."
        }
      },
      {
        "@type": "Question",
        "name": "Can you customize HR portals to fit our specific needs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide fully customizable HR portals tailored to meet the unique requirements of your organization, enhancing efficiency and employee satisfaction."
        }
      },
      {
        "@type": "Question",
        "name": "How do you approach a new tech project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We start with a thorough analysis of your business needs and goals, followed by detailed planning, design, development, testing, and deployment. We maintain close communication with you throughout the process to ensure the final product meets your expectations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free audits for our existing tech infrastructure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer free audits to evaluate your current tech infrastructure and provide recommendations for enhancements to optimize your digital capabilities."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle project timelines and delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow an agile development methodology to ensure timely delivery and flexibility. Regular updates and feedback loops are maintained to keep the project on track and aligned with your business objectives."
        }
      }
    ]
  };

  return (
    <>

      <Helmet>
        <title>Solutions | Top Tech Company in Mumbai, India - AGENCY09</title>
        <meta name="robots" content="index, follow" />

        <meta name="description" content="Discover AGENCY09, one of the top tech companies in Mumbai, India, providing services like website development, UI/UX, software development services, e-commerce website developers, corporate websites and AI-driven marketing." />
        <link rel="canonical" href="https://www.agency09.in/solutions/tech" />

        <meta property="og:title" content="Solutions | Top Tech Company in Mumbai, India - AGENCY09" />
        <meta property="og:description" content="Discover AGENCY09, one of the top tech companies in Mumbai, India, providing services like website development, UI/UX, software development services, e-commerce website developers, corporate websites and AI-driven marketing." />
        <meta property="og:image" content="https://www.agency09.in/agency09.png" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@AGENCY09" />
        <meta name="twitter:creator" content="@AGENCY09" />
        <meta name="twitter:url" content="https://www.agency09.in/solutions/tech" />
        <meta name="twitter:description" content="Discover AGENCY09, one of the top tech companies in Mumbai, India, providing services like website development, UI/UX, software development services, e-commerce website developers, corporate websites and AI-driven marketing." />
        <meta name="twitter:image" content="https://www.agency09.in/agency09.png" />

        <script type="application/ld+json" innerHTML={JSON.stringify(schemaData)} />
        <script type="application/ld+json" innerHTML={JSON.stringify(faqSchema)} />

      </Helmet>




      <Header />
      <div className="spacer"></div>

      <section className='SolutionsSecAbout'>
        <div className="container">
          <div className='SolutionsRow InfluencerSolutionsRow'>
            <div className='SolutionsCol'>
              <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow' /> 09 INFLUENCE</span></div>
              <h1 className='sizeH1 uppercase influencerHd'>Creator-led campaigns built for business impact.</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries creators</p>



              <div className='trustedBy'>
                <h3 className='sizeH5'>Trusted By</h3>
                <ul className='trustedByLogos'>
                  <li><img loading='lazy' src={jupiterHospital} alt="" /></li>
                  <li><img loading='lazy' src={kisna} alt="" /></li>
                  <li><img loading='lazy' src={godrej} alt="" /></li>
                  <li><img loading='lazy' src={adityaCapital} alt="" /></li>
                </ul>
              </div>
            </div>
            <div className='SolutionsCol SolutionsColImg InfluencerColImg'>
              <img loading='lazy' src={influencerBanner} alt="Banner" className='bannerImg' />
            </div>


            <div className='SolutionsColOurServies InfluencerServiesBtn'>
              <Link to='#'>
                <img loading='lazy' src={ourServiesBtn} alt="Our Servies" />
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className='solutionsSecServices' id='services'>
        <div className='container'>



          <div className='solutionsSecServicesFaq influencerSecServicesFaq'>

            <div className='Heading center HeadingIcon pb-20'>
              <h2 className='sizeH1 uppercase'>
                What we can do for your Brand
              </h2>
            </div>

            <div className='solutionsSecServicesFaqList influencerSecServicesFaqList'>
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

      <section ref={creatorSectionRef} className={`creatorSection ${ecoInView ? 'inView' : ''}`}>
        <div className='container'>
          <div className='creatorSectionRow'>
            <div className='creatorSectionLeft'>
              <h2 className={`creatorSectionHeading ${ecoInView ? 'inView' : ''}`}>
                <span className='creatorWord' style={{ '--w': 0 }}>From</span>{' '}
                <span className='creatorWord' style={{ '--w': 1 }}>nano</span>{' '}
                <span className='creatorWord' style={{ '--w': 2 }}>creators</span>
                <br />
                <span className='creatorWord' style={{ '--w': 3 }}>to</span>{' '}
                <span className='creatorWord' style={{ '--w': 4 }}>branded</span>{' '}
                <span className='creatorWord' style={{ '--w': 5 }}>creator</span>
                <br />
                <span className='creatorWord' style={{ '--w': 6 }}>ecosystems</span>
              </h2>
            </div>
            <div className='creatorSectionRight'>
              <div
                ref={ecoRef}
                className={`creatorEcosystemContainer ${ecoInView ? 'inView' : ''}`}
              >
                <div className='creatorDiagramLines'>
                  <div className='diagramSquare'></div>
                  <div className='diagramCenterCross'></div>
                </div>

                <div className='creatorCard cardUGC' style={{ '--i': 0 }}>
                  <div className='creatorCardText'>UGC creators</div>
                </div>
                <div className='creatorCard cardNano' style={{ '--i': 1 }}>
                  <div className='creatorCardText'>Nano & Micro<br />creators</div>
                </div>
                <div className='creatorCard cardAffiliate' style={{ '--i': 2 }}>
                  <div className='creatorCardText'>Affiliate<br />creators</div>
                </div>

                <div className='creatorCard cardExperts' style={{ '--i': 3 }}>
                  <div className='creatorCardText'>Experts and<br />KOLs</div>
                </div>
                <div className='creatorCard cardMacro' style={{ '--i': 4 }}>
                  <div className='creatorCardText'>Macro<br />creators</div>
                </div>

                <div className='creatorCard cardCommunity' style={{ '--i': 5 }}>
                  <div className='creatorCardText'>Community<br />and cultural<br />pages</div>
                </div>
                <div className='creatorCard cardCelebrities' style={{ '--i': 6 }}>
                  <div className='creatorCardText'>Celebrities</div>
                </div>
                <div className='creatorCard cardArtists' style={{ '--i': 7 }}>
                  <div className='creatorCardText'>Artists,<br />models and<br />performers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='engagementModels'>
        <div className='container'>
          <div className='heading'>
            <h2 className='creatorSectionHeading'>
              Engagement Models
            </h2>
          </div>
          <div className='engagementModelsRows'>
            <div className='engagementRow engagementRow4'>
              {engagementModelsData.slice(0, 4).map((item, index) => (
                <div key={index} className='engagementCol'>
                  <div className='engagementIcon'>
                    <img loading='lazy' src={item.icon} alt={item.title} />
                  </div>
                  <p className='engagementTitle'>{item.title}</p>
                </div>
              ))}
            </div>
            <div className='engagementRow engagementRow3'>
              {engagementModelsData.slice(4).map((item, index) => (
                <div key={index} className='engagementCol'>
                  <div className='engagementIcon'>
                    <img loading='lazy' src={item.icon} alt={item.title} />
                  </div>
                  <p className='engagementTitle'>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className='solutionsSecCaseStudy influencerSecCaseStudy'>
        <div className='container'>

          <div className='Heading center HeadingIcon'>
            <h2 className='sizeH1'>
              Case Studies
            </h2>
          </div>


          <div className='solutionsSecCaseStudyList'>

            <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider'>
              {CaseStudyData.map((CaseStudy, index) => (
                <div key={index} className='item'>
                  <div className='CaseStudyCol'>
                    <Link to={CaseStudy.link}>
                      <div className='CaseStudyImg'><img loading='lazy' src={CaseStudy.image} />
                        <div className='workGridItemHover'>
                          <div className='workGridItemHoverIn'>
                            <h3>{CaseStudy.title}</h3>
                            <h4>{CaseStudy.brand}</h4>
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
              <Link to="../work/case-studies#tech" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

          </div>

        </div>
      </section>





      {/* TESTIMONIALS */}
      <Testimonias />
      {/* TESTIMONIALS End */}


      {/* Work Logos */}
      <section className='hWorkLogos'>
        <div className='container'>
          <div className='Heading center HeadingIcon'>
            <h2 className='sizeH1'>
              Brands Grown
            </h2>
          </div>
          <Slider {...LogosSliders} className="LogosSlider-slick slick-slider arrowLRC">
            {Logos09.map((logo, index) => (
              <div key={index} className='item'>
                <span><img src={logo.src} alt="" loading='lazy' /></span>
              </div>
            ))}
          </Slider>

          <div className='btnSpaceEx center'>
            <Link to="../work/our-clients" className="btnDark fontM ripple-button"><span>View All</span></Link>
          </div>
        </div>
      </section>
      {/* Work Logos End */}



      {/* FAQ */}
      <section className='faqContent influencerSecFaq'>
        <div className='container'>

          <div className='Heading center HeadingIcon pb-20'><h2 className='sizeH1'>
            FAQs
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


      {/*CTA Home*/}

      <section className='Homebanner homeCta influencerCta'>
        <div className='container'>
          <div className='bannerHeading'>
            <h3>Let’s turn<br />
              the right voices into real<span>business impact</span></h3>
            <div className='bannerbtn text-center'>
              <Link className='btn09' to="/connect">Connect Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/*CTA Home*/}

      <Footer />
      {OpenModalStartAProjectFormPopup && <StartAProjectFormPopup closeModal={setOpenModalStartAProjectFormPopup} defaultService="Tech" />}

    </>
  );
};

export default Influencer;
