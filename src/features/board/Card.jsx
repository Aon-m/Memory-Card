/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.backgroundImage
 */
export default function Card({ title, backgroundImage, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div
        className="card__image"
        style={{
          "--background-image": `url("${backgroundImage}")`,
        }}
      ></div>
      <div className="card__footer text text-6 text-600 text-black text-center">
        {title}
      </div>
    </div>
  );
}
