import React from 'react'
import Header from "../helpers/Header"
import { Link } from 'react-router-dom'
import burguerKing from '../../assets/img/burguerKing.png'
import mcdonals from '../../assets/img/mcdonalds.png'
import deli from '../../assets/img/deli.jpg'
import aptlujo from '../../assets/img/lujoapt.jpg'
import casalujo from '../../assets/img/casa-lujo.jpg'

const Main = () => {
  return (
    <>
      <Header />
      <section className='vistapp'>
        
        <Link to={'/produccion1'} className='boton'> <img src={burguerKing} alt="" className='imagenes'/>Burguer King</Link>
        <Link to={'/produccion2'}className='boton'> <img src={mcdonals} alt="" className='imagenes'/> MacDonals</Link>
        <Link to={'/produccion3'}className='boton'><img src={deli} alt="" className='imagenes'/>Deli Burgues Gurmet</Link>
        <Link to={'/produccion4'} className='boton'><img src={aptlujo} alt="" className='imagenes'/>Apartamentos de lujo</Link>
        <Link to={'/produccion5'} className='boton'><img src={casalujo} alt="" className='imagenes'/>Casas de lujo</Link>
      </section>
     
    </>
    
  )
}

export default Main