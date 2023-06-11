import { Link } from "react-router-dom";
const Nav = () => {
   return (
      <header className="h-admi">
         <nav className="nav-admi">
            <ul className="lista">
               <li className="sublista">
               <Link to={'/upload'} className="link">crear Producción</Link>
               </li>
               <li className="sublista">
               <Link to={'/gestion'} className="link">gestionar Producción</Link>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export default Nav;