import React from 'react'
import Header from '../helpers/Header'
import Footer from '../helpers/Footer'
import uno from '../../assets/Produccion1/1.png'
import dos from '../../assets/Produccion1/2.png'
import tres from '../../assets/Produccion1/3.png'
import cuatro from '../../assets/Produccion1/4.png'
import cinco from '../../assets/Produccion1/5.png'
import seis from '../../assets/Produccion1/6.png'


const Produccion1 = () => {
  return (
    <section className='fondoproduccion'>
      <Header />
      <h2 className='tituloproduccion'>CASA ALICANTE</h2>
      <p>Descripción</p>
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

export default Produccion1