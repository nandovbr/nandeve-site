import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/AdrianoJe.png'
import img5 from  '../../images/ElenRodri.png'
import img3 from  '../../images/ControleFin.png'
import img4 from  '../../images/landingpage.png'
// import img1 from  '../../images/AlarmClock.png'
// import img2 from  '../../images/FileDownloader.png'
// import img6 from  '../../images/TexttoSpeech.png'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>Alguns Projetos</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            {/* necessário add o rel="noopener noreferrer" */}
            <a href="https://adrianojeronimo.com.br/" rel="noopener noreferrer" target="_blank">
              <ProjectBox title = "Adriano Jeronimo" img= {img7} />
            </a>

            <a href="https://arquiteturarodrigues.com.br/" rel="noopener noreferrer" target="_blank">
              <ProjectBox title = "Rodrigues Arquitetura" img= {img5} />
            </a>

            <a href="https://financeiro.nandeve.com.br/" rel="noopener noreferrer" target="_blank">
              <ProjectBox title = "Controle Financeiro" img= {img3} />
            </a>

            <a href="https://exclusivo.nandeve.com.br/" rel="noopener noreferrer" target="_blank">
              <ProjectBox title = "Landing page" img= {img4} />
            </a>
            {/* <ProjectBox title = "Gym Website" img= {img4} link = "https://github.com/ahmedrohailawan/Gym-Project"  />
            <ProjectBox title = "Alarm Clock using js" img= {img1} link = "https://github.com/ahmedrohailawan/Alarm-clock-using-javascript"  />
            <ProjectBox title = "File downloader using js" img= {img2} link = "https://github.com/ahmedrohailawan/File-downloader-with-vanilla-javasctipt"  />
            <ProjectBox title = "Text to speech using js" img= {img6} link = "https://github.com/ahmedrohailawan/Text-to-Speech-Converter-using-JavaScript"  /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
