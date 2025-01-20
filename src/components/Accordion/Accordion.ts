import { useState } from 'react';

import AccordionView from "./AccordionView";

import { ACCORDION_EXPANDED_ID_DEFAULT } from '../../constants/general';
import { IAccordionProps } from "./interfaces/IAccordionProps";

const Accordion = ({ data }: IAccordionProps) => {
  const [expandedId, setExpandedId] = useState(ACCORDION_EXPANDED_ID_DEFAULT);

  const handleToggleAccordion = (id: string) => {
    const isExpanded = id === expandedId;
    setExpandedId(isExpanded ? '' : id);
  };

  return (
    AccordionView({ data, expandedId, handleToggleAccordion })
  );
}

export default Accordion;
