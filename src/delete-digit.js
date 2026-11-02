/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const s = String(n);

  for (let i = 0; i < s.length - 1; i += 1) {
    if (s[i] < s[i + 1]) {
      return Number(s.slice(0, i) + s.slice(i + 1));
    }
  }

  return Number(s.slice(0, -1));
}

module.exports = {
  deleteDigit
};
