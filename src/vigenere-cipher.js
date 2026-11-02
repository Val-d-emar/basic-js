const CHAR_CODE_A = 65;
const ALPHABET_SIZE = 26;
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect !== false;
  }

  _process(message, key, isEncrypt) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const upperMsg = message.toUpperCase();
    const upperKey = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < upperMsg.length; i += 1) {
      const char = upperMsg[i];
      const charCode = char.charCodeAt(0);

      if (charCode >= CHAR_CODE_A && charCode < CHAR_CODE_A + ALPHABET_SIZE) {
        const msgCode = charCode - CHAR_CODE_A;
        const keyCode = upperKey.charCodeAt(keyIndex % upperKey.length) - CHAR_CODE_A;

        const shiftedCode = isEncrypt
          ? (msgCode + keyCode) % ALPHABET_SIZE
          : (msgCode - keyCode + ALPHABET_SIZE) % ALPHABET_SIZE;

        result.push(String.fromCharCode(CHAR_CODE_A + shiftedCode));
        keyIndex += 1;
      } else {
        result.push(char);
      }
    }
    return this.isDirect ? result.join('') : result.reverse().join('');
  }

  encrypt(message, key) {
    return this._process(message, key, true);
  }

  decrypt(message, key) {
    return this._process(message, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
