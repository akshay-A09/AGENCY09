import React, { useEffect, useRef, useState } from 'react';
import RippleButton from '../Hooks/RippleButton';

const StartProjectThankYou = () => { 
  return (
    <div className='errorThankyou'>
      <div className='errorCol'>
          <h3>Start Project Thank You</h3>
  
          <div className='btnSpaceEx center'>     
            <RippleButton to="/connect" className="btnDark fontL"><span>Back to Connect Page</span></RippleButton>
          </div>
      </div>
    </div>
  );
}
export default StartProjectThankYou;
