import { HTMLProps } from "react";

interface ButtonpProps extends HTMLProps<HTMLButtonElement> {
  type?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "outlined" | "text";
}

export const Button = ({
  type = "primary",
  variant = "contained",
}: ButtonpProps) => {
  let computedClass = "py-2 px-4 ";

  switch (type) {
    case "primary":
      break;

    default:
      break;
  }

  switch (variant) {
    case "contained":
      computedClass +=
        "bg-purple-500 rounded text-base text-white hover:bg-purple-700";
      break;

    case "outlined":
      computedClass +=
        "border border-purple-700 rounded text-base text-purple-700 hover:bg-purple-100";
      break;

    case "text":
      computedClass += "text-base rounded text-purple-700 hover:bg-purple-100";
      break;

    default:
      break;
  }

  return <button className={`${computedClass}`}>Hello World</button>;
};
