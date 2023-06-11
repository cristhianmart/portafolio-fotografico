import { dataBase } from '../Firebase/Config'
import React, { useState, useEffect } from 'react'
import {
    collection,
    getDocs,
    where,
    query,
} from 'firebase/firestore'

const Mostrarprod = ({nombreprod}) => {
    let nombre = nombreprod
    const [produciones, setProducciones] = useState([])
    const produccionCollection = collection(dataBase, 'Producciones')
    const q = query(
        produccionCollection,
        where('nombreProduccion', '==', nombre.toString())
    )
    const getProduccion = async () => {
        const data = await getDocs(q)
        setProducciones(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        getProduccion()
    }, [])

  return (
    <div>
        <section>
    {produciones.map((produccion) => (
        <section key={produccion.id} className="card">
            <img
                src={produccion.url}
                alt="produccion"
                className="imgProd"
            />
            
        </section>
    ))}
</section>
</div>
  )
}

export default Mostrarprod