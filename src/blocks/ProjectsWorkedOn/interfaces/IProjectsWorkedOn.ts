export default interface IProjectsWorkedOn {
  projectsData: IProjectWorkedOn[]
}

export interface IProjectWorkedOn {
  id: string
  title: string
  link: string
  skills: string[]
  description: string
}