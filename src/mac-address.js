const REQUIRED_GROUPS_COUNT = 6;
const GROUP_LENGTH = 2;
const HEX_DIGITS = '0123456789ABCDEFabcdef';
/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  if (typeof inputString !== 'string') {
    return false;
  }

  const groups = inputString.split('-');

  if (groups.length !== REQUIRED_GROUPS_COUNT) {
    return false;
  }

  for (const group of groups) {
    if (group.length !== GROUP_LENGTH) {
      return false;
    }

    for (const char of group) {
      if (!HEX_DIGITS.includes(char)) {
        return false;
      }
    }
  }

  return true;
}

module.exports = {
  isMAC48Address
};
