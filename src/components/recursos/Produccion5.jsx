import Header from '../helpers/Header'
import Footer from '../helpers/Footer'
import uno from '../../assets/Produccion5/1.jpg'
import dos from '../../assets/Produccion5/2.jpg'
import tres from '../../assets/Produccion5/3.jpg'
import cuatro from '../../assets/Produccion5/4.jpg'
import cinco from '../../assets/Produccion5/5.jpg'



const Produccion5 = () => {
  return (
    <section className='fondoproduccion'>
    <Header />
    <h2 className='tituloproduccion'>CIRCUITO MUSEOGRÁFICO</h2>
    <h3>Arquitectura e Interíorismo</h3>
    <p className='pprodu'>Muros interiores como lienzos de la Historia de EPM</p>
    <section className='produccion'>

    </section>
    <div className='sectionProduccion'>
      <img src={uno} alt="" className='imagenes' />
      <img src={dos} alt="" className='imagenes' />
      <img src={tres} alt="" className='imagenes' />
      <img src={cuatro} alt="" className='imagenes' />
      <img src={cinco} alt="" className='imagenes' />

    </div>
    <Footer />
  </section>
  )
}

export default Produccion5
