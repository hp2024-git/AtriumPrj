const Page = require("../page.js");

const _alertsElements = require("../../uimap/admin/alerts/alerts.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertsPage extends Page {
  /**
   * Get Portals page title
   */
  async getAlertsTitle() {
    _waits.waitUntilDisplayed(
      _alertsElements.alertsPage.loc_tltAlertsPage,
      true
    );
    return await _alertsElements.alertsPage.loc_tltAlertsPage.getText();
  }

  async openAlertsPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _alertsElements.alertsPage.loc_sideNav_txtAlerts.click();
  }
}
module.exports = new AlertsPage();
