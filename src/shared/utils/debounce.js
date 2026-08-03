/**
 * @template {(...args: any[]) => any} T
 * @param {T} func
 * @param {number} delay
 * @returns {(...args: Parameters<T>) => ReturnType<T> | false}
 */
export default function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
