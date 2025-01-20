import Section from "../../components/Section/Section";
import ProjectsCard from "../../components/ProjectCard/ProjectCard";

import IPetProjects from "./interfaces/IPetProjects";

const PetProjectsView = ({ projectsData }: IPetProjects) => (
  <Section title="Pet-projects">
    <>
      {projectsData.map((card) => (
        <ProjectsCard key={card.id} card={card} />
      ))}
    </>
  </Section>
);

export default PetProjectsView;
