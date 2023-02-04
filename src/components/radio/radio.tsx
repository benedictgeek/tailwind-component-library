import { forwardRef, HTMLProps, ReactNode } from "react";

export interface RadioProps extends Omit<HTMLProps<HTMLInputElement>, "label" | "type"> {
  label?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return (
    <label className="relative">
      <input type={"radio"} {...props} className="opacity-0 absolute"  />
      <span className="absolute h-6 w-6 rounded-full bg-black"></span>
    </label>
  );
});
