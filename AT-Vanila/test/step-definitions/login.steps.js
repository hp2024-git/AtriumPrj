const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const LoginPage = require('../page-objects/page/login.page.js');
const DashBoardPage = require('../page-objects/page/dashboard.page.js');

const user = require('../../resources/data/auth/userSet.json');
const environment = require('../../resources/config/envConfig.json');

Given(/^I am on the login page$/, async () => {
  await LoginPage.navigate(environment.HR.url);
});

When(/^I am using another account$/, async () => {
  await LoginPage.useOtherAccount();
});

When(/^I login with valid credentials$/, async () => {
  await LoginPage.login(user.Employee2.UserName, user.Employee2.Password);
});

Then(/^I should see a system dashboard title$/, async () => {
  let actual = await DashBoardPage.getDashBoardTitle();
  await expect(actual).toEqual('Finance and Operations');
});
