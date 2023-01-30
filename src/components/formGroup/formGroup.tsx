import { HTMLAttributes, ReactNode } from "react";

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  htmlFor?: string;
  label?: ReactNode;
}

export const FormGroup = ({ label, htmlFor, ...props }: FormGroupProps) => {
  return (
    <div {...props}>
      <label className="mb-1.5 inline-block" htmlFor={htmlFor}>
        {label}
      </label>
      {props.children}
    </div>
  );
};
