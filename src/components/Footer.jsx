import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import logo from '../assets/logo-bw.png';
import '../styles/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt='Logo'/>
            <span>
                <FontAwesomeIcon icon={faCopyright} />
                <p>2020 Kasa. All rights reserved</p>
            </span>
        </footer>
    );
};

export default Footer;
  