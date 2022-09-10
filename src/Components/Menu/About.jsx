import React from 'react'
import './About.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { FiDownloadCloud } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
function About() {
  return (
    <div className='containerA' id='containerElement'>
    
    <div className='left-sec'>
    <div className='text'>About Me</div>
    <div className='lotti'>
    <Player
    autoplay
loop

src="https://assets7.lottiefiles.com/packages/lf20_ndj9fzcd.json"
style={{ height: '350px', width: '380px' , hover:'true' }}
></Player>
    </div>
    </div>
    <div className='right-sec'>
    <div className='textR'>
    
    </div>
    <div className='paraR' style={{color :'#610C63', padding:'10px'}}>
    <h3>MERN Stack Developer</h3>
    <p className='excellence'>I pride myself on my customer service skills♟️. From the moment you start talking to me, you'll be impressed 
    by my patience, consistency and willingness 
    to explain everything as many times as it takes.🥰</p>
    <h3>Experience📜</h3>
    <ul>
    <li>🎓 KICKS UET</li>
    <li>💼 Intern Experience</li>
    <li>✏️ Designer</li>
    <li>💻 Mern Developer</li>
    <li>🖌️ UI/UX</li>
    </ul>
    
    <button className='btn_res' >Contact <RiContactsLine/></button>
    <button className='btn_res' >Resume <FiDownloadCloud/></button>
    </div>
    </div>
   
    
    
    
    </div>
  )
}

export default About