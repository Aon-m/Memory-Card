/**
 *
 * @template T
 * @param {T[]} array
 * @param {number} number
 * @param {(item: T) => boolean} [criteria]
 * @returns {T[]}
 */
export default function randomizeArray(array, number, criteria = null) {
  const shuffled = [...array].sort(() => Math.random() - 0.5);

  if (typeof criteria !== "function") {
    return shuffled.slice(0, number);
  }

  const requiredItem = array.find(criteria);

  if (!requiredItem) {
    return [];
  }

  const result = [
    requiredItem,
    ...shuffled.filter((item) => item !== requiredItem).slice(0, number - 1),
  ];

  return result.sort(() => Math.random() - 0.5);
}
