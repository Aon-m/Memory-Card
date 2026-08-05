import "./Button.scss";
import getClasses from "@/shared/helpers/getClasses";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.content
 * @param {"button" | "submit" | "reset"} [props.type]
 * @param {Object} [props.styles]
 * @param {string} [props.styles.button]
 * @param {string} [props.styles.text]
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick]
 */
export default function Button({
  content,
  type = "button",
  styles = {},
  onClick,
}) {
  const {
    text = "text text-white text-4 text-700",
    button = "button--black button--rectangle",
  } = styles;

  return (
    <button
      type={type}
      className={`button ${getClasses({ text, button })}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
