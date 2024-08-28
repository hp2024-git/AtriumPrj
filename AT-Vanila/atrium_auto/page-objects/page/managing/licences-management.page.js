const Page = require("../page.js");

const _licencesManagementElements = require("../../uimap/managing/licences-management/licences-management.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LicencesManagementPage extends Page {
  /**
   * Get Portals page title
   */
  async getLicencesManagementTitle() {
    _waits.waitUntilDisplayed(
      _licencesManagementElements.licencesManagementPage
        .loc_tltLicencesManagementPage,
      true
    );
    return await _licencesManagementElements.licencesManagementPage.loc_tltLicencesManagementPage.getText();
  }

  async openLicencesManagementPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _licencesManagementElements.licencesManagementPage.loc_sideNav_txtLicencesManagement.click();
  }
}
module.exports = new LicencesManagementPage();
