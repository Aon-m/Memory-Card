/**
 * Event delegation.
 *
 * @param {Element|Document} parent
 * @param {string} selector
 * @param {string} event
 * @param {(e: Event, target: Element) => void} callback
 * @param {AddEventListenerOptions|boolean} [options]
 * @returns {Function} Cleanup function.
 */
export default function delegate(parent, selector, event, callback, options) {
  const listener = (e) => {
    const target = e.target.closest(selector);

    if (!target || !parent.contains(target)) return;

    callback(e, target);
  };

  parent.addEventListener(event, listener, options);

  return () => parent.removeEventListener(event, listener, options);
}
