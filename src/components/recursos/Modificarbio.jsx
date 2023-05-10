import Nav from "../helpers/Nav";

const Modificarbio = () => {
   return (
      <section className="panel-container">
         <Nav />
         <section className="panel">
            <div className="vista-previa">
               <label>*Aqui va la imagen*</label>
               <input  type="file"  accept="image/*" />
               <button className="modificar">Editar foto de biografía</button>
            </div>
            <div className="vista-previa">
         
               <textarea className="texto"name="" id="" cols="30" rows="10">
                  Ingrese el nuevo texto de biografía
               </textarea>
               <button className="modificar">Guardar cambios</button>
            </div>
         </section>
      </section>
   );
};

export default Modificarbio;