const { When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");

const LoginPage = require("../page-objects/page/login.page.js");
const PortalsPage = require("../page-objects/page/admin/portals.page.js");

const user = require("../../resources/data/auth/userSet.json");

const _function = require("../../utilities/common/functions.js");

When(
  /^User can logins successfully to Atrium with a valid Email or Username and valid password$/,
  async () => {
    await LoginPage.login(user.Superadmin.Email, user.Superadmin.Password);
  }
);

Then(/^User should see Portals page$/, async () => {
  let actual = await PortalsPage.getPortalsTitle();
  await expect(actual).toEqual("Portals");
  await _function.getScreenshot("LoginSuccessfullyToAtrium");
});
