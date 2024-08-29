Feature: Authentication

 Scenario Outline: As a user, I can log into Atrium system with Super-admin profile and make sure all the created Portal are displayed on Portals menu

    Given User is on the Login page
    When User logins with a valid Email or Username and valid password of Super admin profile
    Then User should see Portals page
    When User clicks on Portals menu to navigate to other Portal