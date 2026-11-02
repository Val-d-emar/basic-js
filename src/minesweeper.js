/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let r = 0; r < rows; r += 1) {
    const newRow = [];

    for (let c = 0; c < cols; c += 1) {
      let minesCount = 0;

      for (let dr = -1; dr <= 1; dr += 1) {
        for (let dc = -1; dc <= 1; dc += 1) {
          if (dr === 0 && dc === 0) {
            continue;
          }

          const neighborRow = r + dr;
          const neighborCol = c + dc;

          if (
            neighborRow >= 0 &&
            neighborRow < rows &&
            neighborCol >= 0 &&
            neighborCol < cols
          ) {
            if (matrix[neighborRow][neighborCol] === true) {
              minesCount += 1;
            }
          }
        }
      }

      newRow.push(minesCount);
    }

    result.push(newRow);
  }

  return result;
}

module.exports = {
  minesweeper
};
