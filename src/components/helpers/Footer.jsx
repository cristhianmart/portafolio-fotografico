import insta2 from '../../assets/img/instagram.png'
import {Link} from 'react-router-dom'



const Footer = () => {
  return (
    <section className='footer'>
    
    < p>
    Copyright © 2023 Cesde
       --Portafolio Eduardo--
     Todos los derechos reservados </p>
      
      <Link to={"https://www.instagram.com/"} target='_blank'><input  type="image" className='imginsta' src={insta2} alt="" /></Link>
    
      
    
       </section>
         
       
      
   








  )
}

export default Footer