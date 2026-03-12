import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const TechPartnerThankYou = () => { 
  return (
    <div className='errorThankyou'>
      <div className='errorCol'>
          <h3>Thank you!</h3>
<p class="tech-thanks-content">We’ve received your message and will be in touch soon.</p>
  
          <div className='btnSpaceEx center'>     
                      <Link className="btnDark ripple-button" to="/tech-partner"><span>Back to Page</span></Link>
                    </div>
      </div>
    </div>
  );
}
export default TechPartnerThankYou;
