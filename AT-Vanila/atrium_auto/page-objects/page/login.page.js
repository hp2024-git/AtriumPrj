const Page = require('./page.js');
const _elements = require('../uimap/auth/login.uimap.js');
const _waits = require('../../../utilities/common/waits.js');



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
    await _waits.waitUntilDisplayed(_elements.loginPage.loc_txtEmailOrUsername, true);
    await _elements.loginPage.loc_txtEmailOrUsername.setValue(email);
  }

  async inputPassword(password) {
    await _waits.waitUntilDisplayed(_elements.loginPage.loc_txtPassword, true);
    await _elements.loginPage.loc_txtPassword.setValue(password);
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
}

module.exports = new LoginPage();
