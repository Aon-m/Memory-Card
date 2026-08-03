/**
 * @template {(...args: any[]) => any} T
 * @param {T} func
 * @param {number} delay
 * @returns {(...args: Parameters<T>) => ReturnType<T> | false}
 */
export default function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      return func.apply(this, args);
    }

    return false;
  };
}

