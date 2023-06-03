import { updateDoc, collection, doc, getDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { dataBase } from "../Firebase/Config";
import { useEffect, useState } from "react";
import Nav from "../helpers/Nav";


const Editarprod = () => {
    const [nombreProd, setNombreProd] = useState('');
    const [urlImg, setUrlImg] = useState('');
    const [descriProd, setDescriProd] = useState('');
    const [nombreImg, setNombreImg] = useState('');
    const [categoria, setCategoria] = useState('');
    const returGestionar = useNavigate();
    const {id} = useParams();


    const editarProd = async () => {
        const prodEditada = doc(dataBase, 'Producciones', id)
        const produccion = {
            url: urlImg,
            descripcion: descriProd,
            categoria: categoria,
            nombreProduccion: nombreProd,
            nombreImg: nombreImg
        }
        await updateDoc(prodEditada, produccion)
        returGestionar("/gestion")
    }

    const getProduccionId = async (id) => {
        const prodactualizada = doc(dataBase, 'Producciones', id);
        setUrlImg(prodactualizada.data().url);
        setDescriProd(prodactualizada.data().descripcion);
        setCategoria(prodactualizada.data().categoria);
        setNombreProd(prodactualizada.data().nombreProduccion);
        setNombreImg(prodactualizada.data().nombreImg);
    }

    useEffect(()=> {
        getProduccionId(id)

       }, [])

  return (
    <section className="panel-container">
            <Nav />
            <section className="panel">
                <section className="vista-previa">
                    <input required id='produccion' className="texto" type="text" placeholder="Ingresa el nombre de la producción" onChange={(e)=>setNombreProd(e.target.value)} />
                    <input required id='url' type="text" placeholder='Ingresa la url de la imagen' className='texto' onChange={(e)=>setUrlImg(e.target.value)}  />
                    <input required id='nombre' type="text" placeholder='Nombre de la imagen' className='texto' onChange={(e) => setNombreImg(e.target.value)}  />
                    <textarea  required id='descripcion'  className="texto" cols="30" rows="10" placeholder="Agregar descripción de la producción fotografica" onChange={(e) => setDescriProd(e.target.value)}></textarea>
                    <section className="panel-categoria">
                        <label><input id='radio1' type="radio" name="categoria" value="gastronomia" onChange={(e) => setCategoria(e.target.value)}/>Gastronomia</label>
                        <label ><input id='radio2'type="radio" name="categoria" value="arquitectura" onChange={(e) => setCategoria(e.target.value)}/>Arquitectura</label>
                    </section>

                </section>


                <button onClick={()=>(editarProd())}  className="btnadmi">Guardar Edición</button>
            </section>

        </section>

  )
}

export default Editarprod