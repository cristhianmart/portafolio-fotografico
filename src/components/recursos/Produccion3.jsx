import Header from '../helpers/Header'
import deli from '../../assets/img/deli.jpg'
import Footer from '../helpers/Footer'
import { Link } from 'react-router-dom'

const Produccion3 = () => {
  return (
    <section className='fondoproduccion'>
        <Header/>
        <p className='tituloproduccion'>DELI BURGUERS</p>
    <section className='produccion'>
      <div>
      <img src={deli} alt="" className='imgProduccion'/> 
      </div>
      <div className='textoProduccion'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil placeat optio doloribus fugit earum vitae totam id, deserunt distinctio? Earum vel quibusdam a odio assumenda illum sapiente laudantium laborum iusto.
      At, facilis ullam cumque quidem corrupti esse iste nisi consectetur ut sapiente molestias ab dolorum? Dicta harum ducimus enim deserunt maiores ut ipsam. Voluptatem nihil fugiat, asperiores alias rem quis.
      Aperiam debitis veniam optio, quis fugit culpa! Explicabo eos corporis, perspiciatis incidunt distinctio aliquam neque pariatur cupiditate officiis optio rerum consequuntur libero veniam, velit a numquam aut amet ea laboriosam?
      Beatae suscipit laborum, doloremque, alias culpa fuga eum ab ea provident atque accusamus odit eius tempore nostrum ipsa quia libero eveniet harum, adipisci non unde nobis? Ducimus magni eius laboriosam?
      E quo id vero enim consequatur! Quisquam tempore soluta cumque reprehenderit eaque veritatis voluptatibus officia nam? Illum doloremque laboriosam, culpa corporis unde quaerat.</p>
        </div>
        </section>
       <div className='sectionProduccion'>
       <Link><img src={deli} alt="" className='imagenes'/></Link>
       <Link><img src={deli} alt="" className='imagenes'/></Link>
       <Link><img src={deli} alt="" className='imagenes'/></Link>
       <Link><img src={deli} alt="" className='imagenes'/></Link>
       <Link><img src={deli} alt="" className='imagenes'/></Link>
       <Link><img src={deli} alt="" className='imagenes'/></Link>
      
        </div>
        <Footer/>
    </section>
  )
}

export default Produccion3