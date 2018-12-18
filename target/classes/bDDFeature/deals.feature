Feature: Deals data creation feature

Scenario: Creating new contacts scenario

    Given user is already on login page
    When title of login page is Free CRM
    Then user enters username and password
    |	testsri	|	enter123	|
    
    Then user clicks on login button
    And user is on homepage
    Then user enters deal details and save
    |	testdeal | 1000	|	20	| 20	|
    Then close browser
    