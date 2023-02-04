import { forwardRef, HTMLProps, ReactNode } from "react";

export interface RadioProps extends Omit<HTMLProps<HTMLInputElement>, "label"> {
  label?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  return (
    <label className="relative">
      <input type={"radio"} {...props} />
    </label>
  );
});
