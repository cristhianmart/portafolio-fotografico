import React from 'react'
import Header from '../helpers/Header'
import Footer from '../helpers/Footer'
import uno from '../../assets/Produccion4/1.jpg'
import dos from '../../assets/Produccion4/2.jpg'
import tres from '../../assets/Produccion4/3.jpg'
import cuatro from '../../assets/Produccion4/4.jpg'
import cinco from '../../assets/Produccion4/5.jpg'
import seis from '../../assets/Produccion4/6.jpg'

const Produccion4 = () => {
  return (
    <section className='fondoproduccion'>
    <Header />
    <h2 className='tituloproduccion'>ESCUELAS INDIGENAS</h2>
    <h3>Arquitectura Institucional</h3>
    <p className='pprodu'>La Escuela como Pabellón de integración cultural</p>
    <section className='produccion'>

    </section>
    <div className='sectionProduccion'>
      <img src={uno} alt="" className='imagenes' />
      <img src={dos} alt="" className='imagenes' />
      <img src={tres} alt="" className='imagenes' />
      <img src={cuatro} alt="" className='imagenes' />
      <img src={cinco} alt="" className='imagenes' />
      <img src={seis} alt="" className='imagenes' />

    </div>
    <Footer />
  </section>
  )
}

export default Produccion4