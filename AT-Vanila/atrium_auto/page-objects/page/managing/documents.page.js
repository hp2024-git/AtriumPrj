const Page = require("../page.js");

const _documentsElements = require("../../uimap/managing/documents/documents.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DocumentsPage extends Page {
  /**
   * Get Portals page title
   */
  async getDocumentsTitle() {
    _waits.waitUntilDisplayed(
      _documentsElements.documentsPage.loc_tltDocumentsPage,
      true
    );
    return await _documentsElements.documentsPage.loc_tltDocumentsPage.getText();
  }

  async openDocumentsPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _documentsElements.documentsPage.loc_sideNav_txtDocuments.click();
  }
}
module.exports = new DocumentsPage();
