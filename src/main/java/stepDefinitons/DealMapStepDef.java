package stepDefinitons;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealMapStepDef {
	
	
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
		public void user_enters_username_and_password(DataTable userdetails) throws Exception  {
			for (Map<String , String> details : userdetails.asMaps(String.class, String.class)){
			driver.findElement(By.name("username")).sendKeys(details.get("username"));
			driver.findElement(By.name("password")).sendKeys(details.get("password"));
		}
	}
		

		@Then("^user clicks on login button$")
		public void user_clicks_on_login_button() throws Throwable {
			Thread.sleep(5000);
			driver.findElement(By.xpath("//input[@type='submit']")).click();
		}

		@And("^user is on homepage$")
		public void user_is_on_homepage() throws Throwable {
			String loginTitle = driver.getTitle();
			Assert.assertEquals("CRMPRO", loginTitle);
		}
	
		@Then("^user click on new deal$")
		public void user_click_on_new_deal() {
			driver.switchTo().frame("mainpanel");
			   Actions action = new Actions(driver);
			   action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
			
		}

		@Then("^fill in details and save$")
		public void fill_in_details_and_save(DataTable dealDetails) throws Throwable {
		 	
			for(Map<String, String> deal : dealDetails.asMaps(String.class, String.class)){
						
		   
		   driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
		   driver.findElement(By.id("title")).sendKeys(deal.get("title"));
		   driver.findElement(By.id("amount")).sendKeys(deal.get("amount"));
		   driver.findElement(By.id("probability")).sendKeys(deal.get("probability"));
		   driver.findElement(By.id("commission")).sendKeys(deal.get("commission"));

		   driver.findElement(By.xpath("//input[@type='submit']")).click();
		   Actions action = new Actions(driver);
		   action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		   
			}
		
		}	
		@Then("^close browser$")
		public void close_browser() throws Throwable {
			driver.quit();
		}
		

	}


