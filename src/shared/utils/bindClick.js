/**
 * @param {HTMLElement} element
 * @param {(event: MouseEvent) => void} handler
 * @param {boolean} [once=false]
 */
export default function bindClick(element, handler, once = false) {
  element.addEventListener("click", handler, { once });
}
