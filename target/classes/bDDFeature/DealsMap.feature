Feature: Creating a new deal using DataTable Maps

Scenario: New Deals usign DataTable Maps
    Given user is already on login page
    When title of login page is Free CRM
    Then user enters username and password
    |	username|	password	|
    |	testsri	|	enter123	| 
    Then user clicks on login button
    And user is on homepage
    And user click on new deal
    Then user enters deal details and save
    |	title	 | amount 	| probability |commission|
    |	testdeal1 | 1000		|	10		  | 	10	 |
    |	testdeal2 | 2000		|	20		  | 	20	 |
    |	testdeal3 | 3000		|	30		  | 	30	 |
    |	testdeal4 | 4000		|	40		  | 	40	 |
    
    Then close browser
    