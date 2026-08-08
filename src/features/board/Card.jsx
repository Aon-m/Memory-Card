/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.imgUrl
 * @param {() => void} props.onClick
 */
export default function Card({ title, imgUrl, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card__image" src={`${imgUrl}`} />
      <div className="card__footer text text-6 text-600 text-black text-center">
        {title}
      </div>
    </div>
  );
}
