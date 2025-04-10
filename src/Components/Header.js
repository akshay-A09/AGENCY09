import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AGENCY09logo from '../Assets/Images/agency09.webp';
import AGENCY09logoLight from '../Assets/Images/agency-light.webp';

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import caseStudies from '../Assets/Images/case_studies.webp'
import blog from '../Assets/Images/blog.webp'

import ideasPerform from '../Assets/Images/growth/mediaA09.webp';
import ideasPerform1 from '../Assets/Images/blog1.webp';
import sportday from '../Assets/Images/blog2.webp';
import blog1 from '../Assets/Images/must-have-tools.jpg';
import blog2 from '../Assets/Images/tvarana-blog-tn.jpg';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [isHeaderFixed, setHeaderFixed] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menuOpen');
    } else {
      document.body.classList.remove('menuOpen');
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setHeaderFixed(currentScrollPos > 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('menuOpen');
    };
  }, [prevScrollPos]);
  const location = useLocation();
   

  return (
    <>
      <header className={`header ${visible ? 'visible' : 'hidden'} ${isHeaderFixed ? 'fixed' : ''} ${isMenuOpen ? 'MenuActive' : ''}`}>
        <div className='container'>
          <nav>
            <ul>
              <li>
                <Link to='/about'  className={location.pathname === '/about' ? 'active' : ''}>About</Link>
              </li>
              <li>
                <Link to='/work/case-studies'>Work</Link>
              </li>
              <li>
                <Link to='/solutions/tech'>Solutions</Link>
                <div className='subMenu'> 
                  <div className='subMenuInner'>
                    <span><Link className={location.pathname === '/solutions/tech' ? 'active' : ''} to='/solutions/tech'>Tech</Link></span>
                    <span><Link className={location.pathname === '/solutions/design' ? 'active' : ''} to='/solutions/design'>Design</Link></span>
                    <span><Link className={location.pathname === '/solutions/content' ? 'active' : ''} to='/solutions/content'>Content</Link></span>
                    <span><Link className={location.pathname === '/solutions/performance-marketing' ? 'active' : ''} to='/solutions/performance-marketing'>Performance Marketing</Link></span>
                    <span><Link className={location.pathname === '/solutions/production' ? 'active' : ''} to='/solutions/production'>Production</Link></span>
                    <span><Link className={location.pathname === '/solutions/keyword' ? 'active' : ''} to='/solutions/keyword'>Keyword</Link></span>
                  </div>
                </div>
              </li>
              <li className='logo'>
                <Link to='/' ><img src={AGENCY09logo} loading='lazy' alt='AGENCY09' /></Link>
              </li>
              <li>
                <Link to='/careers' className={location.pathname === '/careers' ? 'active' : ''}>Careers</Link>
              </li>
              <li>
              <a href='https://www.agency09.in/simplifyingtheweb/'>Blog</a>
              </li>
              <li>
                <Link to='/connect' className={location.pathname === '/connect' ? 'active' : ''}>Connect</Link>
              </li>
            </ul>
          </nav>
          <div className='rightMenu'>
            <div className={`menuBtn ${isMenuOpen ? 'Open' : ''}`} onClick={toggleMenu}>
              <Link><span>Explore</span>  <HiOutlineMenuAlt3 className='mOpen' /></Link>
            </div>
          </div>
        </div>

      </header>

      <div className={`menu_row ${isMenuOpen ? 'Show' : ''}`}>
        <div className="menu09">
          
          
          
          
      <div className='menu09Header'>
          <div className='menu09HeaderLogo'>
            <Link to='/'><img src={AGENCY09logoLight} loading='lazy' alt='AGENCY09' /></Link>
          </div>

          <div className='menu09HeaderRight'>

            <div className='menu09HeaderSos'>
              <Link to='https://www.linkedin.com/company/agency09/' target='_blank'>LinkedIn</Link>
              <Link to='https://www.instagram.com/agency09/' target='_blank'>Instagram</Link>
              <Link to='https://www.youtube.com/channel/UCT7wE543Vl0LSrpCmpMzZrg' target='_blank'>YouTube</Link>
              <Link to='https://twitter.com/AGENCY09' target='_blank'>X</Link>
              <Link to='https://www.facebook.com/agency09/' target='_blank'> Facebook</Link>

            </div>

            <div className={`menuBtn ${isMenuOpen ? 'Open' : ''}`} onClick={toggleMenu}>
                  <Link><IoCloseOutline className='mClose' /></Link>
            </div>
          </div>

      </div>

          
          
          <div className='container'>
     
     

          <div className='menu09Content'>

            <div className='menu09Item menu09Item01'>
              <ul>
                <li><Link className={`minFont ${location.pathname === '/about' ? 'active' : ''}`} to='/about'  >About</Link></li>
                <li><Link className={`minFont ${location.pathname === '/work' ? 'active' : ''}`} to='/work/case-studies'>Work</Link></li>
                <li><Link className={`minFont ${location.pathname === '/careers' ? 'active' : ''}`} to='/careers'>Careers <span className='sideFont'>Hiring!</span></Link></li>
                <li><a className='minFont' href='https://www.agency09.in/simplifyingtheweb/' >Simplifyingtheweb  <span className='sideFont'>Blog</span></a></li>
                <li><Link className={`minFont ${location.pathname === '/connect' ? 'active' : ''}`} to='/connect'>Connect</Link></li>
              </ul>
            </div>

            <div className='menu09Item menu09Item02'>
              <h2 className='minFont'>Solutions</h2>
              <ul>
                <li><Link className={location.pathname === '/solutions/tech' ? 'active' : ''} to='/solutions/tech'>Tech</Link></li>
                <li><Link className={location.pathname === '/solutions/content' ? 'active' : ''} to='/solutions/content'>Content</Link></li>
                <li><Link className={location.pathname === '/solutions/design' ? 'active' : ''} to='/solutions/design'>Design</Link></li>
                <li><Link className={location.pathname === '/solutions/performance-marketing' ? 'active' : ''} to='/solutions/performance-marketing'>Performance Marketing</Link></li>
                <li><Link className={location.pathname === '/solutions/production' ? 'active' : ''} to='/solutions/production'>Production</Link></li>
                <li><Link className={location.pathname === '/solutions/Keyword' ? 'active' : ''} to='/solutions/keyword'>Keyword</Link></li>
              </ul>
            </div>

            <div className='menu09Item menu09Item03'>
            <div className='minFont pb-10'>
                        <span>Blog</span> 
                      </div>
                <ul>
                <li>
                     

                      <div className='NBItemContent'>
                      <a href='https://www.agency09.in/simplifyingtheweb/tech/how-webflow-transformed-tvaranas-website/' target='_blank'>
                          <div className='NBItemImg'>
                            <img src={blog2} loading='lazy' alt='{blog}' />
                          </div>
                          <div className='NBItemText'>
                            <p>How We Transformed Tvarana’s Website with Webflow for Faster Performance ....</p>
                          </div>
                        </a>
                      </div>
                  </li>

                  <li>

                      <div className='NBItemContent'>
                        <a href='https://www.agency09.in/simplifyingtheweb/design/the-journey-of-rhealthbeat-magazine-a-testament-to-innovative-design/' target='_blank'>
                          <div className='NBItemImg'>
                            <img src={'https://www.agency09.in/simplifyingtheweb/wp-content/uploads/2025/01/rgi-magazine.jpeg'} loading='lazy' alt='{caseStudies}' />
                          </div>
                          <div className='NBItemText'>
                            <p>The Journey of RHealthBeat Magazine, a Testament to Innovative Design
                            </p>
                          </div>
                        </a>
                      </div>
                  </li>

                
                </ul>
            </div>

          </div>


          <div className='menu09Content2'>

            <div className='menu09Item menu09Item01'>
              <ul>
              <li><Link to='/connect#form'>REQUEST A SERVICE</Link></li>
              <li><Link to='/connect#form'>JOIN THE TEAM</Link></li>
              <li><Link to='/connect#form'>PARTNER WITH US</Link></li>
              </ul>
            </div>

            <div className='menu09Item menu09Item02'>
              <div>
                <h4>Start a conversation</h4>
                <p><Link to='mailto:info@agency09.in'>info@agency09.in</Link></p>
              </div>
            </div>

            <div className='menu09Item menu09Item03'>
              <h4>Address</h4>
              <div className='addressTab'>
                <Tabs>
                  <TabList>
                    <Tab>Mumbai</Tab> | <Tab>Dubai</Tab> | <Tab>Australia</Tab>
                  </TabList>

                  <TabPanel>
                    <p>101, Meghdoot, Junction of Linking & Turner Rd., Above Bank of Baroda Bank, Opp HP Petrol Pump, Bandra West, Mumbai - 400 050</p>
                    <Link to='https://maps.google.com/maps?ll=19.059619,72.836396&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=718129958178962330' target='_blank'>View Map</Link>  
                  </TabPanel>

                  <TabPanel>
                    <p>Media City,<br/>Dubai </p>
                  </TabPanel>

                  <TabPanel>
                    <p>North Adelaide,<br/>Adelaide 5006</p>
                  </TabPanel>

                </Tabs>
              </div>
            </div>

          </div>

        </div></div>
      </div>

    </>
  )
}

export default Header;
