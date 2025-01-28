import { useState } from "react";
import "../styles/Collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

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
            {isOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
        </div>
    </div>
      <div className="collapse-content">
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default Collapse;
