
Feature: Login with credentials

Background: 
    Given I am on Heroku login page

Scenario: User logs in with correct credentials
    Then I verify page header
    And I verify login page message
    And I verify username label
    And I verify password label
    And I verify Fork me on github link
    And I verify page footer
    And I verify Elemental Selenium link
    And I log in with correct credentials
    And I verify being redirected to Secure area page
    And I verify Secure Area page message
    And I verify Secure Area page header
    And I verify Secure Area page sub header
    And I verify Fork me on github link
    And I verify page footer
    And I verify Elemental Selenium link
    And I click on Logout button
    Then I verify being redirected to Login page

Scenario: User tries logging in with incorrect username
    And I try to log in with incorrect username
    And I verify invaid username message

Scenario: User tries logging in with incorrect password
    And I try to log in with incorrect password
    And I verify invaid password message
