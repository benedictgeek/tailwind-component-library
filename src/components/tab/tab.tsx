import { HTMLProps, ReactNode, useState } from "react";

export interface TabsProps extends HTMLProps<HTMLDivElement> {
  items: ReactNode[];
  defaultActiveIndex?: number;
}

export const Tabs = ({
  items,
  defaultActiveIndex = 0,
  ...props
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  return (
    <div className={`flex overflow-scroll w-full`} {...props}>
      {items.map((item, index) => {
        const isActiveTab = index === activeIndex;
        return (
          <div
            className={`mx-0 my-7 px-7 py-2 whitespace-nowrap cursor-pointer transition-colors ${
              isActiveTab ? "border-b-2 border-black" : ""
            }`}
            onClick={() => {
              setActiveIndex(index);
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
