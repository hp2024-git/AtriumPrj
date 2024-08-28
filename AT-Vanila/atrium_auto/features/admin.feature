Feature: All the permission related to Super-admin or Admin SCC

    Background:
        Given User is on the Login page
        When User can logins successfully to Atrium with a valid Email or Username and valid password
        Then User should see Portals page

     Scenario: Verify that Super admin can view, action all the pages on Atrium
      Note: When Super admin log in successfully to Atrium, he will redirect to Portals page as default 
        And User should see the Search field and Add button on Portal page
        And User can search the name of a portal
        Then User should the corrected portal is displayed as the result
        When User goes to the Actors management page
        Then User should see Actors management page
        When User goes to the Parameters page
        Then User should see Parameters page
        Then User should see the Contact and mailing information, Account parameters, Features sections on Parameters page
        When User goes to the Entities management page
        Then User should see Entities management page
        When User goes to the Request types management page
        Then User should see Request types management page
        When User goes to the Editors configuration page
        Then User should see Editors configuration page
        When User goes to the Subscription form page
        Then User should see Subscription form page
        When User goes to the Datas upload page
        Then User should see Datas upload page
        When User goes to the Alerts page
        Then User should see Alerts page
        When User goes to the Establishments page
        Then User should see Establishments page
        When User goes to the Managing menu
        Then User can able to access to KPI page
        Then User should see should see KPI page
        When User goes to the Requests management page
        Then User should see Requests management page
        When User goes to the Quotes management page
        Then User should see Quotes management page
        When User goes to the Orders management page
        Then User should see Orders management page
        When User goes to the Licences management page
        Then User should see Licences management page
        When User goes to the Catalogs page
        Then User should see Catalogs page
        When User goes to the Documents page
        Then User should see Documents page
        When User goes to the Alerts page in Managing
        Then User should see Alerts page in Managing
        