import React from 'react'
import Header from '../helpers/Header'
import fotoB from '../../assets/img/bio.jpg'
import Footer from '../helpers/Footer'



const Bio = () => {
  return (
    <section >
      <Header />

      <section className='Bio'>
        <div>
          <img src={fotoB} alt="" className='imgBio' />
        </div>
        <div className='textoBio'>
          <p>
            <h2>Hola, soy <span>Oscar Cano</span> arquitecto y fotográfo...</h2>
            Arquitecto interesado en el desarrollo del conocimiento y experimentación de la Arquitectura,
            basado en competencias y habilidades en Diseño y Representación gráfica, que busca en la Fotografía,
            un complemento creativo, sensible y productivo, para el crecimiento personal y profesional.
          </p>
        </div>

      </section>
      <Footer />
    </section>

  )
}

export default Bio