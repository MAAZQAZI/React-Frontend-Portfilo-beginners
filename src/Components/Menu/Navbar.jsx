import React from 'react'
import './Navbar.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Howl, Howler } from 'howler';
import Circle from './Circle - Copy.mp3';
import { Link } from 'react-scroll';

function Navbar() {


  const Soundplay = (src) => {
    const sound = new Howl({
      src,
      html5: true,
    })
    sound.play();
    Howler.volume(0.1);
  };




  return (
    <>

      <nav className='main-nav' id='main-nav'>
        <div className='logo' onClick={() => Soundplay(Circle)}>
          <Player
            autoplay
            loop

            src="https://assets8.lottiefiles.com/packages/lf20_euaveaxu.json"
            style={{ height: '150px', width: '180px', hover: 'true' }}
          >

          </Player>
        </div>
        
        <div className='menu-link'>
          <ul>
            <li> <Link to="Hero" spy={true} smooth={true} offset={50} duration={500}>🏡 Home</Link></li>
            <li><Link to="About" spy={true} smooth={true} offset={50} duration={500} >🧑 About</Link></li>
            <li><Link to="Contact" spy={true} smooth={true} offset={50} duration={500} >☎️ Contact</Link></li>
            <li><Link to="Skills" spy={true} smooth={true} offset={50} duration={500} >🦹 Services</Link></li>



          </ul>
        </div>
        <div className='coffee'>
          <ul><li><a href='#'></a><img src='https://uploads-ssl.webflow.com/5ba4b3c973b5d218459f7e6f/5f03cc632b7dfcd704896773_buy-me-a-coffe.svg' /></li></ul>
        </div>


      </nav>
    </>
  )
}

export default Navbar