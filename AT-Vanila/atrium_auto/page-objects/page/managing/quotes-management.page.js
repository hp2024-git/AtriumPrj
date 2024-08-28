const Page = require("../page.js");

const _quotesManagementElements = require("../../uimap/managing/quotes-management/quotes-management.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class QuotesManagementPage extends Page {
  /**
   * Get Portals page title
   */
  async getQuotesManagementTitle() {
    _waits.waitUntilDisplayed(
      _quotesManagementElements.quotesManagementPage
        .loc_tltQuotesManagementPage,
      true
    );
    return await _quotesManagementElements.quotesManagementPage.loc_tltQuotesManagementPage.getText();
  }

  async openQuotesManagementPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _quotesManagementElements.quotesManagementPage.loc_sideNav_txtQuotesManagement.click();
  }
}
module.exports = new QuotesManagementPage();
