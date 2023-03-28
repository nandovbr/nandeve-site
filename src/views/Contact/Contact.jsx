import React from 'react'
import './Contact.css'
import ContactBox from '../../components/ContactBox/ContactBox'

function Contact() {
  return (
    <>
    <div id="Contact" className='contact'>
      <h1>Contatos</h1>
      <div className="boxes">
        <ContactBox animation="fade-right" class= "fas fa-envelope" name="Email" link="tech.luizfernando@gmail.com"/>
        <ContactBox animation="fade-up" class= "fab fa-whatsapp" name="WhatsApp" link="https://api.whatsapp.com/send?phone=5512981740767&text=Ol%C3%A1!%20Encontrei%20seu%20contato%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20conversar%20e%20tirar%20algumas%20d%C3%BAvidas."/>
        <ContactBox animation="fade-left" class= "fab fa-linkedin" name="Linkedin" link="https://www.linkedin.com/in/nandorodrigues/"/>
      </div>

    </div>
    </>
  )
}

export default Contact
