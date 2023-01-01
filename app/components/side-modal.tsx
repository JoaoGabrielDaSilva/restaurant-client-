"use client";
import classNames from "classnames";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./modal";
import Portal from "./portal";

type SideModalProps = {
  children: ReactNode | ReactNode[];
  isVisible: boolean;
  onBackdropClick?: () => void;
};

export default function SideModal({
  isVisible,
  children,
  onBackdropClick,
}: SideModalProps) {
  return (
    <AnimatePresence>
      {isVisible ? (
        <Modal isOpen onBackdropClick={onBackdropClick}>
          <div className="absolute right-0">
            <SideModalBody>{children}</SideModalBody>
          </div>
        </Modal>
      ) : (
        <div className="block md:hidden">
          <SideModalBody>{children}</SideModalBody>
        </div>
      )}
    </AnimatePresence>
    // <div className="absolute inset-0 bg-black/50 flex justify-end md:bg-transparent">
    //   <SideModalBody>{children}</SideModalBody>
    // </div>
  );
}

type SideModalBodyProps = {
  children: ReactNode;
};

const SideModalBody = ({ children }: SideModalBodyProps) => (
  <motion.div
    initial={{ translateX: "100%" }}
    animate={{ translateX: 0 }}
    exit={{ translateX: "100%" }}
    transition={{ duration: 0.2 }}
    className="w-full sm:w-[60%] md:w-[350px] h-screen bg-white border-l border-gray-200 py-4 pt-8 px-4"
  >
    {children}
  </motion.div>
);
