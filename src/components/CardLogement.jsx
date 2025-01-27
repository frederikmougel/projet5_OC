import { useNavigate } from 'react-router';
import '../styles/CardLogement.scss'

const CardLogement = ({ logement }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${logement.id}`);
  };

  return (
    <div
      key={logement.id}
      className='card'
      onClick={ handleClick }
    >
        <img src={logement.cover} alt={logement.title} />
        <p>{logement.title}</p>
    </div>
  );
};

export default CardLogement;
