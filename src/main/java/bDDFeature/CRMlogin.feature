Feature: Free CRM login feature

Scenario: Free CRM Login scenario
Given user is already on login page
When title of login page is Free CRM
Then user enters username and password
Then user clicks on login button
And user is on homepage
