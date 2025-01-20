export interface IAccordionProps {
  data: IAccordionItem[]
}

export interface IAccordionViewProps extends IAccordionProps {
  expandedId: string
  handleToggleAccordion: (id: string) => void
}

export interface IAccordionItem {
  id: string
  title: string
  duration: string
  responsibilities: Array<string>
}

export interface IAccordionSummaryProps {
  id: string
  title: string
  expandedId: string
  onToggle: (id: string) => void
}

export interface IAccordionDetailsProps {
  text: string
  list: string[]
}