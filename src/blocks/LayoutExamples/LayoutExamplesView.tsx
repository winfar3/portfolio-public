import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Section from "../../components/Section/Section";
import classes from "./sass/classes.module.scss";
import { LayoutExamplesData } from "../../moks/LayoutExamplesData";

const LayoutExamplesView = () => (
  <Section title="Layout examples">
    <div className={classes.layoutExamples}>
      {LayoutExamplesData.map((card) => (
        <PortfolioCard key={card.id} card={card} />
      ))}
    </div>
  </Section>
);

export default LayoutExamplesView;
