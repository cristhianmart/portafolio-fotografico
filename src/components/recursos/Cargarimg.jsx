import {useState} from "react";
import Nav from "../helpers/Nav";
import { dataBase, subirImagen } from '../Firebase/Config'
import { addDoc, collection } from "firebase/firestore";


const Cargarimg = () => {
    const [nombreProd, setNombreProd] = useState('');
    const [descriProd, setDescriProd] = useState('');
    const [nombreImg, setNombreImg] = useState('');
    const [categoria, setCategoria] = useState('');
    const [img, setImg] = useState(null);

    const campos = [document.querySelector("#produccion"), document.querySelector("#url"), document.querySelector("#nombre"), document.querySelector("#descripcion")]
    const check = [document.querySelector("#radio1"), document.querySelector("#radio2")]
    
    async function agregarProduccion() {
        const resultado = await subirImagen(img);
        const nuevaProduccion = collection(dataBase, 'Producciones')
        const produccion = {
            url: resultado,
            descripcion: descriProd,
            categoria: categoria,
            nombreProduccion: nombreProd,
            nombreImg: nombreImg
        }
        await addDoc(nuevaProduccion, produccion)
        alert("La imagen fue guardada con exito")
        limpiarCampos();
    }

    function limpiarCampos() {
        campos.forEach(e => {
            e.value = "";
        });

        check.forEach(e => {
            e.checked=false;
        })
    }

   return (
      <section className="panel-container">
            <Nav />
            <section className="panel">
                <section className="vista-previa">
                <input required id='url' onChange={(e) => setImg(e.target.files[0])} type="file" placeholder='Ingresa la url de la imagen' className='texto' />
                    <input required id='produccion' onChange={(e) => setNombreProd(e.target.value)} className="texto" type="text" placeholder="Ingresa el nombre de la producción" />
                    <input required id='nombre' onChange={(e) => setNombreImg(e.target.value)} type="text" placeholder='Nombre de la imagen' className='texto' />
                    <textarea required id='descripcion' onChange={(e) => setDescriProd(e.target.value)} className="texto" cols="30" rows="10" placeholder="Agregar descripción de la producción fotografica"></textarea>
                    <section className="panel-categoria">
                        <label><input id='radio1' onChange={(e) => setCategoria(e.target.value)} type="radio" name="categoria" value="gastronomia" />Gastronomia</label>
                        <label ><input id='radio2' onChange={(e) => setCategoria(e.target.value)} type="radio" name="categoria" value="arquitectura" />Arquitectura</label>
                    </section>

                </section>

                <div className="btn-carg">
                <button onClick={agregarProduccion} className="btnadmi">Guardar</button>
                <button onClick={limpiarCampos} className="btnadmi">Cancelar</button>
                </div>
                
            </section>

        </section>

   );
};

export default Cargarimg;
