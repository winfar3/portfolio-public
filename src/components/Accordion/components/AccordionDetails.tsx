import { IAccordionDetailsProps } from "../interfaces/IAccordionProps";
import classes from '../sass/Accordion.module.scss';

const AccordionDetails = ({ text, list }: IAccordionDetailsProps) => (
  <div className={classes.accordion__text}>
    <p className={classes.italic}>{text}</p>
    <ul className={classes.accordion__list}>
      {list.map((item) => (
        <li key={item} className={classes.responsibilities}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default AccordionDetails;
