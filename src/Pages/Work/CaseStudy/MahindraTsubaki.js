import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { GoNorthStar } from "react-icons/go";
import { PiStarFourFill } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import starY from '../../../Assets/Images/icons/star.png';

import logo from "../../../Assets/Images/logos/mahindra_tsubaki.png"
import ourwork1 from '../../../Assets/Images/work/mahindra_tsubaki/mahindra_tsubaki1.png';
import ourwork2 from '../../../Assets/Images/work/mahindra_tsubaki/mahindra_tsubaki2.png';
import ourwork3 from '../../../Assets/Images/work/mahindra_tsubaki/mahindra_tsubaki3.png';
import ourwork4 from '../../../Assets/Images/work/mahindra_tsubaki/mahindra_tsubaki4.png';
import ourwork5 from '../../../Assets/Images/work/mahindra_tsubaki/mahindra_tsubaki5.png';


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

//CaseStudy Data
const CaseStudyData = [
    {
        link: '#',
        image: ourwork1,
        titale: 'Brand led site for a Banking Solutions Firm',
        tags: [{ name: 'BFSI' },],
    },  
    {
        link: '#',
        image: ourwork2,
        titale: 'A dynamic website for India’s biggest truck company',
        tags: [
            { name: 'Automobile' },
        ],
    },  
    {
        link: '#',
        image: ourwork3,
        titale: 'Revamped Website for one of the India’s biggest institution',
        tags: [{ name: 'Education' },],

    },
  ];
//CaseStudy Data End

const MahindraTsubaki = () => {


  return (
    <>
    <Header/>
    <div className="spacer"></div>


    <section className='cSsecMin'>
        <div className='container'>
            
            <div className='cSsecMinA flexBio'>

                <div className='cSsecMinBtn m0'>
                <Link to='/work/case-studies' className='backBtn'><span><IoArrowBackCircleOutline /> Case Study</span></Link>
                </div>

                <div className='cSsecMinHead m0'>
                    <h1 className='sizeH4'>Making Complaint Management Simpler for Mahindra Tsubaki</h1>
                </div>

                <div className='cSsecMinInfo m0'>
                    <img src={logo} loading='lazy' />
                    {/* <Link>Info <GoPlus /></Link> */}
                </div>

            </div>

            <div className='strokeB'>
                <SVGCurveLine/>
            </div>  


            <div className='cSsecMinB'>
                <div className='cSsecMinBRow'>
                    <div className='cSsecMinBCol'>
                        <h4>Overview</h4>
                        <p>Mahindra Tsubaki Conveyor Systems (MTC) is a Joint Venture between Mahindra Group and Tsubakimoto Chain Company – Japan. With rise in customer interactions and collection of feedback for Mahindra Tsubaki, it was difficult to keep track of all the complaints and address them efficiently and to understand the reasons of the complaint</p>


                    </div>


                    <div className='cSsecMinBCol'>
                        <h4>Industry - Steel</h4>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Services</h4>
                        <p>Software, Digital Process Automation</p>
                    </div>

                    <div className='cSsecMinBCol'>
                          <h4>Year: <i>2023</i></h4>
                    </div>


                    <div className='cSsecMinBCol'>
                        <h4 >Objective</h4>
                        <p>Software, Digital Process Automation</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Challenges</h4>
                        <p>Software, Digital Process Automation  Software, <br/>Digital Process Automation</p>
                    </div>

                    <div className='cSsecMinBCol'>
                        <h4>Results</h4>
                        <p>Making Complaint Management Simpler for Mahindra Tsubaki Making Complaint Management Simpler for Mahindra Tsubaki Making Complaint Management Simpler for Mahindra Tsubaki</p>

                    </div>


                </div>

            </div>


            <div className='cSsecMinC'>

                <div className='imgCol1 imgCol '>
                    <span><img src={ourwork1} loading='lazy' /></span>
                </div>

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork2} loading='lazy' /></span>
                </div>

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork3} loading='lazy' /></span>
                </div>

                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork4} loading='lazy' /></span>
                </div>


                <div className='imgCol1 imgCol'>
                    <span><img src={ourwork5} loading='lazy' /></span>
                </div>

            </div>


            

        </div>
    </section>


    <div className='container'>
    <div className='strokeB'>
              <SVGCurveLine />
    </div>
    </div>

    
    <section className='solutionsSecCaseStudy'>
            <div className='container'>

            <div className='Heading center HeadingIcon'>
                <h2 className='sizeH1 uppercase'>
                    <span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy'  alt='Star Icon' /></i></span>
                    Related Work
                    <span className='iconSVG'><i className='iconF'><img src={starY} loading='lazy'  alt='Star Icon' /></i></span>
                </h2>
            </div>


            <div className='solutionsSecCaseStudyList'>

                <Slider {...CaseStudySlider} className='CaseStudySlider slick-slider'>
                    {CaseStudyData.map((CaseStudy, index) => (
                        <div key={index} className='item'>
                        <div className='CaseStudyCol'>
                            <Link to={CaseStudy.link}>
                                <div className='CaseStudyImg'><img src={CaseStudy.image} loading='lazy' /></div>
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
                <Link to="/work/case-studies" className="btnDark fontM ripple-button"><span>View All</span></Link>
            </div>

            </div>

            </div>
        </section>  




    <Footer/>
    </>
  )
}

export default MahindraTsubaki
