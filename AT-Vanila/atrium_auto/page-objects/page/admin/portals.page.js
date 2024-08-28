const Page = require("../page.js");

const _portalElements = require("../../uimap/admin/portals/portals.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PortalsPage extends Page {
  /**
   * Get Portals page title
   */
  async getPortalsTitle() {
    _waits.waitUntilDisplayed(
      _portalElements.portalsPage.loc_tltPortalsPage,
      true
    );
    return await _portalElements.portalsPage.loc_tltPortalsPage.getText();
  }

  /**
   * Input the keyword on search field
   */
  async inputKeywordToSearch(username) {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_inputSearch,
      true
    );
    await _elementsUniversal.universalUiPortals.loc_inputSearch.setValue(
      username
    );
  }

  /**
   * Get Portals page title
   */
  async getPortalName() {
    _waits.waitUntilDisplayed(
      _portalElements.portalsPage.loc_tltPortalsPage,
      true
    );
    return await _portalElements.portalsPage.loc_txtPortalName.getText();
  }
}
module.exports = new PortalsPage();
