import ButtonView from "./ButtonView";

import IButtonProps from "./interfaces/IButtonProps";

const Button = ({ title, href, isDownload, styles }: IButtonProps) => (
    ButtonView({ title, href, isDownload, styles})
)

export default Button;