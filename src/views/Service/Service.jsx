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
        <ServiceBox animation = "fade-up" icon = "fas fa-code" heading = "Automações e I.A." text = "Desenvolvemos processos e fluxos de trabalhos automatizados com ferramentas e inteligência artificial."/>
        <ServiceBox animation = "fade-up" icon = "fas fa-info-circle" heading = "Gestão de Projetos" text = "Gerenciamos o seu projeto desde a implementação. Sempre em melhoria contínua." />
        <ServiceBox animation = "fade-up" icon = "fas fa-bookmark" heading = "Hospedagem de sites" text = "Provedor de serviços de hospedagem na web. Não é necessário pagar nada á parte para ter seu site no ar." />
        <ServiceBox animation = "fade-up" icon = "fas fa-users" heading = "Marketing Digital" text = "Conte com nossos serviços de marketing digital e CRM para obtenção de potenciais clientes qualificados." />
        <ServiceBox animation = "fade-up" icon = "fas fa-certificate" heading = "KOMMO - CRM" text = "Ferramenta de gestão de leads e automações mais completa do mercado." />
      </div>
    </div>
    </>
  )
}

export default Service
