import logo from '../assets/logo-bw.png';
import '../styles/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt='Logo'/>
            <span>
                <p>© 2020 Kasa. All rights reserved</p>
            </span>
        </footer>
    );
};

export default Footer;
  