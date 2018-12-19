$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/HomeMac/Documents/workspace/CucumberBDDFramework/src/main/java/bDDFeature/DealsMap.feature");
formatter.feature({
  "line": 1,
  "name": "Creating a new deal using DataTable Maps",
  "description": "",
  "id": "creating-a-new-deal-using-datatable-maps",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "New Deals usign DataTable Maps",
  "description": "",
  "id": "creating-a-new-deal-using-datatable-maps;new-deals-usign-datatable-maps",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
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
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on new deal",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters deal details and save",
  "rows": [
    {
      "cells": [
        "title",
        "amount",
        "probability",
        "commission"
      ],
      "line": 13
    },
    {
      "cells": [
        "testdeal1",
        "1000",
        "10",
        "10"
      ],
      "line": 14
    },
    {
      "cells": [
        "testdeal2",
        "2000",
        "20",
        "20"
      ],
      "line": 15
    },
    {
      "cells": [
        "testdeal3",
        "3000",
        "30",
        "30"
      ],
      "line": 16
    },
    {
      "cells": [
        "testdeal4",
        "4000",
        "40",
        "40"
      ],
      "line": 17
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealMapStepDef.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 4481822315,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDef.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 6509306,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDef.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 343102060,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDef.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 9209225111,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDef.user_is_on_homepage()"
});
formatter.result({
  "duration": 5884408,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDef.user_click_on_new_deal()"
});
formatter.result({
  "duration": 172818179,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDef.user_enters_deal_details_and_save(DataTable)"
});
formatter.result({
  "duration": 8614360465,
  "status": "passed"
});
formatter.match({
  "location": "DealMapStepDef.close_browser()"
});
formatter.result({
  "duration": 117484732,
  "status": "passed"
});
});