import { forwardRef, HTMLProps } from "react";

export interface CheckBoxProps extends HTMLProps<HTMLInputElement> {}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ type, ...props }, ref) => {
    return (
      <label className="relative cursor-pointer group">
        <input
          className={`opacity-0 w-0 h-0 cursor-pointer absolute peer/input`}
          type={"checkbox"}
          {...props}
          ref={ref}
        />
        <span
          className={`absolute 
          rounded top-0 left-0 h-6 w-6 bg-[#eee]
          flex items-center justify-center
        group-hover:bg-[#ccc]
        peer-checked/input:bg-[#2196f3] 
          after:content-['url()'] after:hidden 
          peer-checked/input:after:content-['l'] 
          peer-checked/input:after:block
          `}
        ></span>
      </label>
    );
  }
);
