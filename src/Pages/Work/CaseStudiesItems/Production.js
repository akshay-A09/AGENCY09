import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import americanTourister from '../../../Assets/Images/work/AmericanTourister.webp';
import CampaignVideos from '../../../Assets/Images/work/campaign.jpg';
import TeaserVideo from '../../../Assets/Images/work/teaser.jpg';
import Podcast from '../../../Assets/Images/work/podcast-new.jpg';
import ProductVideos from '../../../Assets/Images/work/corporate.jpg';
import DigitalAds from '../../../Assets/Images/work/digital-ads.jpg';
import Webseries from '../../../Assets/Images/work/web-series.jpg';
import Reels from '../../../Assets/Images/work/reels.jpg';
import CorporateVideos from '../../../Assets/Images/work/CorporateVideos.jpg';
import Sharmaji1 from '../../../Assets/Images/work/Sharmaji1Cover.webp'
import freyaa1 from '../../../Assets/Images/work/freyaa1Cover.webp'

// Production
export const ProductionData = [
    
     {
        id: 0,
        title: "RGI: Making insurance agents understand products better",
        tags: [
        ],
        image: Sharmaji1,
        link: '/work/case-studies/rgi-sharmaji-vermaji',
        brand: "RGI",
        department: "Production"
    },

 {
        id: 1,
        title: "Campaign Videos",
        tags: [
        ],
        image: CampaignVideos,
        link: '/work/case-studies/campaign-videos',
        brand: "",
        department: "Production"
    },




{
        id: 1,
        title: "Digital Ads",
        tags: [
        ],
        image: DigitalAds,
        link: '/work/case-studies/digital-ads',
        brand: "",
        department: "Production"
    },

    {
        id: 1,
        title: "Podcasts",
        tags: [
        ],
        image: Podcast,
        link: '/work/case-studies/podcast',
        brand: "",
        department: "Production"
    },
 
  {
        id: 0,
        title: "Creating an ownable Women's Day narrative for Freyaa",
        tags: [
        ],
        image: freyaa1,
        link: '/work/case-studies/freyaa-woven-with-love',
        brand: "Freyaa",
        department: "Production"
    },

 
    {
        id: 1,
        title: "Corporate Videos",
        tags: [
        ],
        image: ProductVideos,
        link: '/work/case-studies/corporate-videos',
        brand: "",
        department: "Corporate"
    },
 
    {
        id: 1,
        title: "Teaser Videos",
        tags: [
        ],
        image: TeaserVideo,
        link: '/work/case-studies/teaser-videos',
        brand: "",
        department: "Production"
    },
    {
        id: 1,
        title: "Web Series",
        tags: [
        ],
        image: Webseries,
        link: '/work/case-studies/web-series',
        brand: "",
        department: "Production"
    },
    {
        id: 1,
        title: "Reels Videos",
        tags: [
        ],
        image: Reels,
        link: '/work/case-studies/reel-videos',
        brand: "",
        department: "Production"
    },
    {
        id: 11,
        title: 'Showcasing Excellence: Captivating Product Films for American Tourister',
        tags: [
            { name: 'Product Film Production', link: '' },
            { name: 'Content Creation', link: '' }
        ],
        image: americanTourister,
        link: '/work/case-studies/american-tourister',
        brand: "American Tourister",
        department: 'Production'
    },

];

// State for each tab

const Production = () => {
    const [visibleProductionItems, setVisibleProductionItems] = useState(5);
    const loadMoreProductionItems = () => {
        setVisibleProductionItems((prev) => prev + 9);
    };

  return (
    <>
        <section className='ourWork'>
        <div className='workGrid'>
            {ProductionData.slice(0, visibleProductionItems).map((item) => (
                <div className='workGridItem' key={item.id}>
                    <div className='workGridItemLink'>
                        <Link to={item.link} className='workGridItemLink'>
                            <div className='cursor09'></div>
                            <div className='workGridItemImg'>
                                <img src={item.image} alt={item.title} loading='lazy' />
                                <div className='workGridItemHover'>
                                    <div className='workGridItemHoverIn'>
                                        <h3>{item.title}</h3>
                                        <h4>{item.brand}</h4>
                                        <p>{item.department}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='workGridItemText'>
                                <h3>{item.title}</h3>
                            </div>
                        </Link>
                        <div className='workGridItemTags'>
                            {item.tags.map((tag, index) => (
                                <Link to={tag.link} className='workGridItemTag' key={index}>{tag.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {visibleProductionItems < ProductionData.length && (
            <div className='center btnSpaceEx'>
                <button onClick={loadMoreProductionItems} className="loadMoreButton btnDark fontM ripple-button">See More Work</button>
            </div>
        )}
        </section>
    </>
  )
}

export default Production
