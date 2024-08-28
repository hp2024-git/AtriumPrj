const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("@wdio/globals");

const ActorPage = require("../page-objects/page/admin/actors.page.js");

const _function = require("../../utilities/common/functions.js");

const _actorData = require("../../resources/data/actors/actorInfo.json");

Given(/^User goes to the Actors page$/, async () => {
  await ActorPage.openActorsManagement();
});

Then(/^User clicks on Add button$/, async () => {
  await _function.createNew();
});

Then(
  /^User should see a modal popup with the title CHECK ACTOR EXISTENCE is displayed on the screen$/,
  async () => {
    let actual = await ActorPage.checkPopupModalIsDisplayed();
    await expect(actual).toEqual("Check actor existence");
    await _function.getScreenshot("ActorExistence");
  }
);

When(/^User enters a valid email on the Email field$/, async () => {
  await ActorPage.inputEmail(_actorData.GeneralProfiles.email);
});

Then(/^User clicks on Check button$/, async () => {
  await ActorPage.checkActorExistence();
});

Then(
  /^User should see a message is displayed on a modal CHECK ACTOR EXISTENCE popup$/,
  async () => {
    //Define a variable to strore the dynamic value from data file (userInfo.json)
    let dynamicEmail = _actorData.GeneralProfiles.email;
    //Compare the actual message with the expected message by toEqual() method
    let actualMessage = await ActorPage.getMessageIfActorIsExistence();
    await expect(actualMessage).toEqual(
      "Actor with email" +
        " " +
        `${dynamicEmail}` +
        " " +
        "does not exist, do you want to create him ?"
    );
    await _function.getScreenshot("ActorIsExistenceMsg");
  }
);

When(/^User clicks on Create button$/, async () => {
  await ActorPage.createNewActor();
});

Then(
  /^User should see Create a new actor form is displayed on the screen$/,
  async () => {
    let getCreateNewActorText =
      await ActorPage.checkCreateNewActorFormIsDisplayed();
    await expect(getCreateNewActorText).toEqual("Create a new actor :");
  }
);

When(
  /^User enters the valid values on all the required fields to create a new actor$/,
  async () => {
    await ActorPage.inputRequiredActorInfo(
      _actorData.GeneralProfiles.firstName,
      _actorData.GeneralProfiles.lastName,
      _actorData.GeneralProfiles.phone,
      _actorData.GeneralProfiles.email,
      _actorData.GeneralProfiles.username,
      _actorData.GeneralProfiles.siret
    );
  }
);

Then(
  /^User clicks on Is Active toggle to activate the actor on Atrium$/,
  async () => {
    await _function.toggleButton();
  }
);

Then(/^User clicks on Save button$/, async () => {
  await _function.saveResult();
});

Then(
  /^User should redirect back to Actors management and see a toast message ACTOR CREATED WITH SUCCESS is displayed on the screen$/,
  async () => {
    let getSuccessMessage = await ActorPage.getToastMsgWithSuccess();
    await expect(getSuccessMessage).toEqual("Actor created with success");
    let redirectToActorsManagement = await ActorPage.getActorsManagementTitle();
    await expect(redirectToActorsManagement).toEqual("Actors management");
  }
);

Then(/^User search with Username of the created actor$/, async () => {
  await _function.inputKeywordToSearch(_actorData.GeneralProfiles.username);
});

Then(/^User should see the actor is displayed on the table$/, async () => {
  let actualUsername = _actorData.GeneralProfiles.username;
  let getNewUsername = await ActorPage.getUsernameOfActor();
  await expect(getNewUsername).toEqual(`${actualUsername}`);
  await _function.getScreenshot("ActorDisplaysOnTable");
});
