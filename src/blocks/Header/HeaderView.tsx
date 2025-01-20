import Button from "../../components/Button/Button";

import { DOWNLOAD_PATH } from "../../constants/general";
import IHeaderProps from "./interfaces/IHeaderProps";
import classes from "./sass/Header.module.scss";

const HeaderView = ({ buttonTitle }: IHeaderProps) => {
  return (
    <>
      <header className={classes.header}>
        <p className={classes.header__item}>Tsegelnik Bogdan</p>
        <div className={classes.header__item}>
          <Button title={buttonTitle} href={DOWNLOAD_PATH} isDownload />
        </div>
      </header>
      <div className={classes.headerMargen} />
    </>
  );
};

export default HeaderView;
