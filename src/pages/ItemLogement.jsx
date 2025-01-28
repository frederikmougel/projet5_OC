import { useNavigate, useParams } from "react-router";
import Collapse from "../components/Collapse";
import logementsData from "../data/logements.json";
import Tag from "../components/Tag";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/ItemLogement.scss";
import Slideshow from "./Slideshow";

const ItemLogement = () => {
  const navigate = useNavigate(); // Hook pour redirection
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

      <div className="infos">
        <div className="title-and-location">
          <h3>{title}</h3>
          <p>{location}</p>
        </div>
        <div className="host">
          <p>{hostName}</p>
          <div className="host-picture-container">
            <img src={host.picture} alt={host.name} />
          </div>
        </div>
      </div>

      <div className="tags-and-rating"> 
        <div className="tags">
          {tags.map((tag, index) => (
              <Tag key={index} tag={tag}/>
          ))}
        </div>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon key={index} className={`star ${index < rating ? "active" : ""}`} icon={faStar} />
          ))}    
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
