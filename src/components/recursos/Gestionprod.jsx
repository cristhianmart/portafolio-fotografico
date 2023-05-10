import React from "react";
import Nav from "../helpers/Nav";

const Gestionprod = () => {
   return (
      <section className="panel-container">
         <Nav />
         <section className="panel">
            <section className="panel-conf">
               <button className="btnadmi">Modificar Album</button>
               <button className="btnadmi">Borrar Album</button>
               <button className="btnadmi">Ocultar Album</button>
            </section>
            <section className="panel-vpalbum">
               <h1>Vista previa de los albumnes</h1>
            </section>
         </section>
      </section>
   );
};

export default Gestionprod;