/**
 * @param {Object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} props.buttons
 * @param {Object} [props.styles]
 * @param {string} [props.styles.header]
 * @param {string} [props.styles.content]
 * @param {string} [props.styles.title]
 * @param {string} [props.styles.buttons]
 * @param {string} [props.styles.body]
 */
export default function DialogContent({
  styles = {},
  title,
  children,
  buttons,
}) {
  const {
    header = "dialog__header",
    content = "dialog__content",
    body = "dialog__body",
    title: titleStyle = "dialog__title text text-white text-center text-8",
    buttons: buttonsStyle = "dialog__buttons flex flex-768-column",
  } = styles;

  return (
    <div className={`${content}`}>
      {title && (
        <div className={`${header}`}>
          <h2 className={`${titleStyle}`}>{title}</h2>
        </div>
      )}

      {(children || buttons) && (
        <div className={`${body}`}>
          {children}

          {buttons && <div className={`${buttonsStyle}`}>{buttons}</div>}
        </div>
      )}
    </div>
  );
}
