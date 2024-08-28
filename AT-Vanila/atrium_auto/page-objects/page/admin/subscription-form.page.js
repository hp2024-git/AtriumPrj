const Page = require("../page.js");

const _elementsSubscriptionForm = require("../../uimap/admin/subscription-form/subscription-form.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");
//const _functions = require("../../../utilities/common/functions.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SubscriptionFormPage extends Page {
  /**
   * Get Portals page title
   */
  async getSubscriptionFormManagementTitle() {
    _waits.waitUntilDisplayed(
      _elementsSubscriptionForm.subscriptionFormPage
        .loc_tltSubscriptionFormPage,
      true
    );
    return await _elementsSubscriptionForm.subscriptionFormPage.loc_tltSubscriptionFormPage.getText();
  }

  async openSubscriptionFormPage() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _elementsSubscriptionForm.subscriptionFormPage.loc_sideNav_txtSubscriptionForm.click();
  }
}
module.exports = new SubscriptionFormPage();
