Feature: Authentication
    Background:
      Given User is on the Login page

    Scenario: Verify that user can see proper warning message shows when login with username and password as empty
      When User leaves any required Username or email and Password fields as empty
      Then User can see a red warning message of Username and Password is required under the missing required field accordingly
      And User should see Connection button as disabled   

    Scenario: Verify that user can login to portal successfully with valid credentials
      When User can logins successfully to Atrium with a valid Email or Username and valid password
      Then User should see Portals page