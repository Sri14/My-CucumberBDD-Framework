package stepDefinitons;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDef {

	@Before // global hook which implements precondition
	public void setUp() {
		System.out.println("open browser and login");
	}

	@After // global hook which implement post condition 
	public void tearDown() {
		System.out.println("********exit browser***********");
	}
	
	//@Before(order=0) // this will be executed first
	//@After(order=0) 
	//@Before(order=1) // this will be executed second
	//@After(order=1)
	@Before("@First")
	public void localBeforeTaggedHook(){
		System.out.println("This is a local before tagged hook");
	}
	
	@After("@First")
	public void localAfterTaggedHook(){
		System.out.println("This is a local after tagged hook");
	}
	@Given("^user is on deal page$")
	public void user_is_on_deal_page() {
		System.out.println("user is on deals page");

	}

	@When("^user fills the deal form$")
	public void user_fills_the_deal_form() {
		System.out.println("user fills the deal form");
	}

	@Then("^deal is created$")
	public void deal_is_created() {
		System.out.println("deal is created");

	}

	@Given("^user is on contact page$")
	public void user_is_on_contact_page() throws Throwable {
		System.out.println("user is on contact page");
	}

	@When("^user fills the contact form$")
	public void user_fills_the_contact_form() throws Throwable {
		System.out.println("user fills the contact form");
	}

	@Then("^contact is created$")
	public void contact_is_created() throws Throwable {
		System.out.println("contact is created");
	}

	@Given("^user is on note page$")
	public void user_is_on_note_page() throws Throwable {
		System.out.println("user is on note page");
	}

	@When("^user fills the note form$")
	public void user_fills_the_note_form() throws Throwable {
		System.out.println("user fill the note form");
	}

	@Then("^note is created$")
	public void note_is_created() throws Throwable {
		System.out.println("note is created");
	}

}
