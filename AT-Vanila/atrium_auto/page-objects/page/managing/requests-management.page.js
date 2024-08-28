const Page = require("../page.js");

const _requestsManagementElements = require("../../uimap/managing/requests-management/requests-management.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RequestsManagementPage extends Page {
  /**
   * Get Portals page title
   */
  async getRequestsManagementTitle() {
    _waits.waitUntilDisplayed(
      _requestsManagementElements.requestsManagementPage
        .loc_tltRequestsManagementPage,
      true
    );
    return await _requestsManagementElements.requestsManagementPage.loc_tltRequestsManagementPage.getText();
  }

  async openRequestsManagementPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _requestsManagementElements.requestsManagementPage.loc_sideNav_txtRequestsManagement.click();
  }
}
module.exports = new RequestsManagementPage();
