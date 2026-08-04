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
  { title, children, buttons, styles = {} },
  ref,
) {
  // Style defaults
  const {
    dialog = "card",
    header = "card__header",
    content = "card__content",
    body = "card__body",
    title: titleStyle = "card__title text text-white text-center text-6",
    buttons: buttonsStyle = "card__buttons flex flex-768-column",
  } = styles;

  // Methods
  const dialogRef = useRef(null);
  const previousFocus = useRef(null);

  useImperativeHandle(ref, () => ({
    element: dialogRef.current,

    show() {
      previousFocus.current = document.activeElement;

      dialogRef.current.showModal();
      dialogRef.current.querySelector("[autofocus], button")?.focus();
    },

    close() {
      dialogRef.current.close();
      previousFocus.current?.focus();
    },
  }));

  return (
    <dialog ref={dialogRef} className={`dialog ${dialog}`}>
      <div className={`dialog__content ${content}`}>
        <div className={`dialog__header ${header}`}>
          <h2 className={`dialog__title ${titleStyle}`}>{title}</h2>
        </div>

        <div className={`dialog__body ${body}`}>
          {children}

          {buttons && (
            <div className={`dialog__buttons ${buttonsStyle}`}>{buttons}</div>
          )}
        </div>
      </div>
    </dialog>
  );
});

export default Dialog;
