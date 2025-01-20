export interface ICardProps {
  title: string
  link: string
  skills: Array<string>
  description?: string
  image?: string
  isPortfolioCard?: boolean
  hovered?: boolean
  hoveredHandler?: (value: boolean) => void
  articleStyles?: object
  titleStyles?: object
  linkStyles?: object
}

export interface ICardViewProps extends ICardProps {
  hovered: boolean
  hoveredHandler: (value: boolean) => void
}

export interface ISkillsBoxProps {
  skills: Array<string>
}