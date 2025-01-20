import SkillsBox from "./components/SkillsBox/SkillsBox";

import { ICardViewProps } from "./interfaces/ICardProps";
import classes from "./sass/Card.module.scss";

const CardView = ({
  title,
  link,
  skills,
  description,
  image,
  isPortfolioCard,
  hovered,
  hoveredHandler,
  articleStyles,
  titleStyles,
  linkStyles,
}: ICardViewProps) => (
  <article
    className={[classes.card, hovered ? classes.card_hover : null].join(" ")}
    style={articleStyles}
  >
    {image && <img src={image} alt="preview" />}
    <h3 style={titleStyles}>{title}</h3>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      style={linkStyles}
      onMouseEnter={() => hoveredHandler(hovered)}
      onMouseLeave={() => hoveredHandler(hovered)}
    >
      {isPortfolioCard ? "Demo" : link.slice(8)}
    </a>
    <SkillsBox skills={skills} />
    {description && <p>{description}</p>}
  </article>
);

export default CardView;
