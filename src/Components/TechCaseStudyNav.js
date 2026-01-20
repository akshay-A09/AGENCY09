import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { techData } from '../Pages/Work/CaseStudiesItems/Tech'; 
import a09 from "../Assets/Images/09.webp"

const CaseStudyNav = ({ visitLink }) => {
    const location = useLocation();
    const [navActive, setNavActive] = useState(false);
    
    const currentIndex = techData.findIndex(item => item.link === location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer'); // Automatically finds your footer tag
            const scrollValue = window.scrollY;
            
            if (footer) {
                const footerPosition = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // 1. Show if scrolled more than 200px
                // 2. Hide if footer top is inside the visible window
                if (scrollValue > 200 && footerPosition > windowHeight) {
                    setNavActive(true);
                } else {
                    setNavActive(false);
                }
            } else {
                // Fallback if no footer is found
                setNavActive(scrollValue > 200);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Run once on mount to check initial position
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]); // Re-run when page changes

    if (currentIndex === -1) return null;

    const prevItem = techData[currentIndex === 0 ? techData.length - 1 : currentIndex - 1];
    const nextItem = techData[currentIndex === techData.length - 1 ? 0 : currentIndex + 1];

    return (
        <div className={`navItems ${navActive ? 'navActive' : ''}`}>
            <div className='navItemsList'>
                <div className='navItemsListLink09'><Link to="/"> <img src={a09} loading='lazy'  /></Link></div>
                <div className='navItemsListLink'>
                <div className='navItemsListLinkPrev'><Link to={prevItem.link}>Prev</Link></div>
                <div className='navItemsListLinkNext'><Link to={nextItem.link}>Next</Link></div>
                <div className='navItemsListLinkList'><Link to="https://www.agency09.in/work/case-studies#tech">All</Link></div>
                
                </div>
                <div className='navItemsListLinkAll'><a href={visitLink || "https://www.agency09.in"} target="_blank" rel="noreferrer">
                        Visit Site
                    </a></div>
            </div>
        </div>
    );
};

export default CaseStudyNav;