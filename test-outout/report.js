$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CRMlogin.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.uri("deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deals data creation feature",
  "description": "",
  "id": "deals-data-creation-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Creating new contacts scenario",
  "description": "",
  "id": "deals-data-creation-feature;creating-new-contacts-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "testsri",
        "enter123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters deal details and save",
  "rows": [
    {
      "cells": [
        "testdeal",
        "1000",
        "20",
        "20"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 4691921008,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 47051433,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 291051358,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8759837790,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 5548764,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_enters_deal_details_and_save(DataTable)"
});
formatter.result({
  "duration": 3133527384,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.close_browser()"
});
formatter.result({
  "duration": 118463249,
  "status": "passed"
});
});