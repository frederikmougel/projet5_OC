import '../styles/Banner.scss';
import banner from '../assets/banner.png';

const Banner = () => {
    return (
        <div className='banner'>
            <img src={banner} alt='Banner'/>
            <p>Chez vous, partout et ailleurs</p>
        </div>
    );
};

export default Banner;
  