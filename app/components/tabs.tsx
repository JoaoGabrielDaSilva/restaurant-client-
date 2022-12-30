"use client";
import { ReactNode, useState } from "react";

type Tab<T = unknown> = {
  section: string;
};

type TabsProps<T> = {
  tabs: Tab<T>[];
  onChange: (data: { section: string }) => void;
};

type TabProps = {
  section: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Tabs<T>({ tabs, onChange }: TabsProps<T>) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleChange = (section: Tab<T>) => {
    setActiveTab(section);
    onChange({ section: section.section });
  };

  return (
    <div className="">
      <div className="flex scrollbar-hide ">
        {tabs
          ? tabs.map((item) => (
              <div key={item.section}>
                <Tab
                  section={item.section}
                  isActive={activeTab.section === item.section}
                  onClick={() => handleChange(item)}
                />
              </div>
            ))
          : null}
      </div>
      <div className="w-full bg-gray-200 h-[2px]" />
    </div>
  );
}

const Tab = ({ section, isActive, onClick }: TabProps) => (
  <div className="w-fit p-2 pb-0 cursor-pointer relative px-2">
    <div className="mb-2 ">
      <button onClick={onClick} className=" outline-blue-500">
        <span>{section}</span>
      </button>
      {isActive ? (
        <div className="w-full h-[3px] bg-blue-500 mt-2 absolute left-0" />
      ) : null}
    </div>
  </div>
);
