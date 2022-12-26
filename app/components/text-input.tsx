import {
  forwardRef,
  InputHTMLAttributes,
  LegacyRef,
  ReactNode,
  useState,
} from "react";

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  rightIcon?: ReactNode;
};

const TextInput = (
  { rightIcon, className, ...props }: TextInputProps,
  ref: LegacyRef<HTMLInputElement>
) => {
  return (
    <div className={className}>
      <div className="flex items-center relative">
        <input {...props} className="text-input" ref={ref} />
        <div className="w-5 h-5 absolute right-6 ">{rightIcon}</div>
      </div>
    </div>
  );
};

export default forwardRef(TextInput);
