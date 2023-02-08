import { HTMLProps, ReactNode, useState } from "react";

export interface TabsProps extends Omit<HTMLProps<HTMLDivElement>, "onChange"> {
  items: ReactNode[];
  defaultActiveIndex?: number;
  onChange?: (index: number) => void;
}

export const Tabs = ({
  items,
  defaultActiveIndex = 0,
  onChange,
  ...props
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  return (
    <div className={`flex flex-col relative w-full`} {...props}>
      <div className="flex flex-row overflow-y-scroll z-10">
        {items.map((item, index) => {
          const isActiveTab = index === activeIndex;
          return (
            <div
              className={`mx-0 my-0 px-7 py-2 whitespace-nowrap cursor-pointer transition-colors ${
                isActiveTab ? "border-b-2 border-black" : ""
              }`}
              onClick={() => {
                setActiveIndex(index);
                onChange!(index);
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="border-b-2 w-full absolute bottom-0"></div>
    </div>
  );
};
