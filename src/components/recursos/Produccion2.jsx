import Header from '../helpers/Header'
import Footer from '../helpers/Footer'
import uno from '../../assets/Produccion2/1.jpg'
import dos from '../../assets/Produccion2/2.jpg'
import tres from '../../assets/Produccion2/3.jpg'
import cuatro from '../../assets/Produccion2/4.jpg'
import cinco from '../../assets/Produccion2/5.jpg'
import seis from '../../assets/Produccion2/6.jpg'

const Produccion2 = () => {
  return (
    <section className='fondoproduccion'>
    <Header />
    <h2 className='tituloproduccion'>PIELES DE ARQUITECTURA</h2>
    <h3>Arquitectura Artística</h3>
    <p className='pprodu'>En arquitectura se habla de la piel, haciendo alusión al tratamiento de las fachadas y
		   cubiertas, es decir la envolvente del edificio que está en contacto directo con el medio que
			 lo rodea.</p>
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

export default Produccion2