Feature: Free CRM app test


@First @End2End
Scenario: free CRM create deal test
Given user is on deal page
When user fills the deal form
Then deal is created

@Second @End2End
Scenario: free CRM create contact test
Given user is on contact page
When user fills the contact form
Then contact is created

@Third @End2End
Scenario: free CRM create note test
Given user is on note page
When user fills the note form
Then note is created