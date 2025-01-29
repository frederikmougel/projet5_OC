import { useNavigate, useParams } from "react-router";
import Collapse from "../components/Collapse";
import logementsData from "../data/logements.json";
import Tag from "../components/Tag";
import { useEffect, useState } from "react";
import "../styles/ItemLogement.scss";
import star from '../assets/star.svg';
import Slideshow from "../components/Slideshow";

const ItemLogement = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    const logementFind = logementsData.find((logement) => logement.id === id);
    if (!logementFind) {
      navigate("/404");
    } else {
      setLogement(logementFind);
    }
  }, [id, navigate]);

  if (!logement) return null;

  const tags = logement.tags;
  const location = logement.location;
  const rating = logement.rating;
  const host = logement.host;
  const hostName = host.name.split(" ").join("\n");
  const title = logement.title;
  const pictures = logement.pictures;
  
  return (
    <div className="logement-item">

      <Slideshow pictures={pictures} />

      <div className="main-content">
        <div className="infos">
          <div className="title-and-location">
            <h3>{title}</h3>
            <p>{location}</p>
          </div>
          <div className="tags">
            {tags.map((tag, index) => (
                <Tag key={index} tag={tag}/>
            ))}
          </div>
        </div>

        <div className="host-and-rating"> 
          <div className="host">
            <p>{hostName}</p>
            <div className="host-picture-container">
              <img src={host.picture} alt={host.name} />
            </div>
          </div>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <img key={index} className={`star ${index < rating ? "active" : ""}`} src={star} alt="Rate" />
            ))}    
          </div>
        </div>
      </div>

      <div className="collapses">
        <div className="collapse-container">
          <Collapse title="Description">
            {logement.description}
          </Collapse>
        </div>
        <div className="collapse-container">
          <Collapse title="Équipements">
            {logement.equipments}
          </Collapse>
        </div>
      </div>

    </div>
  );
};

export default ItemLogement;
