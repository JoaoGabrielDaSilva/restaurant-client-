"use client";
import classNames from "classnames";
import { useSideModal } from "../../src/store/side-modal";
import { ReactNode } from "react";

type SideModalProps = {
  children: ReactNode | ReactNode[];
};

export default function SideModal({ children }: SideModalProps) {
  const { isVisible, close } = useSideModal();

  return (
    <div
      onClick={close}
      className={classNames(
        { hidden: !isVisible },
        "transition-[visibility] w-full lg:w-fit h-screen lg:flex md:w[400px] lg:relative absolute bg-black/50 flex justify-end z-30 right-0"
      )}
    >
      <div
        className={classNames(
          "w-full sm:w-[60%] md:w-[400px] transition-[width] ease-in-out duration-300  h-screen bg-white border-l border-gray-200 py-4 pt-8 px-4"
        )}
      >
        {children}
      </div>
    </div>
  );
}
