import { forwardRef, HTMLProps, ReactNode } from "react";

export interface RadioProps
  extends Omit<HTMLProps<HTMLInputElement>, "label" | "type"> {
  label?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return (
    <label className="relative group">
      <input
        type={"radio"}
        {...props}
        className="opacity-0 absolute peer/radio"
      />
      <span
        className={`absolute h-6 w-6 rounded-full bg-[#eee] group-hover:bg-[#ccc]
            transition-colors
            after:content-['']
            after:hidden
            flex items-center justify-center
            peer-checked/radio:bg-[#2196f3]
            peer-checked/radio:after:content-['']
            peer-checked/radio:after:block
            peer-checked/radio:after:w-3
            peer-checked/radio:after:h-3
            peer-checked/radio:after:bg-white
            peer-checked/radio:after:rounded-full
        `}
      ></span>
    </label>
  );
});
