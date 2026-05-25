import { technologyItems } from "../../data/portfolio";
import "./TechStrip.style.css";

function TechStrip() {
  const items = [...technologyItems, ...technologyItems];

  return (
    <div className="tech-strip" aria-label="Tecnologias">
      <div className="tech-strip-track">
        {items.map((item, index) => (
          <span className="tech-strip-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechStrip;
