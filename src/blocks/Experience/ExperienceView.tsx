import Accordion from "../../components/Accordion/Accordion";
import Section from "../../components/Section/Section";

import IExperience from './interfaces/IExperience';

const ExperienceView = ({ expirienceData }: IExperience) => (
  <Section title='Experience'>
    <Accordion data={expirienceData} />
  </Section>
);

export default ExperienceView;
