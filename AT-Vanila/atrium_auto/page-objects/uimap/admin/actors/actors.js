module.exports = {
  get loc_sideNav_txtActors() {
    return $(`//span[text() = "Actors"]`);
  },
  get loc_tltActorsManagement() {
    return $(`//div[text() = "Actors management"]`);
  },
  get loc_actorsManagement_frmEmail() {
    return $(`//input[@formcontrolname = "email"]`);
  },
  get loc_actorsManagement_btnCheck() {
    return $(`//button//span[text() = " Check "]`);
  },
  get loc_dlgPopupModal() {
    return $(`//mat-dialog-container[@role = "dialog"]//span[text() = "Check actor existence"]`);
  },
  get loc_actorsManagement_txtCheckActorExistence() {
    return $(`//div[contains(@id, "check-no-actor")]`);
  },
  get loc_actorsManagement_btnCreate() {
    return $(`//button//span[text() = " Create "]`);
  },
  get loc_actorsManagement_btnCreate() {
    return $(`//button//span[text() = " Create "]`);
  },
  get loc_actorsManagement_toastMessageCreatedWithSucess() {
    return $(`//mat-snack-bar-container//div[text() = "Actor created with success"]`);
  },
  get loc_actorsManagement_tblactorResult() {
    return $(`//scc-custom-table[contains(@id, "actor-list")]//div//mat-table[@role = "table"]`);
  },
  get loc_actorsManagement_tblactorResult_cellUsername() {
    return $(`//mat-row//mat-cell[contains(@class, "mat-column-login")]//span`);
  }
};
