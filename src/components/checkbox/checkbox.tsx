import { forwardRef, HTMLProps } from "react";

export interface CheckBoxProps extends HTMLProps<HTMLInputElement> {}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ type, ...props }, ref) => {
    return <input type={"checkbox"} {...props} ref={ref} />;
  }
);
