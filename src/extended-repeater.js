const DEFAULT_SEPARATOR = '+';
const DEFAULT_ADDITION_SEPARATOR = '|';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  const mainStr = String(str);

  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator !== undefined ? String(options.separator) : DEFAULT_SEPARATOR;
  const additionSeparator = options.additionSeparator !== undefined ? String(options.additionSeparator) : DEFAULT_ADDITION_SEPARATOR;
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;

  let fullAddition = '';
  if (options.addition !== undefined) {
    const additionStr = String(options.addition);
    fullAddition = new Array(additionRepeatTimes).fill(additionStr).join(additionSeparator);
  }

  const block = mainStr + fullAddition;

  return new Array(repeatTimes).fill(block).join(separator);
}

module.exports = {
  repeater
};
