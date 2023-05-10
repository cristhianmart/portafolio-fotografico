import React from "react";
import Nav from "../helpers/Nav";

const Cargarimg = () => {
   return (
      <section className="panel-container">
         <Nav />
         <section className="panel">
            <section className="panel-carga">
               <input className="file" type="file"  accept="image/*" />
            </section>
            <section className="vista-previa">
               <label className="nombre" >Nombre de producción</label>
               
               <input className="texto" type="text" placeholder="" />  
               <div>
                  *vista previa imagenes*
               </div>
               <textarea className="texto"
                  cols="30"
                  rows="10"
                  placeholder="Agregar descripción de la producción fotografica"></textarea>
               
            </section>
            <section className="panel-categoria">
               
               <label className="checkbox"><input type="radio" name="categoria" value="gastronomia" />Gastronomia</label>
               <label ><input type="radio" name="categoria" value="arquitectura" />Arquitectura</label>
            </section>
         
            <button className="guardar">Guardar</button>
         </section>
         
      </section>
   );
};

export default Cargarimg;
