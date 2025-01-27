import { useState, useEffect } from "react";
import CardLogement from "./CardLogement";
import logementsData from "../data/logements.json";
import '../styles/Logements.scss'

const Logements = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    setLogements(logementsData); 
  }, []);

  return (
    <div className="logements">
      {logements.map((logement) => (
        <CardLogement key={logement.id} logement={logement} />
      ))}
    </div>
  );
};

export default Logements;
