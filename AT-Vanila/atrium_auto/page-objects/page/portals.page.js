const Page = require("./page.js");
const _elements = require("../uimap/admin/portals/portals.js");
const _waits = require("../../../utilities/common/waits.js");
const _actions = require("../../../utilities/common/actions.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PortalsPage extends Page {
  /**
   * Get Portals page title -> Dang lam toi day
   */
  async getPortalsTitle() {
    await _waits.waitUntilDisplayed(_elements.loc_tltPortalsPage, true);
    return await _elements.loc_tltPortalsPage.getText();
  }
}
module.exports = new PortalsPage();
