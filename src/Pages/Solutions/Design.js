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
import pattern from '../../Assets/Images/icons/patternDesign.webp';
import mahindraAccelo from '../../Assets/Images/logos/work/mahindraAccelo.png';
import ryan from '../../Assets/Images/logos/work/ryan.png';
import tataMotors2 from '../../Assets/Images/logos/work/tataMotors2.png';
import bitsPilani from '../../Assets/Images/logos/work/bitsPilani.png';
import starY from '../../Assets/Images/icons/star.webp';
import barc from '../../Assets/Images/work/BARC.webp';
import octarine from '../../Assets/Images/work/oo.jpg'


import wurthCarHaus from '../../Assets/Images/logos/work/automative/wurth-car-haus.png';
import barci from '../../Assets/Images/logos/work/others/barci.png';
import hudobosshugo from '../../Assets/Images/logos/work/fashion_lifestyle/hudo-boss-hugo.png';
import movado from '../../Assets/Images/logos/work/fashion_lifestyle/movado.png';


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


 

const Design = () => {
  const [OpenModalStartAProjectFormPopup, setOpenModalStartAProjectFormPopup] = React.useState(false);



// Services Data
  const servicesData = [
    {
      key: "0",
      header: "Brand Identity",
      description: "Develop a cohesive and compelling brand identity that reflects your core values and vision. Create logos, color palettes, typography, and brand guidelines that ensure consistency across all touchpoints.",
      tags: [],
    },
    {
      key: "1",
      header: "Packaging",
      description: "Design attractive and functional packaging that stands out on the shelves. Focus on both aesthetics and practicality to enhance the customer experience.",
      tags: [],
    },
    {
      key: "2",
      header: "Product Launch",
      description: "Plan and execute successful product launches that generate buzz and excitement. Utilize creative strategies to capture your target audience’s attention and drive engagement.",
      tags: [],
    },
    {
      key: "3",
      header: "Yearbook",
      description: "Craft beautifully designed yearbooks that celebrate your company's achievements and milestones. Combine compelling visuals and engaging content to create a lasting impression.",
      tags: [],
    },
    {
      key: "4",
      header: "Annual Report",
      description: "Design professional and visually appealing annual reports that effectively communicate your company's performance. Ensure clarity and impact through thoughtful layout and design.",
      tags: [],
    },
    
  ];
// Services Data


//CaseStudy Data
const CaseStudyData = [
  {
    id: 7,
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
  id:10,
  title:'Enchanting Mushroom Magic Box with Innovative Packaging Design',
  tags:[
    {name:'Plant-Based Products'},
    {name:'Product Packaging'},
  ],
  image:octarine,
  link:'/work/case-studies/oc',
  brand:"Octarine Organics",
  department:'Design'
}
  ];
//CaseStudy Data End


// FAQS
const faqsData = [
  {
    key: "0",
    question: "1. What is brand identity, and why is it important?",
    answer: "Brand identity encompasses the visual elements and messaging that represent a company's essence. It includes aspects like logos, color palettes, and typography. It's crucial because it helps distinguish a brand from its competitors and fosters recognition and trust among consumers."
  },
  {
    key: "1",
    question: "2. How can AGENCY09 help in developing a brand identity?",
    answer: "AGENCY09 specializes in creating cohesive and compelling brand identities that reflect core values and visions. We craft logos, color palettes, typography, and brand guidelines to ensure consistency across all touchpoints, helping businesses make a lasting impression on their audience."
  },
  {
    key: "2",
    question: "3. What is the significance of packaging design in branding?",
    answer: "Packaging design plays a crucial role in attracting customers and enhancing their overall experience with a product. AGENCY09 focuses on creating packaging that is both visually appealing and functional, ensuring that it stands out on shelves while also meeting practical needs."
  },
  {
    key: "3",
    question: "4. How does AGENCY09 approach product launches?",
    answer: "AGENCY09 employs creative strategies to plan and execute successful product launches that generate buzz and excitement. We tailor our approach to capture the attention of the target audience, driving engagement and maximizing the impact of the launch."
  },
  {
    key: "4",
    question: "5. What services does AGENCY09 offer for commemorating company achievements?",
    answer: "AGENCY09 offers yearbook design services, crafting beautifully designed yearbooks that celebrate a company's achievements and milestones. Through compelling visuals and engaging content, we create a lasting impression that reflects the company's journey and accomplishments."
  },
  {
    key: "5",
    question: "6. Why are annual reports important, and how does AGENCY09 assist in their design?",
    answer: "Annual reports are crucial for communicating a company's performance and achievements to stakeholders. AGENCY09 specializes in designing professional and visually appealing annual reports that effectively convey this information. We ensure clarity and impact through thoughtful layout and design, helping businesses present themselves in the best possible light."
  },
  {
    key: "6",
    question: "7. Who are AGENCY09's clients? ",
    answer: "AGENCY09 has partnered with a diverse range of clients, including startups and established enterprises, across various industries. Our client portfolio showcases our versatility and commitment to delivering exceptional brand design solutions tailored to each client's unique needs."
  },
  {
    key: "7",
    question: "8. Where can I find examples of AGENCY09's work?",
    answer: "You can explore our case studies to see how we've transformed brands through our design expertise. These case studies highlight the challenges we faced, the innovative approaches we took, and the successful outcomes we achieved for our clients."
  },
  {
    key: "8",
    question: "9. How can I request a quote for AGENCY09's services?",
    answer: "Ready to elevate your brand? Contact us today for a personalized quote. Let's discuss how we can bring your brand vision to life with our creative design services. You can reach out via our website or contact information provided."
  },
  
];
// FAQS End


  return (
    <>

    
<Helmet>
      <title>Creative Design Agency in Mumbai | Brand Design Solutions – AGENCY09</title>
      <meta name="robots" content="index, follow"/> 

      <meta name="description" content="AGENCY09 delivers creative solutions to bring your brand to new heights, including Brand Identity, Logo Design, Packagaing and Communication Design."/>
      <link rel="canonical" href="https://www.agency09.in/solutions/tech"/>

      <meta property="og:title" content="Creative Design Agency in Mumbai | Brand Design Solutions – AGENCY09"/> 
      <meta property="og:description" content="AGENCY09 delivers creative solutions to bring your brand to new heights, including Brand Identity, Logo Design, Packagaing and Communication Design."/> 
      <meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
      <meta property="og:type" content="website"/> 

      <meta name="twitter:card" content="summary"/> 
      <meta name="twitter:site" content="@AGENCY09"/> 
      <meta name="twitter:creator" content="@AGENCY09"/> 
      <meta name="twitter:url" content="https://www.agency09.in/solutions/tech"/> 
      <meta name="twitter:description" content="AGENCY09 delivers creative solutions to bring your brand to new heights, including Brand Identity, Logo Design, Packagaing and Communication Design."/> 
      <meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 
    </Helmet>
      <Header />
      <div className="spacer"></div>

        <section className='SolutionsSecAbout'>
        <div className="container">
            <div className='SolutionsRow'>
                <div className='SolutionsCol'>
                    <div className='SolutionsTag'><span className='blackB white'><GoNorthStar className='yellow'/> Design</span></div>
                    <h1 className='sizeH1 uppercase'>Crafting Timeless Brands with Creative Excellence</h1>
                    <p>A strong brand is the cornerstone of any successful business. Our brand design services are tailored to create impactful and memorable brand identities that resonate with your audience. From concept to execution, we deliver creative solutions that elevate your brand to new heights.</p>
       

                         
                    <div className='trustedBy'>
                        <h3 className='sizeH5'>Trusted By</h3>
                        <ul className='trustedByLogos'>
                            <li><img src={wurthCarHaus} loading='lazy' alt=""/></li>
                            <li><img src={barci} loading='lazy' alt=""/></li>
                            <li><img src={hudobosshugo} loading='lazy' alt=""/></li>
                            <li><img src={movado} loading='lazy' alt=""/></li>
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

                <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider'>
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
                <Link to="../work/case-studies#design" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>  

        <div className='container'>
              <div className='strokeB'><SVGCurveLine/></div>      
        </div>

      {/* Work Logos */}

        <LogosSlider />

      {/* Work Logos End */}     


                
     

         



             {/* TESTIMONIALS */}   
             <Testimonias/>
        {/* TESTIMONIALS End */} 
        



      {/* FAQ */}
      <section className='faqContent'>
        <div className='container'>

        <div className='Heading center HeadingIcon pb-20'><h2 className='sizeH1'>
          <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
              FAQs
          <span className='iconSVG'><i className='iconF'><img src={starY} alt='Star Icon' /></i></span>
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
                  <h2 className='sizeH3 uppercase'>Ready to elevate your brand?<br/> Contact us today for a personalized quote. </h2>

                      
                  <div className='pt-30 center'>     
                  <Link onClick={() => { setOpenModalStartAProjectFormPopup(true); }}  className="btnBlue fontM ripple-button"><span>Get Quote</span></Link>
                  </div>
              </div>
      </div></section> 
      {/* Business End */} 


      <Footer />
      {OpenModalStartAProjectFormPopup && <StartAProjectFormPopup closeModal={setOpenModalStartAProjectFormPopup} />}

    </>
  );
};

export default Design
