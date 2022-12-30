import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode | ReactNode[];
};

export default function Portal({ children }: ModalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#modal");
    setMounted(true);
  }, []);

  return mounted && ref?.current ? createPortal(children, ref.current) : null;
}
