import { forwardRef, HTMLProps } from "react";

export interface InputProps extends HTMLProps<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <div className="w-fit rounded-lg px-3 py-3 border hover:border-purple-700 focus-within:outline-none transition-colors duration-300 ease-in-out">
        <input ref={ref} {...props} className="focus:outline-none" />
      </div>
    );
  }
);
