module.exports = {
  /**
   * Press any keyboard
   *
   * Examples:
   *
   * - Call press browser keys e.g. PressKey(KEY_ENTER) => press enter( key parameters is calling from global constants )
   *
   * - How to send combine keyboard? e.g. PressKey([KEY_ALT, KEY_ARROW_DOWN, NULL])
   *
   * @param {string} key given specific keyboard
   */
  async pressKey(key) {
    await browser.keys(key);
  },

  /**
   * Press two keystroke at the same time
   * @param {string} key1 Key value
   * @param {string} key2 Key value
   */
  async pressTwoKey(key1, key2) {
    await browser.keys([key1, key2]);
  },

  /**
   * Clear current value on a text box
   */
  async dataClearance() {},
};
