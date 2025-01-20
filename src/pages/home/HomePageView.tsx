import Header from "../../blocks/Header/Header";
import Introduce from "../../blocks/Introduce/Introduce";
import ProjectsWorkedOn from "../../blocks/ProjectsWorkedOn/ProjectsWorkedOn";
import PetProjects from "../../blocks/PetProjects/PetProjects";
import Skills from "../../blocks/Skills/Skills";
import Experience from "../../blocks/Experience/Experience";
import LayoutExamples from "../../blocks/LayoutExamples/LayoutExamples";
import skillsTabsData from "../../moks/skillsTabsData";
import expirienceData from "../../moks/expirienceData";
import projectsWorkedOnData from "../../moks/projectsWorkedOnData";
import petProjectsData from "../../moks/petProjectsData";

import classes from "./sass/HomePage.module.scss";

const HomePageView = () => {
  return (
    <>
      <Header />
      <main className={classes.wrapper}>
        <Introduce />
        <ProjectsWorkedOn projectsData={projectsWorkedOnData} />
        <PetProjects projectsData={petProjectsData} />
        <Skills tabsData={skillsTabsData} />
        <Experience expirienceData={expirienceData} />
        <LayoutExamples />
      </main>
    </>
  );
};

export default HomePageView;
