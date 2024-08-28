const Page = require("./page.js");
const assert = require("assert");

const _elements = require("../uimap/auth/login.uimap.js");
const _waits = require("../../../utilities/common/waits.js");

/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends Page {
  async navigate(path) {
    await this.open(path);
  }

  async connection() {
    await _elements.loginPage.loc_btnConnection.click();
  }

  async inputEmail(email) {
    _waits.waitUntilDisplayed(_elements.loginPage.loc_frmEmailOrUsername, true);
    await _elements.loginPage.loc_frmEmailOrUsername.setValue(email);
  }

  async inputPassword(password) {
    _waits.waitUntilDisplayed(_elements.loginPage.loc_frmPassword, true);
    await _elements.loginPage.loc_frmPassword.setValue(password);
    await this.connection();
    await _waits.waitForComplete();
  }

  //These methods might be used on SSO when it has already developed successfully for logging in by MS
  /*async confirmStaySignedIn() {
    await _waits.waitUntilDisplayed(
      _elements.loginPage.loc_cbDontShowAgain,
      true
    );
    await this.connection();
  }

  async useOtherAccount() {
    await _waits.waitUntilDisplayed(
      _elements.loginPage.loc_btnOtherAccount,
      true
    );
    await _elements.loginPage.loc_btnOtherAccount.click();
  }*/

  async login(email, password) {
    await this.inputEmail(email);
    await this.inputPassword(password);
    //await this.confirmStaySignedIn();
  }

  async checkLoginRequiredFields() {
    await _waits.waitUntilDisplayed(
      _elements.loginPage.loc_frmEmailOrUsername,
      true
    );
    await _elements.loginPage.loc_frmEmailOrUsername.doubleClick();
    _waits.waitUntilDisplayed(_elements.loginPage.loc_frmPassword, true);
    await _elements.loginPage.loc_frmPassword.click();
    await _elements.loginPage.loc_btnShowOrHidePassword.doubleClick();
  }

  async getErrMessageUsername() {
    _waits.waitUntilDisplayed(
      _elements.loginPage.loc_txtInvalidEmailOrUsername,
      true
    );
    let errInvalidUsernameOrEmail =
      await _elements.loginPage.loc_txtInvalidEmailOrUsername.getText();
    assert.strictEqual(errInvalidUsernameOrEmail, "Username is required");
  }

  async getErrMessagePassword() {
    _waits.waitUntilDisplayed(_elements.loginPage.loc_txtInvalidPassword, true);
    let errInvalidPassword =
      await _elements.loginPage.loc_txtInvalidPassword.getText();
    assert.strictEqual(errInvalidPassword, "Password is required");
  }
}

module.exports = new LoginPage();
