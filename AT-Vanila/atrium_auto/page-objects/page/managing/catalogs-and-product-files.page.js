const Page = require("../page.js");

const _catalogsAndProductFilesElements = require("../../uimap/managing/catalogs-and-product-files/catalogs-and-product-files.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CatalogsAndProductFilesPage extends Page {
  /**
   * Get Portals page title
   */
  async getCatalogsAndProductFilesTitle() {
    _waits.waitUntilDisplayed(
      _catalogsAndProductFilesElements.productFilesPage
        .loc_tltCatalogsAndProductFiles,
      true
    );
    return await _catalogsAndProductFilesElements.productFilesPage.loc_tltCatalogsAndProductFiles.getText();
  }

  async openCatalogsAndProductFilesPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _catalogsAndProductFilesElements.productFilesPage.loc_sideNav_txtCatalogsAndProductFiles.click();
  }
}
module.exports = new CatalogsAndProductFilesPage();
