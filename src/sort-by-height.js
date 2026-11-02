const TREE_MARKER = -1;
/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedHeights = arr
    .filter((item) => item !== TREE_MARKER)
    .sort((a, b) => a - b);

  let heightIndex = 0;

  return arr.map((item) => {
    if (item === TREE_MARKER) {
      return TREE_MARKER;
    }

    const nextHeight = sortedHeights[heightIndex];
    heightIndex += 1;
    return nextHeight;
  });
}

module.exports = {
  sortByHeight
};
