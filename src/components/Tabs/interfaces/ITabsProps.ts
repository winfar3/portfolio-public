export interface ITabItem {
  icon: string;
  text: string;
}

export interface ITabData {
  title: string;
  list: ITabItem[];
}

export interface ITabsProps {
  tabsData: ITabData[];
}
