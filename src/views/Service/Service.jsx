import React from 'react'
import './Service.css'
import ServiceBox from '../../components/ServiceBox/ServiceBox'

function Service() {
  return (
    <>
    <div id="Services" className='services'>
      <h1>Serviços</h1>
      <div className="boxes">
        <ServiceBox animation = "fade-up" icon = "fas fa-globe" heading = "Desenvolvimento Web" text = "Oferecemos uma variedade de serviços de design e desenvolvimento de sites nos quais usamos tecnologias modernas." />
        <ServiceBox animation = "fade-up" icon = "fas fa-code" heading = "Desenvolvimento Software" text = "O desenvolvimento de software é um compilado de várias atividades, como design, teste, programação."/>
        <ServiceBox animation = "fade-up" icon = "fas fa-info-circle" heading = "Design" text = "Edições e criações de imagens caso precise de ajuda com o visual do seu site." />
        <ServiceBox animation = "fade-up" icon = "fas fa-bookmark" heading = "Hospedagem de sites" text = "Provedor de serviços de hospedagem na web. Não é necessário pagar nada á parte para ter seu site no ar." />
        <ServiceBox animation = "fade-up" icon = "fas fa-users" heading = "Marketing Digital" text = "Conte com nosso time de marketing digital para te guiar na conquista por acessos." />
        <ServiceBox animation = "fade-up" icon = "fas fa-video" heading = "Edição de Vídeos" text = "Edições e criações de vídeos para seu site e/ou redes sociais." />
      </div>
    </div>
    </>
  )
}

export default Service
