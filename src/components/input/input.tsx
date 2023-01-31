import { forwardRef, HTMLProps, ReactNode } from "react";

export interface InputProps extends HTMLProps<HTMLInputElement> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ iconRight, iconLeft, ...props }, ref) => {
    return (
      <div
        className={`
        w-full inline-flex rounded-lg px-3 py-3 border hover:border-purple-700 focus-within:outline-none transition duration-300 ease-in-out
        ${iconLeft ? "pl-0" : ""} ${iconRight ? "pr-0" : ""}
        `}
      >
        {iconLeft && (
          <div className="px-3 flex justify-center items-center">
            {iconLeft}
          </div>
        )}
        <input ref={ref} {...props} className="focus:outline-none w-full" />
        {iconRight && (
          <div className="px-3 flex justify-center items-center">
            {iconRight}
          </div>
        )}
      </div>
    );
  }
);
