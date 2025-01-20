export default interface IButtonProps {
  title: string
  href: string
  isDownload?: boolean
  styles?: {
    width?: string
    'text-align'?: string
  }
}