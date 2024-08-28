const Page = require("../page.js");

const _kpiElements = require("../../uimap/managing/kpi/kpi.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class KPIPage extends Page {
  /**
   * Get Portals page title
   */
  async getKPITitle() {
    _waits.waitUntilDisplayed(_kpiElements.kpiPage.loc_tltKPIPage, true);
    return await _kpiElements.kpiPage.loc_tltKPIPage.getText();
  }

  async openKPIPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _kpiElements.kpiPage.loc_sideNav_txtKPI.click();
  }
}
module.exports = new KPIPage();
