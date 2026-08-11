import "./Button.scss";
import getClasses from "@/shared/helpers/getClasses";

/**
 * @param {Object} props
 * @param {React.ReactNode} props.content
 * @param {"button" | "submit" | "reset"} [props.type]
 * @param {Object} [props.styles]
 * @param {string} [props.styles.button]
 * @param {string} [props.styles.text]
 * @param {string} [props.styles.other]
 * @param {string} [props.tooltip]
 * @param {(event: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick]
 */
export default function Button({
  content,
  type = "button",
  styles = {},
  tooltip,
  onClick,
  onPointerEnter,
}) {
  const {
    text = "text text-white text-4 text-700",
    button = "button--black button--rectangle",
    other = "",
  } = styles;

  return (
    <button
      type={type}
      title={tooltip}
      className={`button ${getClasses({ text, button, other })}`}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
    >
      {content}
    </button>
  );
}
