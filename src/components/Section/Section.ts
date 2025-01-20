import SectionView from "./SectionVIew";

import ISectionProps from "./interfaces/ISectionProps";

const Section = ({title, children}: ISectionProps) => SectionView({ title, children })

export default Section;
