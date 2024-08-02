const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const LoginPage = require('../page-objects/page/login.page.js');

const user = require('../../resources/data/auth/userSet.json');
const environment = require('../../resources/config/envConfig.json');

Given(/^I am on the login page$/, async () => {
  await LoginPage.navigate(environment.AtriumDEV.url);
});

/*When(/^I am using another account$/, async () => {
  await LoginPage.useOtherAccount();
});*/

When(/^I login with Super admin credentials$/, async () => {
  await LoginPage.login(user.Superadmin.UserName, user.Superadmin.Password);
});

Then(/^I should see Portals page$/, async () => {
  let actual = await DashBoardPage.getDashBoardTitle();
  await expect(actual).toEqual('Portals');
});
