import { useState } from "react";
import emailjs from "@emailjs/browser";
import fotografo from "../../assets/img/fotografo.jpg";
import Header from "../helpers/Header";
import Footer from "../helpers/Footer";

function Contacto() {
   const [nombre, setNombre] = useState("");
   const [apellido, setApellido] = useState("");
   const [telefono, setTelefono] = useState("");
   const [email, setEmail] = useState("");
   const [mensaje, setMensaje] = useState("");

   function sendEmail(e) {
      e.preventDefault();
      if (nombre === '' || apellido === '' || telefono === '' || email === '' || mensaje === '') {
         alert("Todos los campos son requeridos");
         return;
      }

      const templateParams = {
      from_nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      mensaje: mensaje,
      email: email,
      };
      emailjs
         .send(
            "service_teh80hd",
            "template_zuafqcm",
            templateParams,
            "eQWckBdvar6E5dMDW"
         )
         .then(
            (response) => {
               console.log("EMAIL ENVIADO", response.status, response.text);
               setNombre("");
               setApellido("");
               setTelefono("");
               setEmail("");
               setMensaje("");
            },
            (err) => {
               console.log("ERROR", err);
            }
         );
   }

   return (
      <section>
         <Header />
         <section className="contacto">
            <div className="form-contacto">
               <form className="form" onSubmit={sendEmail}>
                  <input
                     className="input"
                     type="text"
                     placeholder="Nombre"
                     onChange={(e) => setNombre(e.target.value)}
                     value={nombre}
                  />
                  <input
                     className="input"
                     type="text"
                     placeholder="Apellido"
                     onChange={(e) => setApellido(e.target.value)}
                     value={apellido}
                  />
                  <input
                     className="input"
                     type="text"
                     placeholder="Telefono"
                     onChange={(e) => setTelefono(e.target.value)}
                     value={telefono}
                  />
                  <input
                     className="input"
                     type="text"
                     placeholder="Correo electronico"
                     onChange={(e) => setEmail(e.target.value)}
                     value={email}
                  />
                  <textarea
                     className="inputmensaje"
                     type="text"
                     placeholder=" Escriba su mensaje"
                     onChange={(e) => setMensaje(e.target.value)}
                     value={mensaje}
                  />
                  <input
                     className="buttoncontacto"
                     type="submit"
                     value="Enviar"
                  />
               </form>
               <div className="fotografo">
                  <img src={fotografo} />
               </div>
            </div>
         </section>
         <Footer/>
      </section>
     
   );
}

export default Contacto;
