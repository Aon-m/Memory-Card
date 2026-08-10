import "./Dialog.scss";
import { useRef, forwardRef, useImperativeHandle } from "react";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {Object} [props.styles]
 * @param {string} [props.styles.dialog]
 */
const Dialog = forwardRef(function Dialog(
  { children, styles = {}, modal = true },
  ref,
) {
  // Style defaults
  const { dialog = "dialog" } = styles;

  // Methods
  const dialogRef = useRef(null);
  const previousFocus = useRef(null);

  function show() {
    previousFocus.current = document.activeElement;

    if (modal) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.show();
    }
  }

  function close() {
    dialogRef.current.close();
    previousFocus.current?.focus();
  }

  useImperativeHandle(ref, () => ({
    element: dialogRef.current,
    show,
    close,

    toggle() {
      if (dialogRef.current.open) {
        close();
      } else {
        show();
      }
    },
  }));

  return (
    <dialog ref={dialogRef} className={`${dialog}`}>
      {children}
    </dialog>
  );
});

export default Dialog;
