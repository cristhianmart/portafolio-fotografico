import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/Camara-logo.png'
import insta from '../../assets/img/instagram.jpg'

const Header = () => {
  return (
    <header className='encabezado'>
      <section className='menu-navegacion'>
        <Link to={'/'}>INICIO</Link>
        <Link to={'/bio'}>BIO</Link>
        <Link to={'/contacto'}>CONTACTO</Link>
    
      </section>
      <section>
      <a href='https://www.instagram.com/' target="_blank"><img src={insta} alt='' className='insta'/></a>
      </section>
      <section className='logo'>
      
      <img src={logo} alt="Logo" />
         
      </section>
      
    </header>
  )
}

export default Header