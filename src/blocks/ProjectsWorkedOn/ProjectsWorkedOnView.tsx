import Section from "../../components/Section/Section";
import ProjectsCard from "../../components/ProjectCard/ProjectCard";

import IProjectsWorkedOn from "./interfaces/IProjectsWorkedOn";

const ProjectsWorkedOnView = ({ projectsData }: IProjectsWorkedOn) => (
  <Section title="Projects worked on">
    <>
      {projectsData.map((card) => (
        <ProjectsCard key={card.id} card={card} />
      ))}
    </>
  </Section>
);

export default ProjectsWorkedOnView;
