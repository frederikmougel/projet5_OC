import { NavLink } from 'react-router';
import logo from '../assets/logo-red.png';
import '../styles/Header.scss';

const Header = () => {
    return (
        <header>
            <img src={logo} alt='Logo'/>
            <nav>
                <NavLink to="/"
                    className={({ isActive }) => isActive ? "isActive" : ""}
                    end
                >
                    Accueil
                </NavLink>
                <NavLink to="about"
                    className={({ isActive }) => isActive ? "isActive" : ""}
                    end
                >
                    A propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
  