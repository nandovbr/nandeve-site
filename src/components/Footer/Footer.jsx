import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='author'>
        <p>Desenvolvido por <a href="nandeve.com.br" target="_blank" rel="noopener noreferrer">Nandeve</a> com <i className='far fa-heart'></i></p>
        </div>
        <div>
        <p className='copyright'> <i className='far fa-copyright'></i> 2023 Todos os direitos reservados</p>
        </div>
    </div>
    </>
  )
}

export default Footer
