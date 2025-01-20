import { useState } from "react";
import Card from "../Card/Card";
import { ICardProps } from "../Card/interfaces/ICardProps";

const PortfolioCard = ({ card }: { card: ICardProps }) => {
  const [hovered, setHovered] = useState(false);
  const hoveredHandler = () => setHovered(!hovered);

  const articleStyles = {
    maxWidth: "300px",
    padding: "0 0 15px 0",
  };
  const titleStyles = {
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: "700",
  };
  const linkStyles = {
    display: "block",
    padding: "5px 0",
    fontSize: "1.1rem",
    textAlign: "center",
    background: "#f0f0f0",
  };

  return (
    <Card
      title={card.title}
      link={card.link}
      skills={card.skills}
      description={card.description}
      image={card.image}
      isPortfolioCard
      articleStyles={articleStyles}
      titleStyles={titleStyles}
      linkStyles={linkStyles}
      hovered={hovered}
      hoveredHandler={hoveredHandler}
    />
  );
};

export default PortfolioCard;
