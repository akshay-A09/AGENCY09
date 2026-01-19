import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TataMotors from '../../../Assets/Images/work/Tatamotors-new.jpg';
import Ryan from '../../../Assets/Images/work/Ryan.webp';
import GroupSoft from '../../../Assets/Images/work/GroupSoft.webp';
import Siyarams from '../../../Assets/Images/work/siyarams.webp';
import Bitspilani from '../../../Assets/Images/work/Bitspilani.webp';
import Tribevibe from '../../../Assets/Images/work/TribeVibe.webp';
import Detour from '../../../Assets/Images/case-study/Detour/Detours.jpg';
import Toko from '../../../Assets/Images/case-study/Toko/toko.jpg';

import cloudtv from '../../../Assets/Images/case-study/CloudTV/CloudTV.jpg'
import Luxe from '../../../Assets/Images/case-study/Luxe/Luxe.jpg'
import Tvarana from '../../../Assets/Images/case-study/Tvarana/Tvarana.jpg'
import AdLeo from '../../../Assets/Images/case-study/AdLeo/AdLeo.jpg'
import EduEdge from '../../../Assets/Images/case-study/EduEdge/EduEdge.jpg'
import tataMain from '../../../Assets/Images/work/tata-trucks/tata-main.webp';




// Tech
export const techData = [
    // New
     
    {
        id: 1,
        title: "Building Toko’s First Digital Fundraising Platform for Schools Across New Zealand",
        tags: [
            { name: 'Website Strategy', },
            { name: 'UI/UX', },
            { name: 'Web Application', }
        ],
        image: Toko,
        link: '/work/case-studies/building-tokos-first-digital-fundraising-platform-for-schools-across-new-zealand',
        brand: 'Toko',
        department: 'Tech'
    },

    {
        id: 1,
        title: "Transforming Detouroz into a Conversion-Driven Campervan Booking Platform",
        tags: [
            { name: 'Web Application', },
            { name: 'UI/UX', },
            { name: 'Booking System', }
        ],
        image: Detour,
        link: '/work/case-studies/transforming-detouroz-into-a-conversion-driven-campervan-booking-platform',
        brand: 'Detour',
        department: 'Tech'
    },
    
    
    {
        id: 1,
        title: "Designing Fluid Digital Experiences for Connected TV: CloudTVOS",
        tags: [
            { name: 'Digital Strategy', },
            { name: 'UI/UX', },
            { name: 'Web Design and Development', }
        ],
        image: cloudtv,
        link: '/work/case-studies/designing-fluid-digital-experiences-for-connected-tv-cloudtvos',
        brand: 'CloudTVOS',
        department: 'Tech'
    },

     {
        id: 1,
        title: "High-Performance Marketing Website for Adleo",
        tags: [
            { name: 'Digital Strategy', },
            { name: 'Web Development', }
        ],
        image: AdLeo,
        link: '/work/case-studies/high-performance-marketing-website-for-adleo',
        brand: 'AdLeo',
        department: 'Tech'
    },

     {
        id: 1,
        title: "Revamping Luxe Gift Card for Speed, Style, and Engagement",
        tags: [
            { name: 'UX/UI Strategy & Redesign', },
            { name: 'Performance & Speed Optimisation', },
            { name: 'Content Structuring & Storytelling', },
            { name: 'Mobile-First Design', },
            { name: 'Website Design and Development', },
            { name: 'Webflow Development', }
        ],
        image: Luxe,
        link: '/work/case-studies/revamping-luxe-gift-card-for-speed-style-and-engagement',
        brand: 'Luxe Gift Card',
        department: 'Tech'
    },

    {
        id: 1,
        title: "Designing a Scalable, Content-Driven Education Website for EduEdge Global",
        tags: [
            { name: 'Digital Strategy', },
            { name: 'Web Development', }
        ],
        image: EduEdge,
        link: '/work/case-studies/designing-a-scalable-content-driven-education-website-for-eduedge-global',
        brand: 'EduEdge Global',
        department: 'Tech'
    },

    // {
    //     id: 1,
    //     title: "Interactive 3D Game Experience for Tata Motors’ Ace Pro Launch",
    //     tags: [
    //         { name: 'Digital Strategy', },
    //         { name: 'UI/UX', },
    //         { name: 'Web Development', }
    //     ],
    //     image: tataMain,
    //     link: '/work/case-studies/tata-trucks',
    //     brand: 'TATA Trucks',
    //     department: 'Tech'
    // },

    
    //  {
    //     id: 1,
    //     title: "Where Brand Meets Performance in Webflow Architecture: Tvarana",
    //     tags: [
    //         { name: 'UX/UI Strategy & Redesign', },
    //         { name: 'Performance & Speed Optimisation', },
    //         { name: 'Content Structuring & Storytelling', },
    //         { name: 'Mobile-First Design', },
    //         { name: 'Website Design and Development', },
    //         { name: 'Webflow Development', }
    //     ],
    //     image: Tvarana,
    //     link: '/work/case-studies/where-brand-meets-performance-in-webflow-architecture-tvarana',
    //     brand: 'TATA Trucks',
    //     department: 'Tech'
    // },


    // New
    
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
        title: 'Streamlining Digital Presence: 100+ Websites & CMS for Ryan International School',
        tags: [
            { name: 'Web Design', link: '' },
            { name: 'Web Development', link: '' },
            { name: 'Content Management Systems', link: '' }
        ],
        image: Ryan,
        link: '/work/case-studies/ryangroup',
        brand: 'Ryan International Group of Institutions',
        department: 'Tech'
    },
    {
        id: 3,
        title: 'Modernizing Digital Identity: Revamped Website for Global SaaS Company Groupsoft',
        tags: [
            { name: 'Web Design', link: '' },
            { name: 'Web Development', link: '' },
            { name: 'UI/UX Design', link: '' }
        ],
        image: GroupSoft,
        link: '/work/case-studies/groupsoft',
        brand: 'Groupsoft US Inc',
        department: 'Tech'

    },
    {
        id: 4,
        title: "Elevating Men's Fashion: A Visually Captivating Website for Siyaram's",
        tags: [
            { name: 'Web Design', link: '' },
            { name: 'Web Development', link: '' },
            { name: 'UI/UX Design', link: '' }
        ],
        image: Siyarams,
        link: '/work/case-studies/siyaram',
        brand: "Siyaram's",
        department: 'Tech'
    },
    {
        id: 5,
        title: 'Transforming Digital Presence: Modern Website for India’s #1 Non-Govt. Technical Institute, BITS Pilani',
        tags: [
            { name: 'Digital Strategy', },
            { name: 'UI/UX', },
            { name: 'Web Development', }
        ],
        image: Bitspilani,
        link: '/work/case-studies/bits-pilani',
        brand: "Bits Pilani",
        department: 'Tech'
    },


    {
        id: 8,
        title: 'Empowering Campus Influencers: Tech-Driven Ambassador Program for TribeVibe',
        tags: [
            { name: 'Digital Strategy', },
            { name: 'UI/UX', },
            { name: 'Web Development', }
        ],
        image: Tribevibe,
        link: '/work/case-studies/tribevibe',
        brand: "Tribevibe",
        department: 'Tech'
    },
   


];

// State for each tab

const Tech = () => {
    const [visibleTechItems, setVisibleTechItems] = useState(20);
    const loadMoreTechItems = () => {
        setVisibleTechItems((prev) => prev + 20);
    };

  return (
    <>
        <section className='ourWork'>
        <div className='workGrid'>
            {techData.slice(0, visibleTechItems).map((item) => (
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
        {visibleTechItems < techData.length && (
            <div className='center btnSpaceEx'>
                <button onClick={loadMoreTechItems} className="loadMoreButton btnDark fontM ripple-button">See More Work</button>
            </div>
        )}
        </section>
    </>
  )
}

export default Tech
