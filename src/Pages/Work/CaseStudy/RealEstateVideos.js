import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import Header from '../../../Components/Header';
import Footer from '../../../Components/Footer';
import 'slick-carousel/slick/slick.css';
import SVGCurveLine from '../../../Hooks/SVGCurveLine'; 
import { IoArrowBackCircleOutline } from "react-icons/io5";
import logo from '../../../Assets/Images/agency09.webp';
import ourwork1 from '../../../Assets/Images/work/tata-trucks/tata-main.webp';
import ourwork2 from '../../../Assets/Images/work/tata-trucks/tata-slide1.webp';
import ourwork3 from '../../../Assets/Images/work/tata-trucks/tata-slide2.webp';
import YouTubePlaylistItems from '../../../Hooks/YouTubePlaylistItems';


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

const RealEstateVideos = () => {
const playlistId = 'PLjyBa6CjzBYPzSkhBnxFoo1sw-oiBdFST';
const apiKey = 'AIzaSyBkRuDWRBnBbl_qW3syuk_BEa7anG2uU2M';
  

  return (
    <>
    <Helmet>
<title>Real Estate Videos - AGENCY09 Case Study</title>
<link rel="canonical" href="https://www.agency09.in/about"/>
<meta name="robots" content="index, follow"/> 

<meta name="description" content="Explore how AGENCY09 crafted high-impact real estate videos that drive engagement and conversions. A case study on strategy, execution, and results."/>
<meta property="og:title" content="Real Estate Videos - AGENCY09 Case Study"/> 
<meta property="og:description" content="Explore how AGENCY09 crafted high-impact real estate videos that drive engagement and conversions. A case study on strategy, execution, and results."/> 
<meta property="og:image" content="https://www.agency09.in/agency09.png"/> 
<meta property="og:type" content="website"/> 


<meta name="twitter:card" content="summary"/> 
<meta name="twitter:site" content="@AGENCY09"/> 
<meta name="twitter:creator" content="@AGENCY09"/> 
<meta name="twitter:url" content="https://www.agency09.in/about"/> 
<meta name="twitter:description" content="Explore how AGENCY09 crafted high-impact real estate videos that drive engagement and conversions. A case study on strategy, execution, and results."/> 
<meta name="twitter:image" content="https://www.agency09.in/agency09.png"/> 

</Helmet>
    <Header/>
    <div className="spacer"></div>


    <section className='cSsecMin'>
        <div className='container'>

        <div className='cSsecMinA flexBio'>
    
            <div className='cSsecMinBtn m0'>
            <Link to='/work/case-studies' className='backBtn'><span><IoArrowBackCircleOutline /> Case Study</span></Link>
            </div>

            <div className='cSsecMinHead m0'>
                <h1 className='sizeH4'>Real Estate Videos</h1>
            </div>

            <div className='cSsecMinInfo m0'>
                <img src={logo} />
            </div>
    
        </div>
            
            
        <div className='strokeB'>
                <SVGCurveLine/>
        </div>  

        <div className='cSsecMinP flexBio showYtPlaylist'>
            
            <div className='cSsecMinBCol m0'>
            <h2>Overview</h2>
                <p>At AGENCY09, we create captivating real estate videos that highlight the true essence of every property. Our cinematic approach showcases your listings in the best light, giving potential buyers an immersive experience. From virtual tours to drone footage, we craft videos that not only capture attention but drive interest and sales.</p>
            </div>  
        


            <div className="ytgrdP">
            <div className="App">
                <h1>YouTube Playlist</h1>
                <YouTubePlaylistItems playlistId={playlistId} apiKey={apiKey} />
            </div>
            </div>


      </div>.
        </div>
    </section>
 
   



    <Footer/>
    </>
  )
}



export default RealEstateVideos
