Feature: Create a new Actor by Super-admin or Admin SCC 

Note: If you want to do anything else after creating a new actor, please specify this feature with the correct actions

    Background:
        Given User is on the Login page
        When User can logins successfully to Atrium with a valid Email or Username and valid password
        Then User should see Portals page

    Scenario: Verify that Super admin or Admin SCC can add a new actor to Atrium
        Given User goes to the Actors page
        And User clicks on Add button
        Then User should see a modal popup with the title CHECK ACTOR EXISTENCE is displayed on the screen
        When User enters a valid email on the Email field
        And User clicks on Check button
        Then User should see a message is displayed on a modal CHECK ACTOR EXISTENCE popup
        When User clicks on Create button
        Then User should see Create a new actor form is displayed on the screen
        When User enters the valid values on all the required fields to create a new actor
        And User clicks on Is Active toggle to activate the actor on Atrium
        And User clicks on Save button
        Then User should redirect back to Actors management and see a toast message ACTOR CREATED WITH SUCCESS is displayed on the screen
        And User search with Username of the created actor
        Then User should see the actor is displayed on the table