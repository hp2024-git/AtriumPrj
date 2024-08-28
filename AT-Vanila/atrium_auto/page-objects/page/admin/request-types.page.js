const Page = require("../page.js");

const _elementsRequestTypes = require("../../uimap/admin/request-types/request-types.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");
//const _functions = require("../../../utilities/common/functions.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RequestTypesPage extends Page {
  /**
   * Get Portals page title
   */
  async getRequestTypesManagementTitle() {
    _waits.waitUntilDisplayed(
      _elementsRequestTypes.requestTypesPage.loc_tltRequestTypesPage,
      true
    );
    return await _elementsRequestTypes.requestTypesPage.loc_tltRequestTypesPage.getText();
  }

  async openRequestTypesManagement() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _elementsRequestTypes.requestTypesPage.loc_sideNav_txtRequestTypes.click();
  }
}
module.exports = new RequestTypesPage();
