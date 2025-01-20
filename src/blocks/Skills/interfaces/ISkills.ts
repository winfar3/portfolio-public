export default interface ISkills {
  skills: ISkillsGroup[]
}

interface ISkillsGroup {
  title: string
  list: {
    icon: object
    text: string
  }
}