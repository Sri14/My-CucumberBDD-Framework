Feature: Free CRM create contacts feature

Scenario Outline: Creating new contacts scenario

    Given user is already on login page
    When title of login page is Free CRM
    Then user enters "<username>" and "<password>"
    Then user clicks on login button
    And user is on homepage
    Then user moves to contacts page
    Then user enters contact detilas "<firstname>" and "<lastname>" and "<position>"
    Then close browser
    
    
  Examples:
  		|username|password|firstname|lastname|position|
  		|testsri |enter123|sri0		|tata0	 |QA0	  |
  		|testsri |enter123|sri1		|tata1	 |QA1	  |
  		|testsri |enter123|sri2		|tata2	 |QA2	  |
  		|testsri |enter123|sri3		|tata3	 |QA3	  |