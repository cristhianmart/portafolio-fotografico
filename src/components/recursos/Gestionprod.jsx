import Nav from '../helpers/Nav'
import {dataBase} from '../Firebase/Config'
import React, {useState, useEffect} from 'react'
import {
    collection,
    getDocs,
    doc,
    Query,
    where,
    query,
    deleteDoc,
} from 'firebase/firestore'
import {Link} from 'react-router-dom'

const Gestionprod = () => {
    const [produciones, setProducciones] = useState([])
    const [nombreprod, setNombreprod] = useState('')
    const produccionCollection = collection(dataBase, 'Producciones')

    const q = query(
        produccionCollection,
        where('nombreProduccion', '==', nombreprod.toString())
    )

    const getProduccion = async () => {
        const data = await getDocs(q)
        setProducciones(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    useEffect(() => {
        getProduccion()
    }, [])

    function limpiarCampos() {
        setNombreprod('')
        getProduccion()
        document.querySelector('#valor').value = ''
    }

    const eliminarImagen = async (id) => {
        const imagenEliminada = doc(dataBase, 'Producciones', id)
        await deleteDoc(imagenEliminada)
        getProduccion()
    }
    return (
        <section className="panel-gestion">
            <Nav />
            <section className="panel-consulta">
                <div className="consulta-input">
                    <input
                        type="text"
                        placeholder="ingrese el nombre de la colección que desea modificar"
                        onChange={(e) => setNombreprod(e.target.value)}
                        id="valor"
                    />
                </div>
                <section>
                    {produciones.map((produccion) => (
                        <section key={produccion.id} className="card">
                            <img
                                src={produccion.url}
                                alt="produccion"
                                className="imgProd"
                            />
                            <button
                                className="btnadmi"
                                onClick={() => eliminarImagen(produccion.id)}>
                                Eliminar Imagen
                            </button>
                            <Link to={'/editar/' + produccion.id}>
                                <button className="btnadmi">
                                    Editar Imagen
                                </button>
                            </Link>
                        </section>
                    ))}
                </section>
                <section>
                    <button className="btnadmi" onClick={getProduccion}>
                        Consultar
                    </button>
                    <button className="btnadmi" onClick={limpiarCampos}>
                        Cancelar
                    </button>
                </section>
            </section>
        </section>
    )
}

export default Gestionprod
