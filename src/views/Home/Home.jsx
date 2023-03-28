import React from 'react';
import './Home.css';
import img8 from '../../images/home_page.png';

import Aos from "aos";
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>Seja bem-vindo(a) a</p>
          <h1>NANDEVE</h1>
          <h2>Soluções em  <span className="typing"></span></h2>
          {/* <a href="https://drive.google.com/drive/folders/1zc8yyK0RNFRhxWLLXAJG2TTIqBPFraBX?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a> */}
        </div>

        <div className="right-content" data-aos="fade-up" data-aos-delay="2000">
          <img src={img8} alt="imagem da logo da Nandeve" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home

