@FunctionalTest
Feature: Free CRM application testing 

@SmokeTest @Regression
Scenario: Login with correct username and password 
	Given This is a valid login test 
@Regression	
Scenario: Login with incorrect username and password 
	Given This is a invalid login test 
@SmokeTest	
Scenario: Create a contact 
	Given This is a contact test case 
@Regression @SmokeTest
Scenario: Create a deal 
	Given This is a deal test case 
@SmokeTest @End2End
Scenario: Create a task 
	Given This is a task test case 
@SmokeTest	
Scenario: Create a case 
	Given This is a case test case 
@SmokeTest	
Scenario: Verfiy left panel links 
	Given clicking on left panel links 
@Regression	 @End2End
Scenario: Search a deal 
	Given Search deal test 
@Regression	
Scenario: Search a Contact 
	Given Search contact test 
@Regression	
Scenario: Search a case 
	Given Search case test 
@Regression	
Scenario: Search a task 
	Given Search task test 
@SmokeTest	@End2End
Scenario: Search a call 
	Given Search call test 
@SmokeTest	
Scenario: Search an email 
	Given Search email test 
@SmokeTest	@End2End
Scenario: Search a doc 
	Given Search doc test 
@SmokeTest	
Scenario: Search a form 
	Given Search form test 
@SmokeTest @Regression	
Scenario: validate a report 
	Given This is a report test 
@SmokeTest	@End2End
Scenario: Application logout 
	Given Search logout test 
	
	
			