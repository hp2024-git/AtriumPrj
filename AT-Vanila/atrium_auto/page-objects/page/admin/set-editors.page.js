const Page = require("../page.js");

const _elementsSetEditor = require("../../uimap/admin/set-editors/set-editor.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");
//const _functions = require("../../../utilities/common/functions.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SetEditorPage extends Page {
  /**
   * Get Portals page title
   */
  async getEditorConfigurationTitle() {
    _waits.waitUntilDisplayed(
      _elementsSetEditor.setEditorPage.loc_tltSetEditorPage,
      true
    );
    return await _elementsSetEditor.setEditorPage.loc_tltSetEditorPage.getText();
  }

  async openEditorConfiguration() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _elementsSetEditor.setEditorPage.loc_sideNav_txtSetEditor.click();
  }
}
module.exports = new SetEditorPage();
