import ProjectsWorkedOnView from "./ProjectsWorkedOnView";

import IProjectsWorkedOn from "./interfaces/IProjectsWorkedOn";

const ProjectsWorkedOn = ({ projectsData }: IProjectsWorkedOn) => ProjectsWorkedOnView({ projectsData });

export default ProjectsWorkedOn;
