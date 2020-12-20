
Feature: Login with credentials

Background: 
    Given I am on Heroku login page

Scenario: Verify the system display the login page correctly
    Then I verify page header
    And I verify login page message
    And I verify username label
    And I verify password label
    And I verify Fork me on github link
    And I verify page footer
    And I verify Elemental Selenium link

Scenario: Verify the user can login with the correct credentials
    And I log in with correct credentials
    And I verify being redirected to Secure area page
    And I verify Secure Area page message
    And I verify Secure Area page header
    And I verify Secure Area page sub header
    And I verify Fork me on github link
    And I verify page footer
    And I verify Elemental Selenium link

Scenario: Verify the logged in user can log out from the system
    And I log in with correct credentials
    And I click on Logout button
    Then I verify being redirected to Login page

Scenario: Verify that the user can not log in with incorrect username
    And I try to log in with incorrect username
    And I verify invaid username message

Scenario: Verify that the user can not log in with incorrect password
    And I try to log in with incorrect password
    And I verify invaid password message

Scenario: Verify that the user can not login with empty username or password
    And I click on Login button
    And I verify invaid username message