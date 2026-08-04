/**
 * @param {Object} props
 * @param {string|number} props.index
 * @param {string} props.title
 * @param {React.ReactNode} props.textContent
 * @param {React.ReactNode} props.picture
 * @param {React.ReactNode} props.button
 * @param {Object} [props.styles]
 * @param {string} [props.styles.container]
 * @param {string} [props.styles.title]
 */
export default function Screen({
  index,
  title,
  textContent,
  picture,
  button,
  styles = {},
}) {
  const { container = "", title: titleStyle = "" } = styles;

  return (
    <section className={`container hidden ${container}`}>
      <div className="container__text-content">
        <h2 className={titleStyle}>
          <span>{index}</span>
          {title}
        </h2>
      </div>

      <div className="container__sub-container">
        <div className="container container--primary">
          <div className="container__image">{picture}</div>
          <div className="container__text-content">{textContent}</div>
          <div className="container__buttons container__buttons--primary">
            {button}
          </div>
        </div>
      </div>
    </section>
  );
}
