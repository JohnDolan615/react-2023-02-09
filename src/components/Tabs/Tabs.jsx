import React from "react";
import { Tab } from "../Tab/Tab";

export const Tabs = ({ tabs, onTabClick, activeIndex }) => {
  return (
    <div>
      {tabs.map(({ title }, index) => (
        <Tab
          title={title}
          onClick={() => onTabClick(index)}
          isActive={activeIndex === index}
        />
      ))}
    </div>
  );
};
