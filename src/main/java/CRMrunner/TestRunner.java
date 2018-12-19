package CRMrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/HomeMac/Documents/workspace/CucumberBDDFramework/src/main/java/bDDFeature/Hooks.feature",
		glue = {"stepDefinitons"},
		plugin = {"pretty","html:test-outout", "json:json_output/cucumber.json"},
		dryRun = false,
		monochrome = true,
		strict = true
		//tags = {"@End2End"}
	
		)

public class TestRunner {
	
	

}
// OR  - {"@Regression, @End2End"} -- executes tests if either of the tags are present in  the scenarios
// AND - {"@Regression", "@End2End"} -- only executes if both tags are present in the scenario
// SKIP - {"@~Regression"} will skip the tag