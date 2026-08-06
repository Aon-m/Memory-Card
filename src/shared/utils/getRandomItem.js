/**
 *
 * @template T
 * @param {T[]} array
 * @returns {T | undefined}
 */
export default function getRandomItem(array = []) {
  return array.length
    ? array[Math.floor(Math.random() * array.length)]
    : undefined;
}
