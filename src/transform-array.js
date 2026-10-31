const DISCARD_NEXT = '--discard-next';
const DISCARD_PREV = '--discard-prev';
const DOUBLE_NEXT = '--double-next';
const DOUBLE_PREV = '--double-prev';
/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let lastDiscardedIndex = -1;

  for (let i = 0; i < arr.length; i += 1) {
    const current = arr[i];

    switch (current) {
      case DISCARD_NEXT:
        if (i + 1 < arr.length) {
          lastDiscardedIndex = i + 1;
          i += 1;
        }
        break;

      case DISCARD_PREV:
        if (i - 1 >= 0 && i - 1 !== lastDiscardedIndex) {
          result.pop();
        }
        break;

      case DOUBLE_NEXT:
        if (i + 1 < arr.length) {
          result.push(arr[i + 1]);
        }
        break;

      case DOUBLE_PREV:
        if (i - 1 >= 0 && i - 1 !== lastDiscardedIndex) {
          result.push(arr[i - 1]);
        }
        break;

      default:
        result.push(current);
        break;
    }
  }

  return result;
}

module.exports = {
  transform
};
