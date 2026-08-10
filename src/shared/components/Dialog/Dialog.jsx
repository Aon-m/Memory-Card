import "./Dialog.scss";
import { useRef, forwardRef, useImperativeHandle } from "react";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} props.buttons
 * @param {Object} [props.styles]
 * @param {string} [props.styles.dialog]
 * @param {string} [props.styles.header]
 * @param {string} [props.styles.content]
 * @param {string} [props.styles.title]
 * @param {string} [props.styles.buttons]
 * @param {string} [props.styles.body]
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
