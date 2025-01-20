import { useState } from "react";
import Card from "../Card/Card";

import { IProjectWorkedOn } from "../../blocks/ProjectsWorkedOn/interfaces/IProjectsWorkedOn";

const ProjectCard = ({ card }: { card: IProjectWorkedOn }) => {
  const [hovered, setHovered] = useState(false);
  const hoveredHandler = () => setHovered(!hovered);

  return (
    <Card
      title={card.title}
      link={card.link}
      skills={card.skills}
      description={card.description}
      hovered={hovered}
      hoveredHandler={hoveredHandler}
    />
  );
};

export default ProjectCard;
