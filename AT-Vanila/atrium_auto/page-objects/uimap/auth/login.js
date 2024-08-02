module.exports = {
  get loc_txtEmailOrUsername() {
    return $(`//input[@formcontrolname="login"]`);
  },
  get loc_btnConnection() {
    return $(`//button[.//span[text()=" Connection "]]`);
  },
  get loc_txtPassword() {
    return $(`//input[@type="password"]`);
  }
};
