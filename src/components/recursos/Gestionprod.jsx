import React from 'react'
import Nav from '../helpers/Nav'

const Gestionprod = () => {
    const modificar = document.querySelector('#modificar')
    function mostrarmodif() {
        modificar.classList.add('vista-modificar2')
        modificar.classList.remove('vista-modificar')
    }

    return (
        <section className="panel-container">
            <Nav />
            <section className="panel">
                <section className="panel-conf">
                    <button className="btnadmi" onClick={mostrarmodif}>
                        Modificar Album
                    </button>
                    <button className="btnadmi">Borrar Album</button>
                    <button className="btnadmi">Ocultar Album</button>
                </section>
                <section className="vista-modificar" id="modificar">
                    <label className="nombre">Nombre de producción</label>

                    <input className="texto" type="text" placeholder="" />
                    <div>*vista previa imagenes*</div>
                    <textarea
                        className="texto"
                        cols="30"
                        rows="10"
                        placeholder="Agregar descripción de la producción fotografica"></textarea>
                </section>
                <section className="panel-vpalbum">
                    <h1>Vista previa de los albumnes</h1>
                </section>
            </section>
        </section>
    )
}

export default Gestionprod
