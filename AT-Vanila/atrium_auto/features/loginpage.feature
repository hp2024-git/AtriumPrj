Feature: Atrium Login

  Scenario Outline: As a user, I can log into Atrium system

    Given I am on the login page
    When I login with Super admin credentials
    Then I should see Portals page

