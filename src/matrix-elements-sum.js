/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0 || !Array.isArray(matrix[0])) {
    return 0;
  }

  let totalSum = 0;
  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  for (let col = 0; col < colCount; col += 1) {
    for (let row = 0; row < rowCount; row += 1) {
      const value = matrix[row][col];
      if (value === 0) {
        break;
      }
      totalSum += value;
    }
  }

  return totalSum;
}

module.exports = {
  getMatrixElementsSum
};
