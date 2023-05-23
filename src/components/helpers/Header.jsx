import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/foto.png'

const Header = () => {
  return (
    <header className='encabezado'>
      <nav className='menu-navegacion'>
        <section className='menu'>

        <Link to={'/'}>INICIO</Link>
        <Link to={'/bio'}>BIO</Link>
        <Link to={'/contacto'}>CONTACTO</Link>
        </section>
        
  
        <img src={logo} alt="" className='logo'/>   
   
      </nav>
      
    </header>
  )
}

export default Header