import PetProjectsView from "./PetProjectsView";

import IPetProjects from "./interfaces/IPetProjects";

const PetProjects = ({ projectsData }: IPetProjects) => PetProjectsView({ projectsData })

export default PetProjects;
