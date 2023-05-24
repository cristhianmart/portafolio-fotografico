import React from 'react'
import Header from '../helpers/Header'
import fotoB from '../../assets/img/bio.jpg'
import Footer from '../helpers/Footer'



const Bio = () => {
  return (
    <section >
      <Header/>
      
      <section className='Bio'>
      <div>
  <img src={fotoB} alt="" className='imgBio'/>
  </div>
  <div className='textoBio'>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, modi. Illo, aspernatur iure delectus tempora ullam voluptatum odio eius, quod quasi tenetur quibusdam fugit neque pariatur accusamus debitis possimus velit!
      Inventore, saepe magni. Iure soluta eveniet quos voluptate reprehenderit. Cumque voluptates ad vero exercitationem, iusto molestiae cupiditate nemo! Autem dolore consequuntur quae, ex aperiam culpa facere dolor ducimus atque vel.
      Numquam i fugit assumenda culpa, natus ea mollitia enim officiis dolores laboriosam doloribus molestias doloremque quisquam. Qui harum porro culpa fugiat consectetur magni eaque, tenetur unde.
      Numquam iure quia maiores hic quos unde exercitationem autem, temporibus architecto? Nostrum aperiam, nesciunt iure accusamus sequi dicta soluta repellendus neque molestiae non perspiciatis voluptatibus magnam officia dignissimos et eligendi!
      Quisquam mollitia magni laborum fugiat itaque nostrum voluptatum distinctio eveniet omnis, accusamus fugit placeat soluta consequatur! Eaque facere sint at neque dignissimos?
    </p>
  </div>
      
  </section>
  <Footer/>
  </section>

  )
}

export default Bio