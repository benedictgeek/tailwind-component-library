import { forwardRef, HTMLProps, ReactNode } from "react";

export interface CheckBoxProps
  extends Omit<HTMLProps<HTMLInputElement>, "label" | "type"> {
  label?: ReactNode;
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ label, title, className, ...props }, ref) => {
    return (
      <label className={`relative block cursor-pointer group ${className}`}>
        {label && <div className="ml-7">{label}</div>}
        <input
          className={`opacity-0 w-0 h-0 cursor-pointer absolute peer/input`}
          type={"checkbox"}
          {...props}
          ref={ref}
        />
        <span
          title={title}
          className={`absolute 
          rounded top-0 left-0 h-6 w-6 bg-[#eee]
          flex items-center justify-center
        group-hover:bg-[#ccc]
        peer-checked/input:bg-[#2196f3] 
          after:content-[''] after:hidden
          peer-checked/input:after:content-[url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwLDAsMjU2LDI1Nicgd2lkdGg9JzI0cHgnIGhlaWdodD0nMjRweCcgZmlsbC1ydWxlPSdub256ZXJvJz48ZyBmaWxsPScjZmZmZmZmJyBmaWxsLXJ1bGU9J25vbnplcm8nIHN0cm9rZT0nbm9uZScgc3Ryb2tlLXdpZHRoPScxJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdtaXRlcicgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2UtZGFzaGFycmF5PScnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBmb250LWZhbWlseT0nbm9uZScgZm9udC13ZWlnaHQ9J25vbmUnIGZvbnQtc2l6ZT0nbm9uZScgdGV4dC1hbmNob3I9J25vbmUnIHN0eWxlPSdtaXgtYmxlbmQtbW9kZTogbm9ybWFsJz48ZyB0cmFuc2Zvcm09J3NjYWxlKDEwLjY2NjY3LDEwLjY2NjY3KSc+PHBhdGggZD0nTTE5LjI4MTI1LDUuMjgxMjVsLTEwLjI4MTI1LDEwLjI4MTI1bC00LjI4MTI1LC00LjI4MTI1bC0xLjQzNzUsMS40Mzc1bDUsNWwwLjcxODc1LDAuNjg3NWwwLjcxODc1LC0wLjY4NzVsMTEsLTExeic+PC9wYXRoPjwvZz48L2c+PC9zdmc+")] 
          peer-checked/input:after:block
          peer-checked/input:after:mt-1
          transition-colors
          `}
        ></span>
      </label>
    );
  }
);
