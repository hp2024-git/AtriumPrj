module.exports = {
  get loc_txtEmail() {
    return $(`//input[@type= "email"]`);
  },
  get loc_btnSubmit() {
    return $('//input[@type="submit"]');
  },
  get loc_txtPassword() {
    return $(`//input[@type= "password"]`);
  },
  get loc_cbDontShowAgain() {
    return $(`//input[@name="DontShowAgain"]`);
  },
  get loc_btnOtherAccount() {
    return $(`//div[@id="otherTileText"]`);
  },
};
