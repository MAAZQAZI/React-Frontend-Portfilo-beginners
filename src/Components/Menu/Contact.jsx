import React from 'react'
import './Contact.css'
import img from './cont.png'
import { FaFacebookSquare } from "react-icons/fi";
import { FaTwitterSquare } from "react-icons/fi";
import { Player, Controls } from '@lottiefiles/react-lottie-player';




function Contact() {
    return (
        <div>
            <div className="ContainerC" id='Contact'>
                <div className="leftC">
                <div className="headC">
                <Player
    autoplay
loop

src="https://assets6.lottiefiles.com/packages/lf20_ch1qp0yv.json"
style={{ height: '350px', width: '550px' , hover:'true' }}
></Player>
                </div>

                </div>
                <div className="rightC">
                <div className="headC">
                    <h1>Contact Me</h1>
                </div>
                <div className="bodyC">

                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea type="textarea" placeholder="Subject" />
                </div>
                <div className="btn-contact">
               
                 <button className='btn_res' >Submit💖</button>
                </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
