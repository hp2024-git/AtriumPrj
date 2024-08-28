const Page = require("../page.js");

const _elementsDatasUpload = require("../../uimap/admin/datas-upload/datas-upload.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");
//const _functions = require("../../../utilities/common/functions.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DatasUploadPage extends Page {
  /**
   * Get Portals page title
   */
  async getDatasUploadTitle() {
    _waits.waitUntilDisplayed(
      _elementsDatasUpload.datasUploadPage.loc_tltDatasUploadPage,
      true
    );
    return await _elementsDatasUpload.datasUploadPage.loc_tltDatasUploadPage.getText();
  }

  async openDatasUpload() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _elementsDatasUpload.datasUploadPage.loc_sideNav_txtDatasUpload.click();
  }
}
module.exports = new DatasUploadPage();
