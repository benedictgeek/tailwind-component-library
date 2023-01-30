import { forwardRef, HTMLAttributes, HTMLProps, useMemo } from "react";

type ButtonType = "primary" | "secondary" | "tertiary";
type VariantType = "contained" | "outlined" | "text";
type SizeType = "small" | "medium" | "large";

interface ButtonpProps extends HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  variant?: VariantType;
  size?: SizeType;
}

const getSizestyles = (size: SizeType) => {
  switch (size) {
    case "small":
      return "py-2 px-5";
    case "large":
      return "py-3 px-6";

    case "medium":
      return "py-2.5 px-5";
  }
};

const getTypeStyles = (type: ButtonType) => {
  switch (type) {
    case "primary":
      return "";

    default:
      return "";
  }
};

const getVariantStyles = (variant: VariantType) => {
  switch (variant) {
    case "contained":
      return `
      bg-purple-500 rounded text-base text-white hover:bg-purple-700 hover:-transition-colors duration-300
      `;

    case "outlined":
      return "border border-purple-700 rounded text-base text-purple-700 hover:bg-purple-100";

    case "text":
      return "text-base rounded text-purple-700 hover:bg-purple-100";
  }
};

export const Button = forwardRef<HTMLButtonElement, ButtonpProps>(
  (
    {
      type = "primary",
      variant = "contained",
      size = "medium",
      ...props
    }: ButtonpProps,
    ref
  ) => {
    const baseClasses = "font-bold";
    const computedClasses = useMemo(() => {
      return [
        getSizestyles(size),
        getTypeStyles(type),
        getVariantStyles(variant),
      ].join(" ");
    }, [type, variant, size]);

    return (
      <button ref={ref} className={`${baseClasses} ${computedClasses}`}>
        {props.children}
      </button>
    );
  }
);
