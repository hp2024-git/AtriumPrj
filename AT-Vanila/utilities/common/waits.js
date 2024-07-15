module.exports = {
  /**
   * Wait until element is displayed
   * @param {string} elem given element locator
   * @returns {boolean} true if elem is displayed in period of time, false if not
   */
  async waitUntilDisplayed(elem, shouldFail) {
    try {
      await elem.waitForDisplayed({
        timeout: 50000,
        timeoutMsg: 'Element is not displayed',
        interval: 500,
      });
    } catch (e) {
      if (shouldFail) {
        expect(0 == 1);
      }
      return false;
    }
    return true;
  },

  /**
   * Sleep for given seconds
   *
   * e.g. waitForSecond(1) => 1 * 1000 milliseconds = 1 second to wait
   * @param {string} seconds input number of second
   */
  async waitForSecond(seconds) {
    await browser.pause(seconds * 1000);
  },

  /**
   * Wait until page is fully loaded
   *
   */
  async waitForComplete() {
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: 'Message on failure',
      }
    );
  },

  /**
   * Wait until meet expected text
   * @param {string} elem Given element selector
   * @param {string} text Expected text
   */
  async waitUntilMeetPageTitle(elem, text) {
    try {
      await elem.waitUntil(async () => {
        return elem.getText() == text;
      });
    } catch (error) {}
  },
};
