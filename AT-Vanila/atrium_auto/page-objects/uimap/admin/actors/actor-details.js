module.exports = {
    get loc_NewActor_txtCreateANewActor() {
      return $(`//div[text() = "Create a new actor : "]`);
    },
    //<----->Start of the Identity card area <----->
    get loc_editActor_frmFirstName() {
      return $(`//input[@formcontrolname = "firstName"]`);
    },
    get loc_editActor_frmLastName() {
      return $(`//input[@formcontrolname = "lastName"]`);
    },
    get loc_editActor_frmPhone() {
        return $(`//input[@formcontrolname = "phone"]`);
    },
    //<----->End of the Identity card area <----->
    //<----->Start of the User account card area <----->
    get loc_editActor_tglIsActive() {
        return $(`//button[contains(@id, "is-active-button")]`);
    },
    get loc_editActor_txtUserLastConnection() {
        return $(` //div[contains(@id, "user-last-connection")]//span`);
    },
    get loc_editActor_frmEmail() {
        return $(`//input[@formcontrolname = "email"]`);
    },
    get loc_editActor_frmUsername() {
        return $(`//input[@formcontrolname = "login"]`);
    },
    get loc_editActor_drpProfile() {
        return $(`//mat-select[@formcontrolname = "profile"]`);
    },
    get loc_editActor_divProfileList() {
        return $(`//div[@role = "listbox"]`);
    },
    get loc_editActor_drpProfile_txtGuest() {
        return $(`//div//mat-option//span[text() = " Guest "]`);
    },
    get loc_editActor_frmSigmaCustomerCode() {
        return $(`//input[@formcontrolname = "sigmaCustomerCode"]`);
    },
    get loc_editActor_frmEntity() {
        return $(`//input[@formcontrolname = "rightsGroupIds"]`);
    },
    get loc_editActor_frmSiret() {
        return $(`//input[@formcontrolname = "siret"]`);
    },
    get loc_editActor_frmAgreementNumber() {
        return $(`//input[@formcontrolname = "agreementNumber"]`);
    },
    //<----->End of the User account card area <----->
    get loc_btnConfirm() {
        return $(`//button//span[text() = "Confirm"]`);
    },
}; 