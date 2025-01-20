
import AccordionSummary from './components/AccordionSummary';
import AccordionDetails from './components/AccordionDetails';

import { IAccordionViewProps } from './interfaces/IAccordionProps';
import classes from './sass/Accordion.module.scss';

const AccordionView = ({ data, expandedId, handleToggleAccordion }: IAccordionViewProps) => (
  <div className={classes.accordion}>
    {data.map(({ id, title, duration, responsibilities }) => (
      <div className={classes.accordion__item} key={id}>
        <AccordionSummary 
          id={id}
          title={title}
          expandedId={expandedId}
          onToggle={handleToggleAccordion}
        />
        <AccordionDetails 
          text={duration}
          list={responsibilities}
        />
      </div>
    ))}
  </div>
);

export default AccordionView;
