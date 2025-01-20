import Section from '../../components/Section/Section';
import Tabs from '../../components/Tabs/Tabs';

import { ITabsProps } from '../../components/Tabs/interfaces/ITabsProps';

const SkillsView = ({ tabsData }: ITabsProps) => (
  <Section title='Skills'>
    <Tabs tabsData={tabsData} />
  </Section>
);

export default SkillsView;
