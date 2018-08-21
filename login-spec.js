describe('Test Assistanboken site', function() {
  browser.waitForAngularEnabled(false);
//Test Case 1 - Login to main application
  it('login to system admin page', function() {
      //browser.waitForAngularEnabled(false);
      //Hit the MVC-pilot website
      browser.get('http://mvcpilot.assistansboken.se/Account/Login');
      browser.sleep(2000);

      // Enter the username
      var Email = element(by.id('Email'));
      Email.sendKeys(browser.params.login.email);

      // Enter the password
      var Password = element(by.id('Password'));
      Password.sendKeys(browser.params.login.password);

      // click the login button
      var Submit = element(by.css('.oppositeText.col-xs-12.btn.btn-default'))
      Submit.click();

      //Verify the page title
      expect(browser.getTitle()).toEqual('Assistansboken | Userlist');
  });


// Test Case 2 : List the users from QA AB Test Company
  it('List the users from QA AB Test Company', function(){
 
      // Verify the Customer drop down is available in the page 
      var CompanyDD = element(by.id('Customers'));
      expect(CompanyDD.isDisplayed()).toBeTruthy();

      // Select QA AB Test company from drop down 
      var SelectWrapper  = require('C:/Users/User/Desktop/Protractor_Test/select-wrapper.js');
      var mySelect = new SelectWrapper(by.id('Customers'));
      mySelect.selectByText('QA AB Test');

      // Search the QAss admin user 
      var CustomerName = element(by.id('SearchName'));
      CustomerName.sendKeys('QAss Admin');
      browser.sleep(2000);
      var SearchedName = element(by.className('name'));
      expect(SearchedName.getText()).toBe('QAss Admin');
      //Actions action = new Actions(driver);
      var until = protractor.ExpectedConditions;
      browser.wait(until.presenceOf(SearchedName), 5000, 'Element taking too long to appear in the DOM');
      //browser.manage().timeouts().implicitlyWait(30000);
	  	//browser.get("http://chercher.tech/practice/practice-pop-ups-selenium-webdriver")
      var Loginasicon = element(by.xpath("//tr[@id='332']/td[7]/div/a[1]"));
      // var myelement = element(by.id("navigationPageButton"));
      // Actions actions = new Actions(driver);
      // actions.moveToElement(Loginasicon).click().build().perform();
      //browser.actions().mouseMove(Loginasicon).perform();
      browser.actions().mouseMove(Loginasicon).doubleclick().perform();
      browser.sleep(5000);
      
  });
});