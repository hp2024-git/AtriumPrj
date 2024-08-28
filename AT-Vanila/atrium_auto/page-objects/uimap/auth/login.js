module.exports = {
  get loc_frmEmailOrUsername() {
    return $(`//input[@formcontrolname="login"]`);
  },
  get loc_btnConnection() {
    return $(`//button[.//span[text()=" Connection "]]`);
  },
  get loc_frmPassword() {
    return $(`//input[@formcontrolname="password"]`);
  },
  get loc_txtInvalidEmailOrUsername() {
    return $(`//mat-error[text() = "Username is required"]`);
  },
  get loc_txtInvalidPassword() {
    return $(`//mat-error[text() = "Password is required"]`);
  },
  get loc_btnShowOrHidePassword(){
    return $(`//mat-icon[text() = "visibility_off"]`);
  },
  get loc_btnDisabledConnection() {
    return $(`//button[@class = 'submit-button mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base']`)
  }
};
