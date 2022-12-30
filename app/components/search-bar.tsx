import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

export type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {};

function SearchBar(
  { ...props }: SearchBarProps,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <div className="border border-r-0 border-gray-200 flex items-center relative text-gray-500">
      <MagnifyingGlassIcon className="w-6 h-6 absolute ml-2 sm:ml-6" />
      <input
        ref={ref}
        className="pl-10 sm:pl-14 py-4 w-full h-full outline-none"
        type="text"
        {...props}
      />
    </div>
  );
}

export default forwardRef(SearchBar);
