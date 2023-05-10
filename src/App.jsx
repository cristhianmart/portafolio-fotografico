import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../src/components/recursos/Main";
import Bio from "./components/recursos/Bio";
import Produccion1 from "./components/recursos/Produccion1";
import Produccion2 from "./components/recursos/Produccion2";
import Produccion3 from "./components/recursos/Produccion3";
import Produccion4 from "./components/recursos/Produccion4";
import Produccion5 from "./components/recursos/Produccion5";
import Contacto from "./components/recursos/Contacto";
import Login from "./components/recursos/Login";
import Cargarimg from "./components/recursos/Cargarimg";
import Gestionprod from "./components/recursos/Gestionprod";
import Modificarbio from "./components/recursos/Modificarbio";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement: <h1>Pagina no encontrada</h1>,
   },
   {
      path: "/bio",
      element: <Bio />,
      errorElement: <h1>El elemento no existe</h1>,
   },
   {
      path: "/produccion1",
      element: <Produccion1 />,
      errorElement: <h1>El elemento no existe</h1>,
   },
   {
      path: "/produccion2",
      element: <Produccion2 />,
      errorElement: <h1>El elemento no existe</h1>,
   },
   {
      path: "/produccion3",
      element: <Produccion3 />,
      errorElement: <h1>El elemento no existe</h1>,
   },
   {
      path: "/produccion4",
      element: <Produccion4 />,
      errorElement: <h1>El elemento no existe</h1>,
   },
   {
      path: "/produccion5",
      element: <Produccion5 />,
      errorElement: <h1>El elemento no existe</h1>,
   },

   {
      path: "/contacto",
      element: <Contacto />,
      errorElement: <h1>Pagina no encontrada</h1>,
   },
   //inicia login
   {
      path: "/login",
      element: <Login />,
      errorElement: <h1>Pagina no encontrada</h1>,
   },
   //inicia administrador
   {
      path: "/upload",
      element: <Cargarimg />,
      errorElement: <h1>Pagina no encontrada</h1>,
   },
   {
      path: "/gestion",
      element: <Gestionprod />,
      errorElement: <h1>Pagina no encontrada</h1>,
   },
   {
      path: "/modificarbio",
      element: <Modificarbio />,
      errorElement: <h1>Pagina no encontrada</h1>,
   },
]);
function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
