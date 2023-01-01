import classNames from "classnames";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
type TagVariant = "info" | "good" | "warning";

type TagProps = {
  variant?: TagVariant;
  text: string;
  className?: string;
};

const TAG_CLASSES: Record<TagVariant, string> = {
  info: "text-blue-500 bg-blue-100",
  good: "text-green-600 bg-green-100",
  warning: "text-red-500 bg-red-100",
};

export default function Tag({ text, variant = "info", className }: TagProps) {
  const classes = TAG_CLASSES[variant];

  return (
    <div
      className={twMerge(
        classNames("py-[0.5px] px-2 rounded-md text-sm", classes, className)
      )}
    >
      {text}
    </div>
  );
}
