import { IAccordionSummaryProps } from '../interfaces/IAccordionProps';
import classes from '../sass/Accordion.module.scss';

const AccordionSummary = ({ id, title, expandedId, onToggle }: IAccordionSummaryProps) => (
  <>
    <input
      type="checkbox"
      name="accordion"
      id={id}
      checked={expandedId === id}
      className={classes.accordion__input}
      onChange={() => onToggle(id)}
    />
    <label htmlFor={id} className={classes.accordion__title}>
      {title}
    </label>
  </>
)

export default AccordionSummary;
