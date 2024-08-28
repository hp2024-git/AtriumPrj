const Page = require("../page.js");

const _parametersElements = require("../../uimap/admin/parameters/parameters.uimap.js");
const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");
const _functions = require("../../../../utilities/common/functions.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ParametersPage extends Page {
  /**
   * Get Portals page title
   */
  async getParametersTitle() {
    _waits.waitUntilDisplayed(
      _parametersElements.parametersPage.loc_tltParamatersPage,
      true
    );
    return await _parametersElements.parametersPage.loc_tltParamatersPage.getText();
  }

  async openParametersManagement() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _parametersElements.parametersPage.loc_sideNav_txtParamaters.click();
  }

  /**
   * Get the title of Contact and mailing informations section
   */
  async getContactAndMailingInformationsTitle() {
    _waits.waitUntilDisplayed(
      _parametersElements.parametersPage.loc_txtContactAndMailingInformations,
      true
    );
    return await _parametersElements.parametersPage.loc_txtContactAndMailingInformations.getText();
  }

  /**
   * Get the title of Account Parameters section
   */
  async getAccountParamatersTitle() {
    _waits.waitUntilDisplayed(
      _parametersElements.parametersPage.loc_txtAccountParameters,
      true
    );
    return await _parametersElements.parametersPage.loc_txtAccountParameters.getText();
  }

  /**
   * Get the title of Features section
   */
  async getFeatureTitle() {
    await _functions.scrollTo(
      _parametersElements.parametersPage.loc_txtFeatures
    );
    _waits.waitUntilDisplayed(
      _parametersElements.parametersPage.loc_txtFeatures,
      true
    );
    return await _parametersElements.parametersPage.loc_txtFeatures.getText();
  }
}
module.exports = new ParametersPage();
