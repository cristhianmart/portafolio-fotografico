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

            Oscar Eduardo Cano Sepúlveda es un arquitecto graduado de la universidad Pontificia Bolivariana y fotógrafo graduado de la institución educativa Cesde. Su actividad económica principal es la arquitectura el cual buscando incrementar su nivel de creatividad incursiona en la fotografía, cuenta con dos páginas de Instagram por medio de las cuales publica todos sus proyectos y es la fuente principal para el contacto con sus clientes,  una ellas es su cuenta personal  y la segunda con el nombre comercial PRIXMA PH donde publica sus principales proyectos que se encuentran enfocados al campo arquitectónico y producciones de alimentos, actualmente las personas que se interesan en sus producciones lo contactan por medio de whatsapp, donde el arquitecto Eduardo realiza sus cotizaciones y organiza el plan de trabajo con sus clientes.
          </p>
        </div>

      </section>
      <Footer />
    </section>

  )
}

export default Bio