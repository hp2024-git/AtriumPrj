const Page = require("../page.js");

const _elementsUniversal = require("../../uimap/universal-ui-portals/universal-ui-portals.uimap.js");
const _actorElements = require("../../uimap/admin/actors/actors.uimap.js");

const _waits = require("../../../../utilities/common/waits.js");
const _function = require("../../../../utilities/common/functions.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */

class ActorPage extends Page {
  async openActorsManagement() {
    _waits.waitUntilDisplayed(
      _elementsUniversal.universalUiPortals.loc_secondarySideNav_divMenu,
      true
    );
    await _actorElements.actorsPage.loc_sideNav_txtActors.click();
  }

  async inputEmail(email) {
    _waits.waitUntilDisplayed(
      _actorElements.actorsPage.loc_dlgPopupModal,
      true
    );
    await _actorElements.actorsPage.loc_actorsManagement_frmEmail.setValue(
      email
    );
  }

  async checkActorExistence() {
    await _actorElements.actorsPage.loc_actorsManagement_btnCheck.click();
    await _waits.waitForComplete();
  }

  async checkPopupModalIsDisplayed() {
    _waits.waitUntilDisplayed(
      _actorElements.actorsPage.loc_dlgPopupModal,
      true
    );
    return await _actorElements.actorsPage.loc_dlgPopupModal.getText();
  }

  async getMessageIfActorIsExistence() {
    _waits.waitUntilDisplayed(
      _actorElements.actorsPage.loc_dlgPopupModal,
      true
    );
    return await _actorElements.actorsPage.loc_actorsManagement_txtCheckActorExistence.getText();
  }

  async createNewActor() {
    await _actorElements.actorsPage.loc_actorsManagement_btnCreate.click();
  }

  async checkCreateNewActorFormIsDisplayed() {
    _waits.waitUntilDisplayed(
      _actorElements.actorsDetailsPage.loc_NewActor_txtCreateANewActor,
      true
    );
    return await _actorElements.actorsDetailsPage.loc_NewActor_txtCreateANewActor.getText();
  }

  async inputRequiredActorInfo(
    firstName,
    lastName,
    phone,
    email,
    username,
    siret
  ) {
    await _actorElements.actorsDetailsPage.loc_editActor_frmFirstName.setValue(
      firstName
    );
    await _actorElements.actorsDetailsPage.loc_editActor_frmLastName.setValue(
      lastName
    );
    await _actorElements.actorsDetailsPage.loc_editActor_frmPhone.setValue(
      phone
    );
    await _actorElements.actorsDetailsPage.loc_editActor_frmEmail.setValue(
      email
    );
    await _actorElements.actorsDetailsPage.loc_editActor_frmUsername.setValue(
      username
    );

    await _actorElements.actorsDetailsPage.loc_editActor_drpProfile.click();
    _waits.waitUntilDisplayed(
      _actorElements.actorsDetailsPage.loc_editActor_drpProfile,
      true
    );
    let _profileElem =
      _actorElements.actorsDetailsPage.loc_editActor_drpProfile_txtGuest;
    await _function.scrollTo(_profileElem);
    _waits.waitUntilDisplayed(
      _actorElements.actorsDetailsPage.loc_editActor_drpProfile_txtGuest,
      true
    );
    await _actorElements.actorsDetailsPage.loc_editActor_drpProfile_txtGuest.click();

    await _actorElements.actorsDetailsPage.loc_editActor_frmSiret.setValue(
      siret
    );
    await _actorElements.actorsDetailsPage.loc_btnConfirm.click();
  }

  async getToastMsgWithSuccess() {
    _waits.waitUntilDisplayed(
      _actorElements.actorsPage
        .loc_actorsManagement_toastMessageCreatedWithSucess,
      true
    );
    return await _actorElements.actorsPage.loc_actorsManagement_toastMessageCreatedWithSucess.getText();
  }

  async getActorsManagementTitle() {
    _waits.waitUntilDisplayed(
      _actorElements.actorsPage.loc_tltActorsManagement,
      true
    );
    return await _actorElements.actorsPage.loc_tltActorsManagement.getText();
  }

  async getUsernameOfActor() {
    await _waits.waitForSecond(1);
    return await _actorElements.actorsPage.loc_actorsManagement_tblactorResult_cellUsername.getText();
  }
}

module.exports = new ActorPage();
