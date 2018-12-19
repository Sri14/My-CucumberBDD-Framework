package CRMrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/HomeMac/Documents/workspace/CucumberBDDFramework/src/main/java/bDDFeature/DealsMap.feature",
		glue = {"stepDefinitons"},
		plugin = {"pretty","html:test-outout", "json:json_output/cucumber.json"},
		dryRun = false,
		monochrome = true,
		strict = true
	
		)

public class TestRunner {
	
	

}
