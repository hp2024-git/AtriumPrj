const Page = require("../page.js");

const _elementsEstablishments = require("../../uimap/admin/establishments/establishments.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");
//const _functions = require("../../../utilities/common/functions.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EstablishmentsPage extends Page {
  /**
   * Get Portals page title
   */
  async getEstablishmentsPageTitle() {
    _waits.waitUntilDisplayed(
      _elementsEstablishments.establishmentsPage.loc_tltEstablishmentsPage,
      true
    );
    return await _elementsEstablishments.establishmentsPage.loc_tltEstablishmentsPage.getText();
  }

  async openEstablishmentsPagePage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _elementsEstablishments.establishmentsPage.loc_sideNav_txtEstablishments.click();
  }
}
module.exports = new EstablishmentsPage();
