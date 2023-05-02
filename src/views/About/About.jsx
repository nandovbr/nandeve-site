import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>Sobre a Nandeve</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>Empresa da área tecnológica</h2>
        <p>
          Desenvolvimento de sites, aplicações, sistemas e softwares.
          A Nandeve é uma empresa que atua no mercado de tecnologia da informação, com foco em soluções para a web.
        </p>
        <a href="https://www.linkedin.com/in/nandorodrigues/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
