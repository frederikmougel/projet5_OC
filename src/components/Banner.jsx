import '../styles/Banner.scss';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';

const banners = {
  type1: { image: banner1, text: 'Chez vous, partout et ailleurs' },
  type2: { image: banner2, text: '' },
};

const Banner = ({ type }) => {
  const { image, text } = banners[type] || { image: banner1, text: 'Chez vous, partout et ailleurs' };
  const bannerClass = type ? `banner ${type}` : 'banner';

  return (
    <div className={bannerClass}>
      <img src={image} alt="Banner" />
      {text && <p>{text}</p>}
    </div>
  );
};

export default Banner;
