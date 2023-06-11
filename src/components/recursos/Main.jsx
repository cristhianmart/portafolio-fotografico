import React from 'react'
import Header from "../helpers/Header"
import { Link } from 'react-router-dom'
import prod1 from '../../assets/Produccion1/1.png'
import prod2 from '../../assets/Produccion2/1.jpg'
import prod3 from '../../assets/Produccion3/1.jpg'
import prod4 from '../../assets/Produccion4/1.jpg'
import prod5 from '../../assets/Produccion5/1.jpg'
import Footer from '../helpers/Footer'

const Main = () => {
  return (
    <>
      <Header />
      <section className='vistapp'>
        
        <Link to={'/produccion1'} className='boton'> <img src={prod1} alt="" className='imagenes'/>Casa Alicante</Link>
        <Link to={'/produccion2'}className='boton'> <img src={prod2} alt="" className='imagenes'/> Pieles de Arquitectura</Link>
        <Link to={'/produccion3'}className='boton'><img src={prod3} alt="" className='imagenes'/>Puntos Fijos</Link>
        <Link to={'/produccion4'} className='boton'><img src={prod4} alt="" className='imagenes'/>Escuela Indigena</Link>
        <Link to={'/produccion5'} className='boton'><img src={prod5} alt="" className='imagenes'/>Circuito Museográfico</Link>
      </section>
      <Footer/>
    </>
    
  )
}

export default Main