/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.imgUrl
 * @param {() => void} props.onClick
 */
export default function Card({ title, imgUrl, onClick }) {
  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      onClick();
    }
  }
  return (
    <div
      className="card"
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <img className="card__image" src={`${imgUrl}`} />
      <div className="card__footer text text-6 text-600 text-black text-center">
        {title}
      </div>
    </div>
  );
}
