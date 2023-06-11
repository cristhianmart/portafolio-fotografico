import insta2 from '../../assets/img/insta.svg'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <section className='footer'>

      < p>
        Copyright © 2023 Cesde
        -Portafolio PRYSMA-
        Todos los derechos reservados </p>

      <Link to={"https://www.instagram.com/"} target='_blank'><input type="image" className='imginsta' src={insta2} alt="" /></Link>



    </section>












  )
}

export default Footer