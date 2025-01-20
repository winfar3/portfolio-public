import CardView from "./CardView";

import { ICardProps } from "./interfaces/ICardProps";

const Card = ({
  title,
  link,
  skills,
  description,
  image,
  isPortfolioCard,
  articleStyles,
  titleStyles,
  linkStyles,
  hovered = false,
  hoveredHandler = () => {},
}: ICardProps) => {
  

  return CardView({
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
  })
}

export default Card;
