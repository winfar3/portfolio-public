import IButtonProps from "./interfaces/IButtonProps";
import { DOWNLOAD_FILE_NAME } from "../../constants/general";
import classes from "./sass/Button.module.scss";

const ButtonView = ({ title, href, isDownload, styles }: IButtonProps) => (
  <a
    href={href}
    download={isDownload ? DOWNLOAD_FILE_NAME : undefined}
    className={classes.buttonContainer}
    style={styles}
    rel="noreferrer"
    target="_blank"
  >
    {title}
  </a>
);

export default ButtonView;
