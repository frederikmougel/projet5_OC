import { NavLink } from "react-router";
import '../styles/NotFound.scss'

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n&apos;existe pas.</p>
            <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink>
        </div>
    );
};
  
export default NotFound;