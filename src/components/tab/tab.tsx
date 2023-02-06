import { HTMLProps, ReactNode } from "react";

export interface TabsProps extends HTMLProps<HTMLDivElement> {
  items: ReactNode[];
}

export const Tabs = ({ items, ...props }: TabsProps) => {
  return (
    <div className={`flex overflow-scroll w-full`} {...props}>
      {items.map((item) => {
        return <div className={`mx-0 my-7 px-7 py-2`}>{item}</div>;
      })}
    </div>
  );
};
