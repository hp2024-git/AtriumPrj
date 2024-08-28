const Page = require("../page.js");

const _catalogsElements = require("../../uimap/managing/catalogs/catalogs.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CatalogsPage extends Page {
  /**
   * Get Portals page title
   */
  async getCatalogsTitle() {
    _waits.waitUntilDisplayed(
      _catalogsElements.catalogsPage.loc_tltCatalogs,
      true
    );
    return await _catalogsElements.catalogsPage.loc_tltCatalogs.getText();
  }

  async openCatalogsPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _catalogsElements.catalogsPage.loc_sideNav_txtCatalogs.click();
  }
}
module.exports = new CatalogsPage();
