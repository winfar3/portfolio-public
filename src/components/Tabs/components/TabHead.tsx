import { toSlug } from "../../../utils/functions/functions";
import { ITabData } from "../interfaces/ITabsProps";
import classes from '../sass/Tabs.module.scss'

const TabHead = ({title}: ITabData) => (
    <>
      <input 
        key={toSlug(title)}
        type="radio" 
        name="tab" 
        id={toSlug(title)} 
        className={classes.tabs__input} 
        defaultChecked={title === 'Frontend'} 
      />
      <label 
        htmlFor={toSlug(title)} 
        className={classes.tabs__title}
      >
        {title}
      </label>
    </>
  );

export default TabHead;
