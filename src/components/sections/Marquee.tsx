import { marqueeItems } from "../../data/portfolio";

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee-wrap" aria-label="Tecnologias">
      <div className="marquee-track">
        {items.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
