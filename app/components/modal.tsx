"use cliennt";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "./portal";

type ModalProps = {
  children: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  onBackdropClick?: () => void;
};

export default function Modal({
  children,
  isOpen,
  onBackdropClick,
}: ModalProps) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <motion.div
              className="absolute inset-0 w-full h-full bg-black/60 z-[100] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.1,
              }}
              onClick={() => onBackdropClick && onBackdropClick()}
            >
              <div onClick={(e) => e.stopPropagation()}>{children}</div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}
