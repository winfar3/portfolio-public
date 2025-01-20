import { ITabData } from "../interfaces/ITabsProps";
import classes from '../sass/Tabs.module.scss'

const TabBody = ({list}: ITabData) => (
  <div className={classes.tabs__text}>
    <ul className={classes.tabs__list}>
      {list.map(({ icon, text }) => (
        <li key={text} className={classes.tabs__item}>
          <img src={icon} alt={text} />
          {text}
        </li>
      ))}
    </ul>
  </div>
)

export default TabBody;
