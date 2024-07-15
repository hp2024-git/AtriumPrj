const Page = require('./page.js');
const _elements = require('../uimap/auth/login.uimap.js');
const _waits = require('../../../utilities/common/waits.js');
/*const _waits = require('../../../utilities/common/waits.js');



/**
 * sub page containing specific selectors and methods for a specific page
 */

class LoginPage extends Page {
  async navigate(path) {
    await this.open(path);
  }

  async submit() {
    await _elements.loginPage.loc_btnSubmit.click();
  }

  async inputEmail(email) {
    await _waits.waitUntilDisplayed(_elements.loginPage.loc_txtEmail, true);
    await _elements.loginPage.loc_txtEmail.setValue(email);
    await this.submit();
  }

  async inputPassword(pwd) {
    await _waits.waitUntilDisplayed(_elements.loginPage.loc_txtPassword, true);
    await _elements.loginPage.loc_txtPassword.setValue(pwd);
    await this.submit();
    await _waits.waitForComplete();
  }

  async confirmStaySignedIn() {
    await _waits.waitUntilDisplayed(
      _elements.loginPage.loc_cbDontShowAgain,
      true
    );
    await this.submit();
  }

  async useOtherAccount() {
    await _waits.waitUntilDisplayed(
      _elements.loginPage.loc_btnOtherAccount,
      true
    );
    await _elements.loginPage.loc_btnOtherAccount.click();
  }

  async login(email, password) {
    await this.inputEmail(email);
    await this.inputPassword(password);
    await this.confirmStaySignedIn();
  }
}

module.exports = new LoginPage();
