$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/HomeMac/Documents/workspace/CucumberBDDFramework/src/main/java/bDDFeature/taging.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 26,
  "name": "Search a deal",
  "description": "",
  "id": "free-crm-application-testing;search-a-deal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Regression"
    },
    {
      "line": 25,
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "Search deal test",
  "keyword": "Given "
});
formatter.match({
  "location": "TaggingStepDefs.search_deal_test()"
});
formatter.result({
  "duration": 113576659,
  "status": "passed"
});
});