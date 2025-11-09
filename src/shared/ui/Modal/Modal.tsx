import { Portal } from "../Portal/Portal";
import { useLockBodyScroll } from "@shared/hooks/useLockBodyScroll/useLockBodyScroll";
import { useKeyEscape } from "@shared/hooks/useKeyEscape/useKeyEscape";
import style from "./Modal.module.css";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ children, isOpen, onClose }: ModalType) {
  useLockBodyScroll(isOpen);
  useKeyEscape(onClose, isOpen);

  return (
    isOpen && (
      <Portal>
        <div className={style.modal} role="modal" aria-modal="true">
          <div className={style.overlay} tabIndex={-1} onClick={onClose}>
            <div className={style.content} onClick={(e) => e.stopPropagation()}>
              <button type="button" className={style.cross} onClick={onClose}>
                Close
              </button>
              {children}
            </div>
          </div>
        </div>
      </Portal>
    )
  );
}
