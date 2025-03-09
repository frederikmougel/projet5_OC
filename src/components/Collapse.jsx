import { useState } from "react";
import chevron from '../assets/chevron.svg';
import "../styles/Collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Vérification pour savoir si children est une liste (array) ou un texte
  const renderContent = () => {
    if (Array.isArray(children)) {
      return (
        <ul className="collapse-list">
          {children.map((item, index) => (
            <li key={index} className="collapse-list-item">
              {item}
            </li>
          ))}
        </ul>
      );
    }
    return <p>{children}</p>;
  };

  return (
    <div className={`collapse ${isOpen ? "open" : ""}`}>
      <div className="collapse-header">
        <h3>{title}</h3>
        <div className="chevron" onClick={toggleCollapse}>
            {isOpen ? <img src={chevron} alt="Close" className="down" /> : <img src={chevron} alt="Open" className="up" />}
        </div>
      </div>
      <div className="collapse-content">
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Collapse;
