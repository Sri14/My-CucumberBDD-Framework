package stepDefinitons;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CRMLoginStepDef {

	WebDriver driver;

@Given("^user is already on login page$")
public void user_is_already_on_login_page() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "/Users/HomeMac/Desktop/SeleniumProject/Drivers/chromedriver");
	driver = new ChromeDriver();
	
	driver.get("https://www.freecrm.com");
	}

@When("^title of login page is Free CRM$")
public void title_of_login_page_is_Free_CRM() throws Throwable {
    String title = driver.getTitle();
	System.out.println(title);
	
	Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	}

@Then("^user enters username and password$")
public void user_enters_username_and_password() throws Throwable {
	driver.findElement(By.xpath("//input[@type='text']")).sendKeys("testsri");
	driver.findElement(By.xpath("//input[@type='password']")).sendKeys("enter123");

	}


@Then("^user clicks on login button$")
public void user_clicks_on_login_button() throws Throwable {
	Thread.sleep(5000);
   driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

@Then("^user is on homepage$")
public void user_is_on_homepage() throws Throwable {
	String loginTitle = driver.getTitle();
	Assert.assertEquals("CRMPRO", loginTitle);
	}

	
}
