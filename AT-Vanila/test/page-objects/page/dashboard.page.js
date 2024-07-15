const Page = require('./page.js');
const _elements = require('../../page-objects/uimap/dashboard/dashboard.uimap.js');
const _waits = require('../../../utilities/common/waits.js');
const _actions = require('../../../utilities/common/actions.js');
const _actions1 = require('../../../utilities/common/actions.js');
const _actions2 = require('../../../utilities/common/actions.js');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashBoardPage extends Page {
  /**
   * Get D365 Dashboard title
   */
  async getDashBoardTitle() {
    await _waits.waitUntilDisplayed(
      _elements.dashBoardPage.loc_tltD365FinanceAndOperation,
      true
    );
    return await _elements.dashBoardPage.loc_tltD365FinanceAndOperation.getText();
  }

  /**
   * Sign out of current user
   */
  async signOut() {
    await _waits.waitUntilDisplayed(_elements.dashBoardPage.loc_btnUser, true);
    await _elements.dashBoardPage.loc_btnUser.click();
    await _waits.waitUntilDisplayed(
      _elements.dashBoardPage.loc_btnSignOut,
      true
    );
    await _elements.dashBoardPage.loc_btnSignOut.click();
  }

  /**
   * Navigate to given module name
   *
   * e.g. navigateTo(PURCHASE_LEDGER) location parameter is calling from global constants
   *
   */
  async navigateTo(module) {
    await _elements.dashBoardPage.loc_txtSearchBox.isClickable();
    await _elements.dashBoardPage.loc_txtSearchBox.click();
    await _actions.dataClearance();
    await _elements.dashBoardPage.loc_txtSearchBox.setValue(module);
    await _waits.waitUntilDisplayed(
      _elements.dashBoardPage.loc_btnSearchList,
      true
    );
    await _actions.pressKey(KEY_ENTER);
    await _waits.waitUntilTargetMeetText(module);
  }
}

module.exports = new DashBoardPage();
