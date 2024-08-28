const Page = require("../page.js");

const _ordersManagementElements = require("../../uimap/managing/orders-management/orders-management.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrdersManagementPage extends Page {
  /**
   * Get Portals page title
   */
  async getOrdersManagementTitle() {
    _waits.waitUntilDisplayed(
      _ordersManagementElements.ordersManagementPage
        .loc_tltOrdersManagementPage,
      true
    );
    return await _ordersManagementElements.ordersManagementPage.loc_tltOrdersManagementPage.getText();
  }

  async openOrdersManagementPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _ordersManagementElements.ordersManagementPage.loc_sideNav_txtOrdersManagement.click();
  }
}
module.exports = new OrdersManagementPage();
