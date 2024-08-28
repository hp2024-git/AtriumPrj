const Page = require("../page.js");

const _elementsEntities = require("../../uimap/admin/entities/entities.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");
//const _functions = require("../../../utilities/common/functions.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EntitiesPage extends Page {
  /**
   * Get Portals page title
   */
  async getEntitiesTitle() {
    _waits.waitUntilDisplayed(
      _elementsEntities.entitiesPage.loc_tltEntitiesPage,
      true
    );
    return await _elementsEntities.entitiesPage.loc_tltEntitiesPage.getText();
  }

  async openEntitiesManagement() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _elementsEntities.entitiesPage.loc_sideNav_txtEntities.click();
  }
}
module.exports = new EntitiesPage();
