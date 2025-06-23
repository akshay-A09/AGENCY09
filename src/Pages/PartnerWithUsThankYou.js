import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const PartnerWithUsThankYou = () => { 
  return (
    <div className='errorThankyou'>
      <div className='errorCol'>
          <h3>Thank you!</h3>
<p>We’ve received your message and will be in touch soon.</p>
  
          <div className='btnSpaceEx center'>     
            <Link className="btnDark ripple-button" to="/connect"><span>Back to Connect Page</span></Link>
           
          </div>
      </div>
    </div>
  );
}
export default PartnerWithUsThankYou;
