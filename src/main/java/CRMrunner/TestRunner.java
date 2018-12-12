package CRMrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/HomeMac/Documents/workspace/CucumberBDDFramework/src/main/java/bDDFeature",
		glue = {"com.stepDefinitions"},
		plugin = {"pretty","html:test-outout"}
		)

public class TestRunner {
	
	

}
