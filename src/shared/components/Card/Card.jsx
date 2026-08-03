/**
 * @param {Object} props
 * @param {string} props.title
 * @param {React.ReactNode} props.children
 * @param {React.ReactNode} props.buttons
 * @param {Object} [props.styles]
 * @param {string} [props.styles.card]
 * @param {string} [props.styles.header]
 * @param {string} [props.styles.title]
 * @param {string} [props.styles.buttons]
 */
export default function Card({ title, children, buttons, styles = {} }) {
  // Style defaults
  const {
    card = "",
    header = "",
    title: titleStyle = "text text-white text-center",
    buttons: buttonsStyle = "gap-2",
  } = styles;

  return (
    <section className={`card ${card}`}>
      <div className="card__content">
        <div className={`card__header ${header}`}>
          <h2 className={`card__title ${titleStyle}`}>{title}</h2>
        </div>
        {children}
        <div className={`card__buttons ${buttonsStyle}`}>{buttons}</div>
      </div>
    </section>
  );
}
