import ISectionProps from './interfaces/ISectionProps';
import classes from './sass/Section.module.scss';

const SectionView = ({ title, children }: ISectionProps) => (
  <section className={classes.section}>
    <h2 className={classes.section__title}>{title}</h2>
    <div className={classes.section__main}>{children}</div>
  </section>
)

export default SectionView;
