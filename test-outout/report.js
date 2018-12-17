$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM create contacts feature",
  "description": "",
  "id": "free-crm-create-contacts-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Creating new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact detilas \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;;1"
    },
    {
      "cells": [
        "testsri",
        "enter123",
        "sri0",
        "tata0",
        "QA0"
      ],
      "line": 17,
      "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;;2"
    },
    {
      "cells": [
        "testsri",
        "enter123",
        "sri1",
        "tata1",
        "QA1"
      ],
      "line": 18,
      "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;;3"
    },
    {
      "cells": [
        "testsri",
        "enter123",
        "sri2",
        "tata2",
        "QA2"
      ],
      "line": 19,
      "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;;4"
    },
    {
      "cells": [
        "testsri",
        "enter123",
        "sri3",
        "tata3",
        "QA3"
      ],
      "line": 20,
      "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Creating new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"testsri\" and \"enter123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact detilas \"sri0\" and \"tata0\" and \"QA0\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 4239189188,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 49618401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testsri",
      "offset": 13
    },
    {
      "val": "enter123",
      "offset": 27
    }
  ],
  "location": "CRMLoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 425215079,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7466176634,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 5012643,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_moves_to_contacts_page()"
});
formatter.result({
  "duration": 1479770622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri0",
      "offset": 29
    },
    {
      "val": "tata0",
      "offset": 40
    },
    {
      "val": "QA0",
      "offset": 52
    }
  ],
  "location": "CRMLoginStepDef.user_enters_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 1417633220,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.close_browser()"
});
formatter.result({
  "duration": 112127555,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Creating new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"testsri\" and \"enter123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact detilas \"sri1\" and \"tata1\" and \"QA1\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 3723501737,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 4577109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testsri",
      "offset": 13
    },
    {
      "val": "enter123",
      "offset": 27
    }
  ],
  "location": "CRMLoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 172017532,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7560862612,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 4856185,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_moves_to_contacts_page()"
});
formatter.result({
  "duration": 1417249582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri1",
      "offset": 29
    },
    {
      "val": "tata1",
      "offset": 40
    },
    {
      "val": "QA1",
      "offset": 52
    }
  ],
  "location": "CRMLoginStepDef.user_enters_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 1372763969,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.close_browser()"
});
formatter.result({
  "duration": 110392925,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Creating new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"testsri\" and \"enter123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact detilas \"sri2\" and \"tata2\" and \"QA2\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 3559971792,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 4382094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testsri",
      "offset": 13
    },
    {
      "val": "enter123",
      "offset": 27
    }
  ],
  "location": "CRMLoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 163005468,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7491753969,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 4457709,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_moves_to_contacts_page()"
});
formatter.result({
  "duration": 1456031302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri2",
      "offset": 29
    },
    {
      "val": "tata2",
      "offset": 40
    },
    {
      "val": "QA2",
      "offset": 52
    }
  ],
  "location": "CRMLoginStepDef.user_enters_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 1297619912,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.close_browser()"
});
formatter.result({
  "duration": 111909651,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Creating new contacts scenario",
  "description": "",
  "id": "free-crm-create-contacts-feature;creating-new-contacts-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enters \"testsri\" and \"enter123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to contacts page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact detilas \"sri3\" and \"tata3\" and \"QA3\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 3360354816,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 49752486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testsri",
      "offset": 13
    },
    {
      "val": "enter123",
      "offset": 27
    }
  ],
  "location": "CRMLoginStepDef.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 345683931,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 13160165408,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 4493087,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.user_moves_to_contacts_page()"
});
formatter.result({
  "duration": 1882135262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sri3",
      "offset": 29
    },
    {
      "val": "tata3",
      "offset": 40
    },
    {
      "val": "QA3",
      "offset": 52
    }
  ],
  "location": "CRMLoginStepDef.user_enters_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 1383465240,
  "status": "passed"
});
formatter.match({
  "location": "CRMLoginStepDef.close_browser()"
});
formatter.result({
  "duration": 113534390,
  "status": "passed"
});
});