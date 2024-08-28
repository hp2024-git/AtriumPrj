const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../page-objects/page/login.page.js");
const _elements = require("../page-objects/uimap/auth/login.uimap.js");

const environment = require("../../resources/config/envConfig.json");

const _function = require("../../utilities/common/functions.js");

Given(/^User is on the Login page$/, async () => {
  await LoginPage.navigate(environment.AtriumDEV.url);
});

When(
  /^User leaves any required Username or email and Password fields as empty$/,
  async () => {
    await LoginPage.checkLoginRequiredFields();
  }
);

Then(
  /^User can see a red warning message of Username and Password is required under the missing required field accordingly$/,
  async () => {
    await LoginPage.getErrMessageUsername();
    await LoginPage.getErrMessagePassword();
  }
);

Then(/^User should see Connection button as disabled$/, async () => {
  let connectBtn =
    await _elements.loginPage.loc_btnDisabledConnection.getAttribute(
      "disabled"
    );
  await expect(connectBtn).toEqual("true");
  await _function.getScreenshot("InvalidLogin");
});
