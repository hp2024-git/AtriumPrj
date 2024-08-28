const _waits = require("../../utilities/common/waits.js");

const _actorElements = require("../../atrium_auto/page-objects/uimap/admin/actors/actors.uimap");
const _elementsUniversal = require("../../atrium_auto/page-objects/uimap/universal-ui-portals/universal-ui-portals.uimap.js");

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
  async dataClearance() {
    await this.pressTwoKey(KEY_CTRL, "a");
    await this.pressKey(KEY_DELETE);
  },

  /**
   * Generate a random string of number and characters
   *
   */
  async generateNumber() {
    let randomNumber = "xx4xxxyxxx".replace(/[xy]/g, function (c) {
      let r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
    return randomNumber;
  },

  /**
   * Screenshot service to capture
   */
  async getScreenshot(SuffixImg) {
    const timestamp = await new Date().toISOString().replace(/[:.]/g, "-");
    await browser.saveScreenshot(`./screenshots/${timestamp}_${SuffixImg}.png`);
  },

  /**
   *Scroll to the center of the view
   */
  async scrollTo(elem) {
    await elem.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  },

  /**
   * Click on Toggle button to turn it on, if yet not do anything more
   */
  async toggleButton() {
    let ActiveToggle = await _actorElements.actorsDetailsPage
      .loc_editActor_tglIsActive;
    let isChecked = await ActiveToggle.isSelected();
    if (!isChecked) {
      await ActiveToggle.click();
    }
  },

  /**
   * Click to save the result and apply for all the records which need to save
   */
  async saveResult() {
    await _elementsUniversal.universalUiPortals.loc_btnSave.click();
    await _waits.waitForComplete();
  },

  /**
   * Navigate to another portal
   *
   * e.g. navigateToPortals() location parameter is calling from global constants
   **/
  async navigateToPortals() {
    await _elementsUniversal.universalUiPortals.loc_navPortalsMenu.click();
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_navPortalsMenu,
      true
    );
    await _elementsUniversal.universalUiPortals.loc_divPortalsMenuPanel.click();
  },

  /**
   * Create new actor, domains, editors, solution, request,...
   *
   * e.g. createNew() can call to the page which support to add new actor, domains, editors, solution, request,...
   **/
  async createNew() {
    await _elementsUniversal.universalUiPortals.loc_btnAdd.click();
  },

  /**
   * Sign out of current user
   */
  async signOut() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_divUserInfo,
      true
    );
    await _elementsUniversal.universalUiPortals.loc_divUserInfo.click();
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_btnSignOut,
      true
    );
    await _elementsUniversal.universalUiPortals.loc_btnSignOut.click();
  },

  /**
   * Check search field exist?  @param {string} value
   */
  async inputKeywordToSearch(value) {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_inputSearch,
      true
    );
    await _elementsUniversal.universalUiPortals.loc_inputSearch.setValue(value);
  },

  /**
   * Check search field exist?
   */
  async checkSearchFieldExist() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_txtSearch,
      true
    );
    return await _elementsUniversal.universalUiPortals.loc_txtSearch.getText();
  },

  async checkAddButtonExist() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_btnAdd,
      true
    );
    return await _elementsUniversal.universalUiPortals.loc_btnAdd.getText();
  },

  async navigateToManagingMenu() {
    await _elementsUniversal.universalUiPortals.loc_mainNav_txtManaging.click();
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
  },

  /**
   * Perform to click on Filter icon on all pages that have this function
   */
  async filter() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_tltFilter,
      true
    );
    await _elementsUniversal.universalUiPortals.loc_tltFilter.click();
  },

  // /**
  //  * Check the url of environment exist?  @param {string} env
  //  * @param {string} subPath
  //  */
  // async verifyUrlEnvironment(env, path, subPath) {
  //   let currentUrl = await browser.getUrl();
  //   expect(currentUrl).toContain(env + path + subPath);
  // }
};
