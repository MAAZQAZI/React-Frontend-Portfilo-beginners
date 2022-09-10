import React from 'react'
import './Hero.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Spline from '@splinetool/react-spline';

   
  


function Hero() {
  return (
    <div className='containerh' id='Hero'>
  
  <div className='left-section'> 
  
  <div className='texting'>
  <div className='portfilo'>Hey! I am Maaz</div>
 
  <div className='main-hero'>
    <span className='iam'></span>
  <p className='para'>If your organization has a need for custom applications, then I'm the perfect fit to help you 💯 
  - Implement innovative enterprise apps - Develop software tailored to your requirements.👍 </p>
  
   <div className='explore'></div>
   <button>Explore 🌍</button>
 </div>
  
  </div>
  
  
  
  </div>
  
  
  <div className='right-section'>
  
  <div className='footage'>
  

  <Spline scene="https://prod.spline.design/54uMsgwLfbhcKH-p/scene.splinecode" />
  </div>
  
  </div>

  
  </div>
  )
}

export default Hero