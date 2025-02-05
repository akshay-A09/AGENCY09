import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { GoNorthStar } from "react-icons/go";
import { PiSlideshow, PiStarFourFill } from "react-icons/pi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import starY from '../../../Assets/Images/icons/star.webp';
import logo from '../../../Assets/Images/logos/work/retail_fmcg/american-tourister.png';
import ourwork1 from '../../../Assets/Images/work/tata-trucks/tata-main.webp';
import ourwork2 from '../../../Assets/Images/work/tata-trucks/tata-slide1.webp';
import ourwork3 from '../../../Assets/Images/work/tata-trucks/tata-slide2.webp';
import ourwork4 from '../../../Assets/Images/work/tata-trucks/tata-slide3.webp';
import ourwork5 from '../../../Assets/Images/work/tata-trucks/tata-slide4.webp';
import ourwork6 from '../../../Assets/Images/work/tata-trucks/tata-slide5.webp';
import ourwork7 from '../../../Assets/Images/work/tata-trucks/tata-slide6.webp';


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

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}`)
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}



// CaseStudySlider End

// Slider

const mainSlider ={
    dot: false,
    arrows:true,
    infinite:true,
    autoplay:true,
    autoplaySpeed: 7000,
    speed:700,
    slideToShow:3,
    SlideshowToScroll:1,
    responsive: [
        {
            breakpoint:768,
            settings:{
                arrow:false,
            }
        }
    ]
}

// Slider

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

const Podcast = () => {
 

  return (
    <>
    <Header/>
    <div className="spacer"></div>


    <section className='cSsecMin'>
        <div className='container'>
            
            <div className='cSsecMinP flexBio'>
                
                <div className='cSsecMinBCol m0'>
                <h2>Podcast</h2>
                    <p>At AGENCY09, we create dynamic podcast videos that combine insightful conversations with compelling visuals. Whether it’s for brand storytelling, thought leadership, or engaging your community, our team ensures every podcast resonates with your audience. Let’s bring your voice to life with content that informs, entertains, and builds a loyal following.</p>
                </div>  
           


            <div className="ytgrdP">
            <iframe id="ytplayer" type="text/html" width="100%" height="405"
src="https://www.youtube.com/embed/?listType=playlist&list=PLjyBa6CjzBYNh6pb8q6ISg9JnjDK7aZOz"
frameborder="0" allowfullscreen></iframe>
        
      </div>


      </div>.
        </div>
    </section>
 
   



    <Footer/>
    </>
  )
}



export default Podcast
