"use client";
import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "flat" | "normal";

const variantClasses: Record<ButtonVariant, string | null> = {
  flat: "font-normal px-4 py-[2px]",
  normal: "py-2 px-6 font-semibold",
};

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = ({
  className,
  variant = "flat",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        twMerge(
          "text-xs sm:text-sm truncate border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition 1s ease-in-out duration-200 active:bg-gray-300",

          variantClasses[variant] ?? null,
          className
        )
      )}
      {...props}
    />
  );
};
