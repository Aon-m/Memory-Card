/**
 * @param {Object.<string, string|false|null|undefined>} styles
 * @returns {string}
 */
export default function getClasses(styles = {}) {
  return Object.values(styles).filter(Boolean).join(" ");
}
