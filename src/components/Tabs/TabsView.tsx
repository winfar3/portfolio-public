import { Fragment } from "react/jsx-runtime";

import TabHead from "./components/TabHead";
import TabBody from "./components/TabBody";

import { toSlug } from "../../utils/functions/functions";
import { ITabsProps } from "./interfaces/ITabsProps";
import classes from "./sass/Tabs.module.scss";

const TabsView = ({ tabsData }: ITabsProps) => (
  <div className={classes.tabs}>
    {tabsData.map((item) => (
      <Fragment key={toSlug(item.title)}>
        <TabHead title={item.title} list={item.list} />
        <TabBody title={item.title} list={item.list} />
      </Fragment>
    ))}
  </div>
);

export default TabsView;
